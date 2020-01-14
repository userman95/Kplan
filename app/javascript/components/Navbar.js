import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand kplan-logo" to={'/home'}>KPLAN</Link>
                <div className="">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/home'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/content'}>Content</Link>
                        </li>
                    </ul>
                </div>           
            </nav>            
        );
    }
}