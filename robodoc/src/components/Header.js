import React,{useEffect} from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPT } from '../utils/gptSlice';
import { LOGO } from '../utils/constants';

const Header = () =>{
  const navigate = useNavigate();
  const user = useSelector(store =>  store.user);
  const gpt = useSelector(store => store.gpt);

  const dispatch = useDispatch();

  const handleLogoClick = () => {
    if(gpt.showGPT === true)
      {
    dispatch(toggleGPT())  ;
    navigate("/");
      }
      else {
        navigate("/");
      }
  };
  
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });  
  }
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user)
        {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
        }
        else{
           // User is signed out
            // ...
            dispatch(removeUser())
            navigate("/");
        }
    })
  },[]);

  return (
    <div className="px-8 w-screen py-2 bg-gradient-to-b from-blue-400 z-10 fixed flex flex-col md:flex-row md:justify-between">
    <img
      className="w-44 mx-auto md:mx-0 opacity-80 border rounded-3xl"
      onClick={handleLogoClick}
      src={LOGO}
      alt="logo"
    />
    {user !== null ? (
      <div className="flex justify-evenly p-2">
        <button
          onClick={handleSignOut}
          className="bg-blue-700 hover:bg-blue-500 border border-white rounded-full text-white mx-8 px-3 md:m-2"
        >
          {"Sign Out " + user.displayName}
        </button>
      </div>
    ) : (
      <div></div>
    )}
  </div>
  )


}

export default Header