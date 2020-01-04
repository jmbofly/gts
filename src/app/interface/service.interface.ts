export interface Service {
    name: string;
    id?: string;
    title?: string;
    subtitle?: string;
    icon?: string;
    images?: ServiceImage[];
    overview?: string;
    action?: any;
}

export interface ServiceImage {
    src?: string;
    alt?: string;
    size?: { width: string, height: string };
}
