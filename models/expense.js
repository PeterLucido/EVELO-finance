import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: {type: String, required: true} 
})
	
const expenseSchema = new Schema({
  category: {type: String, required: true},
  amount: {type: Number, required: true},
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },  
  comments: [commentSchema],
})

const Expense = mongoose.model('Expense', expenseSchema)

export { Expense }