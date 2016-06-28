import {
  MESSAGE_RECEIVED,
  SUBSCRIPTION_CONFIGURED,
} from "../constants";

const INITIAL_STATE = {
  messages: [],
  subscription: {},
};

export function blog(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED: {
      return {...state, messages: [...state.messages, {
        date: new Date().toString(),
        text: action.message
      }]};
    }
    case SUBSCRIPTION_CONFIGURED: {
      return {...state, subscription: action.subscription};
    }
    default: {
      return state;
    }
  }
}

export default blog;
