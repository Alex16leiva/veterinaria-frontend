import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { login } from "../Login/loginSlicer";
import { TextField, Button, Container, Typography, Box, Dialog, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, } from '@mui/material';
import { toast } from "react-toastify";
import { ApiCalls } from "../../Services/ApiCalls";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { userName, password, onInputChange } = useForm({ userName: '', password: '' });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {

    if (!userName || !password) return toast.warning('Please enter a valid username');
    const lastPath = localStorage.getItem('lastPath') || '/';

    ApiCalls.GetTokenAuthentication('user/login', { userName, password }).then(
      response => {

        if (!response.usuarioAutenticado) {
          return;
        }
        sessionStorage.access_token = response.token;
        const requestUserInfo = {
          usuarioId: response.usuarioId,
        }
        sessionStorage.userName = userName;
        sessionStorage.requestUserInfo = JSON.stringify(requestUserInfo);
        dispatch(login(userName));
        navigate(lastPath, { replace: true });
      }
    );
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, textAlign: 'center' }}>
        <Typography variant="h4">Login</Typography>
        <TextField
          margin="normal"
          fullWidth
          label="User"
          value={userName}
          name="userName"
          onChange={onInputChange}
        />

        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="password"
            value={password}
            name="password"
            onChange={onInputChange}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 3 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};
