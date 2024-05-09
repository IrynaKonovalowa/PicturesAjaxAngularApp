import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Picture } from './picture';

@Component({
    selector: 'my-app',
    templateUrl:'./app.component.html',	
    styleUrls:['./app.component.css'],
    providers: [HttpService]
})
export class AppComponent implements OnInit {
  file: string = "../assets/1.webp" ; 
  name: string = "Enfant geopolitique observant la naissance de l'homme nouveau";
  year: number = 1943;  
  height: number = 44.5;
  width: number = 52;
  museum: string = "Dali Musée, Florida";
    pictures: Picture[];
    error: any;
    constructor(private httpService: HttpService) { }
    ngOnInit() {
        this.httpService.getData().subscribe(
            { 
                next: (data: Picture[]) => this.pictures = data["pictureList"]               
            });                
    }
    Info(n:number) {
        this.file = this.pictures[n].file;    
        this.name = this.pictures[n].name;
        this.year = this.pictures[n].year;    
        this.height = this.pictures[n].height;  
        this.width = this.pictures[n].width;  
        this.museum = this.pictures[n].museum ;  
}
}