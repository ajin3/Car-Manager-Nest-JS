import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsDto } from './car.dto';

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService){}

    @Get()
    public getCars(){
        return this.carsService.getCars();
    }

    @Post()
    public postCars(@Body() cars:CarsDto) {
       return this.carsService.postCars(cars)
    }

    @Get(':id')
    public async getCarsById(@Param('id') id:number) {
        return this.carsService.getCarsById(id);
    }

    @Delete(':id')
    public async deleteCarsById(@Param('id') id:number) {
        return this.carsService.deleteCarsById(id);
    }

    @Put(':id')
    public async putCarsById(@Param('id') id:number, @Query() query) {
        const propertyName=query.property_name;
        const propertyValue=query.property_value;
       return this.carsService.putCarsById(id, propertyName,propertyValue)
    }

}
