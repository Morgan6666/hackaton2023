import { IEntity } from "domain/shared/IEntity";
export declare class QuestModel implements IEntity {
    quest_name?: string;
    quest_place?: string;
    user_id?: number;
    place_name?: string;
    status_name?: string;
    ethaps_name?: string;
    constructor(quest_name?: string, quest_place?: string, user_id?: number, place_name?: string);
    equals(entity: IEntity): boolean;
}
