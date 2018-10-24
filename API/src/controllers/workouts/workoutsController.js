class WorkoutsController {

    viewAll(app, req, res) {
        app.get('myDb').collection('workouts').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    }

    // view a workout from the workout collection in the database
    viewSingle(app, req, res) {
        let workoutId = req.params.workoutId;

        let ObjectId = require('mongodb').ObjectId;
        const workoutIdObject = new ObjectId(workoutId);

        app.get('myDb').collection('workouts').find({ "_id": workoutIdObject }).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        });
    }

    // adding a workout to the database
    addWorkout(app, req, res) {
        let newWorkout = req.body;
        let workoutId = parseInt(newWorkout.workoutId);
        newWorkout.workoutId = workoutId;
        console.info(newWorkout);

        app.get('myDb').collection('workouts').insertOne(newWorkout, function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json({ "msg": "Successfully added Workout!"})
        })
    }

// editing an existing row in the workouts collection in the database
    editWorkout(app, req, res) {
        console.info("PUT controller")
        let editWorkout = req.body;
        console.dir(editWorkout);
        let workoutId = parseInt(editWorkout.workoutId);
        app.get('myDb').collection("workouts").updateOne(
            { "_id": workoutId },
            {
                $set: {
                    "workoutDate": editWorkoutDate.workoutDate,
                    "exerciseId": editExerciseId.exerciseId
                    // "exerciseId": editExerciseId.exerciseId
                    // "exerciseId": editExerciseId.exerciseId
                    // "exerciseId": editExerciseId.exerciseId
                }
            },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.modifiedCount === 1) {
                    res.json({ msg: "Workout successfully edited" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }

    // deleting a row from the workouts collection in the database
    deleteWorkout(app, req, res) {
        let removeWorkout = req.body;
        let workoutId = parseInt(removeWorkout.workoutId);
        console.dir(removeWorkout);
        app.get('myDb').collection("workouts").deleteOne(
            { "_id": workoutId },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.deletedCount === 1) {
                    res.json({ msg: "Workout successfully deleted" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }
}

export default WorkoutsController;