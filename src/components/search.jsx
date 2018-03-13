import React from 'react';
import {connect} from 'react-redux';
import {searchPhone} from '../actions/index';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchPhone(this.state.value)
  }
  render() {
    return (
      <div className='well blosd'>
        <h3 className='lead'>Quick shop</h3>
        <div className='input-group'>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type='text'
              className='form-control'
            />
          </form>
          <span className='input-group-btn'>
            <button className='btn btn-default'>
              <span className='glyphicon glyphicon-search' />
            </button>
          </span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchPhone
}
export default connect(null, mapDispatchToProps)(Search);