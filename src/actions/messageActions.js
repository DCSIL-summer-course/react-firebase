import firebase from 'firebase';

function sendMessage(name, message){
  var db = firebase.database().ref().child('messages');
  var timeStamp = Date.now();
  return dispatch => {
    db.push({userName:name, text:message, timeStamp}, (error) => {
      console.log(error);
    });
  }
}

function receiveMessages(userName){
  var ref = firebase.database().ref('messages/');

  return dispatch => {
    ref.on('value', (snapshot) => {
      dispatch({ type: 'RECEIVE_MESSAGES',  messages: snapshot.val(), userName});
    });
  }
}

export { sendMessage, receiveMessages };
