import HeaderTypography from '../../components/HeaderTypography';
import p from '../../constants';

export default function Home() {
    return (
        <HeaderTypography
            title={p.pages.home.title}
            buttonTitle={p.pages.home.button}
            buttonOnclick={() => console.log('teste 123')}
        />
    );
}
