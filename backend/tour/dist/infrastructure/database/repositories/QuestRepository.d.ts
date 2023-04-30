import { IQuestRepository } from "application/ports/IQuestRepository";
import { QuestModel } from "domain/models/QuestModel";
import { Connection } from "typeorm";
import { BaseRepository } from "./BaseRepository";
export declare class QuestRepository extends BaseRepository<QuestModel> implements IQuestRepository {
    connection: Connection;
    constructor(connection: Connection);
    getQuestInfo(): Promise<any>;
    addUserQuest(entity: QuestModel): Promise<any>;
    addUserEthaps(entity: QuestModel): Promise<any>;
    getUserQuestInfo(entity: QuestModel): Promise<any>;
    updateEthapsStatus(entity: QuestModel): Promise<any>;
}
