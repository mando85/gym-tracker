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
            res.json(docs[0]);
        });
    }

    // adding a workout to the database
    addWorkout(app, req, res) {
        let newWorkout = req.body;
        console.info(newWorkout);

        app.get('myDb').collection('workouts').insertOne(newWorkout, function (err, doc) {
            if (err) {
                console.error(err);
                return res.json({ "error": "Oh no :-("});
            }
            console.log(doc);
            res.json({ "msg": "Successfully added workout!", "id": doc.insertedId})
        });
    }

// editing an existing row in the workouts collection in the database
    editWorkout(app, req, res) {

        let workoutId = req.params.workoutId;
        let ObjectId = require('mongodb').ObjectId;
        const workoutIdObject = new ObjectId(workoutId);

        let workout = req.body;

        app.get('myDb').collection("workouts").updateOne(
            { "_id": workoutIdObject },
            {
                $set: {
                    "workoutName": workout.workoutName,
                    "workoutDate": workout.workoutDate,
                    "exerciseCategory": workout.exerciseCategory,
                    "workoutExerciseName": workout.workoutExerciseName,
                    "noOfReps": workout.noOfReps,
                    "noOfSets": workout.noOfSets,
                    "noOfMinutes": workout.noOfMinutes
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
        console.log('DELETE WORKOUT');
        let workoutId = req.params.workoutId;
        
        console.log('workoutid', workoutId);
        let ObjectId = require('mongodb').ObjectId;
        const workoutIdObject = new ObjectId(workoutId);

        app.get('myDb').collection("workouts").deleteOne(
            { "_id": workoutIdObject },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }

                console.log('deletedCount: ', dbResp.deletedCount);
                if (dbResp.deletedCount === 1) {
                    res.json({ msg: "Workout successfully deleted" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }    
    }

export default WorkoutsController;