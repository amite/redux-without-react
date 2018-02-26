const redux = require("redux")
const rootReducer = require("./reducers")

const store = redux.createStore(rootReducer)

const updateName = () => {
  return {
    type: "UPDATE_FIRST_NAME",
    payload: {
      first: "dana"
    }
  }
}

store.dispatch(updateName())

const jsonRes = JSON.stringify(store.getState())

console.log(jsonRes)
