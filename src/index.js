const redux = require("redux")

const initialState = {
  profile: {
    gender: "female",
    name: {
      title: "mrs",
      first: "dânia",
      last: "da mota"
    },
    phone: "015394 16261",
    cell: "0757-275-048",
    location: {
      street: "2591 rua pará ",
      city: "teixeira de freitas",
      state: "mato grosso",
      postcode: 31682
    },
    currentPlan: "free",
    upgraded: false,
    loggedIn: false,
    verified: false
  },
  plans: [
    {
      id: "33453ttt",
      name: "gold",
      cost: 3500
    },
    {
      id: "334545tt",
      name: "silver",
      cost: 2500
    }
  ]
}

const userReducer = function(state = initialState) {
  return state.profile
}

const plansReducer = function(state = initialState) {
  return state.plans
}

const rootReducer = redux.combineReducers({
  users: userReducer,
  plans: plansReducer
})

const store = redux.createStore(rootReducer)

const jsonRes = JSON.stringify(store.getState())

console.log(jsonRes)
