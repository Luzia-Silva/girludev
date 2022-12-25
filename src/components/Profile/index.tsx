import { Avatar, Badge, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styles } from './styles';

type Props = {
    image: string;
};

export default function Profile({ image }: Props) {
    return (
        <Box sx={styles.Box}>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<FavoriteIcon sx={styles.Icon} />}
            >
                <Avatar alt="image default" src={image} sx={styles.Avatar} />
            </Badge>
            <h1>{}</h1>
        </Box>
    );
}
