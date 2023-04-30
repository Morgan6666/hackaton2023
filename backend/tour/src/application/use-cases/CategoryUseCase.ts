import { Injectable, Logger } from "@nestjs/common";
import { ServiceResponse } from "infrastructure/utils/serviceResponse";
import { ICategoryRepository } from "application/ports/ICategoryRepository";
import { GetRoadMapInfoByIdModel } from "domain/models/GetRoadMapInfoByIdModel";
import e from "express";
import { ShopModel } from "domain/models/ShopModel";
import { runInThisContext } from "vm";
import { AttractionsModel } from "domain/models/AttractionsModel";
import { EventModel } from "domain/models/EventModel";
import { RelaxModel } from "domain/models/RelaxModel";
import { AddInfoModel } from "domain/models/AddInfoModel";
import { AddRoadMapModel } from "domain/models/AddRoadMapModel";

@Injectable()
export class CategoryUseCase {
  private readonly logger = new Logger(CategoryUseCase.name);
  public serviceRes = new ServiceResponse();

  constructor(private readonly categoryRepo: ICategoryRepository) {}

  async getCategories() {
    this.logger.log(`Получаем данные всех категорий`);
    const result = await this.categoryRepo.getCategories();
    if (result) {
      this.logger.log(`Данные категории получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    } else {
      this.logger.log(`Ошибка получений данных категорий`);
      return this.serviceRes.categoryGetError();
    }
  }

  async getRoadMapInfoById(entity: GetRoadMapInfoByIdModel) {
    this.logger.log(`Получаем данные road map`);
    const result = await this.categoryRepo.getRoadMapInfoById(entity);
    if (result) {
      this.logger.log(`Данные по road map получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    } else {
      this.logger.warn(`Данные по road map не получены`);
      return this.serviceRes.internalServerError();
    }
  }

  async addShopInfo(entity: AddInfoModel) {
    this.logger.log(`Проверяем наличие категории`);
    const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
    if (checkCategory) {
      this.logger.log(`Добавляем информацию о магазине`);
      const result = await this.categoryRepo.addShopInfo(entity);
      this.logger.log(`Информация успешно добавлена`);
      return this.serviceRes.successRes();
    } else {
      this.logger.warn(`Категория не существует`);
      return this.serviceRes.categoryDoesntExists();
    }
  }

  async addAttractionInfo(entity: AddInfoModel) {
    this.logger.log(`Проверяем наличие категории`);
    const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
    if (checkCategory) {
      this.logger.log(`Добавляем информацию по развлечениям`);
      const result = await this.categoryRepo.addAttractionInfo(entity);
      this.logger.log(`Информация успешно добавлена`);
      return this.serviceRes.successRes();
    } else {
      this.logger.warn(`Категория не существует`);
      return this.serviceRes.categoryDoesntExists();
    }
  }

  async addEventsInfo(entity: AddInfoModel) {
    this.logger.log(`Проверяем наличие категории`);
    const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
    if (checkCategory) {
      this.logger.log(`Добавляем информацию о событиях`);
      const result = await this.categoryRepo.addEventsInfo(entity);
      this.logger.log(`Информация успешно добавлена`);
      return this.serviceRes.successRes();
    } else {
      this.logger.warn(`Категория не существует`);
      return this.serviceRes.categoryDoesntExists();
    }
  }

  async addRelaxInfo(entity: AddInfoModel) {
    this.logger.log(`Проверяем наличие категории`);
    const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
    if(checkCategory){
      this.logger.log(`Добалвяем информацию об отдыхе`);
      const result = await this.categoryRepo.addRelaxInfo(entity);
      this.logger.log("Информация успешно добавлена");
      return this.serviceRes.successRes();
    }
    else{
      this.logger.warn(`Категория не существует`);
      return this.serviceRes.categoryDoesntExists();
    }
  }

  async updateRelaxInfo(entity: AddInfoModel){
    this.logger.log(`Проверяем наличие категории`);
    const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
    if(checkCategory){
      this.logger.log(`Обновляем данные таблицы relax`);
      const result = await this.categoryRepo.updateRelaxInfo(entity);
      this.logger.log('Информация в таблице relax обновлена');
      return this.serviceRes.successRes();
    }
    else{
      this.logger.warn('Категория не существует');
      return this.serviceRes.categoryDoesntExists();
    }
  
  }

  async updateShopInfo(entity: AddInfoModel){
    this.logger.log(`Проверяем наличие категории`);
    const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
    if(checkCategory){
      this.logger.log(`Обновляем данные таблицы relax`);
      const result = await this.categoryRepo.updateShopInfo(entity);
      this.logger.log('Информация в таблице shop обновлена');
      return this.serviceRes.successRes();
    }
    else{
      this.logger.warn('Категория не существует');
      return this.serviceRes.categoryDoesntExists();
    }
  }

  async updateAttractionInfo(entity: AddInfoModel){
    this.logger.log(`Проверяем наличие категории`);
    const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
    if(checkCategory){
      this.logger.log(`Обновляем данные таблицы attraction`);
      const result = await this.categoryRepo.updateAttractionInfo(entity);
      this.logger.log('Информация в таблице attraction обновлена');
      return this.serviceRes.successRes();
    }
    else{
      this.logger.warn('Категория не существует');
      return this.serviceRes.categoryDoesntExists();
    }
  }
  

  async updateEventsInfo(entity: AddInfoModel){
    this.logger.log(`Проверяем наличие категории`);
    const checkCategory = await this.categoryRepo.checkCategoryExist(entity);
    if(checkCategory){
      this.logger.log(`Обновляем данные таблицы event`);
      const result = await this.categoryRepo.updateEventInfo(entity);
      this.logger.log('Информация в таблице shop обновлена');
      return this.serviceRes.successRes();
    }
    else{
      this.logger.warn('Категория не существует');
      return this.serviceRes.categoryDoesntExists();
    }
  }

  async addRoadMap(entity: AddRoadMapModel){
    this.logger.log(`Добавляем данные в табилцу road_map`);
    const result = await this.categoryRepo.addRoadMap(entity);
    if(result){
      this.logger.log(`Данные road_map добавлены`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.log(`Ошибка добавления данных`);
      return this.serviceRes.internalServerError();
    }
  }

  async getAttractionsInfo(){
    this.logger.log(`Получаем данные о attractions`);
    const result = await this.categoryRepo.getAttractionInfo();
    if(result){
      this.logger.log(`Данные получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.log(`Данные не получены`);
      return this.serviceRes.internalServerError();
    }
  }


  async getShopsInfo(){
    this.logger.log(`Получаем данные shops`);
    const result = await this.categoryRepo.getShopInfo();
    if(result){
      this.logger.log(`Дынные получены `);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.log(`Данные не получены`);
      return this.serviceRes.internalServerError();
    }
  }

  async getEventsInfo(){
    this.logger.log(`Получаем данные событий`);
    const result = await this.categoryRepo.getEventsInfo();
    if(result){
      this.logger.log(`Данные получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.log(`Данные не получены`);
      return this.serviceRes.internalServerError();
    }
  }

  async getRelaxInfo(){
    this.logger.log(`Получаем данные relax`);
    const result = await this.categoryRepo.getRelaxInfo();
    if(result){
      this.logger.log(`Данные получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.log(`Данные не получены`);
      return this.serviceRes.internalServerError();
    }
  }

  
}
