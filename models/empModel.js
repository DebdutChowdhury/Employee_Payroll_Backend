const { response } = require('express');
const mongoose = require('mongoose');
const empSchema = mongoose.Schema({
    _name:{
        type: String,
        maxLen:30,
        required : [true, 'Employee name is required!']
    },
    _profilePic:{
        type:String,
        required: true
    },
    _gender:{
        type:String,
        required: true
    },
    _department:{
        type:Object,
        required: true
    },
    _salary:{
        type: Number,
        required: true
    },
    // _startDate:{
    //     type: Date
    // },
    _startDate:{
        type: String
    },
    _notes:{
        type:String,
        required:[true]
    }
})

const empModel = mongoose.model('emp', empSchema)

function empOperation(){
    
}

empOperation.prototype.register = (obj, callback) => {
    empModel.find({_name: obj._name},(error, data) => {
        if(error){
            callback(error, null)
        }
        else{
            if(data.length > 0){
                callback({success: false, message: "Name already exist" ,data: ""})
            }
            else{
                var newEmp = new empModel(obj)
                newEmp.save((err,data) => {
                    if(err){
                        console.log(err);
                        callback(err, null);
                    }
                    else{
                        var response = {success: true, message: "emp register successull", data:""}
                        callback(null, response)
                    }
                })
            }
        }
    })
}

empOperation.prototype.findAll = ((obj, callback) => {
    empModel.find({}, (error, data) => {
        if(error){
            callback(error, null)
        }
        else{
            var response = {success: true, message: "Name Exist", data: data}
            callback(null, response)
        }
    })
})

empOperation.prototype.deleteEmp = ((obj, callback) => {
    
    // let id = "6093c8778246654e7ec9247c"`
    empModel.findByIdAndDelete(obj, (error, result) => {
        if(error){
            callback(error, null)
        }
        else{
            callback(null, result)
        }
    })
})

empOperation.prototype.updateEmp = (id, data, callback) => {
    empModel.findByIdAndUpdate(id, data, {new:true}, (error, result) => {
        if(error){
            callback(error, null)
        }
        else{
            callback(null, result)
        }
    })
}

empOperation.prototype.findEmpById = ((obj,callback) =>{
    empModel.findById(obj,(error,data) => {
        if(error){
            callback(error, null)  //data will be null
        }
        else{
            var response = {success: true, message:"Name exists", data: data}
            callback(null,response);
        }
    })
})

module.exports = new empOperation();