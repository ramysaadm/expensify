export default (expenses) => {
    
    return expenses.map(expense=>expense.amount).reduce((a,b)=>{
        return a+b;
    },0);
   
    
};




