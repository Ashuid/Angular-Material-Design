export class AdService {
    getAds() : string[] {

        var array = new Array();
        var i = 0;
        do{array.push("Your ad here: " + Math.random().
            toString(36).replace(/[^a-z]+/g, '').substr(0, 5)); i++;} while(i<10);
        

        return array;
    }
}