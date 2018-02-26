const redux = require("redux")
const rootReducer = require("./reducers")

const store = redux.createStore(rootReducer)

const jsonRes = JSON.stringify(store.getState())

console.log(jsonRes)
