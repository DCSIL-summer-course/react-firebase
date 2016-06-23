import React from 'react';
import { connect } from 'react-redux';

const MESSAGES=[
  {key: '1', userName: 'Ted', text: 'hello world', timeStamp: Date.now()},
  {key: '2', userName: 'Maria', text: 'Why would you?', timeStamp: Date.now() - 10000},
  {key: '3', userName: 'Liam', text: 'Wooooo', timeStamp: Date.now() - 15000, isMe: true},
  {key: '4', userName: 'Mark', text: 'Hello Universe...', timeStamp: Date.now() - 20000}
];

function Messages({messages=MESSAGES}){
  var meStyle = {float: 'right', backgroundColor: '#2291FA', color: '#fff'};
  return (
    <div>
      <ul style={styles.messageOuter}>
        {messages.map((message) => {
          var f = message.isMe ?  meStyle : {};
          var style = Object.assign({}, styles.message, f);
          return (
            <li key={message.key} style={style}>
              <div>{message.userName}</div>
              <div>{message.text}</div>
              <div>{message.timeStamp}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const styles = {
  messageOuter: {
    margin: 0,
    padding: 0
  },
  message: {
    listStyle: 'none',
    backgroundColor: '#ddd',
    padding: '6px',
    borderRadius: '4px',
    margin: '6px 0',
    float: 'left',
    width: '80%'
  }
}

const mapStateToProps = (state) => {
  return {messages: state.messages};
}

Messages = connect(mapStateToProps)(Messages);

export default Messages
