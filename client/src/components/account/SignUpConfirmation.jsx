import React from 'react';

const SignUpConfirmationComponent = ( props ) => {
        const first_name = props.first_name;
        const last_name  = props.last_name;
        const phone = props.phone;
        const email = props.email;
        const password = props.password;
        const password_confirmation = props.password_confirmation;

    return(
        <div className="sign-up-confirmation">
            <h1>SignUpConfirmation</h1>
                <p>姓<input type="text" name="first_name" defaultValue={first_name} /></p>
                <p>名<input type="text" name="last_name"  defaultValue={last_name} /></p>
                <p>電話番号<input type="text" name="phone" defaultValue={phone} /></p>
                <p>Email<input type="text" name="email" defaultValue={email} /></p>
                <p>パスワード<input type="password" name="password" defaultValue={password} /></p>
                <p>確認用パスワード<input type="password" name="password_confirmation" defaultValue={password_confirmation} /></p>
        </div>
    );
}
export default SignUpConfirmationComponent;