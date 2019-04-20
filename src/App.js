import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      email: "",
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      email: event.target.value
    });
  }

  componentDidMount() {
    fetch("/hello")
      .then(response => response.text())
      .then(count => {
        this.state.count = count;
        if (isNaN(parseInt(count))) {
          this.state.count = 0;
        }
        this.setState(state => state);
      });
  }

  handleSubmit(event) {
    fetch(`/join_us/${this.state.email}`)
      .then(response => response.text())
      .then(count => {
        this.state.count = count;
        if (isNaN(parseInt(count))) {
          this.state.count = 0;
        }
        this.state.value = "";
        this.setState(state => state);
      });
  }

  render() {
    return (
      <div className="flex_container">
        <div className="container">
          <h1>JOIN US</h1>
          <p className="lead">
            Enter your email to join <strong>{this.state.count}</strong> others
            on our waitlist. We are 100% not a cult.{" "}
          </p>
          <input
            type="text"
            className="form"
            name="email"
            placeholder="Enter Your Email"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Join Now</button>
        </div>
      </div>
    );
  }
}

export default App;
