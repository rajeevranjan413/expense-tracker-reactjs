import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expeneDate, setExpenseDate] = useState("");

    const titleChangeHandler = (e)=>{
        setExpenseTitle(e.target.value)
    }
    const dateChangeHandler = (e)=>{
        setExpenseDate(e.target.value)
    }
    const amountChangeHandler = (e)=>{
        setExpenseAmount(e.target.value)
    }
    const submitExpenseHandler = (e)=>{
        e.preventDefault()

        const expense = {
            title: expenseTitle,
            amount: +expenseAmount,
            date: expeneDate
        }
        console.log(expense)

        // props.saveExpense(expense)

        // setExpenseTitle('')
        // setExpenseAmount('')
        // setExpenseDate('')
        
    }


  return (

    <form onSubmit={submitExpenseHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type="text"
                    onChange={titleChangeHandler} 
                    value={expenseTitle}
                />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                    type="number"
                    onChange={amountChangeHandler} 
                    value={expenseAmount}
                    min= "0.01"
                    step="1"
                />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input 
                    type="date"
                    min='2024-01-01' 
                    max='2030-12-31'
                    onChange={dateChangeHandler} 
                    value={expeneDate}
                />
            </div>
        </div>
        <div className='new-expense__actions'>
                {/* <button type="button" onClick={props.onCancel} >Cancel</button> */}
                <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
