import React, { Component } from 'react';
import { connect } from 'react-redux';

class SendMessage extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };
  }

  onMessageChange(e){
    this.setState({message: e.target.value});
  }

  onSend(){
    this.props.sendMessage(this.props.name, this.state.message);
    this.setState({message: ''});
  }

  render(){
    return (
      <div>
        <input
          type="text"
          value={this.state.message}
          onChange={this.onMessageChange.bind(this)}
        />
        <button onClick={this.onSend.bind(this)}>Send</button>
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
      console.log(`${userName}: ${message}`)
      return {};
    }
  }
}

SendMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessage);

export default SendMessage
