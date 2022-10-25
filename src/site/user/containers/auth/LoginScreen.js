import React, { createState } from 'react';
import './style.scss';
import '@styles/login/css/main.scss';
import '@styles/login/css/util.css';
import { connect } from 'react-redux';
import authAction from '@actions/auth';

function LoginScreen(props) {
    const refState = createState({

    })
    const onLogin = () => {
        props.onLogin(refState.state.username, refState.state.password);
        console.log(props,'props')
    }
    return (
        <div className="login-page">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <div className="login100-form validate-form">
                        <span className="login100-form-title p-b-49">
                            Login
					</span>

                        <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                            <span className="label-input100">Username</span>
                            <input className="input100" type="text" name="username" value={refState.state.username} placeholder="Type your username"
                                onChange={e => {
                                    refState.setState({
                                        username: e.target.value
                                    })
                                }}
                            />
                            <span className="focus-input100" data-symbol="&#xf206;"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <span className="label-input100">Password</span>
                            <input className="input100" type="password" name="pass" value={refState.state.password} placeholder="Type your password"
                                onChange={e => {
                                    refState.setState({
                                        password: e.target.value
                                    })
                                }}
                            />
                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                        </div>

                        <div className="text-right p-t-8 p-b-31">
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button onClick={onLogin} className="login100-form-btn">
                                    Login
							</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {
    onLogin: authAction.onLogin
})(LoginScreen)
