import React from 'react';
import './account.css';
import { Button } from 'react-bootstrap';
function Account() {
    return (
        <div className="account">
            <div className="account__container">
                <form>
                    <input type="email" placeholder="example@arrow.com"/>
                    <input type="password" placeholder="123example"/>
                    <Button style={ { backgroundColor: "green", marginTop: "10px"  }} className="account__button">Sign-in</Button><br/>
                     <Button style={{backgroundColor:"red"}} className="account__button"> Sign-up</Button>
                </form>
            </div>  
        </div>
    )
}

export default Account
