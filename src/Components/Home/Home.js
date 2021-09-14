import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutUser } from '../../Redux/Action/Actions';
import './Home.css'
function Home(props) {
     const user = useSelector((state) => state.user.user[0]);
     const dispatch = useDispatch();
    let history = useHistory();
     function FormSubmit(e){
         e.preventDefault();
         dispatch(logoutUser());
         history.push("/")
     }
     console.log(user);
    return (
        <div className="container">
            <div className="LogOut">
                <div className="Container-field">
                        <h2> Hi, <span className="different">{user.username}</span>.</h2>
                        <h3>Your password is <span className="different">{user.password}</span></h3>
                    
                       <button onClick={FormSubmit}>Log Out</button>
                    </div>
            </div>
        </div>
    )
}

export default Home
