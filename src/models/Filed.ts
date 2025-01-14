export class Field{
    fieldCode :string;
    fieldName:string;
    fieldLocation:string;
    extentSize:string;
    fieldImage01:string;
    fieldImage02:string;

    constructor(fieldCode:string, fieldName:string,
                fieldLocation:string,ExtentSize:string,
                FieldImage01:string,FieldImage02:string) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.extentSize = ExtentSize;
        this.fieldImage01 = FieldImage01;
        this.fieldImage02 = FieldImage02;
    }

}