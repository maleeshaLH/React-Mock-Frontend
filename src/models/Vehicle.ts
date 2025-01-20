export class Vehicle {
    VehicleCode: string;
    LicensePlate: string;
    Category: string;
    FuelType: string;
    Status: string;
    Remark: string;

    constructor(VehicleCode:string, LicensePlate:string, Category:string,
                FuelType:string,Status:string,Remark:string,) {
        this.VehicleCode = VehicleCode;
        this.LicensePlate = LicensePlate;
        this.Category = Category;
        this.FuelType = FuelType;
        this.Status = Status;
        this.Remark = Remark;
    }
}