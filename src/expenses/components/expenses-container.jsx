import React from 'react';
import _ from 'lodash';
import { expenses } from '../__mock__/data';
import { ExpenseRow } from './expense-row.jsx';
export class ExpensesContainer extends React.Component {
     componentDidMount(){

     }
     renderHeader(){
      return (
             <tr>
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
        const expensesRows = _.map(expenses, function(x, index) {
          console.log(x);
          return (
              <ExpenseRow key={index} row={x} />
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

export default ExpensesContainer;

