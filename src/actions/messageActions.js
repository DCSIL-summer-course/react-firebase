function sendMessage(name, message){
  return dispatch => {
    dispatch({
      type: 'SEND_MESSAGE',
      message: {
        name: name,
        text: message
      }
    });
  }
}

export { sendMessage };
