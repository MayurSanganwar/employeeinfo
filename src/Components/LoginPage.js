import React from 'react';
import '../CSS/login.css'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {changeUserName,changePassword} from '../Redux/Action/loginAction'


// import { useToasts } from "react-toast-notifications";
import loginData from '../JSON/login.json';
// import employeeData from '../JSON/employee.JSON'

class LoginPage extends React.Component {

       validateUserName = (userName) => {
        
        var atSymbol = userName.indexOf("@");
        if (atSymbol < 1) return false;

        var dot = userName.indexOf(".");
        if (dot <= atSymbol + 2) return false;

        if (dot === userName.length - 1) return false;

        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.props
        if (username === "" || password === "") {
            alert("Please enter all fileds")
        } else if (this.validateUserName(this.props.username) === false) {
            alert("Enter valid email")
        } else {
            loginData.map((user) => {
                if (username !== user.username) {
                    alert("USERNAME is incorrect");
                } else if (password !== user.password) {
                    alert("PASSWORD is incorrect");
                } else {
                    this.nextPath('/employee')
                }
            })
        }
    }

    nextPath(path) {
        this.props.history.push(path);
      }
    

    render() {
        return (
            <div className="app_login">
                <div className="container-shadow"></div>
                <div className="container">
                    <div className="wrap">
                        <div className="headings">
                            <h2>Log In</h2>
                        </div>
                        <div id="sign-in-form">
                            <form>
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    value={this.props.usernamefromredux}
                                    onChange={(event) => {
                                       this.props.changeUserName(event.target.value)
                                    }}
                                />
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={this.props.password}
                                    onChange={(event) => {
                                        this.props.changePassword(event.target.value)
                                    }}
                                />
                                <input
                                    type="submit"
                                    className="button"
                                    name="submit"
                                    value="login"
                                    onClick={this.handleSubmit}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    username:state.loginInfo.username,
    password:state.loginInfo.password
})

const mapDispatchToProps = (dispatch) =>({
    changeUserName:(username)=>{dispatch(changeUserName(username))},
    changePassword:(password)=>{dispatch(changePassword(password))}
})


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LoginPage))   ;
