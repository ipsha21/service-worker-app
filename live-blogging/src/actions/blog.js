import {
  MESSAGE_RECEIVED
} from "../constants";

export function newMessage(message) {
  return {type: MESSAGE_RECEIVED, message};
}
