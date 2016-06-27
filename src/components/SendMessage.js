import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/messageActions.js';

class SendMessage extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };

    document.onkeydown = this.onKeyDown.bind(this);
  }

  onMessageChange(e){
    this.setState({text: e.target.value});
  }

  onSend(){
    var text = this.state.text.trim();
    this.setState({text: ''});
    if(text){
      this.props.sendMessage(this.props.userName, text);
    }
  }

  onKeyDown(event){
    if(event.code && event.code == 'Enter'){
      this.onSend();
    }
  }

  componentWillUnmount(){
    document.onkeydown = null;
  }

  render(){
    return (
      <div style={styles.outer}>
        <input
          style={styles.input}
          type="text"
          value={this.state.text}
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
  return {userName: state.user.userName};
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage : (userName, text) => {
      return sendMessage(userName, text)(dispatch);
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
