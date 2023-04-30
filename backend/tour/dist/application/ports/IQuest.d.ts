export declare abstract class IQuest<Entity> {
    abstract addUserQuest(entity: Entity): any;
    abstract addUserEthaps(entity: Entity): any;
    abstract getQuestInfo(): any;
    abstract getUserQuestInfo(entity: Entity): any;
    abstract updateEthapsStatus(entity: Entity): any;
}
