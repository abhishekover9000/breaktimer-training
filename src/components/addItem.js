import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddItem extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  add = () => {
    this.props.addNewItem(this.state.title);
  };

  render() {
    return (
      <div>
        <TextField
          value={this.state.title}
          label="Title"
          onChange={this.handleChange}
        />
        <Button onClick={this.add} variant="extendedFab" color="primary">
          {" "}
          Add{" "}
        </Button>
      </div>
    );
  }
}
export default AddItem;
