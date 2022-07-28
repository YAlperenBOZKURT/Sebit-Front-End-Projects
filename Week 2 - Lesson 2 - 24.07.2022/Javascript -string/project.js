// let mail = "yalperenbozkurt@gmaill.com";
let mail = "yalperenbozkurt@gmaill.com";
console.log(mail);



    //Birleştirme

let ad = "Alperen";
let soyad ="Bozkurt  HHH";
let adsoyad = ad + " " + soyad ;
console.log(adsoyad);
console.log(adsoyad[0]);

    //Kaç Karakter

console.log(adsoyad.length);


    //String Metodlar

console.log(adsoyad.toUpperCase());
let kucukAdSoyad= adsoyad.toLowerCase();
console.log(kucukAdSoyad);


    //Kaçıncı İndexte Bulunduğu
let index = adsoyad.indexOf("p");
let indexLast = adsoyad.lastIndexOf("e");
console.log(index);
console.log(indexLast);


    //Slice Kullanımı 
let ilkIsim = adsoyad.slice(0,7);
console.log(ilkIsim);   


    //Replace - Yer değiştirme
let yerDegistir = adsoyad.replace(" ","");
console.log(yerDegistir);


    //ReplaceAll
let yerDegistirAll = adsoyad.replaceAll(" ","");
console.log(yerDegistirAll);

