const redux = require("redux");
const rootReducer = require("./reducers");
const { updateName } = require("./actions");

const store = redux.createStore(rootReducer);

store.dispatch(
  updateName({
    title: "Ms",
    first: "dana",
    last: "eggling"
  })
);

const jsonRes = JSON.stringify(store.getState());

console.log(jsonRes);
