function messagesToArray(messageObj, userName){
  if(messageObj == null){
    return [];
  }
  var keys = Object.keys(messageObj);
  return keys.map((key) => {
    var obj = messageObj[key];
    return Object.assign({key}, obj, {isMe: obj.userName == userName});
  });
}

export default function messageReducer(state=[], action){
  switch (action.type) {
    case 'RECEIVE_MESSAGES':
      return messagesToArray(action.messages, action.userName);
    case 'SEND_MESSAGE':
      return [...state, {
        key: ++i,
        userName: action.message.name,
        text: action.message.text,
        isMe: true,
        timeStamp: Date.now()
      }];
    default:
      return state;
  }
}
