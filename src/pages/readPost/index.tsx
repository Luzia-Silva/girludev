import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import BoxPost from '../../components/BoxPost';
import Cards from '../../components/Cards';
import information from '../../constants';

import { IPosts } from '../../interface';

export default function ReadPost() {
    const { id } = useParams();
    const findPost = information.database.posts.find(
        (post: IPosts) => post.id === id
    );
    const relatedPosts = information.database.posts.filter(
        (post: IPosts) => post.idTag === findPost?.idTag
    );

    return (
        <Container>
            <BoxPost post={findPost as IPosts} />
            <Cards
                posts={relatedPosts as IPosts[]}
                title={information.blocks.readSubject.titlesCards}
            />
        </Container>
    );
}
