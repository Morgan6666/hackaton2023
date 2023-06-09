import { DomainException } from "domain/exceptions/DomainException";
import { IEntity } from "domain/shared/IEntity";
import { last } from "lodash";


export class Sign implements IEntity {
    
    email: string;
    lastName: string;
    firtsName: string;
    password: string;
    
    constructor( email: string, firtsName: string, lastName: string, password: string) {
        
        this.email = email;
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.password = password;
        
    }

    equals(entity: IEntity) {
        if (!(entity instanceof Sign)) return false;
        return this.email == entity.email;
        
    }
}