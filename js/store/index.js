// import Config from '../config';

let configStore;
if (true) {
  configStore = require('./configureStore.dev').default;
} else {
  configStore = require('./configureStore.prod').default;
}

export default configStore();
