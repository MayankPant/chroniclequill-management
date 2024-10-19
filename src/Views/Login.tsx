
import React from "react";
import { FormControl, TextField, } from "@mui/material";
import "../styles/Login.css";
import { InputLabel, OutlinedInput } from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {useTheme} from "@mui/material";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
 

   
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

    const theme = useTheme();
    const styles =  {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    }

  return (
    <div style={styles} className="login-wrapper">
      <div className="login-title">Log into Chronicle Quill</div>
      <div className="login-form">
      <TextField
          required
          id="email-address"
          label="Email Address"
          variant="outlined"
          sx={{ width: '55ch'}}
        />
        <FormControl sx={{width: "55ch" }} required variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
