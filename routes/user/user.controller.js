const getUser = (req, res) => {
  res.status(200).json({
    status: {
      code: 200,
      message: 'Success getting the user data!',
    },
  });
};

module.exports = { getUser };
