import React from 'react'
import { useState } from 'react';
import ExpenseForm from './component/NewExpense/ExpenseForm';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Headphone',
    amount: 1000,
    date: new Date(2022, 7, 18)
  },
  {
    id: 'e2',
    title: 'Carry Bag',
    amount: 800,
    date: new Date(2020, 2, 12)
  },
  {
    id: 'e3',
    title: 'Novel',
    amount: 234.56,
    date: new Date(2022, 4, 5)
  },{
    id: 'e4',
    title: 'Calculator',
    amount: 456,
    date: new Date(2019, 7, 10)
  }
];



const App = () => {
  const [expense, setExpense] = useState(DUMMY_EXPENSES)

  return (
   <ExpenseForm/>
  )
}

export default App
