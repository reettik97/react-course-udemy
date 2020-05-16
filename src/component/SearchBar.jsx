import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ term: searchTerm });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="field">
            <label htmlFor="">Video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.onInputChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
