import { Box, Typography } from '@mui/material';
import Title from '../Title';
import { styles } from './styles';

type Props = {
    title: string;
    description: string;
};

export default function AboutMe({ title, description }: Props) {
    return (
        <>
            <Box sx={styles.box} rowGap={2}>
                <Title title={title} />
                <Typography sx={styles.h2}>{description}</Typography>
            </Box>
        </>
    );
}
