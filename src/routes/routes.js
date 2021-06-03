import {
  addNewUser,
  getAllUsers,
  getUserWithID,
  updateUserWithID,
  deleteUserWithID
} from '../controllers/controller.js';

const routes = (app) => {
  app.route('/user')

  // get all existing users endpoint
  .get((req, res, next) => {
    // middleware
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Request method: ${req.method}`);
    next();
    }, getAllUsers)
  // logging and testing
  // (req, res, next) => {
  //   res.send('Get request successful!!!');
  // })

  // Post new user endpoint
  .post(addNewUser);

  app.route('/user/:userID')
  // get user with ID
  .get(getUserWithID)
  // update user with ID
  .put(updateUserWithID)
  // delete user with ID
  .delete(deleteUserWithID)

};

export default routes;
