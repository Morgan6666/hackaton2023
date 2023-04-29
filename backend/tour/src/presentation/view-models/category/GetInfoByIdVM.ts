import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";


export class GetInfoByIdVM {
    @Expose()
    @ApiProperty({
        description: "Get info by id",
        example: 1
    })
    id: number

    @Expose()
    @ApiProperty({
        description: "Get info by id",
        example: 1
    })
    user_id: number

    static fromViewModel(vm:GetInfoByIdVM): GetRoadMapInfoByIdModel{
        return new GetRoadMapInfoByIdModel(vm.id, vm.user_id);
    }
}