import {
    Avatar,
    Badge,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styles } from './styles';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

type Props = {
    image: string;
    login: string;
    bio?: string;
    githubGraphicsTheme?: string;
};

export default function Profile({
    image,
    login,
    bio,
    githubGraphicsTheme,
}: Props) {
    return (
        <>
            <Box sx={styles.Box} rowGap={2}>
                <Box sx={styles.BoxUser}>
                    <Badge
                        overlap="rectangular"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={
                            <img
                                src={`https://img.shields.io/github/followers/${login}?style=social`}
                            />
                        }
                    >
                        <Avatar
                            alt="image default"
                            src={image}
                            sx={styles.Avatar}
                        />
                    </Badge>
                    <List sx={styles.List}>
                        <ListItem>
                            <ListItemIcon>
                                <SettingsEthernetIcon />
                            </ListItemIcon>
                            <ListItemText
                                primaryTypographyProps={
                                    styles.primaryTypographyProps
                                }
                                secondaryTypographyProps={
                                    styles.secondaryTypographyProps
                                }
                                primary={login}
                                secondary={bio}
                            />
                        </ListItem>
                    </List>
                </Box>
                <Box letterSpacing={10}>
                    <img
                        height="150em"
                        src={`https://github-readme-stats.vercel.app/api?username=${login}&show_icons=true&theme=${
                            githubGraphicsTheme
                                ? githubGraphicsTheme
                                : 'radical'
                        }&include_all_commits=true&count_private=true`}
                    />
                    <img
                        height="150em"
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${login}&layout=compact&langs_count=7&theme=${
                            githubGraphicsTheme
                                ? githubGraphicsTheme
                                : 'radical'
                        }`}
                    />
                    <div>
                        <img src="https://img.shields.io/badge/Ruby-323330?style=for-the-badge&logo=Ruby&logoColor=white" />
                        <img src="https://img.shields.io/badge/Go-1572B6?style=for-the-badge&logo=Go&logoColor=white" />
                        <img src="https://img.shields.io/badge/CSS3-323330?style=for-the-badge&logo=css3&logoColor=white" />
                        <img src="https://img.shields.io/badge/Docker-1572B6?style=for-the-badge&logo=Docker&logoColor=white" />
                    </div>
                </Box>
            </Box>
        </>
    );
}
