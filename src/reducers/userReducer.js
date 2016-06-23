const DEFAULT = {
  signedIn: false,
  name: ''
};

export default function userReduer(state=DEFAULT, action){
  switch (action.type) {
    case 'USER_SIGNIN':
      return {name: action.name, signedIn: true};
    default:
      return state;
  }
};
