import React from 'react';
import { FormGroup, FormControl } from "react-bootstrap";

export function TextInput({username,setUsername}) {
    return   (
        <FormGroup controlId="username" >
            <label className="text-white">Username (case-insensitive)</label>
            <FormControl
                autoFocus
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </FormGroup>
    ) 
}

export function PasswordInput({password,setPassword}) {
 return (
    <FormGroup controlId="password" >
        <label  className="text-white">Password</label>
        <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
        />
    </FormGroup>
 )
}

export function SearchInput({handleSearch}){
    return(
        <input type="search" className="searchBar col-md-3 pull-left" onChange={event=> handleSearch(event.target)} placeholder="Search Planets"/>
    )
}