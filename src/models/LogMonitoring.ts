export class LogMonitoring{
    LogCode: string;
    LogDate: string;
    Observation: string;
    Image: string;
    FieldCode: string;
    CropCode: string;
    StaffId: string;

   constructor(LogCode:string, LogDate:string, Observation:string,
               Image:string,FieldCode:string,CropCode:string,StaffId:string) {
       this.LogCode = LogCode;
       this.LogDate = LogDate;
       this.Observation = Observation;
       this.Image = Image;
       this.FieldCode = FieldCode;
       this.CropCode = CropCode;
       this.StaffId = StaffId;

   }
}