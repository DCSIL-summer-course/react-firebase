import React from 'react';
import { connect } from 'react-redux';



function Messages({messages}){
  var meStyle = {float: 'right', backgroundColor: '#2291FA', color: '#fff'};
  return (
    <div>
      <ul style={styles.messageOuter}>
        {messages.map((message, i) => {
          var f = message.isMe ?  meStyle : {};
          var style = Object.assign({}, styles.message, f);
          var last = i == messages.length - 1;
          console.log(last);
          return (
            <li
              key={message.key}
              style={style}
              ref={(li) => {
                if(last && li){
                  li.scrollIntoView();
                }
              }}
            >
              <div>{message.userName}</div>
              <div>{message.text}</div>
              <div>{message.timeStamp}</div>
            </li>
          );
        })}
        <li style={{clear: 'both'}}></li>
      </ul>
    </div>
  );
}

const styles = {
  messageOuter: {
    margin: '0 0 20px 0',
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
