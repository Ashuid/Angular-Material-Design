export class ProductService {
    getProducts() : string[] {

        //Shenanigans
        var i = 0;
        var array = new Array();
        do{array.push("Random Item Number: " + Math.floor(Math.random() * (10000 - 0 + 1) + 0)); i++;} while(i<10);

        return array;
    }
}