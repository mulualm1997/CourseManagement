import React from "react";
import reactDOM from "react-dom";
import axios from 'axios'


export default class LoginRegister extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,


    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }


  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {

    return (
      <div className="root-container">

        <div className="box-controller">
          <div
            className={"controller " + (this.state.isLoginOpen
              ? "selected-controller"
              : "")}
            onClick={this
              .showLoginBox
              .bind(this)}>
            Login
          </div>
          <div
            className={"controller " + (this.state.isRegisterOpen
              ? "selected-controller"
              : "")}
            onClick={this
              .showRegisterBox
              .bind(this)}>
            Register
          </div>
        </div>


        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>


      </div>
    );

  }

}

class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) { }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

        <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="Email"
              className="login-input"
              placeholder="Email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password" />
          </div>

          

          <button
            type="button"
            className="login-btn"
            onClick={this
              .submitLogin
              .bind(this)}>Login</button>

        </div>
      </div>
    );
  }

}



// function pop(props) {
//   return
// }
// ---------------------------------------------------------------------------------------
class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      role_id: "",
      subjects: [],
      education: "",
      Linkdin: "",
      bio: "",
      errors: [],

    };
  }

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({
      errors: [
        ...prevState.errors, {
          elm,
          msg
        }
      ]
    }));
  }

  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");

    this.setState({ pwdState: "weak" });
    if (e.target.value.length > 8) {
      this.setState({ pwdState: "medium" });
    } else if (e.target.value.length > 12) {
      this.setState({ pwdState: "strong" });
    }

  }

  openPopup(e) {
    console.log("Hello world!");
    // לשלוח לשרת את המידע של המשתמש   שנרשם
    axios
      .post('api/auth/signup', {
        first_name: this.state.firstName,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        role_id: this.state.role_id,
        subjects: this.state.subjects,
        education: this.state.education,
        linkdin: this.state.linkdin,
        bio: this.state.bio
      })
      .then(res => {
        console.log('Registerd!!!');


      }).catch(console.log('some ERROR!!!!!!!'))
  }



  submitRegister(e) {

    console.log(this.state);

    if (this.state.username == "") {
      this.showValidationErr("first_name", "first_name Cannot be empty!");
    }
    if (this.state.email == "") {
      this.showValidationErr("email", "Email Cannot be empty!");
    }
    if (this.state.password == "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    }

  }

  render() {

    let usernameErr = null,
      passwordErr = null,
      emailErr = null;

    for (let err of this.state.errors) {
      if (err.elm == "first_name") {
        usernameErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
      if (err.elm == "email") {
        emailErr = err.msg;
      }
    }

    let pwdWeak = false,
      pwdMedium = false,
      pwdStrong = false;

    if (this.state.pwdState == "weak") {
      pwdWeak = true;
    } else if (this.state.pwdState == "medium") {
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState == "strong") {
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }


    const checkboxClicked = () => {
      this.setState({ isChecked: !this.state.isChecked });
    }


    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              name="First name"
              className="login-input"
              placeholder="First name"
              onChange={(e) => { this.setState({ firstName: e.target.value }) }} />
            <small className="danger-error">{usernameErr
              ? usernameErr
              : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name="Last name"
              className="login-input"
              placeholder="Last name"
              onChange={(e) => { this.setState({ lastName: e.target.value }) }} />
            <small className="danger-error">{usernameErr
              ? usernameErr
              : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="Email"
              className="login-input"
              placeholder="Email"
              onChange={(e) => { this.setState({ Email: e.target.value }) }} />
            <small className="danger-error">{emailErr
              ? emailErr
              : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="Password"
              name="Password"
              className="login-input"
              placeholder="Password"
              onChange={(e) => { this.setState({ Password: e.target.value }) }} />
            <small className="danger-error">{passwordErr
              ? passwordErr
              : ""}</small>

            {this.state.password && <div className="password-state">
              <div
                className={"pwd pwd-weak " + (pwdWeak
                  ? "show"
                  : "")}></div>
              <div
                className={"pwd pwd-medium " + (pwdMedium
                  ? "show"
                  : "")}></div>
              <div
                className={"pwd pwd-strong " + (pwdStrong
                  ? "show"
                  : "")}></div>
            </div>
            }

            {this.state.isChecked && <>

              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="Phone"
                  className="login-input"
                  placeholder="Phone"
                  onChange={(e) => { this.setState({ phone: e.target.value }) }} />
                <small className="danger-error">{usernameErr
                  ? usernameErr
                  : ""}</small>
              </div>


              <div className="input-group">
                <label htmlFor="Education">Education</label>
                <input
                  type="text"
                  name="Education"
                  className="login-input"
                  placeholder="Education"
                  onChange={(e) => { this.setState({ education: e.target.value }) }} />
                <small className="danger-error">{usernameErr
                  ? usernameErr
                  : ""}</small>
              </div>

              <div className="input-group">
                <label htmlFor="Linkdin">Linkdin</label>
                <input
                  type="text"
                  name="Linkdin"
                  className="login-input"
                  placeholder="Linkdin"
                  onChange={(e) => { this.setState({ Linkdin: e.target.value }) }} />
                <small className="danger-error">{usernameErr
                  ? usernameErr
                  : ""}</small>
              </div>

              <div className="input-group">
                <label htmlFor="Bio">Bio</label>
                <input
                  type="text"
                  name="Bio"
                  className="login-input"
                  placeholder="Bio"
                  onChange={(e) => { this.setState({ bio: e.target.value }) }} />
                <small className="danger-error">{usernameErr
                  ? usernameErr
                  : ""}</small>
              </div>

              <br/>
              
              <label for="Subjects">Subjects :</label><br/>
              <select class="custom-select" multiple>
                <option selected>health</option>
                <option value="1">Life Style</option>
                <option value="2">Make Up</option>
                <option value="3">Sport</option>
                <option value="1">Food</option>
                <option value="2">Science</option>
                <option value="3">Music</option>
              </select>

            </>
            }
          </div>

          <br />
          <div>
            <input type="checkbox" id="registerAsLecturer " onClick={() => checkboxClicked()} />
            <label for="registerAsLecturer">Register as a Instructor</label>
          </div>

          <button
            type="button"
            className="login-btn"
            onHover={this
              .openPopup
              .bind(this)}
            onClick={this
              .openPopup
              .bind(this)}>Register</button>
        </div>
      </div>

    );
  }
}
