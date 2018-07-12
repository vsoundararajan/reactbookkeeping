import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class ChooseDate extends React.Component {
  constructor (props) {
    super(props)
    const expDate = props.selected || moment();
    console.group("expDate");
    console.log(expDate);
    console.groupEnd("expDate");
    this.state = {
      startDate: moment(expDate),
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}

export default ChooseDate;

