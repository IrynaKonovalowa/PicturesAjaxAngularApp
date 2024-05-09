export class Picture {
    file:string; 
    name: string;
    year: number;    
    height: number;
    width: number;
    museum: string;

    constructor(file: string, name: string, year: number, artist: string, height: number, width: number, museum: string) 
    {
        this.file = file;
        this.name = name;
        this.year = year;        
        this.height = height;
        this.width = width;
        this.museum = museum;
    }
}