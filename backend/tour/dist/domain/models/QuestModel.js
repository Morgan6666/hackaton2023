"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestModel = void 0;
class QuestModel {
    constructor(quest_name, quest_place, user_id, place_name) {
        this.quest_name = quest_name;
        this.quest_place = quest_place;
        this.user_id = user_id;
        this.place_name;
    }
    equals(entity) {
        if (!(entity instanceof QuestModel))
            return false;
        return this.quest_name === entity.quest_name;
    }
}
exports.QuestModel = QuestModel;
//# sourceMappingURL=QuestModel.js.map