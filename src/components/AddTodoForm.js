import React from "react";

export default function AddTodoForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="todo-name">Name:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="todo-name"
          placeholder="Enter the name"
          className="textfield"
        />
      </div>
      <div>
        <label htmlFor="todo-description">Description:</label>
        <input
          type="text"
          value={props.description}
          onChange={props.onDescriptionChange}
          id="product-description"
          placeholder="Enter the description"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation-message">{props.validation}</div>
        <input type="submit" className="btn btn-primary" value="Add Todo" />
      </div>
    </form>
  );
}
