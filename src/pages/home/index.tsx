import { Container } from '@mui/material';
import HeaderTypography from '../../components/HeaderTypography';
import Profile from '../../components/Profile';
import p from '../../constants';
import { Queries } from '../../services/queries';

export default function Home() {
    const { data: user } = Queries.GetProfile();
    console.log(user);
    return (
        <Container>
            <HeaderTypography
                title={p.pages.home.title}
                buttonTitle={p.pages.home.button}
                buttonOnclick={() => console.log('teste 123')}
            />
            <Profile image={user?.avatar_url} />
        </Container>
    );
}
