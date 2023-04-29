"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopModel = void 0;
class ShopModel {
    constructor(name, description, categoryName, time_start, time_end, user_id) {
        this.name = name;
        this.description = description;
        this.categoryName = categoryName;
        this.time_start = time_start;
        this.time_end = time_end;
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof ShopModel))
            return false;
        return this.name === entity.name;
    }
}
exports.ShopModel = ShopModel;
//# sourceMappingURL=ShopModel.js.map