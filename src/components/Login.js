import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = (e) => {
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message)
        return;

        if(!loggedIn){
           // Sign Up Logic
           createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
           .then((userCredential) => {
             // Signed up 
             const user = userCredential.user;
             updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            })
              .then(() => {
                const { uid, email ,displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                  })
                )
                navigate("/browse");
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
             // ...
           })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorMessage);
             // ..
           });
           navigate("/");
        }
        else {
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
        }
        
    }


    const toggleForm = () => {
        console.log("toggle");
        
        setLoggedIn(!loggedIn);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
        alt='logo' />
        </div>
   
    <form className=' w-3/12 text-white absolute p-12 my-36 mx-auto right-0 left-0 bg-black rounded-lg bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
    <h1 className='font-bold text-3xl py-4'>{loggedIn ? "Sign In":"Sign Up"}</h1>
    {!loggedIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input type='text' ref={email} placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700 ' />
        <input type='password' ref={password} placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{loggedIn ? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleForm}>{loggedIn  ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}</p>
    </form>
    </div>
  )
}

export default Login