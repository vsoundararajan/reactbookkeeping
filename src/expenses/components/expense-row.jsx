import React from 'react';

export function ExpenseRow(props){

    console.group("props at ExpenseRow");
    console.log(props);
    console.groupEnd("props at ExpenseRow");

  return(
    <tr>
       <td>{props.row.date}</td>
       <td>{props.row.towhom}</td>
       <td>{props.row.district}</td>
       <td>{props.row.amount}</td>
       <td>{props.row.description}</td>
       <td>{props.row.typeofexpense}</td>
       <td>{props.row.subtypeofexpense}</td>
       <td>{props.row.expensetype}</td>
       <td><button>Edit</button></td>
    </tr>
  )
}
