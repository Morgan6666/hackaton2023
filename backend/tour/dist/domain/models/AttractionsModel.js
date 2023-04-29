"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttractionsModel = void 0;
class AttractionsModel {
    constructor(name, description, category_name, time_start, time_end, user_id) {
        this.name = name;
        this.description = description;
        this.category_name = category_name;
        this.time_start = time_start;
        this.time_end = time_end;
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof AttractionsModel))
            return false;
        return this.name === entity.name;
    }
}
exports.AttractionsModel = AttractionsModel;
//# sourceMappingURL=AttractionsModel.js.map