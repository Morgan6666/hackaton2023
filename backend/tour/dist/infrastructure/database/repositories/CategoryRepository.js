"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const CategoriesEntity_1 = require("../mapper/CategoriesEntity");
let CategoriesRepository = class CategoriesRepository extends BaseRepository_1.BaseRepository {
    constructor(connection) {
        super(connection, CategoriesEntity_1.CategoriesEntity);
        this.connection = connection;
    }
    async getCategories() {
        const result = await this.connection.query(`SELECT name,description FROM category;`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getRoadMapInfoById(entity) {
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
        }
        else {
            return result;
        }
    }
    async addShopInfo(entity) {
        console.log(entity);
        const result = await this.connection
            .query(`INSERT INTO shops(name, category_id, time_start, time_end, description, user_id, city_id)
    VALUES('${entity.name}', (SELECT id FROM category WHERE name ='${entity.category_name}'), '${entity.time_start}', '${entity.time_end}', '${entity.description}', ${entity.user_id}, (SELECT id FROM cities WHERE name='${entity.city_name}'));`);
        return result;
    }
    async addAttractionInfo(entity) {
        const result = await this.connection
            .query(`INSERT INTO attractions(name, category_id, time_start, time_end, description, user_id, city_id)
    VALUES('${entity.name}', (SELECT id FROM category WHERE name ='${entity.category_name}'), '${entity.time_start}', '${entity.time_end}', '${entity.description}', ${entity.user_id}, (SELECT id FROM cities WHERE name='${entity.city_name}'));`);
        return result;
    }
    async addEventsInfo(entity) {
        const result = await this.connection
            .query(`INSERT INTO events(name, category_id, time_start, time_end, description, user_id, city_id)
    VALUES('${entity.name}', (SELECT id FROM category WHERE name ='${entity.category_name}'), '${entity.time_start}', '${entity.time_end}', '${entity.description}', ${entity.user_id}, (SELECT id FROM cities WHERE name='${entity.city_name}'));`);
        return result;
    }
    async addRelaxInfo(entity) {
        const result = await this.connection
            .query(`INSERT INTO relax(name, category_id, time_start, time_end, description, user_id, city_id)
    VALUES('${entity.name}', (SELECT id FROM category WHERE name ='${entity.category_name}'), '${entity.time_start}', '${entity.time_end}', '${entity.description}', ${entity.user_id}, (SELECT id FROM cities WHERE name='${entity.city_name}'));`);
        return result;
    }
    async checkCategoryExist(entity) {
        const result = await this.connection.query(`SELECT id FROM category WHERE name ='${entity.category_name}';`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async updateShopInfo(entity) {
        const result = await this.connection.query(`UPDATE shops
      SET
          name='${entity.name}',
          description = '${entity.description}',
          time_start ='${entity.time_start}',
          time_end = '${entity.time_end}'
      
      WHERE id = (SELECT shop_id FROM road_map WHERE id = ${entity.road_map_id}) AND user_id =${entity.user_id} AND city_id=(SELECT id FROM cities WHERE name='${entity.city_name}');`);
        return result;
    }
    async updateAttractionInfo(entity) {
        const result = await this.connection.query(`UPDATE attractions
      SET
          name='${entity.name}',
          description = '${entity.description}',
          time_start ='${entity.time_start}',
          time_end = '${entity.time_end}'
      
      WHERE id = (SELECT attractions_id FROM road_map WHERE id = ${entity.road_map_id}) AND user_id =${entity.user_id} AND city_id=(SELECT id FROM cities WHERE name='${entity.city_name}');`);
        return result;
    }
    async updateRelaxInfo(entity) {
        const result = await this.connection.query(`UPDATE relax
      SET
          name='${entity.name}',
          description = '${entity.description}',
          time_start ='${entity.time_start}',
          time_end = '${entity.time_end}'
      
      WHERE id = (SELECT relax_id FROM road_map WHERE id = ${entity.road_map_id}) AND user_id =${entity.user_id} AND city_id=(SELECT id FROM cities WHERE name='${entity.city_name}');`);
        return result;
    }
    async updateEventInfo(entity) {
        const result = await this.connection.query(`UPDATE events
      SET
          name='${entity.name}',
          description = '${entity.description}',
          time_start ='${entity.time_start}',
          time_end = '${entity.time_end}'
      
      WHERE id = (SELECT events_id FROM road_map WHERE id = ${entity.road_map_id}) AND user_id =${entity.user_id} AND city_id=(SELECT id FROM cities WHERE name='${entity.city_name}');`);
        return result;
    }
    async addRoadMap(entity) {
        const result = await this.connection.query(`INSERT  INTO road_map(events_id, shop_id, user_id, relax_id, attractions_id) VALUES(${entity.events_id},${entity.shop_id},${entity.user_id},${entity.relax_id},${entity.attractions_id}) RETURNING id;`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getEventsInfo() {
        const result = await this.connection.query(`SELECT
      events.name as event_name,
      events.time_start,
      events.time_end,
      events.description,
      c.name as category_name,
      c.description as category_description,
      c2.name as city_name
   FROM events
  JOIN category c on c.id = events.category_id
  JOIN cities c2 on events.city_id = c2.id;`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getRelaxInfo() {
        const result = await this.connection.query(`SELECT
      relax.name as relax_name,
      relax.time_start,
      relax.time_end,
      relax.description,
      c.name as category_name,
      c.description as category_description,
      c2.name as city_name
   FROM relax
  JOIN category c on c.id = relax.category_id
  JOIN cities c2 on relax.city_id = c2.id;`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getShopInfo() {
        const result = await this.connection.query(`SELECT
      shops.name as shop_name,
      shops.time_start,
      shops.time_end,
      shops.description,
      c.name as category_name,
      c.description as category_description,
      c2.name as city_name
   FROM shops
  JOIN category c on c.id = shops.category_id
  JOIN cities c2 on shops.city_id = c2.id;`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getAttractionInfo() {
        const result = await this.connection.query(`SELECT
      attractions.name as attr_name,
      attractions.time_start,
      attractions.time_end,
      attractions.description,
      c.name as category_name,
      c.description as category_description,
      c2.name as city_name
   FROM attractions
  JOIN category c on c.id = attractions.category_id
  JOIN cities c2 on attractions.city_id = c2.id;`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
};
CategoriesRepository = __decorate([
    __param(0, (0, typeorm_2.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], CategoriesRepository);
exports.CategoriesRepository = CategoriesRepository;
//# sourceMappingURL=CategoryRepository.js.map