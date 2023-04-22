import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'

const router = Router()

// GET /expense/new
router.get('/', expensesCtrl.index)
router.get('/new', expensesCtrl.new)
router.get('/:expenseId', expensesCtrl.show)
router.post('/create', expensesCtrl.create)


export { router }
