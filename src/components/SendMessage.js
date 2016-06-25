import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/messageActions.js';

class SendMessage extends Component {
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      message: ''
    };
    document.onkeydown = this.onKeyDown.bind(this);
  }

  onMessageChange(e){
    this.setState({message: e.target.value});
  }

  onSend(){
    var message = this.state.message.trim();
    this.setState({message: ''});
    if(message){
      this.props.sendMessage(this.props.name, message);
    }
  }

  onKeyDown(event){
    if(event.code && event.code == 'Enter'){
      this.onSend();
    }
  }

  render(){
    return (
      <div style={styles.outer}>
        <input
          style={styles.input}
          type="text"
          value={this.state.message}
          onChange={this.onMessageChange.bind(this)}
        />
        <button
          style={styles.button}
          onClick={this.onSend.bind(this)}
        >
          Send
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {name: state.user.name};
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage : (userName, message) => {
      return sendMessage(userName, message)(dispatch);
    }
  }
}

const styles = {
  outer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    left: 0,
    padding: '5px',
    backgroundColor: '#eee',
    borderTop: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    padding: '0 4px',
    marginRight: '4px',
    fontSize: '140%',
    flexGrow: 2,
    border: '1px solid #ccc'
  },
  button: {
    flexGrow: 1,
    marginRight: '8px',
    border: '1px solid #64a24e',
    backgroundColor: '#8add6d',
    borderRadius: '2px',
    fontSize: '120%',
    padding: 0
  }
}

SendMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessage);

export default SendMessage
