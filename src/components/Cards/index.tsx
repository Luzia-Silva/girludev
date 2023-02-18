import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    Typography,
} from '@mui/material';
import { ICardsArticles } from '../../interface/IArticles';
import { styles } from './styles';

type Props = {
    articles: ICardsArticles[];
    title: string;
};
export default function Cards({ articles, title }: Props) {
    return (
        <Box sx={styles.box}>
            <Typography sx={styles.h1}>{title}</Typography>
            <Grid container spacing={6} sx={styles.grid}>
                {articles.map((article) => (
                    <Grid item xs={8} sm={6} md={3} sx={styles.gridItem}>
                        <Card sx={styles.card}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={article.image}
                                alt=""
                            />
                            <CardContent>
                                <Chip label={article.tag} />
                                <Typography variant="h6" component="div">
                                    {article.title}
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    sx={{ fontSize: '12px' }}
                                >
                                    Publicado em {article.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
