export class Crop{
    CropCode :string;
    CropName:string;
    ScientificName:string;
    Category:string;
    Season:string;
    Image:string;
    FieldCode:string

    constructor(CropCode:string, CropName:string,
                ScientificName:string,Category:string,
                Season:string,Image:string,
                FieldCode:string) {

            this.CropCode = CropCode;
            this.CropName = CropName;
            this.ScientificName = ScientificName;
            this.Category = Category;
            this.Season = Season;
            this.Image = Image;
            this.FieldCode = FieldCode;
    }
}
