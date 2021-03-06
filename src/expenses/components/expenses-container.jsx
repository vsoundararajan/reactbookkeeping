import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  ExpenseRow  from './expense-row.jsx';
import { fetchExpenses as fetchExpensesAction } from '../actions/actions';


//function handleClick(id)  { setEditExpenseIdAction(id) }

export class ExpensesContainer extends React.Component {
     constructor(props){
       super(props);
       console.group("props at constructor");
       console.log(props);
       console.groupEnd("props at constructor");
     }
     componentWillMount(){
       this.props.fetchExpenses();
     }

     renderHeader(){
      return (
             <tr>
               <th>ID</th>
               <th>Date</th>
               <th>To Whom</th>
               <th>District</th>
               <th>Amount</th>
               <th>Description</th>
               <th>Typeof Exp</th>
               <th>Sub Typeof Exp</th>
               <th>Mode of Pay</th>
               <th>Action</th>
             </tr>
        );
     }

     renderRows(){
        const setEditExpenseId = this.props.setEditExpenseIdAction;
        const expensesRows = _.map(this.props.expenses, function(x, index) {
          return (
              <ExpenseRow key={x.id} row={x} id={x.id} />
            );
        });
        return expensesRows;
     }
    render () {
       return (
         <div>
           <h1>Expenses</h1>
           <table id="expenses">
             <tbody>
               {this.renderHeader()}
               {this.renderRows() }
             </tbody>
           </table>
         </div>
       )
    }
}

function mapStateToProps(state) {
  const expenses = _.get(state, 'expensesReducer.expenses');
  const editId = _.get(state, 'expensesReducer.editId');
  return {
    expenses,
    editId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchExpenses: fetchExpensesAction,
  }, dispatch);
}

ExpensesContainer.propTypes = {
  expenses: PropTypes.array.isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  editId: PropTypes.number.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);
