"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
class EventModel {
    constructor(name, description, category_name, time_start, time_end, user_id) {
        this.name = name;
        this.description = description;
        this.category_name = category_name;
        this.time_start = time_start;
        this.time_end = time_end;
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof EventModel))
            return false;
        return this.name === entity.name;
    }
}
exports.EventModel = EventModel;
//# sourceMappingURL=EventModel.js.map