class usersController {

    viewAll(app, req, res) {
        app.get('myDb').collection('users').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    }

    // view a user from the user collection in the database
    viewSingle(app, req, res) {
        let userId = req.params.userId;

        let ObjectId = require('mongodb').ObjectId;
        const userIdObject = new ObjectId(userId);

        app.get('myDb').collection('users').find({ "_id": userIdObject }).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs[0]);
        });
    }

    // adding a user to the database
    addUser(app, req, res) {
        let newUser = req.body;
        console.info(newUser);

        app.get('myDb').collection('users').insertOne(newUser, function (err, doc) {
            if (err) {
                console.error(err);
                return res.json({ "error": "Oh no :-("});
            }
            console.log(doc);
            res.json({ "msg": "Successfully added user!", "id": doc.insertedId})
        });
    }


// editing an existing row in the users collection in the database
    editUser(app, req, res) {
        console.info("PUT controller")
        let editUser = req.body;
        console.dir(editUser);
        let userId = parseInt(editUser.userId);
        app.get('myDb').collection("users").updateOne(
            { "_id": userId },
            {
                $set: {
                    "firstName": editFirstName.firstName,
                    "surname": editSurname.surname,
                    "dateOfBirth": editDateOfBirth.dateOfBirth,
                    "username": editUsername.username
                }
            },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.modifiedCount === 1) {
                    res.json({ msg: "User successfully edited" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }
    
    // deleting a row from the users collection in the database
    deleteUser(app, req, res) {
        let removeUser = req.body;
        let userId = parseInt(removeUser.userId);
        console.dir(removeUser);
        app.get('myDb').collection("users").deleteOne(
            { "_id": userId },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.deletedCount === 1) {
                    res.json({ msg: "User successfully deleted" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }
}

export default usersController;