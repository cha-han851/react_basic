import React, { useState} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {  setToken, setUid, setId, setFirstName, setLastName, setPhone , setEmailAddress} from '../../features/account';

const SignInComponent = () => {
    // const account = useSelector((state) => state.account.value);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error_message, setErrorMessage] = useState('');
    const account = useSelector((state) => state.account);


    const emailValidator = (value) => {
        if (value === '') {
            return false;
        }
        var regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        if (regex.test(value) ) {
            return true;
        }
        return false;
    }

    const passwordValidator = (value) => {
        if (value === '') {
            return false;
        }
        var regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,16}$/;
        if (regex.test(value) ) {
            return true;
        }
        return false;

    }
    const validate = () => {
        var validation_message = ''
        var validation_flg = true;
        if(! emailValidator(email)  ) {
            validation_message += 'emailを正しく入力してください。' + '.';
            validation_flg = false;
        }
        if(! passwordValidator(password) ){
            validation_message += 'パスワードを正しく入力してください。'+ '.';
            validation_flg = false;
        }

        if(validation_flg === false) {
            setErrorMessage(validation_message);
            return false;
        }
        login();
    }

    const header = {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':  'http://localhost:3000'
    }
    const login = () => {
        axios.post('http://localhost:3001/api/v1/auth/sign_in', { 'email': email, 'password': password}, header)
        .then(function (response) {
            let loginData = response.data.data;
            dispatch(setId(loginData.id));
            dispatch(setUid(loginData.uid));
            dispatch(setFirstName(loginData.first_name));
            dispatch(setLastName(loginData.last_name));
            dispatch(setEmailAddress(loginData.email));
            dispatch(setPhone(loginData.phone));
            dispatch(setToken(response.headers['access-token']));
        })
        .catch(function (error) {
            console.log(error);
            alert('ログインに失敗しました。');
        })
    }

    const setValue =   (e) => {
        const target = e.target;
        switch (target.name) {
            case 'email':
                setEmail(target.value);
                break;
            case 'password':
                setPassword(target.value);
                break;
            default:
                break;
        }
    };


    return (
      <div className="sign-in">
        <h1>Sign In</h1>
            { error_message.length > 0 && <ul>{ error_message.split('.').map((value) => <li className="errorMsg">{ value }</li>)}</ul> }
            <p>Email<input type="text" name="email"　onChange={ setValue } /></p>
            <p>パスワード<input type="password" name="password" onChange={ setValue }/></p>
            <input type="submit" onClick={ validate } value="サインイン" />
      </div>
    );

}
export default SignInComponent;