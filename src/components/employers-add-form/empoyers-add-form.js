import { Component } from "react";

import "./employers-add-form.css";

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      name: "",
      salary: 0,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { addItem } = this.props;
    return (
      <div className="app-add-form">
        <h3>Add new employer</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="His name"
            name="name"
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="His Salary"
            name="salary"
            onChange={this.onValueChange}
          />
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={() => addItem(this.state.name, this.state.salary)}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
