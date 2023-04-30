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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CategoryUseCase_1 = require("../../application/use-cases/CategoryUseCase");
const AddInfoModel_1 = require("../../domain/models/AddInfoModel");
const GetRoadMapInfoByIdModel_1 = require("../../domain/models/GetRoadMapInfoByIdModel");
const AddRoadMapVM_1 = require("../view-models/category/AddRoadMapVM");
let CategoriesController = class CategoriesController {
    constructor(catUseCases) {
        this.catUseCases = catUseCases;
    }
    async getAllCategories() {
        const result = await this.catUseCases.getCategories();
        return result;
    }
    async getRoadMapInfoById(data) {
        const result = await this.catUseCases.getRoadMapInfoById(data);
        return result;
    }
    async addShopInfo(data) {
        const result = await this.catUseCases.addShopInfo(data);
        return result;
    }
    async addAttractions(data) {
        const result = await this.catUseCases.addAttractionInfo(data);
        return result;
    }
    async addRelaxInfo(data) {
        const result = await this.catUseCases.addRelaxInfo(data);
        return result;
    }
    async addEventsInfo(data) {
        const result = await this.catUseCases.addEventsInfo(data);
        return result;
    }
    async updateEventsInfo(data) {
        const result = await this.catUseCases.updateEventsInfo(data);
        return result;
    }
    async updateShopInfo(data) {
        const result = await this.catUseCases.updateShopInfo(data);
        return result;
    }
    async updateAttraction(data) {
        const result = await this.catUseCases.updateAttractionInfo(data);
        return result;
    }
    async updateRalax(data) {
        const result = await this.catUseCases.updateRelaxInfo(data);
        return result;
    }
    async addRoadMap(data) {
        const result = await this.catUseCases.addRoadMap(AddRoadMapVM_1.AddRoadMapVM.fromViewModel(data));
        return result;
    }
    async getRelaxInfo() {
        const result = await this.catUseCases.getRelaxInfo();
        return result;
    }
    async getEvents() {
        const result = await this.catUseCases.getEventsInfo();
        return result;
    }
    async getAttractions() {
        const result = await this.catUseCases.getAttractionsInfo();
        return result;
    }
    async getShops() {
        const result = await this.catUseCases.getShopsInfo();
        return result;
    }
};
__decorate([
    (0, common_1.Get)("categories"),
    (0, swagger_1.ApiOperation)({
        summary: "Get all categories category"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getAllCategories", null);
__decorate([
    (0, common_1.Post)("map_info"),
    (0, swagger_1.ApiOperation)({
        summary: "Get roadmap info by id"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetRoadMapInfoByIdModel_1.GetRoadMapInfoByIdModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getRoadMapInfoById", null);
__decorate([
    (0, common_1.Post)("add_shop"),
    (0, swagger_1.ApiOperation)({
        summary: "Add shop info"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddInfoModel_1.AddInfoModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addShopInfo", null);
__decorate([
    (0, common_1.Post)("add_attractions"),
    (0, swagger_1.ApiOperation)({
        summary: "Add attractions"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddInfoModel_1.AddInfoModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addAttractions", null);
__decorate([
    (0, common_1.Post)("add_relax"),
    (0, swagger_1.ApiOperation)({
        summary: "Add relax info"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddInfoModel_1.AddInfoModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addRelaxInfo", null);
__decorate([
    (0, common_1.Post)("add_events"),
    (0, swagger_1.ApiOperation)({
        summary: "Add events info"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddInfoModel_1.AddInfoModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addEventsInfo", null);
__decorate([
    (0, common_1.Post)("update_events"),
    (0, swagger_1.ApiOperation)({
        summary: "Update events"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddInfoModel_1.AddInfoModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateEventsInfo", null);
__decorate([
    (0, common_1.Post)("update_shop"),
    (0, swagger_1.ApiOperation)({
        summary: "Update shops info"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddInfoModel_1.AddInfoModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateShopInfo", null);
__decorate([
    (0, common_1.Post)("update_attraction"),
    (0, swagger_1.ApiOperation)({
        summary: "Update events"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddInfoModel_1.AddInfoModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateAttraction", null);
__decorate([
    (0, common_1.Post)("update_relax"),
    (0, swagger_1.ApiOperation)({
        summary: "update relax"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddInfoModel_1.AddInfoModel]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateRalax", null);
__decorate([
    (0, common_1.Post)("add_roadmap"),
    (0, swagger_1.ApiOperation)({
        summary: "Add roadmap"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddRoadMapVM_1.AddRoadMapVM]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addRoadMap", null);
__decorate([
    (0, common_1.Get)('relax'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getRelaxInfo", null);
__decorate([
    (0, common_1.Get)('events'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getEvents", null);
__decorate([
    (0, common_1.Get)('attractions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getAttractions", null);
__decorate([
    (0, common_1.Get)('shops'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getShops", null);
CategoriesController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [CategoryUseCase_1.CategoryUseCase])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=CategoryController.js.map