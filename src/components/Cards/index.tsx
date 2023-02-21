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
import { styles } from './styles';
import information from '../../constants';
import { useEffect, useState } from 'react';
import Title from '../Title';
import { ICardsPosts } from '../../interface/picks';

type Props = {
    posts: ICardsPosts[];
    title: string;
};
export default function Cards({ posts, title }: Props) {
    const [page, setPage] = useState<number>(1);
    const [postsPerPages, setPostsPerPages] = useState(6);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const postsCount = Math.ceil(posts.length / postsPerPages);
    const [articleSlices, setArticlesSlices] = useState(
        posts.slice(0, postsPerPages)
    );
    useEffect(() => {
        const slicesOneNumber = page * postsPerPages;
        const slicesTwoNumber = slicesOneNumber - postsPerPages;
        const slicesArticles = [slicesTwoNumber, slicesOneNumber];
        setArticlesSlices(posts.slice(slicesArticles[0], slicesArticles[1]));
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
                                    href={
                                        information.components.cards.href +
                                        article.id
                                    }
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
                count={postsCount}
                sx={styles.pagination}
                onChange={handleChange}
            />
        </>
    );
}
