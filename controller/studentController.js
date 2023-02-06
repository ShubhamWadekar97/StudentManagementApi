const db=require('../database/sqldb');

const addStudent=(req,res) =>{
    console.log(req.body);
    var data={
        Student_id:0,
        FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Address: req.body.Address,
            Email: req.body.Email,
            Mobile: req.body.Mobile,
            Age: req.body.Age,
            
    }
    db.query('insert into studentinfo SET ? ',data,function(err,result){
if(err) throw err;
res.send({msg:result});
    });

}

const getStudent=(req,res) =>{
    db.query('select * from studentinfo',function(err,result){
if(err) throw err;
res.send({msg:result});
    })
    console.log("data show successfully");
}

const updateStudent=(req,res) =>{
    console.log(req.body);
    console.log(req.params);
db.query('UPDATE studentinfo SET FirstName = ?, LAstName = ?, Address = ?,Email = ?, Mobile = ?, Age = ? WHERE Student_id = ?', [req.body.FirstName,req.body.LastName,req.body.Address,req.body.Email,req.body.Mobile, req.body.Age, req.params.StudentID], function (err,result) {
        if (err) throw err;
        res.send({msg:result})
      });
    console.log("data update successfully");
}
const deleteStudent=(req,res) =>{
    console.log(req.params);
    db.query(`DELETE FROM studentinfo WHERE Student_id = "${req.params.StudentID}"`, function (error, results, fields) {
        if (error) throw error;
       res.send({msg:results})
      });
            console.log("data delete successfully");;
        }

        const getStudentById=(req,res) =>{
            db.query('select * from studentinfo WHERE Student_id = ?',[req.params.StudentID],function(err,result){
        if(err) throw err;
        res.send({msg:result});
            })
            console.log("data show successfully");
        }


module.exports={
    addStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    getStudentById
}