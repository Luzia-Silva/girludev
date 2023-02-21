import GamesIcon from '@mui/icons-material/Games';
import { Box, Typography } from '@mui/material';
import { styles } from './styles';

type Props = {
    title: string;
};

export default function Title({ title }: Props) {
    return (
        <Box sx={styles.flex}>
            <GamesIcon sx={styles.icon} />
            <Typography sx={styles.h1}> {title}</Typography>
        </Box>
    );
}
