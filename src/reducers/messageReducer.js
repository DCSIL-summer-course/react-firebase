const MESSAGES=[
  {key: '1', userName: 'Ted', text: 'hello world', timeStamp: Date.now()},
  {key: '2', userName: 'Maria', text: 'Why would you?', timeStamp: Date.now() - 10000},
  {key: '3', userName: 'Liam', text: 'Wooooo', timeStamp: Date.now() - 15000, isMe: true},
  {key: '4', userName: 'Mark', text: 'Hello Universe...', timeStamp: Date.now() - 20000}
];

let i = 4;
export default function messageReducer(state=MESSAGES, action){
  switch (action.type) {
    case 'SEND_MESSAGE':
      return [...state, {
        key: ++i,
        userName: action.message.userName,
        text: action.message.text,
        isMe: true,
        timeStamp: Date.now()
      }];
    default:
      return state;
  }
}
