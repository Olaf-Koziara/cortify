import React from 'react';
import "./LoginPage.scss";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className="login-page">
            <h2>Logowanie</h2>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;