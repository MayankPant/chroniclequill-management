import React, { useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import "../styles/Login.css";
import { InputLabel, OutlinedInput } from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@mui/material";
import { Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save, Widgets } from "@mui/icons-material";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, isLoading] = useState<boolean>(false);

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
  const styles = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  return (
    <div style={styles} className="login-wrapper">
      <div className="login-title">Log into Chronicle Quill</div>
      <div className="login-form">
        <TextField
          required
          id="email-address"
          label="Email Address"
          variant="outlined"
          sx={{ width: "55ch" }}
        />
        <FormControl sx={{ width: "55ch" }} required variant="outlined">
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
        <Link color={styles.color} href="#">
          Forgot your password?
        </Link>

        <LoadingButton
          loading={loading}
          loadingPosition="start"
          children={"Login"}
          variant="contained"
          sx={{ width: "100%" }}
        />

        <Link color={styles.color} href="#">
          Don't have an account?
        </Link>

        <LoadingButton
          loading={loading}
          loadingPosition="start"
          children={"SIGN UP"}
          variant="contained"
          sx={{ width: "100%", backgroundColor: theme.palette.secondary.main }}
        />
        <span style={{color: theme.palette.text.primary}}>By signing in, you agree to our Terms and Conditions and Privacy Policy</span>
      </div>
    </div>
  );
};

export default Login;
