import React, {Component} from 'react';
import {connect} from "react-redux";
import {addToDo} from "../store/actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (ev) => {
    this.setState({value: ev.target.value})
  }

  cancel = () => {
    this.setState({value: ''})
  }

  addTodo = () => {
    this.props.addToDo(this.state.value);
    this.setState({value: ''})
  }

  render() {
    const {value} = this.state
    return (
      <div>
        <input value={value} type="text" onChange={this.handleChange}/>
        <div>
          <button onClick={this.cancel}>Cancel</button>
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addToDo
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default Container;
