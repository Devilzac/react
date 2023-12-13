import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { RegisterPage } from "./RegisterPage"
import { AuthLayout } from "../layout/AuthLayout"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"
import { useForm } from "../../hooks/useForm"
import { useMemo } from "react"


export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector( state => state.auth );

  const { email, password, onInputChange, formState } = useForm({
    email: 'shane199274@gmail.com',
    password: '12345'
  });
  const isAuthenticating = useMemo( ()=> status === 'checking', [status] )
  console.log("isAuthenticating", isAuthenticating);
  const onSubmit = (event)=>{
    event.preventDefault();
    console.log({ email, password});
    dispatch(checkingAuthentication());
  }
  const onGoogleSignIn = ()=>{
      console.log('onGoogleSignIn') 
      dispatch(startGoogleSignIn());
  }


  return (
      <AuthLayout title='Login'>
          <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Correo" 
                  type="email"
                  placeholder="example@example.com"
                  fullWidth 
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  />
              </Grid>

              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Contraseña" 
                  type="password"
                  placeholder="Contraseña"
                  fullWidth 
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  />
              </Grid>            

              <Grid container spacing={ 2 } sx={{ mb:2, mt: 1 }}>
                <Grid item xs={12} md={ 6 }>               
                  <Button variant="contained" type="submit" fullWidth disabled={ isAuthenticating } >
                      Login
                  </Button>
                </Grid>            

                <Grid item xs={12} md={ 6 }>
                  <Button onClick={onGoogleSignIn} variant="contained" fullWidth disabled={ isAuthenticating }>                    
                    <Google />
                    <Typography sx={{ml:1}}> Google </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
      </AuthLayout>
  )
}
