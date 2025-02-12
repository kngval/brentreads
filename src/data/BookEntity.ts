export class BookEntity {
  title: string;
  synopsis : string;
  author : string;
  rating : number;
  genre : string[];
  imgPath : string;
  constructor(title : string,synopsis:string, author: string,genre:string[], rating: number,imgPath : string){
   this.title = title;
   this.synopsis = synopsis
   this.author = author;
   this.rating = rating;
   this.genre = genre; 
   this.imgPath = imgPath; 
  }
}

