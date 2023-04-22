import { Expense } from "../models/expense.js"



function newExpense(req, res) {
  res.render("expense/new", {
    title: "Add Expense",
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key]
  }
  Expense.create(req.body)
  .then(expense => {
    res.redirect(`/expenses/${expense._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses/new')
  })
}


export {
  newExpense as new,
  create,
}