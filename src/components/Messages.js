import React from 'react';
import { connect } from 'react-redux';
import { FormattedRelative } from 'react-intl';

const Message = ({message, style, isLast}) => {
  return (
    <li
      style={style}
      ref={(li) => {
        if(isLast && li){
          li.scrollIntoView();
        }
      }}
    >
      <div style={{fontSize: '85%', paddingBottom: '5px', textAlign: 'right'}}>
        {message.userName}&nbsp;
        (<FormattedRelative value={new Date(message.timeStamp)} />)
      </div>
      <div>{message.text}</div>
    </li>
  );
}

function Messages({messages}){
  return (
    <div>
      <ul style={styles.messageOuter}>
        {messages.map((message, i) => {
          var stylesToMerge = message.isMe ?  styles.meStyle : {};
          var style = Object.assign({}, styles.message, stylesToMerge);

          return <Message
            key={message.key}
            message={message}
            style={style}
            isLast={i == messages.length - 1}
          />
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
  },
  meStyle: {
    float: 'right',
    backgroundColor: '#2291FA',
    color: '#fff'
  }
}

const mapStateToProps = (state) => {
  return {messages: state.messages};
}

Messages = connect(mapStateToProps)(Messages);

export default Messages
