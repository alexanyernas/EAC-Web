interface Image {
    title: string;
    src: string;
}

export interface LessionItemModel {
    id: string;
    title: string;
    color: string;
    description: string;
    video?: string;
    content?: string[];
    images?: Image[];
    references?: string[];
}