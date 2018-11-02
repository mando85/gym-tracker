// requiring the 'express' package from the list of dependencies in the package.json file
// import path from 'path';
import express from 'express';
import ExercisesController from '$/controllers/exercises/exercisesController';
// declaring a variable and calling the express dependency through the variable and assigning router object to it?
// express.Router creates a new router object. Options parameter is optional, and speifies the behaviour of the router.

let router = express.Router();
let controller = new ExercisesController();

router = function(app) {
    // to the exerciseId column in the exercises collection in MongoDB
    app.route('/api/exercises/:exerciseId/')
    .get(function(req, res){
        controller.viewSingle(app, req, res);
    });

    app.route('/api/exercises') // <<<--- don't understand this - where is that routing to?!
    .get((req, res)=> controller.viewAll(app, req, res))
    .post((req, res)=> controller.addExercise(app, req, res));

    app.route('/api/exercises/:exerciseId')
    .put((req, res)=> controller.editExercise(app, req, res))
    .delete((req, res)=> controller.deleteExercise(app, req, res))
}

// exports the router function declared above
export default router;