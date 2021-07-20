import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
	try {
		const user = await axios.get('/auth/api/current_user');
		dispatch({ type: FETCH_USER, payload: user.data });
	} catch (err) {
		console.log('error occured during fetching the user: ' + err);
	}
};
