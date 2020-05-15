import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchterm: "" };
  
  onFormSubmit = (event)=>{
    event.preventDefault();
     this.props.onSubmit(this.state.searchterm);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit}  className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.searchterm}
              onChange={(e) => this.setState({ searchterm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
