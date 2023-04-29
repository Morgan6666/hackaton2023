import { IEntity } from "domain/shared/IEntity";
export declare class ShopModel implements IEntity {
    name: string;
    description: string;
    categoryName: string;
    time_start: string;
    time_end: string;
    user_id: number;
    constructor(name: string, description: string, categoryName: string, time_start: string, time_end: string, user_id: number);
    equals(entity: IEntity): boolean;
}
