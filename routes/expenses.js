import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

// GET /expense/new
router.get('/', isLoggedIn, expensesCtrl.index)
router.get('/new', isLoggedIn, expensesCtrl.new)
router.get('/:expenseId', isLoggedIn, expensesCtrl.show)
router.get('/:expenseId/edit', isLoggedIn, expensesCtrl.edit)
router.post('/create', isLoggedIn, expensesCtrl.create)
router.post('/:expenseId/comments', isLoggedIn, expensesCtrl.createComments)
router.delete('/:expenseId', isLoggedIn, expensesCtrl.delete)
router.delete('/:expenseId/comments/:commentId', isLoggedIn, expensesCtrl.deleteComments)
router.put('/:expenseId', isLoggedIn, expensesCtrl.update)


export { router }
