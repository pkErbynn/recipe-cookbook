export class Recipe {
  public name: String;
  public description: String;
  public imagePath: String;

  constructor(name: String, desc: String, imgPath: String){
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }
}
