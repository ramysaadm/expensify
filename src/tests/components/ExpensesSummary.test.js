import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary, ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235234324} />);
    expect(wrapper).toMatchSnapshot();
});