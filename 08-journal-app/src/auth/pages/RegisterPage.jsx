import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { ArrowBack } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth";


const formData = {
  displayName: "",
  email: "",
  password: ""
}
const formValidations = {
  email: [(value)=>value.includes('@'), 'El email debe contener un @.'],
  password: [(value)=>value.length >= 6, 'El password debe de tener mas de 6 letras.'],
  displayName: [(value)=>value.length >= 1, 'El Nombre es obligatorio.'],
}

export const RegisterPage = () => {  

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state=>state.auth);
  const isCheckingAuthentication = useMemo(()=> status==='checking' , [status])

const {formState, displayName, email, password, onInputChange ,
       isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

const onSubmit = (event) => {
  event.preventDefault();
  setFormSubmitted(true);
  if (!isFormValid) return;
  dispatch(startCreatingUserWithEmailPassword(formState));
}

  return (
    <AuthLayout title='Crear Cuenta'>
          <form  onSubmit={onSubmit} 
        className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>
              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Nombre Completo" 
                  type="text"
                  placeholder="Jhon doe"
                  fullWidth 
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                  error={!!displayNameValid && formSubmitted}
                  helperText={displayNameValid}
                  disabled={isCheckingAuthentication}
                  />
              </Grid>
              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Correo" 
                  type="email"
                  placeholder="example@example.com"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  error={!!emailValid && formSubmitted}
                  helperText={emailValid}
                  disabled={isCheckingAuthentication}
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
                  error={!!passwordValid && formSubmitted}
                  helperText={passwordValid}
                  disabled={isCheckingAuthentication}
                  />
              </Grid>            

              <Grid container spacing={ 2 } sx={{ mb:2, mt: 1 }}>
                <Grid item xs={12}
                display={!!errorMessage ? '':'none'}>               
                  <Alert severity="error">
                      { errorMessage }
                  </Alert>
                </Grid>  
                <Grid item xs={12}>               
                  <Button type="submit" variant="contained" fullWidth 
                  disabled={isCheckingAuthentication}>
                      Submit
                  </Button>
                </Grid>            
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Typography>¿Ya tienes cuenta?</Typography>
                <Link component={ RouterLink } color='inherit' to='/auth/login'  sx={{ ml: 1 }}>                            
                 ingresar
                </Link>
              </Grid>
            </Grid>
          </form>
    </AuthLayout>
  )
}
