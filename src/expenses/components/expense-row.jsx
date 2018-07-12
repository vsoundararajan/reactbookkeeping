import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaBeer from 'react-icons/lib/fa/beer';
import * as FontAwesome from 'react-icons/lib/fa'
import { setEditExpenseId as setEditExpenseIdAction } from '../actions/actions';

export class ExpensesRow extends React.Component {
    constructor(props){
      super(props);
      console.group("props");
      console.log(props);
      console.groupEnd("props");
    }
    handleClick(id){
      console.group("id at handleClick");
      console.log(id);
      console.groupEnd("id at handleClick");
       this.props.setEditExpenseId(id);
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
           <td>< FontAwesome.FaEdit onClick={ () => this.handleClick(this.props.row.id) }/>  &nbsp;  &nbsp;  &nbsp; < FontAwesome.FaCrosshairs /></td>
        </tr>
      )
    }
}

function mapStateToProps(state) {
  const expenses = _.get(state, 'expensesReducer.expenses');
  return {
    expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setEditExpenseId: setEditExpenseIdAction,
  }, dispatch);
}

ExpensesRow.propTypes = {
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      expenses: PropTypes.string.isRequired,
    })
  ),
  setEditExpenseId: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpensesRow);
