export class Service {
    name: string;
    id?: string;
    title?: string;
    subtitle?: string;
    icon?: string;
    images?: ServiceImage[];
    overview?: string;
    action?: any;
    toggled?: boolean;
    content?: string;
    // constructor(name, id, title, subtitle, icon, images, overview, action, toggled = false) {
    //     this.name = name;
    //     this.id = id;
    //     this.title = title;
    //     this.subtitle = subtitle;
    //     this.icon = icon;
    //     this.images = images;
    //     this.overview = overview;
    //     this.action = action;
    //     this.toggled = toggled;
    // }

    // toggle() {
    //     this.toggled = !this.toggled;
    // }
}

export interface ServiceImage {
    src?: string;
    alt?: string;
    size?: { width: string, height: string };
}
