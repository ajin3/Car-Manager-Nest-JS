import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarsService {
    private cars=CARS;
    public getCars() 
    {
        return this.cars;
    }

    public postCars(cars) {
        return this.cars.push(cars);
    }

    public getCarsById(id): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve)=> {

            const cars = this.cars.find((cars) => cars.id === id);
            if (!cars) {
                throw new HttpException('Not Found', 404)
            }
          return resolve(cars) ;
        });
   
    }

    public deleteCarsById(id) : Promise<any> {
        const carsId = Number(id);cars:Number;
        return new Promise((resolve)=> {
        const index = this.cars.findIndex((cars) => cars.id );
        if (index === -1) {
            throw new HttpException('Not Found', 404)
        }
        this.cars.splice(index,1)
        return this.cars;
        
        });
    }

    public putCarsById(id, propertyName:string, propertyValue:string) : Promise<any>{
        const carId = Number(id);
        return new Promise((resolve)=> {
        const index = this.cars.findIndex((cars) => cars.id );
        if (index === -1) {
            throw new HttpException('Not Found', 404)
        }
        this.cars[index] [propertyName] = propertyValue
        return resolve (this.cars);
    });
    }

}
