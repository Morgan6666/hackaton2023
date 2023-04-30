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
exports.QuestsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const QuestUseCase_1 = require("../../application/use-cases/QuestUseCase");
const QuestModel_1 = require("../../domain/models/QuestModel");
let QuestsController = class QuestsController {
    constructor(questUseCases) {
        this.questUseCases = questUseCases;
    }
    async getQuestInfo() {
        const result = await this.questUseCases.getQuestInfo();
        return result;
    }
    async addUserQuest(data) {
        const result = await this.questUseCases.addUserQuest(data);
        return result;
    }
    async getUserQuestInfo(data) {
        const result = await this.questUseCases.getUserQuestInfo(data);
        return result;
    }
    async updateEthapsSTatus(data) {
        const result = await this.questUseCases.updateEthapsStatus(data);
        return result;
    }
};
__decorate([
    (0, common_1.Get)("quest_info"),
    (0, swagger_1.ApiOperation)({
        summary: "Get quest info categories category"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestsController.prototype, "getQuestInfo", null);
__decorate([
    (0, common_1.Post)("add_user_quest"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuestModel_1.QuestModel]),
    __metadata("design:returntype", Promise)
], QuestsController.prototype, "addUserQuest", null);
__decorate([
    (0, common_1.Post)("getUserQuestInfo"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuestModel_1.QuestModel]),
    __metadata("design:returntype", Promise)
], QuestsController.prototype, "getUserQuestInfo", null);
__decorate([
    (0, common_1.Post)("update_status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuestModel_1.QuestModel]),
    __metadata("design:returntype", Promise)
], QuestsController.prototype, "updateEthapsSTatus", null);
QuestsController = __decorate([
    (0, swagger_1.ApiTags)('Quests'),
    (0, common_1.Controller)('quests'),
    __metadata("design:paramtypes", [QuestUseCase_1.QuestUseCase])
], QuestsController);
exports.QuestsController = QuestsController;
//# sourceMappingURL=QuestController.js.map