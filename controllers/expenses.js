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
  const expense = new Expense(req.body)
  expense.save(function (err) {
    if (err) return res.redirect("/expense/new")
    res.redirect("/expense")
  })
}


export {
  newExpense as new,
  create,
}