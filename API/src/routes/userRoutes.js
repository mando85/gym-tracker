// requiring the 'express' package from the list of dependencies in the package.json file
import express from 'express';
import usersController from '$/controllers/users/usersController';

// declaring a variable and calling the express dependency through the variable and assigning router object to it?
// express.Router creates a new router object. Options parameter is optional, and speifies the behaviour of the router.

let router = express.Router();
let controller = new usersController();
// declaring a variable and requiring the controller.js file so that when we .....

// 
router = function(app){
    // to the exerciseId column in the exercises collection in MongoDB
    app.route('/api/users/:userId')
    .get(function(req, res){
        controller.viewSingle(app, req, res);
    });

    app.route('/api/users') // <<<--- don't understand this - where is that routing to?!
    .get((req,res)=> controller.viewAll(app, req, res))
    .post((req,res)=> controller.addUser(app, req))
    .put((req,res)=> controller.editUser(app, req, res))
    .delete((req,res)=> controller.deleteUser(app, req, res))
}

// exports the router function declared above??
export default router;
