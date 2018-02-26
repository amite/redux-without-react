const updateName = () => {
  return {
    type: "UPDATE_FIRST_NAME",
    payload: {
      first: "dana"
    }
  }
}

module.exports = {
  updateName
}
