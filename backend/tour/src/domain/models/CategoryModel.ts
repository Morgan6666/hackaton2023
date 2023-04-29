import { IEntity } from "domain/shared/IEntity";





export class CategoryModel implements IEntity {
    name?: string;
    description?: string

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof CategoryModel)) return false;
        return this.name === entity.name;
      }
}