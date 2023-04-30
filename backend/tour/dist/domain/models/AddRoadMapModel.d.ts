import { IEntity } from "domain/shared/IEntity";
export declare class AddRoadMapModel implements IEntity {
    events_id: number;
    shop_id: number;
    user_id: number;
    relax_id: number;
    attractions_id: number;
    constructor(events_id: number, shop_id: number, user_id: number, relax_id: number, attractions_id: number);
    equals(entity: IEntity): boolean;
}
