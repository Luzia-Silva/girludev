import { Box, Button, Typography } from '@mui/material';
import { styles } from './styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type Props = {
    title: string;
    buttonTitle: string;
    buttonOnclick: () => void;
};
export default function HeaderTypography({
    title,
    buttonTitle,
    buttonOnclick,
}: Props) {
    return (
        <Box sx={styles.Box}>
            <Typography sx={styles.Typography} fontWeight={700}>
                {title}
            </Typography>
            <Button
                endIcon={<ArrowForwardIcon />}
                onClick={buttonOnclick}
                sx={styles.Button}
            >
                {buttonTitle}
            </Button>
        </Box>
    );
}
