import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/Action/Actions';
import "./LogIn.css"
function LogIn() {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    let history = useHistory();

    function FormSubmit(e){
        e.preventDefault();
        if(uname == "" || password == ""  ){
            setError("Enter all cridential");
        }else{
            const newUser = {
                username : uname,
                password : password
            }
            dispatch(loginUser(newUser));
            console.log(newUser)
            history.push("/home");
        }
       
        
        
    }
    return (
        <div className="container">
            <div className="LogIn">
                <h2>Login</h2> 
                <form>
                    <div className="Container-field">
                        
                        <input type="text" placeholder="Enter Username" value={uname} required onChange = {(e) => setUname(e.target.value)}></input>
                    </div>
                    <div className="Container-field">
                        <input type="password" placeholder="Enter Password" value={password} required onChange = {(e) => setPassword(e.target.value)}></input>
                    </div>
                    <p className="error">{error}</p>
                    <div className="Container-field">
                        <button  onClick={FormSubmit}>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LogIn
