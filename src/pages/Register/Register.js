import React from 'react';
import './register.css';

const Register = () => {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Social<br/>Anxiety</h3>
                    <span className="registerDesc">Avoid people near and far, with Social Anxiety!</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput"/>
                        <input placeholder="Email" className="registerInput"/>
                        <input placeholder="Password" className="registerInput"/>
                        <input placeholder="Password Again" className="registerInput"/>
                        <button className="registerButton">Sign Up</button>
                        <button className="loginRegisterButton">Log Into Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
