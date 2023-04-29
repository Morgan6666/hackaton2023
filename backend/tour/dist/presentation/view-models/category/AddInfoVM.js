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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddInfoVM = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const AddInfoModel_1 = require("../../../domain/models/AddInfoModel");
class AddInfoVM {
    static fromViewModel(vm) {
        return new AddInfoModel_1.AddInfoModel(vm.name, vm.description, vm.category_name, vm.time_start, vm.time_end, vm.user_id);
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Названик",
        example: "Детский мир"
    }),
    __metadata("design:type", String)
], AddInfoVM.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Описание",
        example: "Хуета разная"
    }),
    __metadata("design:type", String)
], AddInfoVM.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Название категории",
        example: "Еда"
    }),
    __metadata("design:type", String)
], AddInfoVM.prototype, "category_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Время начала",
        example: "2023-04-30 22:43:12.000000"
    }),
    __metadata("design:type", String)
], AddInfoVM.prototype, "time_start", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Время окончания",
        example: "2023-05-30 22:43:12.000000"
    }),
    __metadata("design:type", String)
], AddInfoVM.prototype, "time_end", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Id пользователя",
        example: "1"
    }),
    __metadata("design:type", Number)
], AddInfoVM.prototype, "user_id", void 0);
exports.AddInfoVM = AddInfoVM;
//# sourceMappingURL=AddInfoVM.js.map