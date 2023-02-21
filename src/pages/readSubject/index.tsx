import {
    Avatar,
    Box,
    Chip,
    Container,
    Divider,
    Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Cards from '../../components/Cards';
import information from '../../constants';
import { styles } from './styles';

export default function ReadSubject() {
    let { id } = useParams();
    const data = information.database.articles.find(
        (article) => article.id === id
    );
    const relatedSubjects = information.database.articles.filter(
        (article) => article.idCategory === data?.idCategory
    );

    return (
        <Container sx={styles.container}>
            <Box sx={styles.flex}>
                <Chip
                    label={data?.tag}
                    size={'medium'}
                    sx={styles.marginRight}
                />
                <Typography> Publicado em {data?.date}</Typography>
            </Box>
            <Typography sx={styles.h2}>{data?.title}</Typography>
            <Box sx={styles.flex}>
                <Avatar
                    sx={styles.marginRight}
                    src="https://media.licdn.com/dms/image/D4D03AQGUoadnoyiF-g/profile-displayphoto-shrink_800_800/0/1676639077936?e=1681948800&v=beta&t=yQhcdS6bVTta0cYpFnDMOb2Eb8te26VBrwA7jGMz3EQ"
                />
                <Typography sx={styles.flex.h2}>Por Luzia Santos</Typography>
            </Box>
            <Box sx={styles.box}>
                <Box>
                    <img src={data?.image} />
                    <Typography sx={styles.box.h3}>Fonte: pesquisar</Typography>
                    <Divider sx={styles.box.divider} />
                </Box>
                <Typography sx={styles.box.h2}>{data?.content}</Typography>
            </Box>
            <Cards articles={relatedSubjects} title={'Assuntos Relacionados'} />
        </Container>
    );
}
