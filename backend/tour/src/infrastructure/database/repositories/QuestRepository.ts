import { InjectConnection } from "@nestjs/typeorm";
import { IQuestRepository } from "application/ports/IQuestRepository";
import { QuestModel } from "domain/models/QuestModel";
import { Connection, EntityMetadata } from "typeorm";
import { QuestEntity } from "../mapper/QuestEntity";
import { BaseRepository } from "./BaseRepository";

export class QuestRepository
  extends BaseRepository<QuestModel>
  implements IQuestRepository
{
  connection: Connection;
  constructor(@InjectConnection() connection: Connection) {
    super(connection, QuestEntity);
    this.connection = connection;
  }

  async getQuestInfo() {
    const result = await this.connection.query(
      `SELECT
      quest_info.id,
      qn.name as quest_name,
      qn.description as quest_description,
      qp.name as place_name,
      qp.description as place_description,
      en.name as ethaps_name,
      en.description ethaps_description
  FROM quest_info
  JOIN ethaps_name en on en.id = quest_info.ethaps_name_id
  JOIN quest_name qn on qn.id = quest_info.quest_name_id
  join quest_place qp on qp.id = quest_info.quest_place_id;`
    )
    if(result.length == 0){
      return null;
    }
    else{
      return result;
    }
  }

  async addUserQuest(entity: QuestModel) {
    const result = await this.connection.query(`INSERT INTO users_quest(quest_name_id, user_id) VALUES((SELECT id FROM quest_name WHERE name ='${entity.quest_name}'), ${entity.user_id});`);
    return result;
  }

  async addUserEthaps(entity: QuestModel) {
    const result = await this.connection.query(`INSERT INTO quest_ethaps(status_id, user_id, quest_id) VALUES(2,${entity.user_id},(SELECT id FROM quest_info WHERE quest_name_id=(SELECT id FROM quest_name WHERE name ='${entity.quest_name}')));`)
    return result;
  }
  async getUserQuestInfo(entity: QuestModel) {
    const result = await this.connection.query(
      `SELECT
      qn.name as quest_name,
      qn.description as quest_description,
      en.name as ethaps_name,
      en.description as ethaps_description,
      qs.name as status_name
      FROM quest_ethaps
      INNER JOIN quest_status qs on qs.id = quest_ethaps.status_id
      INNER JOIN quest_info qi on qi.id = quest_ethaps.quest_id
      INNER JOIN ethaps_name en on qi.ethaps_name_id = en.id
      INNER JOIN quest_name qn ON qi.quest_name_id = qn.id
      INNER JOIN quest_place qp ON qi.quest_place_id = qp.id
  
  WHERE user_id = ${entity.user_id};`
      
      );
      if(result.length == 0){
        return null
      }
      else{
        return result;
      }
  }

  async updateEthapsStatus(entity: QuestModel) {
    const result = await this.connection.query(`UPDATE quest_ethaps SET status_id = (SELECT id FROM quest_status WHERE name ='${entity.status_name}') WHERE user_id = ${entity.user_id} AND quest_id = (SELECT id FROM quest_info WHERE quest_name_id = (SELECT id FROM quest_name WHERE name='${entity.quest_name}') AND ethaps_name_id=(SELECT id FROM ethaps_name where name= '${entity.ethaps_name}'));`);
    return result;
  }

  
  

  
}
