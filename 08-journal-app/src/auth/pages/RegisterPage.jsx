import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { ArrowBack } from "@mui/icons-material";

export const RegisterPage = () => {  
  return (
    <AuthLayout title='Crear Cuenta'>
          <form action="">
            <Grid container>
              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Nombre Completo" 
                  type="text"
                  placeholder="Jhon doe"
                  fullWidth />
              </Grid>
              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Correo" 
                  type="email"
                  placeholder="example@example.com"
                  fullWidth />
              </Grid>

              <Grid item xs={12} sx={{ mt:2 }}>
                <TextField 
                  label="Contraseña" 
                  type="password"
                  placeholder="Contraseña"
                  fullWidth />
              </Grid>            

              <Grid container spacing={ 2 } sx={{ mb:2, mt: 1 }}>
                <Grid item xs={12}>               
                  <Button variant="contained" fullWidth>
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
