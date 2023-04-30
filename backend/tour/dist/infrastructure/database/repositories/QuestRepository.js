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
exports.QuestRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const QuestEntity_1 = require("../mapper/QuestEntity");
const BaseRepository_1 = require("./BaseRepository");
let QuestRepository = class QuestRepository extends BaseRepository_1.BaseRepository {
    constructor(connection) {
        super(connection, QuestEntity_1.QuestEntity);
        this.connection = connection;
    }
    async getQuestInfo() {
        const result = await this.connection.query(`SELECT
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
  join quest_place qp on qp.id = quest_info.quest_place_id;`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async addUserQuest(entity) {
        const result = await this.connection.query(`INSERT INTO users_quest(quest_name_id, user_id) VALUES((SELECT id FROM quest_name WHERE name ='${entity.quest_name}'), ${entity.user_id});`);
        return result;
    }
    async addUserEthaps(entity) {
        const result = await this.connection.query(`INSERT INTO quest_ethaps(status_id, user_id, quest_id) VALUES(2,${entity.user_id},(SELECT id FROM quest_info WHERE quest_name_id=(SELECT id FROM quest_name WHERE name ='${entity.quest_name}')));`);
        return result;
    }
    async getUserQuestInfo(entity) {
        const result = await this.connection.query(`SELECT
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
  
  WHERE user_id = ${entity.user_id};`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async updateEthapsStatus(entity) {
        const result = await this.connection.query(`UPDATE quest_ethaps SET status_id = (SELECT id FROM quest_status WHERE name ='${entity.status_name}') WHERE user_id = ${entity.user_id} AND quest_id = (SELECT id FROM quest_info WHERE quest_name_id = (SELECT id FROM quest_name WHERE name='${entity.quest_name}') AND ethaps_name_id=(SELECT id FROM ethaps_name where name= '${entity.ethaps_name}'));`);
        return result;
    }
};
QuestRepository = __decorate([
    __param(0, (0, typeorm_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], QuestRepository);
exports.QuestRepository = QuestRepository;
//# sourceMappingURL=QuestRepository.js.map