import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

class TodoItem extends Component {
  deleteItem = () => {
    this.props.deleteItem(this.props.index);
  };
  completeItem = () => {
    this.props.completeItem(this.props.index);
  };
  render() {
    const { item } = this.props;

    return (
      <Grid
        key={this.props.index}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="item"
      >
        <Grid item>
          <b> {item.title} </b>
        </Grid>

        <Grid item>
          {item.isComplete ? (
            <p> Completed </p>
          ) : (
            <Button variant="text" color="primary" onClick={this.completeItem}>
              Complete{" "}
            </Button>
          )}
        </Grid>

        <Grid item>
          <Button variant="text" color="primary" onClick={this.deleteItem}>
            Delete{" "}
          </Button>
        </Grid>
      </Grid>
    );
  }
}
export default TodoItem;
