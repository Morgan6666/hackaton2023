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
var CategoryUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUseCase = void 0;
const common_1 = require("@nestjs/common");
const serviceResponse_1 = require("../../infrastructure/utils/serviceResponse");
const ICategoryRepository_1 = require("../ports/ICategoryRepository");
let CategoryUseCase = CategoryUseCase_1 = class CategoryUseCase {
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
        this.logger = new common_1.Logger(CategoryUseCase_1.name);
        this.serviceRes = new serviceResponse_1.ServiceResponse();
    }
    async getCategories() {
        this.logger.log(`Получаем данные всех категорий`);
        const result = await this.categoryRepo.getCategories();
        if (result) {
            this.logger.log(`Данные категории получены`);
            return this.serviceRes.uniqueSuccessRes(result);
        }
        else {
            this.logger.log(`Ошибка получений данных категорий`);
            return this.serviceRes.categoryGetError();
        }
    }
    async getRoadMapInfoById(entity) {
        this.logger.log(`Получаем данные road map`);
        const result = await this.categoryRepo.getRoadMapInfoById(entity);
        if (result) {
            this.logger.log(`Данные по road map получены`);
            return this.serviceRes.uniqueSuccessRes(result);
        }
        else {
            this.logger.warn(`Данные по road map не получены`);
            return this.serviceRes.internalServerError();
        }
    }
    async addShopInfo(entity) {
        this.logger.log(`Проверяем наличие категории`);
        const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
        if (checkCategory) {
            this.logger.log(`Добавляем информацию о магазине`);
            const result = await this.categoryRepo.addShopInfo(entity);
            this.logger.log(`Информация успешно добавлена`);
            return this.serviceRes.successRes();
        }
        else {
            this.logger.warn(`Категория не существует`);
            return this.serviceRes.categoryDoesntExists();
        }
    }
    async addAttractionInfo(entity) {
        this.logger.log(`Проверяем наличие категории`);
        const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
        if (checkCategory) {
            this.logger.log(`Добавляем информацию по развлечениям`);
            const result = await this.categoryRepo.addAttractionInfo(entity);
            this.logger.log(`Информация успешно добавлена`);
            return this.serviceRes.successRes();
        }
        else {
            this.logger.warn(`Категория не существует`);
            return this.serviceRes.categoryDoesntExists();
        }
    }
    async addEventsInfo(entity) {
        this.logger.log(`Проверяем наличие категории`);
        const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
        if (checkCategory) {
            this.logger.log(`Добавляем информацию о событиях`);
            const result = await this.categoryRepo.addEventsInfo(entity);
            this.logger.log(`Информация успешно добавлена`);
            return this.serviceRes.successRes();
        }
        else {
            this.logger.warn(`Категория не существует`);
            return this.serviceRes.categoryDoesntExists();
        }
    }
    async addRelaxInfo(entity) {
        this.logger.log(`Проверяем наличие категории`);
        const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
        if (checkCategory) {
            this.logger.log(`Добалвяем информацию об отдыхе`);
            const result = await this.categoryRepo.addRelaxInfo(entity);
            this.logger.log("Информация успешно добавлена");
            return this.serviceRes.successRes();
        }
        else {
            this.logger.warn(`Категория не существует`);
            return this.serviceRes.categoryDoesntExists();
        }
    }
    async updateRelaxInfo(entity) {
        this.logger.log(`Проверяем наличие категории`);
        const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
        if (checkCategory) {
            this.logger.log(`Обновляем данные таблицы relax`);
            const result = await this.categoryRepo.updateRelaxInfo(entity);
            this.logger.log('Информация в таблице relax обновлена');
            return this.serviceRes.successRes();
        }
        else {
            this.logger.warn('Категория не существует');
            return this.serviceRes.categoryDoesntExists();
        }
    }
    async updateShopInfo(entity) {
        this.logger.log(`Проверяем наличие категории`);
        const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
        if (checkCategory) {
            this.logger.log(`Обновляем данные таблицы relax`);
            const result = await this.categoryRepo.updateShopInfo(entity);
            this.logger.log('Информация в таблице shop обновлена');
            return this.serviceRes.successRes();
        }
        else {
            this.logger.warn('Категория не существует');
            return this.serviceRes.categoryDoesntExists();
        }
    }
    async updateAttractionInfo(entity) {
        this.logger.log(`Проверяем наличие категории`);
        const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
        if (checkCategory) {
            this.logger.log(`Обновляем данные таблицы attraction`);
            const result = await this.categoryRepo.updateAttractionInfo(entity);
            this.logger.log('Информация в таблице attraction обновлена');
            return this.serviceRes.successRes();
        }
        else {
            this.logger.warn('Категория не существует');
            return this.serviceRes.categoryDoesntExists();
        }
    }
    async updateEventsInfo(entity) {
        this.logger.log(`Проверяем наличие категории`);
        const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
        if (checkCategory) {
            this.logger.log(`Обновляем данные таблицы event`);
            const result = await this.categoryRepo.updateEventInfo(entity);
            this.logger.log('Информация в таблице shop обновлена');
            return this.serviceRes.successRes();
        }
        else {
            this.logger.warn('Категория не существует');
            return this.serviceRes.categoryDoesntExists();
        }
    }
};
CategoryUseCase = CategoryUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ICategoryRepository_1.ICategoryRepository])
], CategoryUseCase);
exports.CategoryUseCase = CategoryUseCase;
//# sourceMappingURL=CategoryUseCase.js.map