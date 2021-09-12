import React, { useState} from 'react';

const SignUpConfirmationComponent = ( props ) => {
    return(
        <div className="sign-up-confirmation">
            <h1>SignUpConfirmation</h1>
                <p>姓<input type="text" name="first_name" value={props.first_name} /></p>
                <p>名<input type="text" name="last_name"  value={props.last_name} /></p>
                <p>電話番号<input type="text" name="phone" value={props.phone} /></p>
                <p>Email<input type="text" name="email" value={props.email} /></p>
                <p>パスワード<input type="password" name="password" value={props.password} /></p>
                <p>確認用パスワード<input type="password" name="password_confirmation" value={props.password_confirmation} /></p>
        </div>
    );
}
export default SignUpConfirmationComponent;