import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {
  const context = useContext( UserContext );
  
  return (
    <div>LoginPage</div>
  )
}
