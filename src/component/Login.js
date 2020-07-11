import React, { Component } from 'react';
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      email: "",
      userNameError: "",
      emailError: "",
      msg: "Login Successfull..!",
      msg: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({ msg: true })
      console.log(this.state)
      this.setState({ username: "", email: "", userNameError: "", emailError: "" })

    }
  }

  validate = () => {
    let userNameError = "";
    let emailError = "";

    if (this.state.username.length <= 3) {
      userNameError = "Enter valid Name";
    }

    if (this.state.username.length >= 20) {
      userNameError = "FullName can't be greater than 15 character..!";
    }

    if (!this.state.email.includes(".")) {
      emailError = "Invalid email";
    }
    if (emailError || userNameError) {
      this.setState({ emailError, userNameError })
      return false;
    }
    return true;
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
         
            <form onSubmit={(event) => this.handleSubmit(event)} className="form-container">
              <br />
              <div className="form-group">
                <h5>Login</h5>
                <label for="exampleInputEmail1">Full Name</label>
                <input type="text" class="form-control" id="username"
                  aria-describedby="emailHelp" placeholder="Enter Full Name"
                  name="username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })}
                  required ></input>
                <h6 style={{ color: "red" }}>{this.state.userNameError}</h6>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email"
                  name="email" value={this.state.email} onChange={event => this.setState({ email: event.target.value })}
                  aria-describedby="emailHelp" placeholder="Enter email" required ></input>
                <h6 style={{ color: "red" }}>{this.state.emailError}</h6>
              </div>

              <button type="submit" style={{ background: "darkslateblue" }} class="btn btn-secondary btn-lg btn-block">Submit To Continue</button>
            </form>
            <h4>{this.state.msg}</h4>
          </div>
        </div>
     
    )
  }
}
