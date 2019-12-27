export interface Masthead {
    main: string,
    sub: string,
    bg: string,
    action?: 'signup' | 'redirect' | 'none',
    cta?: boolean,
    redirectURL?: string,
    overlay?: {
        src?: string,
        alt?: string,
        width?: number
    }
}
