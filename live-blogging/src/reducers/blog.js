import {
  MESSAGE_RECEIVED,
} from "../constants";

const INITIAL_STATE = {
  messages: []
};

export function blog(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED: {
      return {...state, messages: [...state.messages, {
        date: new Date().toString(),
        text: action.message
      }]};
    }
    default: {
      return state;
    }
  }
}

export default blog;
