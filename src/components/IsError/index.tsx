import { Box, Container } from '@mui/material';
import { AxiosError } from 'axios';
import { styles } from './styles';

type Props = {
    isError: boolean;
    status: AxiosError;
};
export default function IsError({ isError, status }: Props) {
    if (isError)
        return (
            <Box sx={styles.box}>
                <img src={`https://http.cat/[${status.response?.status}]`} />
            </Box>
        );
    return <></>;
}
