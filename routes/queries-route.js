const express = require('express');
const queriesCtrl = require('../controllers/queries-ctrl')
const router = express.Router();

router.post('/instructorName', queriesCtrl.searchLecturesByInstructorName)
router.post('/subjectName', queriesCtrl.searchLecturesByCategories)
router.post('/lectureName',queriesCtrl.searchCustomersByLectureName)
router.post('/lectures',queriesCtrl.searchLectureIdByLectureName)
router.post('/lectureDate',queriesCtrl.searchLecturesByDate)
// router.post('/customersRole',queriesCtrl.searchCustomersByRoleName)




module.exports = router;