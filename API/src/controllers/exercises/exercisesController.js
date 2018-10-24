class exercisesController {

    viewAll(app, req, res) {
        app.get('myDb').collection('exercises').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    }

    viewSingle(app, req, res) {
        let exerciseId = req.params.exerciseId;

        let ObjectId = require('mongodb').ObjectId;
        const exerciseIdObject = new ObjectId(exerciseId);

        app.get('myDb').collection('exercises').find({ "_id": exerciseIdObject }).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        });
    }

    addExercise(app, req, res) {
        let newExercise = req.body;
        let exerciseId = parseInt(newExercise.exerciseId);
        newExercise.exerciseId = exerciseId;
        console.info(newExercise);

        app.get('myDb').collection('exercises').insertOne(newExercise, function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json({ "msg": "Successfully added exercise!"})
        });
    }

    editExercise(app, req, res) {
        console.info("PUT controller")
        let editExercise = req.body;
        console.dir(editExercise);
        let exerciseId = parseInt(editExercise.exerciseId);
        app.get('myDb').collection("exercises").updateOne(
            { "_id": exerciseId },
            {
                $set: {
                    "exerciseName": editExercise.exerciseName,
                    "exerciseCategory": editExerciseCategory.exerciseCategory,
                    "exerciseDescription": editExerciseDescription.exerciseDescription,
                    "noOfReps": editNoOfReps.noOfReps,
                    "noOfSets": editNoOfSets.noOfSets,
                    "noOfMinutes": editNoOfMinutes.noOfMinutes
                }
            },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.modifiedCount === 1) {
                    res.json({ msg: "Exercise successfully edited" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }

    deleteExercise(app, req, res) {
        let removeExercise = req.body;
        let exerciseId = removeExercise.exerciseId;
        console.dir(removeExercise);

        let ObjectId = require('mongodb').ObjectId;
        const exerciseIdObject = new ObjectId(exerciseId);

        app.get('myDb').collection("exercises").deleteOne(
            { "_id": exerciseIdObject },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.deletedCount === 1) {
                    res.json({ msg: "Exercise successfully deleted" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }    
}

export default exercisesController;
