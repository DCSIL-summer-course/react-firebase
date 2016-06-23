
function signIn(name){
  return dispatch => {
    dispatch({
      type: 'USER_SIGNIN',
      name: name
    });
  };
}

export { signIn };
