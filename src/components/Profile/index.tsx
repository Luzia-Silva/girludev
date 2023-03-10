import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import {
    Avatar,
    Badge,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { styles } from './styles';

type Props = {
    image: string;
    login: string;
    bio?: string;
    githubGraphicsTheme?: string;
    badges?: any[];
};

export default function Profile({
    image,

    login,
    bio,
    githubGraphicsTheme,
    badges,
}: Props) {
    return (
        <>
            <Box sx={styles.box} rowGap={2}>
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
                        {badges?.map((badge, index) => (
                            <img
                                key={index}
                                src={`https://img.shields.io/badge/${badge.name}-${badge.color}?style=for-the-badge&logo=${badge.name}&logoColor=white`}
                            />
                        ))}
                    </div>
                </Box>
            </Box>
        </>
    );
}
