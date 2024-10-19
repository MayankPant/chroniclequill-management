import { createTheme } from '@mui/material/styles';

// Light and Dark theme color definitions
const lightThemeColors = {
  primary: '#6aee42',  // Default light primary color for buttons
  secondary: '#317709',
  background: '#eee', // for background
  text: '#121a21',
};

const darkThemeColors = {
  primary: '#2c90e2',  // Default dark primary color for buttons
  secondary: '#253743',
  background: '#121a21', //for background
  text: '#fbffff',
};

// Creating the light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',  // This enables light mode
    primary: {
      main: lightThemeColors.primary,
    },
    secondary: {
      main: lightThemeColors.secondary,
    },
    background: {
      default: lightThemeColors.background,
    },
    text: {
      primary: lightThemeColors.text,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: lightThemeColors.text,  // Text color inside input fields
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: lightThemeColors.secondary,  // Outline color of text fields
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: lightThemeColors.primary,  // Hover state
          },
        },
      },
    },
    MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input': {
              color: lightThemeColors.text,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: lightThemeColors.secondary,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: lightThemeColors.primary,
            },
          },
        },
      },
  },
});

// Creating the dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',  // This enables dark mode
    primary: {
      main: darkThemeColors.primary,
    },
    secondary: {
      main: darkThemeColors.secondary,
    },
    background: {
      default: darkThemeColors.background,
    },
    text: {
      primary: darkThemeColors.text,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: darkThemeColors.text,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: darkThemeColors.secondary,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: darkThemeColors.primary,
          },
        },
      },
    },
    MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input': {
              color: darkThemeColors.text,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: darkThemeColors.secondary,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: darkThemeColors.primary,
            },
          },
        },
      },
  },
});
