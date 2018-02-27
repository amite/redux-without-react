const updateName = ({ title, first, last }) => {
  return {
    type: "UPDATE_NAME",
    payload: {
      title,
      first,
      last
    }
  };
};

module.exports = {
  updateName
};
