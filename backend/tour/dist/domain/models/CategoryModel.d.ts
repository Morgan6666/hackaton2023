import { IEntity } from "domain/shared/IEntity";
export declare class CategoryModel implements IEntity {
    name?: string;
    description?: string;
    constructor(name: string, description: string);
    equals(entity: IEntity): boolean;
}
