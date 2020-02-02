import { Observable } from 'rxjs';

export interface IBrand {
    name: string;
    dataLocation: string;
    data?: Observable<any> | any;
    categories?: string[];
    logoURL?: string;
    tags?: string[];
}
