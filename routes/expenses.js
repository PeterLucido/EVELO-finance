import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'

const router = Router()

// GET /expense/new
router.get('/', expensesCtrl.index)
router.get('/new', expensesCtrl.new)
router.get('/:expenseId', expensesCtrl.show)
router.get('/:expenseId/edit', expensesCtrl.edit)
router.post('/create', expensesCtrl.create)
router.post('/:expenseId/comments', expensesCtrl.createComments)
router.delete('/:expenseId', expensesCtrl.delete)
router.put('/:expenseId', expensesCtrl.update)


export { router }
