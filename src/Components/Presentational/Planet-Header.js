import React from 'react';
import { Link } from 'react-router-dom';

export default function PlanetHeader({username}){
    return (
        <header className="col-md-12 col-xs-12">
            <h1 className="col-md-5 title pull-left">Galactic Empire: Planets</h1>
            <div className="text-white col-md-4 pull-left" style={{padding: "15px",fontSize:"20px"}}>Welcome {username.toUpperCase()}</div>
            <div className="col-md-3 pull-left mobile-signout">
                <Link to={{
                    pathname: '/login',
                    state: {
                        logout: true
                    }
                }}><button type="button" className="btn btn-danger transparent pull-right">Sign Out</button>
            </Link>
            </div>
        </header>
    )
}