import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    Pagination,
    Typography,
} from '@mui/material';
import { ICardsArticles } from '../../interface/IArticles';
import { styles } from './styles';
import information from '../../constants';
import { useEffect, useState } from 'react';
import Title from '../Title';

type Props = {
    articles: ICardsArticles[];
    title: string;
};
export default function Cards({ articles, title }: Props) {
    const [page, setPage] = useState<number>(1);
    const [articlesPerPages, setArticlesPerPages] = useState(6);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const articlesCount = Math.ceil(articles.length / articlesPerPages);
    const [articleSlices, setArticlesSlices] = useState(
        articles.slice(0, articlesPerPages)
    );
    useEffect(() => {
        const slicesOneNumber = page * articlesPerPages;
        const slicesTwoNumber = slicesOneNumber - articlesPerPages;
        const slicesArticles = [slicesTwoNumber, slicesOneNumber];
        setArticlesSlices(articles.slice(slicesArticles[0], slicesArticles[1]));
    }, [page]);

    return (
        <>
            <Box sx={styles.box}>
                <Title title={title} />
                <Grid container spacing={6} sx={styles.grid}>
                    {articleSlices.map((article) => (
                        <Grid item xs={8} sm={6} md={4} sx={styles.gridItem}>
                            <Card sx={styles.card}>
                                <CardActionArea
                                    href={('/readsubject/' + article.id)}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={article.image}
                                        alt=""
                                    />
                                    <CardContent>
                                        <Chip
                                            label={article.tag}
                                            size={'small'}
                                            sx={{ mb: 1 }}
                                        />
                                        <Typography
                                            sx={{ fontSize: '16px' }}
                                            component="div"
                                        >
                                            {article.title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            sx={{ fontSize: '12px' }}
                                        >
                                            {
                                                information.components.cards
                                                    .postedIn
                                            }{' '}
                                            {article.date}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Pagination
                count={articlesCount}
                sx={styles.pagination}
                onChange={handleChange}
            />
        </>
    );
}
