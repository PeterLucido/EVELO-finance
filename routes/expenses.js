import { Router } from 'express'
import * as expensesCtrl from '../controllers/expenses.js'

const router = Router()

// GET /expense/new
router.get('/new', expensesCtrl.new)
// POST /expense
router.post('/', expensesCtrl.create)

export { router }
