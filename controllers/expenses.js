import { Expense } from "../models/expense.js"

function newExpense(req, res) {
  res.render("expenses/new", {
    title: "Add Expense",
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Expense.create(req.body)
  .then(expense => {
    res.redirect('/expenses')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses/new')
  })
}

function index(req, res) {
  const profileId = req.user.profile._id
  Expense.find({ owner: profileId })
  .then(expenses => {
    res.render('expenses/index', {
      expenses,
      title: "All Expenses",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses/new')
  })
}

function show(req, res) {
  Expense.findById(req.params.expenseId)
  .then(expense => {
    res.render('expenses/show', {
      expense: expense,
      title: 'Expense Details',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

function deleteExpense(req, res) {
  Expense.findByIdAndDelete(req.params.expenseId)
  .then(expense => {
    res.redirect('/expenses')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

function edit(req, res) {
  Expense.findById(req.params.expenseId)
  .then(expense => {
    res.render('expenses/edit', {
      expense,
      title: 'Edit Expense',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

function update(req, res) {
  Expense.findByIdAndUpdate(req.params.expenseId, req.body, {new: true})
  .then(expense => {
    res.redirect(`/expenses/${expense._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

function createComments(req, res) {
  Expense.findById(req.params.expenseId)
  .then(expense => {
    expense.comments.push(req.body)
    expense.save()
    .then(() => {
      res.redirect(`/expenses/${expense._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/expenses/${expense._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

function deleteComments(req, res) {
  Expense.findById(req.params.expenseId)
  .then(expense => {
    expense.comments.remove(req.params.commentId)
    expense.save()
    .then(() => {
      res.redirect(`/expenses/${expense._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/expenses')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/expenses')
  })
}

export {
  newExpense as new,
  create,
  index,
  show,
  deleteExpense as delete,
  edit,
  update,
  createComments,
  deleteComments,
}