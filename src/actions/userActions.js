import { receiveMessages } from './messageActions.js';

function signIn(name){
  return dispatch => {
    dispatch({
      type: 'USER_SIGNIN',
      name: name
    });

    receiveMessages(name)(dispatch);
  };
}

export { signIn };
