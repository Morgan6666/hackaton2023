import { IQuestRepository } from "application/ports/IQuestRepository";
import { QuestModel } from "domain/models/QuestModel";
import { ServiceResponse } from "infrastructure/utils/serviceResponse";
export declare class QuestUseCase {
    private readonly questRepo;
    private readonly logger;
    serviceRes: ServiceResponse;
    constructor(questRepo: IQuestRepository);
    getQuestInfo(): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    addUserQuest(entity: QuestModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    getUserQuestInfo(entity: QuestModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
    updateEthapsStatus(entity: QuestModel): Promise<import("../../infrastructure/types/TServiceRes").TServiceResWithoutContent>;
}
