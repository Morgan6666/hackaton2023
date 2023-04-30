import { Injectable } from "@nestjs/common";



@Injectable()
export abstract class IQuest<Entity>{
    abstract addUserQuest(entity: Entity);
    abstract addUserEthaps(entity: Entity);
    abstract getQuestInfo();
    abstract getUserQuestInfo(entity: Entity);
    abstract updateEthapsStatus(entity: Entity);

    
}