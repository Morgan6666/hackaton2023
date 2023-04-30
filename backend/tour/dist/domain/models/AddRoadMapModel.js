"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRoadMapModel = void 0;
class AddRoadMapModel {
    constructor(events_id, shop_id, user_id, relax_id, attractions_id) {
        this.events_id = events_id;
        this.shop_id = shop_id;
        this.user_id = user_id;
        this.relax_id = relax_id,
            this.attractions_id = attractions_id;
    }
    equals(entity) {
        if (!(entity instanceof AddRoadMapModel))
            return false;
        return this.user_id === entity.user_id;
    }
}
exports.AddRoadMapModel = AddRoadMapModel;
//# sourceMappingURL=AddRoadMapModel.js.map