import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class ExpensesRow extends React.Component {
    constructor(props){
      super(props);
    }
    render () {
      return(
        <tr>
           <td>{this.props.row.id}</td>
           <td>{this.props.row.date}</td>
           <td>{this.props.row.towhom}</td>
           <td>{this.props.row.district}</td>
           <td>{this.props.row.amount}</td>
           <td>{this.props.row.description}</td>
           <td>{this.props.row.typeofexpense}</td>
           <td>{this.props.row.subtypeofexpense}</td>
           <td>{this.props.row.expensetype}</td>
           <td><button>Edit</button></td>
        </tr>
      )
    }
}

export default ExpensesRow;
