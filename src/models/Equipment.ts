export class Equipment {
    EquipmentId: string;
    EquipmentName: string;
    EquipmentType: string;
    Status: string;
    FieldCode: string;
    StaffId: string;

    constructor(EquipmentId:string,EquipmentName:string,EquipmentType:string,
                Status:string,FieldCode:string,StaffId:string) {
        this.EquipmentId = EquipmentId;
        this.EquipmentName = EquipmentName;
        this.EquipmentType = EquipmentType;
        this.Status = Status;
        this.FieldCode = FieldCode;
        this.StaffId = StaffId;
    }
}