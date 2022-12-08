export interface Category {
    title: string;
    content: string;
}

export interface ApiPage {
    about: Category;
    contacts: Category;
    history: Category;
    news: Category;
    quotes: Category;
}
