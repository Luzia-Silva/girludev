import { createTheme } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: blue,
        secondary: blueGrey,
    },
});
export const Dark = {
    theme: theme,
    githubGraphicsTheme: 'radical',
};
