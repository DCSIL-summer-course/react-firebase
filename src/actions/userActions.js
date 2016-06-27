import { receiveMessages } from './messageActions.js';

function signIn(userName){
  return dispatch => {
    dispatch({
      type: 'USER_SIGNIN',
      userName: userName
    });

    receiveMessages(userName)(dispatch);
  };
}

export { signIn };
