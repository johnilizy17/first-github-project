import React,{useState} from 'react';
import './header.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userCash } from '../../features/historySlice';
function Header (){
    const dispatch = useDispatch();
    const [ cash, setCash ] = useState();
    const free = ()=>{
        setCash( prompt( 'enter the amount you want to use for the demo account' ) );
    }
    dispatch( userCash( {
        cash: cash,
    }))
    return (
        <div className="header">
            <div className="header__icon">
                <div className="header__iconSearch">
         <div className=" header__logo"></div>   <input placeholder="search" type="text"/>   
                </div>
            </div>
            <div className="header__menubar">
                <Link className="link">Free Stocks</Link>
                <Link className="link" to="/messages">Massages</Link>
                <Link className="link" to="/account">Account</Link>
                <Link className="link"  onClick={free}  to="/">cash</Link>
                <Link className="link" to="/portfolio">History</Link>
            </div>
        </div>
    )
}
export default Header;