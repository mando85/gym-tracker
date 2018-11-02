class exercisesController {

    viewAll(app, req, res) {
        app.get('myDb').collection('exercises').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    }

    // view an exercise from the exercise collection in the database
    viewSingle(app, req, res) {
        let exerciseId = req.params.exerciseId;

        let ObjectId = require('mongodb').ObjectId;
        const exerciseIdObject = new ObjectId(exerciseId);

        app.get('myDb').collection('exercises').find({ "_id": exerciseIdObject }).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs[0]);
        });
    }

    // adding an exercise to the database
    addExercise(app, req, res) {
        let newExercise = req.body;
        console.info(newExercise);

        app.get('myDb').collection('exercises').insertOne(newExercise, function (err, doc) {
            if (err) {
                console.error(err);
                return res.json({ "error": "Oh no :-("});
            }
            console.log(doc);
            res.json({ "msg": "Successfully added exercise!", "id": doc.insertedId})
        });
    }

    editExercise(app, req, res) {

        let exerciseId = req.params.exerciseId;
        let exercise = req.body;

        app.get('myDb').collection("exercises").updateOne(
            { "_id": exerciseId },
            {
                $set: {
                    "exerciseName": exercise.exerciseName,
                    "exerciseCategory": exercise.exerciseCategory,
                    "exerciseDescription": exercise.exerciseDescription
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
        console.log('DELETE EXERCISE');
        let exerciseId = req.params.exerciseId;
        
console.log('exerciseid', exerciseId);
        let ObjectId = require('mongodb').ObjectId;
        const exerciseIdObject = new ObjectId(exerciseId);

        app.get('myDb').collection("exercises").deleteOne(
            { "_id": exerciseIdObject },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }

                console.log('deletedCount: ', dbResp.deletedCount);
                if (dbResp.deletedCount === 1) {
                    res.json({ msg: "Exercise successfully deleted" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }    
}

export default exercisesController;
