const service = require('../services/empService')
exports.registration = (req, res) => {
    // console.log('in registration'. req.body);
        // req.check("_name").not().isEmpty().withMessage("First name is not be empty").isLength({min:5, max:30}).withMessage("Length must be 5 to 30")
        const error = req.validationErrors()
        console.log(error);
            if(error.length > 0){
                return res.status(422).json({success: false, message: error[0].msg})
            }
            else{
                service.registration(req.body, (error, result) => {
                    if(error){
                        return res.status(500).send(error)
                    }
                    else{
                        return res.status(200).send(result)
                    }
                })
            }
}

exports.findAll = (req, res) => {
    service.findAllEmp(req.body, (error, result) => {
        if(error){
            return res.status(500).send(error);
        }
        else{
            return res.status(200).send(result)
        }
    })
}

exports.deleteEmp = (req, res) => {
    service.deleteEmployee(req.params.id, (error, result) => {
        if(error){
            return res.status(404).json({success: false, message: 'id ot found', data: req.params.id})
        }
        else{
            return res.status(200).json({success: true, message: 'Employee data deleted'})
        }
    })
}

exports.updateEmp = (req, res) => {
    const empData ={
         _name : req.body._name,
         _profilePic : req.body._profilePic,
         _gender : req.body._gender,
         _department : req.body._department,
         _salary: req.body._salary,
         _startDate: req.body._startDate,
         _notes: req.body._notes
    };
    console.log(req.body);
    if(!empData) {
     return res.status(400).json({success: false, message: "Fields content cannot be empty"});
    }
    service.findAndUpdateEMP(req.params.id,empData,(error,result)=>{
        if(error)
        {
            res.status(404).json({success: false, message: "Emp Not Found With the ID", data: req.params.id});
        }else {
            res.status(200).send({success: true, message: "Emp Found And Updated", data: result});
        }
    })
}

exports.findOneEmp = (req, res) => {
    service.findEmp(req.params.id, (error,result) => {
        if(error){
            return res.status(500).send(error);
        }
        else{
            return res.status(200).send(result)//smd
 
        }  
    })
}