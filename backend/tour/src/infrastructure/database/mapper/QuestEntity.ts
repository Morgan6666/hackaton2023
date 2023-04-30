import { QuestModel } from "domain/models/QuestModel";
import { BaseEntity, EntitySchema } from "typeorm";


export const QuestEntity = new EntitySchema<QuestModel> ({
    name: "QuestModel",
    tableName: "quest",
    target: QuestModel,
    columns: {
        ...BaseEntity,
        quest_name: {
            type: String,
        
        
        }
}})