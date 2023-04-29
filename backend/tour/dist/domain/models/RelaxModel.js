"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelaxModel = void 0;
class RelaxModel {
    constructor(name, description, category_name, time_start, time_end, user_id) {
        this.name = name;
        this.description = description;
        this.category_name = category_name;
        this.time_start = time_start;
        this.time_end = time_end;
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof RelaxModel))
            return false;
        return this.name === entity.name;
    }
}
exports.RelaxModel = RelaxModel;
//# sourceMappingURL=RelaxModel.js.map