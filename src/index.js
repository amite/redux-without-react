const redux = require("redux");
const rootReducer = require("./reducers");
const { updateName } = require("./actions");

const store = redux.createStore(rootReducer);

const jsonRes = JSON.stringify(store.getState());
console.log("BEFORE");
console.log(jsonRes);

setTimeout(() => {
  store.dispatch(
    updateName({
      title: "Ms",
      first: "dana",
      last: "eggling"
    })
  );
}, 1500);

const render = () => {
  const jsonRes = JSON.stringify(store.getState());
  console.log("AFTER");
  console.log(jsonRes);
};

store.subscribe(render);
