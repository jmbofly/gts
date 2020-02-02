export interface Masthead {
    main: string,
    sub: string,
    bg?: any,
    action?: 'signup' | 'redirect' | 'none',
    cta?: boolean,
    redirectURL?: string,
    overlay?: {
        src?: any,
        alt?: string,
        width?: number
    }
}
