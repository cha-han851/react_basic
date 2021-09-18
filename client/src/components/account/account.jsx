import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const AccountComponent = () => {
    const account = useSelector((state) => state.account);
    return (
      <div className="account">
      <h1>Account</h1>
        <p>姓: { account.lastName }</p>
        <p>名: { account.firstName }</p>
        <p>Email: { account.email }</p>
        <p>電話番号: { account.phone }</p>
      </div>
    );
}
export default AccountComponent;