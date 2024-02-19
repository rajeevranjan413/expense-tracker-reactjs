import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEdit,setIsEdit] = useState(false);

  return (
    <div className='new-expense'>
        {!isEdit && <button onClick={editingHandler}>Add new expense</button>}
        {isEdit && <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel = {stopEditHandler} 
        />}        
    </div>
  )
}

export default NewExpense
