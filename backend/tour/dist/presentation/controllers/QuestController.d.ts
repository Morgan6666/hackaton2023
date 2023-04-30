import { QuestUseCase } from "application/use-cases/QuestUseCase";
import { QuestModel } from "domain/models/QuestModel";
export declare class QuestsController {
    private readonly questUseCases;
    constructor(questUseCases: QuestUseCase);
    getQuestInfo(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addUserQuest(data: QuestModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getUserQuestInfo(data: QuestModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateEthapsSTatus(data: QuestModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
}
