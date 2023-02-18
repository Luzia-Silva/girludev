type IArticles = {
    image: string;
    title: string;
    date: string;
    content: string;
    tag: string;
};

export type ICardsArticles = Pick<
    IArticles,
    'title' | 'date' | 'image' | 'tag'
>;
