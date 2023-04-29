import { CategoryModel } from "domain/models/CategoryModel";
import { BaseRepository } from "./BaseRepository";
import { ICategoryRepository } from "application/ports/ICategoryRepository";
import { Connection, ConnectionIsNotSetError } from "typeorm";
import { InjectConnection } from "@nestjs/typeorm";
import { CategoriesEntity } from "../mapper/CategoriesEntity";
import { GetInfoByIdVM } from "presentation/view-models/category/GetInfoByIdVM";
import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";
import { ShopModel } from "domain/models/ShopModel";
import { AttractionsModel } from "domain/models/AttractionsModel";
import { EventModel } from "domain/models/EventModel";
import { RelaxModel } from "domain/models/RelaxModel";
import { AddInfoModel } from "domain/models/AddInfoModel";

export class CategoriesRepository
  extends BaseRepository<CategoryModel>
  implements ICategoryRepository
{
  connection: Connection;
  constructor(@InjectConnection() connection: Connection) {
    super(connection, CategoriesEntity);
    this.connection = connection;
  }

  async getCategories() {
    const result = await this.connection.query(
      `SELECT name,description FROM category;`
    );
    if (result.length == 0) {
      return null;
    } else {
      return result;
    }
  }

  async getRoadMapInfoById(entity: GetRoadMapInfoByIdModel) {
    const result = await this.connection.query(`
    SELECT
      r.id as road_map_id,
      s.name as shop_name,
      s.time_start as shop_time_start,
      s.time_end as shop_time_end,
      s.description as shop_description,
      e.name as event_name,
      e.time_start as event_time_start,
      e.time_end as event_time_end,
      e.description as event_description,
      a.name as attraction_name,
      a.description as attraction_description,
      a.time_start as attraction_time_start,
      a.time_end as attraction_time_end,
      r2.name as relax_name,
      r2.description as relax_description,
      r2.time_start as relax_time_start,
      r2.time_end as relax_time_end

    FROM road_map r
      JOIN events e on e.id = r.events_id
      JOIN shops s on r.shop_id = s.id
      JOIN attractions a on a.id = r.attractions_id
      JOIN relax r2 on r.relax_id = r2.id
      WHERE r.id = 1 AND  r.user_id=1;`);
    if (result.length == 0) {
      return null;
    } else {
      return result;
    }
  }

  async addShopInfo(entity: AddInfoModel) {
    console.log(entity);
    const result = await this.connection
      .query(`INSERT INTO shops(name, category_id, time_start, time_end, description, user_id)
    VALUES('${entity.name}', (SELECT id FROM category WHERE name ='${entity.category_name}'), '${entity.time_start}', '${entity.time_end}', '${entity.description}', ${entity.user_id});`);
    return result;
  }

  async addAttractionInfo(entity: AddInfoModel) {
    const result = await this.connection
      .query(`INSERT INTO attractions(name, category_id, time_start, time_end, description, user_id)
    VALUES('${entity.name}', (SELECT id FROM category WHERE name ='${entity.category_name}'), '${entity.time_start}', '${entity.time_end}', '${entity.description}', ${entity.user_id});`);
    return result;
  }

  async addEventsInfo(entity: AddInfoModel) {
    const result = await this.connection
      .query(`INSERT INTO events(name, category_id, time_start, time_end, description, user_id)
    VALUES('${entity.name}', (SELECT id FROM category WHERE name ='${entity.category_name}'), '${entity.time_start}', '${entity.time_end}', '${entity.description}', ${entity.user_id});`);
    return result;
  }
  async addRelaxInfo(entity: AddInfoModel) {
    const result = await this.connection
      .query(`INSERT INTO relax(name, category_id, time_start, time_end, description, user_id)
    VALUES('${entity.name}', (SELECT id FROM category WHERE name ='${entity.category_name}'), '${entity.time_start}', '${entity.time_end}', '${entity.description}', ${entity.user_id});`);
    return result;
  }

  async checkCategoryExist(entity: AddInfoModel) {
    const result = await this.connection.query(
      `SELECT id FROM category WHERE name ='${entity.category_name}';`
    );
    if (result.length == 0) {
      return null;
    } else {
      return result;
    }
  }
  async updateShopInfo(entity: AddInfoModel) {
    const result = await this.connection.query(
      `UPDATE shops
      SET
          name='${entity.name}',
          description = '${entity.description}',
          time_start ='${entity.time_start}',
          time_end = '${entity.time_end}'
      
      WHERE id = (SELECT shop_id FROM road_map WHERE id = ${entity.road_map_id}) AND user_id =${entity.user_id};`
      )
    return result;
          
  }

  async updateAttractionInfo(entity: AddInfoModel) {
    const result = await this.connection.query(
      `UPDATE attractions
      SET
          name='${entity.name}',
          description = '${entity.description}',
          time_start ='${entity.time_start}',
          time_end = '${entity.time_end}'
      
      WHERE id = (SELECT attractions_id FROM road_map WHERE id = ${entity.road_map_id}) AND user_id =${entity.user_id};`
      )
    return result;
    
  }
  async updateRelaxInfo(entity: AddInfoModel) {
    const result = await this.connection.query(
      `UPDATE relax
      SET
          name='${entity.name}',
          description = '${entity.description}',
          time_start ='${entity.time_start}',
          time_end = '${entity.time_end}'
      
      WHERE id = (SELECT relax_id FROM road_map WHERE id = ${entity.road_map_id}) AND user_id =${entity.user_id};`
      )
    return result;
  }

  async updateEventInfo(entity: AddInfoModel){
    const result = await this.connection.query(
      `UPDATE events
      SET
          name='${entity.name}',
          description = '${entity.description}',
          time_start ='${entity.time_start}',
          time_end = '${entity.time_end}'
      
      WHERE id = (SELECT events_id FROM road_map WHERE id = ${entity.road_map_id}) AND user_id =${entity.user_id};`
      )
    return result;
  }
}
