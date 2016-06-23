import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import { signIn } from '../actions/userActions.js';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  onNameChange(e){
    this.setState({name: e.target.value});
  }

  onSubmit(){
    this.props.signIn(this.state.name);
    console.log(`submit: ${this.state.name}`);
  }

  render(){
    var display = this.props.signedIn ? 'none' : 'block';
    var modalOuter = Object.assign(
      {},
      styles.modalOuter,
      {display: display}
    );
    return (
      <div style={modalOuter}>
        <div style={styles.modalInner}>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={this.onNameChange.bind(this)}
            style={styles.input}
          />
          <button
            onClick={this.onSubmit.bind(this)}
            style={styles.button}
          >
            Enter
          </button>
        </div>
      </div>
    );
  }
}


const styles = {
  modalOuter: {
    width : '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'center',
    backgroundColor: '#ccc',
    opacity: 0.8
  },
  modalInner: {
    width: '230px',
    height: '130px',
    margin: '60px auto',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 21px 5px rgba(0,0,0,0.75)'
  },
  input: {
    width: '180px',
    margin: '20px',
    display: 'block',
    padding: '2px 4px',
    fontSize: '140%'
  },
  button: {
    width: '190px',
    padding: '2px 4px',
    margin: '20px',
    display: 'block',
    fontSize: '140%',
    border: '1px solid #ccc',
    backgroundColor: '#8add6d'
  }
}

const mapStateToProps = (state) => {
  return state.user;
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn : (name) => {
      return signIn(name)(dispatch);
    }
  }
}

SignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignIn;
