function sendMessage(userName, text){
  return dispatch => {
    dispatch({
      type: 'SEND_MESSAGE',
      message: {userName, text}
    });
  }
}

export { sendMessage };
