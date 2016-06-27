const DEFAULT = {
  signedIn: false,
  userName: ''
};

export default function userReduer(state=DEFAULT, action){
  switch (action.type) {
    case 'USER_SIGNIN':
      return {userName: action.userName, signedIn: true};
    default:
      return state;
  }
};
