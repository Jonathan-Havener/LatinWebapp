const Users = require('../models/userModel.ts');
const errMsg = require('../models/errMsg.ts')
const path = require('path');

exports.getUsers = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    Users.find({}, (err,users) =>{
        res.send(users)
    })
}

exports.findUserByUsername = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    Users.find({userName : req.body.userName}, (err,user)=>{
        if(err){
            res.send({"Message":err})
        }
        else{
            res.send({"Message":user})
        }
    })
}

exports.createUser = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    if(req.body.userName){
        Users.create({userName : req.body.userName}, (err , data)=>{
            if(!err){
                res.send({"Message":"Successfully created user :"+data});
                //return;
            }
            else{
                if(err.code == 11000){
                    res.send({"Message":"That username is taken already!"})

                }
                else{
                    res.send({"Message":err.errmsg})
                }
            }
        })
    }
    else{
        res.send({"Message":"Please enter a username"})
    }

}