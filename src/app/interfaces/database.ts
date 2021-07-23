import { Observable } from "rxjs";

export interface IDatabase<T> {
    list(): Observable<T[]>;
    set(item: T): Promise<void>;
    delete(item: T): Promise<string>;
}

export interface IsExportable {
    export(id: string): Promise<void>
}