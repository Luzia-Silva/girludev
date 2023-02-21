import { AxiosError } from 'axios';
import { Container } from '@mui/material';
import AboutMe from '../../components/AboutMe';
import Cards from '../../components/Cards';
import IsError from '../../components/IsError';
import IsLoading from '../../components/IsLoading';
import Profile from '../../components/Profile';
import { Queries } from '../../services/queries';
import information from '../../constants';

export default function Home() {
    const { data: user, isLoading, isError, error } = Queries.GetProfile();
    if (isLoading) return <IsLoading isLoading={isLoading} />;
    if (isError)
        return <IsError isError={isError} status={error as AxiosError} />;
    return (
        <Container maxWidth="lg">
            {/* <HeaderTypography
                title={' '}
                buttonTitle={information.blocks.home.button}
                buttonOnclick={() => console.log('teste 123')}
            /> */}
            <Profile
                image={user?.avatar_url}
                login={user?.login}
                bio={user?.bio}
                badges={information.blocks.profile.badges}
                githubGraphicsTheme={information.theme.githubGraphicsTheme}
            />
            <AboutMe
                title={information.blocks.aboutMe.title}
                description={information.blocks.aboutMe.description}
            />
            <Cards
                posts={information.database.posts}
                title={information.blocks.cards.title}
            />
        </Container>
    );
}
