import { createTheme } from '@mui/material';
import isTheme from '../constants';
export const theme = createTheme(isTheme.theme.system, {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
