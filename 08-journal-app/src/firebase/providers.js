import { getToggleButtonGroupUtilityClass } from "@mui/material";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
      //  const credentials = GoogleAuthProvider.credentialFromResult(result);
      const { displayName,email, photoURL,uid } = result.user;
        
      return {
        ok:true,
        //user info
        displayName,email, photoURL,uid

      }
        
    } catch (error) {
        console.error(error);
        
        return {
            ok:false,
          errorMessage: error.message
        }
        
    }
}

export const loginWithEmailAndPassword = async({ email, password })=>{

  try {
      const result = await signInWithEmailAndPassword(FirebaseAuth,email,password)
      const { displayName, photoURL,uid } = result.user;
      
    return {
      ok:true,
      //user info
      displayName,email, photoURL,uid

    }
      
  } catch (error) {
      console.error(error);
      
      return {
          ok:false,
          errorMessage: error.message,
      }
      
  }
}

export const registerUserWithEmailPassword= async({email,password,displayName})=>{
  try {
    console.log({email,password,displayName})
    const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
    const { uid, photoURL } = resp.user;
    console.log(resp);
    await updateProfile(FirebaseAuth.currentUser,{
      displayName
    } );
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName

    }
  } catch (error) {
    return {ok:false, errorMessage: error.message}
  }
}

export const logoutFirebase = async()=>{
  return await FirebaseAuth.signOut();
}