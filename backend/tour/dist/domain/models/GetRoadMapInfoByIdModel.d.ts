import { IEntity } from "domain/shared/IEntity";
export declare class GetRoadMapInfoByIdModel implements IEntity {
    id: number;
    user_id: number;
    constructor(id: number, user_id: number);
    equals(entity: IEntity): boolean;
}
