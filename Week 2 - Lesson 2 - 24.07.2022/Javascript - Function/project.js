function hello () {
    console.log("Hello");
}
// hello();
// hello();
// hello();




//Fonksiyonlara parametre gönderme

const alperenbozkurt = function (ad ="Alperen", soyad="Bozkurt") {
    console.log(`Ad Soyad ${ad} ${soyad}`)
}
alperenbozkurt("kemal", "doğukan");
// Default değer oluyor 
alperenbozkurt();

// Eski tipten arrowa hafif geçiş
const kareAlani = function(kenar) {
   return kenar*kenar;
}
let sonuc =kareAlani(6);
console.log(sonuc);
// Arrow ilk Versiyon
// const kareAlanim = (kenar) => {
//     return kenar**2;
// }
// Tek parametreyse
// const kareAlanim = kenar => {
//     return kenar**2;
// }
// Tek satırsa
const kareAlanim = kenar => kenar**2;
console.log(kareAlanim(7));


// const donus = () =>  {
//     return "Burak";
// }

const stringDonus = () => "Burak" 
console.log(stringDonus());


//Uygulama 
//Ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın

const urunSatis = (urunler,vergi) => {
    let toplam =0;
    for(let i=0;i<urunler.length;i++) {
    toplam = toplam + urunler[i] + urunler[i]*vergi;
    }
    return toplam;
}
console.log(urunSatis([10,20,30],0.25));






