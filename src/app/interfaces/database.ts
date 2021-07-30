import { Observable } from "rxjs";

export interface IDatabase<T> {
    list(): Observable<T[]>;
    set(item: T): Promise<void>;
    delete(item: T): Promise<string>;
}

export interface IsExportable {
    export(id: string): Promise<void>;
    exportAll(): Promise<void>;
}

export interface IsImportable {
    import(doc: any): Promise<Object>;
}