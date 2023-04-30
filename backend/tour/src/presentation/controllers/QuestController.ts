import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { QuestUseCase } from "application/use-cases/QuestUseCase";
import { QuestModel } from "domain/models/QuestModel";



@ApiTags('Quests')
@Controller('quests')
export class QuestsController {
    constructor(private readonly questUseCases: QuestUseCase) {}

    @Get("quest_info")
    @ApiOperation({
        summary: "Get quest info categories category"
    })
    async getQuestInfo(){
        const result = await this.questUseCases.getQuestInfo();
        return result;
    }
    

    @Post("add_user_quest")
    async addUserQuest(@Body() data: QuestModel){
        const result = await this.questUseCases.addUserQuest(data);
        return result;
    }

    @Post("getUserQuestInfo")
    async getUserQuestInfo(@Body() data: QuestModel){
        const result = await this.questUseCases.getUserQuestInfo(data);
        return result;
    }

    @Post("update_status")
    async updateEthapsSTatus(@Body() data: QuestModel){
        const result = await this.questUseCases.updateEthapsStatus(data);
        return result;
    }
}

