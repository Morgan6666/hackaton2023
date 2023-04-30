"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestEntity = void 0;
const QuestModel_1 = require("../../../domain/models/QuestModel");
const typeorm_1 = require("typeorm");
exports.QuestEntity = new typeorm_1.EntitySchema({
    name: "QuestModel",
    tableName: "quest",
    target: QuestModel_1.QuestModel,
    columns: Object.assign(Object.assign({}, typeorm_1.BaseEntity), { quest_name: {
            type: String,
        } })
});
//# sourceMappingURL=QuestEntity.js.map