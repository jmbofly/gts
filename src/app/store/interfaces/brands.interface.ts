import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IBrand {
    name: string;
    dataLocation: string;
    data?: Observable<any> | any;
    categories?: string[];
    logoURL?: string;
    tags?: string[];
}
