import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should filter by text value',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
    
});

test('should filter by startDate',()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    };
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[2],expenses[0]]);
});

test('should filter by endDate',()=>{
    const filters={
        endDate: moment(0).subtract(3,'days'),
        text:'',
        sortBy:'date',
        startDate:undefined
    };
    const results = selectExpenses(expenses,filters);
    expect(results).toEqual([expenses[1]]);
});

test('should sort by date',()=>{
    const filters={
        startDate: undefined,
        endDate:undefined,
        text:'',
        sortBy:'date'
    }
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('should sort by amount',()=>{
    const filters={
        startDate: undefined,
        endDate: undefined,
        text:'',
        sortBy:'amount'
    };
    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[1],expenses[2],expenses[0]]);
});