import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
    Avatar,
    Box,
    Chip,
    Container,
    Divider,
    Typography,
} from '@mui/material';
import { styles } from './styles';
import information from '../../constants';
import { IPosts } from '../../interface';

type Props = {
    post: IPosts;
};

export default function BoxPost({ post }: Props) {
    return (
        <Container sx={styles.container}>
            <Box sx={styles.flex}>
                <Chip
                    label={post?.tag}
                    size={'medium'}
                    sx={styles.marginRight}
                />
                <Typography sx={styles.flex}>
                    <AccessTimeIcon />
                    {post?.date}
                </Typography>
            </Box>
            <Typography sx={styles.h2}>{post?.title}</Typography>
            <Box sx={styles.flex}>
                <Avatar
                    sx={styles.marginRight}
                    src="https://media.licdn.com/dms/image/D4D03AQGUoadnoyiF-g/profile-displayphoto-shrink_800_800/0/1676639077936?e=1681948800&v=beta&t=yQhcdS6bVTta0cYpFnDMOb2Eb8te26VBrwA7jGMz3EQ"
                />
                <Typography sx={styles.flex.h2}>
                    {information.blocks.readSubject.by} {post.author}
                </Typography>
            </Box>
            <Box sx={styles.box}>
                <Box>
                    <img src={post?.image} />
                    <Typography sx={styles.box.h3}>
                        {' '}
                        {information.blocks.readSubject.fonts}
                    </Typography>
                    <Divider sx={styles.box.divider} />
                </Box>
                <Typography sx={styles.box.h2}>{post?.description}</Typography>
            </Box>
        </Container>
    );
}
