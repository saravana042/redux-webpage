import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';

export default class Chart extends Component {
  render() {
    return (
    <div>
      <Header />
        <div className="container middle-cnt">
          <div>  Chart </div>
        </div>
     
    </div>
      
    );
  }
}