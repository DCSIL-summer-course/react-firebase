
function signIn(userName){
  return dispatch => {
    dispatch({
      type: 'USER_SIGNIN',
      userName
    });
  };
}

export { signIn };
