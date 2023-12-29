import { Navigate, Route, Routes } from "react-router-dom";
import { JournalApp } from "../JournalApp";
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { CheckingAuth } from "../ui/";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {

  const {status} = useCheckAuth();
  if (status==='checking') {
    return <CheckingAuth/>
  }
  
  return (
    <Routes>
      {
      (status==='authenticated') 
      ? <Route path="/*" element={ <JournalRoutes/> } />
      : <Route path="/auth/*" element={ <AuthRoutes/> } />
      
      }      
      <Route path="/*" element={ <Navigate to='/auth/login' />} />
            {/* Login */}

            {/* Journal App */}
    </Routes>
  )
}
