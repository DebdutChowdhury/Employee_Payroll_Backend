const empModel = require('../models/empModel')
exports.registration = (data, callback) => {
    empModel.register(data, (error, result) => {
        if(error){
            callback(error, null)
        }
        else{
            callback(null, result)
        }
    })
}

exports.findAllEmp = (data, callback) => {
    empModel.findAll(data, (error, result) => {
        if(error){
            callback(error, null)
        }
        else{
            callback(null, result)
        }
    })
}

exports.deleteEmployee = (id, callback) => {
    empModel.deleteEmp(id, (error, result) => {
        if(error){
            callback(error, null)
        }
        else{
            callback(null, result)
        }
    })
}

exports.findAndUpdateEMP = (id, data, callback) => {
    empModel.updateEmp(id, data, (error, result) => {
        if(error){
            callback(error, null)
        }
        else{
            callback(null, result)
        }
    })
}

exports.findEmp = (data,callback) =>{
    empModel.findEmpById(data,(error,result) =>{
        if(error){
            callback(error,null)
        }else{
            callback(null, result)
        }
    })
}