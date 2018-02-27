const updateName = () => {
  return {
    type: "UPDATE_NAME",
    payload: {
      title: "Ms",
      first: "dana",
      last: "eggling"
    }
  };
};

module.exports = {
  updateName
};
