// requiring the 'express' package from the list of dependencies in the package.json file
import express from 'express';
import WorkoutsController from '$/controllers/workouts/WorkoutsController';

// declaring a variable and calling the express dependency through the variable and assigning router object to it?
// express.Router creates a new router object. Options parameter is optional, and speifies the behaviour of the router.

let router = express.Router();
let controller = new WorkoutsController();
// declaring a variable and requiring the controller.js file so that when we .....


    router = function(app) {
        // to the workoutId column in the workouts collection in MongoDB
        app.route('/api/workouts/:workoutId/')
        .get(function(req, res){
            controller.viewSingle(app, req, res);
        });
    
        app.route('/api/workouts') // <<<--- don't understand this - where is that routing to?!
        .get((req, res)=> controller.viewAll(app, req, res))
        .post((req, res)=> controller.addWorkout(app, req, res));
    
        app.route('/api/workouts/:workoutId')
        .put((req, res)=> controller.editWorkout(app, req, res))
        .delete((req, res)=> controller.deleteWorkout(app, req, res))
    }

// exports the router function declared above??
export default router;