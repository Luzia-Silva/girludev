import { SystemTheme } from './theme';

export default {
    theme: {
        system: SystemTheme.theme,
        githubGraphicsTheme: SystemTheme.githubGraphicsTheme,
    },
    login: {
        user_name: 'Luzia-Silva',
    },
    blocks: {
        home: {
            title: 'Girludev',
            button: 'to know',
        },
        profile: {
            badges: [
                {
                    name: 'Python',
                    color: 'grey',
                },
                {
                    name: 'Typescript',
                    color: 'blue',
                },
                {
                    name: 'Node.js',
                    color: 'grey',
                },
                {
                    name: 'React',
                    color: 'blue',
                },
                {
                    name: 'next.js',
                    color: 'grey',
                },
                {
                    name: 'chakra%20ui',
                    color: 'blue',
                },
            ],
        },
        aboutMe: {
            title: 'Porque área de TI?',
            description:
                'Eu adoro uma oportunidade de dar x motivos, então não de forças ao monstro IA que habita na minha alma, por favor.Vamos lá explicar a escolha de um curso superior de doidos e antissociais tudo em uma mesma sala. Primeiro que não nada melhor que fazer tudo em equipe, e uma equipe de TI boa e unida até o chão estremece com tanta sintonia. Segundo como não escolher uma área que o primeiro algoritmo foi desenvolvido por uma mulher? É Ada que fala, né. Terceiro que não precisa ter motivos para escolher um curso, até porque ele escolhe você ou você pode fazer um teste online para ver qual profissão nosso pai Google recomenda. Quarto que a vida é uma só então faça o que você curte e ganhe dinheiro, porque os boletos brotam depois dos 20 anos.',
            image: '../assets/images/adal-lovelace.gif',
        },
        cards: {
            title: 'Destaques',
        },
        readSubject: {
            by: 'Por',
            fonts: 'Fonte:',
            author: 'Luzia Santos',
            titlesCards: 'Assuntos Relacionados',
        },
    },
    components: {
        cards: {
            postedIn: 'Publicado em',
            href: '',
        },
    },

    database: {
        posts: [
            {
                id: '586',
                idTag: '589',
                title: 'A importância da ciência de dados',
                description:
                    'A análise preditiva é o coração da atuação do cientista de dados. Ela é realizada a partir de todos os conhecimentos já abordados aqui, por meio de técnicas estatísticas utilizadas para desenvolver modelos preditivos. Eles produzem pontuações proporcionais à probabilidade de certos comportamentos acontecerem, assim, são responsáveis pela capacidade de “prever” eventos futuros. Agora que você sabe o que é Ciência de Dados, não restam dúvidas de que essa área é fundamental na Era da Informação, não é? Por isso mesmo, trata-se de uma das profissões mais promissoras da atualidade. A tendência é que ela continue crescendo, afinal, o desenvolvimento tecnológico anda a galope e exige cada vez mais o uso inteligente de dados. Para ficar por dentro de outras dicas sobre carreira, vida acadêmica e muito mais, é só seguir as redes da Uni! Tem para todos os gostos: Facebook, Twitter, Instagram, LinkedIn e YouTube.',
                tag: 'Data Science',
                image: 'http://revolucaofeminina.com.br/img/datascience.png',
                date: '12/08/2002',
                fontImage: 'revolucaofeminina.com.br',
                author: 'Luzia Santos',
            },
        ],
    },
};

// ! Lembrete para criar DB
//Rascunho do database
// id - esse é do post
// idTag - esse é para separar as tags e depois fazer um filter
// title
// description
// tag
// date - vou mandar string para depois tratar no front, hahahaha surto
// image
// fontImage
// author
