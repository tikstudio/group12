import React, {Component} from 'react';
import {changeFilter} from "../store/actions";
import {connect} from "react-redux";

class Filter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.changeFilter('all')}>All</button>
        <span>/</span>
        <button onClick={() => this.props.changeFilter('done')}>Completed</button>
        <span >/</span>
        <button onClick={() => this.props.changeFilter('not_done')}>Active</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  changeFilter
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default Container;

