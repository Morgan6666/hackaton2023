import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CategoryUseCase } from "application/use-cases/CategoryUseCase";
import { throws } from "assert";
import { AddInfoModel } from "domain/models/AddInfoModel";
import { AddRoadMapModel } from "domain/models/AddRoadMapModel";
import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";
import { AddInfoVM } from "presentation/view-models/category/AddInfoVM";
import { AddRoadMapVM } from "presentation/view-models/category/AddRoadMapVM";
import { GetInfoByIdVM } from "presentation/view-models/category/GetInfoByIdVM";
import { runInThisContext } from "vm";



@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(private readonly catUseCases: CategoryUseCase) {}

    @Get("categories")
    @ApiOperation({
        summary: "Get all categories category"
    })
    async getAllCategories() {
        const result = await this.catUseCases.getCategories();
        return result;
    }

    @Post("map_info")
    @ApiOperation({
        summary: "Get roadmap info by id"
    })
    async getRoadMapInfoById(@Body() data: GetRoadMapInfoByIdModel){
        const result = await this.catUseCases.getRoadMapInfoById(data);
        return result;
    }

    @Post("add_shop")
    @ApiOperation({
        summary: "Add shop info"
    })
    async addShopInfo(@Body() data: AddInfoModel){
        const result = await this.catUseCases.addShopInfo(data);
        return result;
    }

    @Post("add_attractions")
    @ApiOperation({
        summary: "Add attractions"
    })
    async addAttractions(@Body() data: AddInfoModel){
        const result = await this.catUseCases.addAttractionInfo(data);
        return result;
    }

    @Post("add_relax")
    @ApiOperation({
        summary: "Add relax info"
    })
    async addRelaxInfo(@Body() data: AddInfoModel){
        const result = await this.catUseCases.addRelaxInfo(data);
        return result;
    }

    @Post("add_events")
    @ApiOperation({
        summary: "Add events info"
    })
    async addEventsInfo(@Body() data: AddInfoModel){
        const result = await this.catUseCases.addEventsInfo(data);
        return result;
    }

    @Post("update_events")
    @ApiOperation({
        summary: "Update events"
    })
    async updateEventsInfo(@Body() data: AddInfoModel){
        const result = await this.catUseCases.updateEventsInfo(data);
        return result;
    }

    @Post("update_shop")
    @ApiOperation({
        summary: "Update shops info"
    })
    async updateShopInfo(@Body() data: AddInfoModel){
        const result = await this.catUseCases.updateShopInfo(data);
        return result;
    }

    @Post("update_attraction")
    @ApiOperation({
        summary: "Update events"
    })
    async updateAttraction(@Body() data: AddInfoModel){
        const result = await this.catUseCases.updateAttractionInfo(data);
        return result;
    }

    @Post("update_relax")
    @ApiOperation({
        summary: "update relax"
    })
    async updateRalax(@Body() data: AddInfoModel){
        const result = await this.catUseCases.updateRelaxInfo(data);
        return result;
    }


    @Post("add_roadmap")
    @ApiOperation({
        summary: "Add roadmap"
    })
    async addRoadMap(@Body() data: AddRoadMapVM){
        const result = await this.catUseCases.addRoadMap(AddRoadMapVM.fromViewModel(data));
        return result;
    }

    @Get('relax')
    async getRelaxInfo(){
        const result = await this.catUseCases.getRelaxInfo();
        return result;
    }

    @Get('events')
    async getEvents(){
        const result = await this.catUseCases.getEventsInfo();
        return result;
    }

    @Get('attractions')
    async getAttractions(){
        const result = await this.catUseCases.getAttractionsInfo();
        return result;
    }

    @Get('shops')
    async getShops(){
        const result = await this.catUseCases.getShopsInfo();
        return result;
    }
}


// abstract getRelaxInfo();
// abstract getEventsInfo();
// abstract getShopInfo();
// abstract getAttractionInfo();