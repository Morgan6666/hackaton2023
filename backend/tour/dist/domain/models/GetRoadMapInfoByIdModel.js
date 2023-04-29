"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRoadMapInfoByIdModel = void 0;
class GetRoadMapInfoByIdModel {
    constructor(id, user_id) {
        this.id = id;
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof GetRoadMapInfoByIdModel))
            return false;
        return this.id === entity.id;
    }
}
exports.GetRoadMapInfoByIdModel = GetRoadMapInfoByIdModel;
//# sourceMappingURL=GetRoadMapInfoByIdModel.js.map