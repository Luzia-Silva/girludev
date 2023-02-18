import { CircularProgress, Container } from '@mui/material';
import AboutMe from '../../components/AboutMe';
import Profile from '../../components/Profile';
import IsLoading from '../../components/IsLoading';
import information from '../../constants';
import { Queries } from '../../services/queries';
import IsError from '../../components/IsError';
import { AxiosError } from 'axios';
import Cards from '../../components/Cards';

export default function Home() {
    const { data: user, isLoading, isError, error } = Queries.GetProfile();
    if (isLoading) return <IsLoading isLoading={isLoading} />;
    if (isError)
        return <IsError isError={isError} status={error as AxiosError} />;
    return (
        <Container>
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
                image={information.blocks.aboutMe.image}
            />
            <Cards articles={information.database.articles} title={information.blocks.cards.title} />
        </Container>
    );
}
