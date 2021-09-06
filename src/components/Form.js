import React, { Component } from 'react';
import shortid from 'shortid';


class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
  }

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = event => {
    console.log(event.currentTarget.checked);

    this.setState({license: event.currentTarget.checked})
  }

  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <br/>
        <label htmlFor={this.tagInputId}>
          Nickname <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>
        
        <p>Your level:</p>
        <label>
          <input 
            type="radio"
            name="experience" 
            value="junior" 
            onChange={this.handleChange} 
            checked={this.state.experience === 'junior'}
          /> Junior
        </label>
        <label>
          <input 
            type="radio"
            name="experience" 
            value="middle" 
            onChange={this.handleChange} 
            checked={this.state.experience === 'middle'}
          /> Middle
        </label>
        <label>
          <input 
            type="radio"
            name="experience" 
            value="senior" 
            onChange={this.handleChange} 
            checked={this.state.experience === 'senior'}
          /> Senior
        </label>
        <br/>

        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenceChange}
          /> Agree with our rules
        </label>
        <br/>

        <button type="submit" disabled={!this.state.license}>Send </button>
      </form>
    )
  };
};

export default Form;