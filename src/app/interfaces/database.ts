import { Observable } from "rxjs";

export interface Database<T> {
    list(): Observable<T[]>;
    set(item: T): Promise<void>;
    delete(item: T): Promise<string>;
}