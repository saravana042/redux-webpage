import { FETCH_CONTENTS } from '../actions';

export default function(state = null, action){
	switch (action.type) {
		case FETCH_CONTENTS:
			return action.payload.data;
		default:
			return state;
	}
}