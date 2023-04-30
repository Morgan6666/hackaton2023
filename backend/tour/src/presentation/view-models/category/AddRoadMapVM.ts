// events_id: number;
// shop_id: number;
// user_id: number;
// attractions_id: number;

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { AddRoadMapModel } from "domain/models/AddRoadMapModel";




export class AddRoadMapVM {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "id события",
        example: '1'
    })
    events_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "id магазина",
        example: '1'
    })
    shop_id: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "id пользователя",
        example: '1'
    })
    user_id: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "id отдыха",
        example: '1'
    })
    relax_id: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "id развлечения",
        example: '1'
    })
    attractions_id: number

    static fromViewModel(vm: AddRoadMapVM): AddRoadMapModel {
        return new AddRoadMapModel(vm.events_id, vm.shop_id, vm.user_id, vm.relax_id,vm.attractions_id);
    }

}