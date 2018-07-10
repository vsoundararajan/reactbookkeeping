import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaBeer from 'react-icons/lib/fa/beer';
import * as FontAwesome from 'react-icons/lib/fa'

export class ExpensesRow extends React.Component {
    constructor(props){
      super(props);
      console.log(FontAwesome);
    }
    clickHandler(id){
      console.log("Clicked ", id);
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
           <td>< FontAwesome.FaEdit onClick={ () => this.clickHandler(this.props.row.id)}/>  &nbsp;  &nbsp;  &nbsp; < FontAwesome.FaCrosshairs /></td>
        </tr>
      )
    }
}

export default ExpensesRow;
