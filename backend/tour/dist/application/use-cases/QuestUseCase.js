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
var QuestUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestUseCase = void 0;
const common_1 = require("@nestjs/common");
const IQuestRepository_1 = require("../ports/IQuestRepository");
const serviceResponse_1 = require("../../infrastructure/utils/serviceResponse");
let QuestUseCase = QuestUseCase_1 = class QuestUseCase {
    constructor(questRepo) {
        this.questRepo = questRepo;
        this.logger = new common_1.Logger(QuestUseCase_1.name);
        this.serviceRes = new serviceResponse_1.ServiceResponse();
    }
    async getQuestInfo() {
        this.logger.log(`Получаем информацию о доступных квестах`);
        const result = await this.questRepo.getQuestInfo();
        if (result) {
            this.logger.log(`Информация получена`);
            return this.serviceRes.uniqueSuccessRes(result);
        }
        else {
            this.logger.warn(`Информация не получена`);
            return this.serviceRes.internalServerError();
        }
    }
    async addUserQuest(entity) {
        this.logger.log(`Добавляем пользователя в квест`);
        const result = await this.questRepo.addUserQuest(entity);
        this.logger.log(`Добявляем пользователя в таблицу ethaps`);
        const ethaps = await this.questRepo.addUserEthaps(entity);
        return this.serviceRes.successRes();
    }
    async getUserQuestInfo(entity) {
        this.logger.log(`Получаем инфомацию о квесте`);
        const result = await this.questRepo.getUserQuestInfo(entity);
        if (result) {
            this.logger.log(`Информация успешно получена`);
            return this.serviceRes.uniqueSuccessRes(result);
        }
        else {
            this.logger.warn('Информация не получена');
            return this.serviceRes.internalServerError();
        }
    }
    async updateEthapsStatus(entity) {
        this.logger.log(`Обновляем инфомрацию об этапе`);
        const result = await this.questRepo.updateEthapsStatus(entity);
        return this.serviceRes.successRes();
    }
};
QuestUseCase = QuestUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IQuestRepository_1.IQuestRepository])
], QuestUseCase);
exports.QuestUseCase = QuestUseCase;
//# sourceMappingURL=QuestUseCase.js.map