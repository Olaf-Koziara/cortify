import React, {useState} from 'react';
import "./LoginForm.scss";
import TextInput from "../../Inputs/TextInput/TextInput";

const LoginForm = () => {
    const [formValue, setFormValue] = useState({login: '', password: ''});
    return (
        <form className="login-form">
            <div className="row">
                <div className="col-12">
                    <TextInput placeholder="Email"/>
                </div>
                <div className="col-12">

                </div>
            </div>
        </form>


    );
};

export default LoginForm;