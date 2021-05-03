import { observable } from "mobx";

const messageStore = observable({
  messages: [],

  add(message) {
    this.messages.push(message);
  },
});

export default messageStore;
