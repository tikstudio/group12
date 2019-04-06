import React, {Component} from 'react';
import {connect} from "react-redux";
import {addToDo, deleteToDo, doneToDo} from "../store/actions";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Todo List</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {this.props.list.map((item) => (
            <tr key={item.id}>
              <td>
                {item.done
                  ? <del>{item.name}</del>
                  : item.name}
              </td>
              <td>
                <button onClick={() => this.props.deleteToDo(item.id)}>
                  -
                </button>
                <button onClick={() => this.props.doneToDo(item.id)}>
                  +
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = {
  doneToDo,
  deleteToDo
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default Container;

