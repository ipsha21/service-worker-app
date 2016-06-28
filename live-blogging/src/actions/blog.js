import {
  MESSAGE_RECEIVED,
  SUBSCRIPTION_CONFIGURED,
} from "../constants";

export function newMessage(message) {
  return {type: MESSAGE_RECEIVED, message};
}

export function registerSubscription(subscription) {
  return {type: SUBSCRIPTION_CONFIGURED, subscription};
}
