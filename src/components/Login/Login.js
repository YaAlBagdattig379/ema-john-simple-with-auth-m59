import './Login.css'
import React from 'react';
// import React, { useState } from 'react';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
// import {useLocation} from 'react-router-dom'; 
// import auth from '../../firebase.init';
import img from '../../images/google.png'
// import './Login.css'
const Login = () => {
//    const [email,setEmail] = useState('');
//    const [password,setPassword] = useState('');
//    const [
//       signInWithEmailAndPassword,
//       user,
//       loading,
//       error,
//     ] = useSignInWithEmailAndPassword(auth);
//    const navigate = useNavigate();
//    const location = useLocation();
//    const from = location.state?.from?.pathname || '/';
//    const handleEmailBlur = (event) =>{
//        setEmail(event.target.value);
//    }
//    const handlePasswordBlur = (event) =>{
//        setPassword(event.target.value);
//    }
//    const handleUserSignIn = (event) =>{
//       // event.eventDefault();
//       event.preventDefault(); 
//       signInWithEmailAndPassword(email,password);
//    } 
//    if(user){
//       navigate(from, {replace : true});
//    }
return (
   <div className='form-container'>
         <div>
               <h2 className='form-title'>Login</h2>  
               <div>
               
               </div>
               <form >
               {/* <form onSubmit={handleUserSignIn}> */}
                  <div className='input-group'>
                     <label htmlFor="email">Email</label>
                     <input  type="email" required name="email" id="" />
                     {/* <input onBlur={handleEmailBlur} type="email" required name="email" id="" /> */}
                 </div>
                  <div className='input-group'>
                     <label htmlFor="password">Password</label>
                     <input  type="password" required name="password" id="" />
                     {/* <input onBlur={handlePasswordBlur} type="password" required name="password" id="" /> */}
                  </div>
                  <p style={{color:'red',marginLeft:'10px'}}></p>
                  {/* <p style={{color:'red',marginLeft:'10px'}}>{error?.message}</p> */}
                  {
                  //  loading &&  <p>Loading...</p>
                  }
                  <input className='form-submit' type="submit" value="Login" />
               </form>
               <p style={{textAlign:'center'}}>
                 New to Ema-john? <Link className='form-link' to={'/signup'}>Create New Account</Link>  
                 
               </p>
            
               <div className='or-container'>
                   <div style={{border:'1px solid rgba(149, 160, 167, 1)',width:'145px',height:'0px'}}></div>
                   <p style={{fontSize:'17px',color:'rgba(149, 160, 167, 1)'}}>or</p>
                   <div style={{border:'1px solid rgba(149, 160, 167, 1)',width:'145px',height:'0px'}}></div>
               </div>
                    
               <div className='logInGoogle-container'>
                   <a className='login-withGoogle' style={{display:'flex',alignItems:'center'}} href="">
                      <div>
                         <img className='googleImg' style={{width:'26px', marginTop:'2px'}} src={img} alt="" />
                      </div>
                      <div>
                         <p style={{marginLeft:'10px',marginTop:'13px'}}> Continue with google</p>
                      </div>
                     
                   </a>
               </div>
             </div>
       </div>
);
}

export default Login;