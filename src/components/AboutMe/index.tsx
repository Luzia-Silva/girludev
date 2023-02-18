import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import {
    Avatar,
    Badge,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import { styles } from './styles';
import information from '../../constants';

type Props = {
    title: string;
    description: string;
    image: string;
};

export default function AboutMe({ title, description, image }: Props) {
    return (
        <>
            <Box sx={styles.box} rowGap={2}>
                <Typography sx={styles.h1}>{title}</Typography>
                <Typography sx={styles.h2}>{description}</Typography>
                {/* <Box sx={styles.image}>
                    <img src={image} alt={'Image'} />
                </Box> */}
            </Box>
        </>
    );
}
