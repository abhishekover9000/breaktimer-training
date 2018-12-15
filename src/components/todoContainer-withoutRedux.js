import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import TodoItem from "./todoItem";
import AddItem from "./addItem";

class TodoContainerReact extends Component {
  state = {
    items: [],
    isUserAddingNewItem: false,
    timeOut: null
  };

  addItemToggle = () => {
    this.setState({ isUserAddingNewItem: true });
  };

  addNewItem = itemName => {
    const items = this.state.items;
    items.push({
      id: items.length,
      title: itemName,
      isComplete: false
    });
    this.setState({ items, isUserAddingNewItem: false });
  };

  deleteItem = id => {
    const items = this.state.items;
    items.splice(id, 1);
    this.setState({ items });
  };

  completeItem = id => {
    const items = this.state.items;
    items[id].isComplete = true;
    this.setState({ items });
  };

  render() {
    const items = this.state.items.map((item, index) => {
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
          <h1> Hello! Time to get things done! </h1>
          <h3> Today it will be </h3>
        </div>

        {this.state.items.length > 0 ? (
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

export default TodoContainerReact;
