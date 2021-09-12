import React, { useState } from 'react';
import SignUpConfirmationComponent  from './SignUpConfirmation.jsx';
import axios from 'axios';

const SignUpComponent = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [confirmation_flg, setConfirmationFlg] = useState(false);
    const [error_message, setErrorMessage] = useState('');
    const setValue =   (e) => {
        const target = e.target;
        switch (target.name) {
            case 'first_name':
                setFirstName(target.value);
                break;
            case 'last_name':
                setLastName(target.value);
                break;
            case 'phone':
                setPhone(target.value);
                break;
            case 'email':
                setEmail(target.value);
                break;
            case 'password':
                setPassword(target.value);
                break;
            case 'password_confirmation':
                setPasswordConfirmation(target.value);
                break;
            default:
                break;
        }
    };

    const confirm = () => {
        var validationFlg   = true;
        var validateMessage = '';

        if (! nameValidator(first_name)) {
            validationFlg = false;
            validateMessage += '姓は必須です。' + '.';
        }

        if (! nameValidator(last_name)) {
            validationFlg = false;
            validateMessage += '名は必須です。' + '.';
        }

        if (email.length < 0) {
            validateMessage += 'Emailは必須です。' + '.';
        } else if (! emailValidator(email)) {
            validationFlg = false;
            validateMessage += 'Emailを正しく入力してください。' + '.';
        }

        if (phone.length < 0) {
            validateMessage += '電話番号は必須です。' + '.';
        } else if (! phoneValidator(phone)) {
            validationFlg = false;
            validateMessage += '電話番号を正しく入力してください。' + '.';
        }

        if (password.length < 0) {
            validateMessage += 'パスワードは必須です' + '.';
        } else if (! passwordValidator(password)) {
            validationFlg = false;
            validateMessage += 'パスワードを正しく入力してください。' + '.';
        }

        if (password_confirmation.length < 0) {
            validateMessage += '確認用パスワードは必須です。' + '.';
        } else if (! passwordConfirmationValidator(password_confirmation)) {
            validationFlg = false;
            validateMessage += '確認用パスワード正しく入力してください。';
        }
        if (validationFlg === true) {
            setConfirmationFlg(true);
        }
        setErrorMessage(validateMessage);
    }

    const cancel = () => {
        setConfirmationFlg(false);
    }

    const nameValidator = (value) => {
        if (value.length > 0 ) {
            return true;
        }
        return false;
    }

    const emailValidator = (value) => {
        var regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        if (regex.test(value) ) {
            return true;
        }
        return false;
    }

    const phoneValidator = (value) => {
        var regex = /^0\d{9,10}$/;
        if (regex.test(value) ) {
            return true;
        }
        return false;
    }

    const passwordValidator = (value) => {
        var regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,16}$/;
        console.log(value);
        if (regex.test(value) ) {
            return true;
        }
        return false;
    }

    const passwordConfirmationValidator = (value) => {
        if (value === password) {
            var regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,16}$/;
            if (regex.test(value) ) {
                return true;
            }
        }
        return false;
    }


    const header = {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':  'http://localhost:3000'
    }

    const register = () => {
        axios.post('http://localhost:3001/api/v1/auth', { 'first_name': first_name, 'last_name': last_name, 'phone': phone, 'email': email, 'password': password, 'password_confirmation': password_confirmation }, header)
        .then(function (response) {
            alert('登録に成功しました。')
            window.location.href = 'http://localhost:3000/sign-up'; // 通常の遷移

        })
        .catch(function (error) {
            alert('登録に失敗しました。')
            setConfirmationFlg(false);
        })
    };

    return(
        <div className="sign-up">
        <h1>SignUp</h1>
        { error_message.length > 0 && <ul>{ error_message.split('.').map((value) => <li className="errorMsg">{ value }</li>)}</ul> }
            <p>姓<input id="last_name" type="text" name="last_name" onChange={ setValue } /></p>
            <p>名<input id="first_name" type="text" name="first_name"  onChange={ setValue } /></p>
            <p>電話番号<input id="phone"type="text" name="phone" onChange={ setValue } /></p>
            <p>Email<input id="email" type="text" name="email" onChange={ setValue } /></p>
            <p>パスワード<input id="password" type="password" name="password" onChange={ setValue } /></p>
            <p>確認用パスワード<input id="password_confirmation" type="password" name="password_confirmation" onChange={ setValue } /></p>
            <p>{! confirmation_flg && <button onClick={ confirm }>確認</button> }</p>
            <p>{confirmation_flg && <button onClick= { register }>登録</button> }{confirmation_flg && <button onClick={ cancel }>修正</button> }　</p>
            {
            confirmation_flg &&
            <SignUpConfirmationComponent
                first_name = {first_name}
                last_name  = {last_name}
                phone      = {phone}
                email      = {email}
                password   = {password}
                password_confirmation = {password_confirmation}
                />
            }

      </div>
    );

   }

   export default SignUpComponent;
