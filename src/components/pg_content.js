import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Header from './header';
import Footer from './footer';
import { connect } from 'react-redux';
import { fetch_contents } from '../actions';

class PG_Content extends Component {
  componentDidMount(){
  this.props.fetch_contents();
  }

  renderContent(){
    console.log(this.props.pgcontents);
    
    return _.map(this.props.pgcontents, content => {
      return(
        
          <li className="list-group-item">
            <div className="col-sm-3 custom-images">
             <img src={content.url} className="img-fluid" />
            </div>
            <div className="col-sm-9 custom-content">
              <h4>{content.name}</h4>
              <p>{content.content}</p>
            </div>
          </li>
       
      );
    })
    
  }

  render() {
    
    return (
    <div>
      <Header />
        <div className="container middle-cnt">
          <div className="card"> 
            <ul className="list-group list-group-flush">
              {this.renderContent()} 
            </ul>
          </div>
        </div>
     
    </div>
      
    );
  }
}

function mapStateToProps(state){
  return { pgcontents: state.pgcontents };
}

export default connect(mapStateToProps, { fetch_contents })(PG_Content);