import { FETCH_USER } from '../Actions/types';

const INITIAL_STATE = {
	user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_USER:
			return { ...state, user: action.payload || false};

		default:
			return state;
	}
};

export default authReducer;
