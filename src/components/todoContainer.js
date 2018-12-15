import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, completeItem, deleteItem } from "../actions/actions.js";

import Button from "@material-ui/core/Button";

import TodoItem from "./todoItem";
import AddItem from "./addItem";

class TodoContainer extends Component {
  state = {
    isUserAddingNewItem: false
  };

  addItemToggle = () => {
    this.setState({ isUserAddingNewItem: true });
  };

  addNewItem = itemName => {
    /* Redux */
    this.props.addItem(itemName);
    this.setState({ isUserAddingNewItem: false });
  };

  deleteItem = id => {
    this.props.deleteItem(id);
  };

  completeItem = id => {
    this.props.completeItem(id);
  };

  render() {
    console.log(this.props.todo.items.length > 0);
    const items = this.props.todo.items.map((item, index) => {
      return (
        <TodoItem
          item={item}
          index={index}
          completeItem={this.completeItem}
          deleteItem={this.deleteItem}
        />
      );
    });
    return (
      <div>
        <div>
          <h1> Task List </h1>
        </div>

        {this.props.todo.items.length > 0 ? (
          <React.Fragment>{items}</React.Fragment>
        ) : null}
        {this.state.isUserAddingNewItem ? (
          <AddItem addNewItem={this.addNewItem} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={this.addItemToggle}
          >
            {" "}
            Add a New Item{" "}
          </Button>
        )}
      </div>
    );
  }
}

export default connect(
  state => {
    return { todo: state.todo };
  },
  { addItem, completeItem, deleteItem }
)(TodoContainer);
