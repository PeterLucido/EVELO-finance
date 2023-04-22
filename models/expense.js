import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: String,
})
	
const expenseSchema = new Schema({
  category: {type: String, required: true},
  amount: {type: Number, required: true},
  comments: [commentSchema],
})

const Expense = mongoose.model('Expense', expenseSchema)

export { Expense }