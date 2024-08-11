function middleware1(req, res, next) {
  console.log("middleware 1");
  next();
}

function middleware2(req, res, next) {
  console.log("middleware 2");
  next();
}

const middleware = {
  m3: function (req, res, next) {
    console.log("middleware 3");
    next();
  },
  m4: function (req, res, next) {
    console.log("middleware 4");
    next();
  },
};

// Export everything in a single object
module.exports = {
  middleware1,
  middleware2,
  middleware,
};
