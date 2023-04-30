import { IEntity } from "domain/shared/IEntity";



export class QuestModel implements IEntity {
    quest_name?: string;
    quest_place?: string;
    user_id?: number
    place_name?: string;
    status_name?: string;
    ethaps_name?: string;

    constructor(
        quest_name?: string,
        quest_place?: string,
        user_id?: number,
        place_name?: string
    ) {
        this.quest_name = quest_name;
        this.quest_place = quest_place;
        this.user_id = user_id;
        this.place_name;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof QuestModel)) return false;
        return this.quest_name === entity.quest_name;
      }
}