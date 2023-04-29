import { IEntity } from "domain/shared/IEntity";
export declare class AttractionsModel implements IEntity {
    name: string;
    description: string;
    category_name: string;
    time_start: string;
    time_end: string;
    user_id: number;
    constructor(name: string, description: string, category_name: string, time_start: string, time_end: string, user_id: number);
    equals(entity: IEntity): boolean;
}
