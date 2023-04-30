"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddInfoModel = void 0;
class AddInfoModel {
    constructor(name, description, category_name, time_start, time_end, user_id, road_map_id, city_name) {
        this.name = name;
        this.description = description;
        this.category_name = category_name;
        this.time_start = time_start;
        this.time_end = time_end;
        this.user_id = user_id;
        this.road_map_id = road_map_id;
        this.city_name = city_name;
    }
    equals(entity) {
        if (!(entity instanceof AddInfoModel))
            return false;
        return this.name === entity.name;
    }
}
exports.AddInfoModel = AddInfoModel;
//# sourceMappingURL=AddInfoModel.js.map