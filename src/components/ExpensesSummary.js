import React from 'react';
import {connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';



// export const ExpensesSummary= (props)=>(
//     <div>
//         {
//             <p>Viewing {props.expenses.length} expenses totalling {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</p>
//         }
        
//     </div>
// );

// const mapStateToProps = (state)=>{
//     return {
//         expenses: selectExpenses(state.expenses, state.filters)
//     }
// };

// export default connect(mapStateToProps)(ExpensesSummary);


export const ExpensesSummary = ({expenseCount, expensesTotal})=>{
    const expenseWord = expenseCount==1? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return(
        <div>

            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state)=>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);