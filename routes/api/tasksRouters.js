const { Router } = require('express');
const {
  getTasksMonthController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
} = require('../../controllers/taskControllers');
const {
  checkBody,
  checkData,
  checkTaskId,
} = require('../../middlewares/taskMiddlewares');

const router = Router();

// треба імпортувати прошарок protect для залогінених юзерів
// router.use(protect);

router
  .route('/')
  .get(getTasksMonthController)
  .post(checkBody, checkData, addTaskController);

router.use('/:id', checkTaskId);

router
  .route('/:id')
  .patch(checkBody, updateTaskController)
  .delete(deleteTaskController);

module.exports = router;
