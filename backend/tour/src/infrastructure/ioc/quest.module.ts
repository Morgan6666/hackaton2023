import { Module } from "@nestjs/common";
import { IQuestRepository } from "application/ports/IQuestRepository";
import { QuestUseCase } from "application/use-cases/QuestUseCase";
import { QuestRepository } from "infrastructure/database/repositories/QuestRepository";
import { QuestsController } from "presentation/controllers/QuestController";




@Module({
    imports: [],
    controllers: [QuestsController],
    providers: [
        QuestUseCase,
        {provide: IQuestRepository, useClass: QuestRepository}
    ]
})
export class QuestModule {}