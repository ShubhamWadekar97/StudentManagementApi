const express =require('express');
const router=express.Router();

const studentC=require('../controller/studentController');
router
.get('/',studentC.getStudent)
.post('/',studentC.addStudent)
.put('/:StudentID',studentC.updateStudent)
.delete('/:StudentID',studentC.deleteStudent)
.get('/:StudentID',studentC.getStudentById)

module.exports=router;
