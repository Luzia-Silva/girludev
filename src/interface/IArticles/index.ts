type IArticles = {
    id: string;
    image: string;
    title: string;
    date: string;
    content: string;
    tag: string;
};

export type ICardsArticles = Pick<
    IArticles,
    'id' | 'title' | 'date' | 'image' | 'tag'
>;
