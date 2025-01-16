export class Staff {
    Id:string;
    Name:string;
    Address:string;
    Description:string;
    Gender:string;
    JoinedDate:string;
    DateOfBirth:string;
    Role:string;
    ContactNo:string;
    Email:string;
    VehicleCode:string;

    constructor(Id:string,Name:string,Address:string,
                Description:string,Gender:string,
                JoinedDate:string,DateOfBirth:string,
                Role:string,ContactNo:string,Email:string,
                VehicleCode:string) {
        this.Id = Id;
        this.Name = Name;
        this.Address = Address;
        this.Description = Description;
        this.Gender = Gender;
        this.JoinedDate = JoinedDate;
        this.DateOfBirth = DateOfBirth;
        this.Role = Role;
        this.ContactNo = ContactNo;
        this.Email = Email
        this.VehicleCode = VehicleCode;
    }
}