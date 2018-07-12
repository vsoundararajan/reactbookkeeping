import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaBeer from 'react-icons/lib/fa/beer';
import * as FontAwesome from 'react-icons/lib/fa'
import * as MaterialDesign from 'react-icons/lib/md'

import { setEditExpenseId as setEditExpenseIdAction } from '../actions/actions';
import ChooseDate from '../../utils/date-picker';

export class ExpensesRow extends React.Component {
    constructor(props){
      super(props);
      console.group("props");
      console.log(props);
      console.groupEnd("props");
    }
    handleClick(id){
       this.props.setEditExpenseId(id);
    }
    cancelEdit(id){
      console.log("cancelEdit");
      this.props.setEditExpenseId(id);
    }
    renderActionButtons(){
      if(this.props.editId >= 0){
       return(<td></td>)
      }else{
       return(<td>< FontAwesome.FaEdit onClick={ () => this.handleClick(this.props.row.id) }/>  &nbsp;  &nbsp;  < MaterialDesign.MdDelete /></td>)
      }
    }
    renderSaveCancelButtons(){
      return(<td>
               <MaterialDesign.MdSave/>   
               &nbsp;  &nbsp; 
               < MaterialDesign.MdCancel onClick={ () => this.cancelEdit(-999) }/>
             </td>);
    }
    renderRow(){
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
           { this.renderActionButtons() }
        </tr>
      )
    }

    render () {
      if(this.props.editId === this.props.row.id){
      return(
            <tr>
              <td>{this.props.row.id}</td>
              <td><ChooseDate selected={this.props.row.date} /></td>
              <td>{this.props.row.towhom}</td>
              <td>{this.props.row.district}</td>
              <td>{this.props.row.amount}</td>
              <td>{this.props.row.description}</td>
              <td>{this.props.row.typeofexpense}</td>
              <td>{this.props.row.subtypeofexpense}</td>
              <td>{this.props.row.expensetype}</td>
              <td>{ this.renderSaveCancelButtons() }</td>
            </tr>
          );
      }else{
       return this.renderRow()
      }

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
    setEditExpenseId: setEditExpenseIdAction,
  }, dispatch);
}

ExpensesRow.propTypes = {
  expenses: PropTypes.array.isRequired,
  setEditExpenseId: PropTypes.func.isRequired,
  editId: PropTypes.number.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpensesRow);
