// import express from "express";

// const router = express.Router();

// /**
//  *
//  * @param {*} app: express app
//  */

// const initWWebRoutes = () => {
//   router.get("/", (req, res) => {
//     return res.send("Hello World");
//   });

//   return app.use("/", router);
// };

// export default initWWebRoutes;
// routes/web.js

import express from "express";

const router = express.Router();

/**
 *
 * @param {*} app: express app
 */

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello World");
  });

  // Gắn router vào ứng dụng Express được cung cấp
  app.use("/", router);
};

export default initWebRoutes;
