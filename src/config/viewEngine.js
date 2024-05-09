import express from "express";
/**
 *
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs"); // sử dụng công nghệ ejs viết html
  app.set("views", "./src/views"); // nơi lưu trữ file ejs
};

export default configViewEngine; // export tham chiếu
