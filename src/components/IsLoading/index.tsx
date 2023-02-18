import { Box, CircularProgress } from '@mui/material';
import { styles } from './styles';

type Props = {
    isLoading: boolean;
};
export default function IsLoading({ isLoading }: Props) {
    if (isLoading)
        return (
            <Box sx={styles.box}>
                <CircularProgress />
            </Box>
        );
    return <></>;
}
