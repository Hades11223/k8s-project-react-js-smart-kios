import userProvider from '@data-access/user-provider';
import { ToastContainer, toast } from 'react-toastify';
import constants from '@strings';
import stringUtils from 'mainam-react-native-string-utils';

function saveCurrentUser(user) {
	return {
		type: 'SAVE_CURRENT_USER',
		user
	}
}

function onLogin(phone, password) {
	return ((dispath, getState) => {
		return new Promise((resolve, reject) => {
			userProvider.login(phone, password).then(res => {
				switch (res.code) {
					case 0:
						toast.success(constants.text.user.success_login, {
							position: toast.POSITION.TOP_RIGHT
						})
						dispath(saveCurrentUser(res.data.user));
						resolve(res.data.user);
						break;
					case 1:
						toast.error("Code 1", {
							position: toast.POSITION.TOP_RIGHT
						})
						break;
					case 2:
						toast.error(constants.text.user.error_account_3, {
							position: toast.POSITION.TOP_RIGHT
						})
						break;
					case 3:
						toast.error(constants.text.user.error_account, {
							position: toast.POSITION.TOP_RIGHT
						})
						break;
					case 4:
						toast.error(constants.text.user.error_account_2, {
							position: toast.POSITION.TOP_RIGHT
						})
						break;
					case 500:
						toast.error(constants.text.user.internal_server_error, {
							position: toast.POSITION.TOP_RIGHT
						})
				}
				throw "";
			}).catch(e => {
				console.log(e)
				reject();
			})
		})
	});
}

function updateData(data) {
	return (dispatch) => {
		dispatch({
			type: "AUTH-UPDATE-DATA",
			data: data
		})
	};
}
export default {
	onLogin,
	onLogout() {
		return dispatch => {
			return new Promise((resolve, reject) => {
				dispatch(saveCurrentUser(null));				
				resolve();
			})
		}
	},
	updateData,
}