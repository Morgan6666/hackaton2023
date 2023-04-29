import { INestApplicationContext } from "@nestjs/common";
import { IEntity } from "domain/shared/IEntity";


export class GetRoadMapInfoByIdModel implements IEntity {
    id: number;
    user_id: number;
    
    constructor(
        id: number,
        user_id: number
    ){
        this.id = id;
        this.user_id = user_id;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof GetRoadMapInfoByIdModel)) return false;
        return this.id === entity.id;
      }
}