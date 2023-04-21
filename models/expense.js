import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const expenseSchema = new Schema({
  category: {type: String, required: true},
  amount: {type: Number, required: true},
})

const Expense = mongoose.model('Expense', expenseSchema)

export {
  Expense
}