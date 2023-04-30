import { CategoryUseCase } from "application/use-cases/CategoryUseCase";
import { AddInfoModel } from "domain/models/AddInfoModel";
import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";
import { AddRoadMapVM } from "presentation/view-models/category/AddRoadMapVM";
export declare class CategoriesController {
    private readonly catUseCases;
    constructor(catUseCases: CategoryUseCase);
    getAllCategories(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getRoadMapInfoById(data: GetRoadMapInfoByIdModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addShopInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addAttractions(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addRelaxInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addEventsInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateEventsInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateShopInfo(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateAttraction(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateRalax(data: AddInfoModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addRoadMap(data: AddRoadMapVM): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getRelaxInfo(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getEvents(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getAttractions(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getShops(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
}
