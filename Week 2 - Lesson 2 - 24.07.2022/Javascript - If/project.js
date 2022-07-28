// Uygulama



//Şifre uzunluğu 12den büyükse güçlü şifre
//8 ile 12 arasındaysa yeterli şifre 8'den küçükse yetersiz olduğunu bastırın



const yeniSifre="dasdadasdasda!321";

if(yeniSifre.length > 12) {
   console.log("Şifre Güçlü");
}
else if (yeniSifre.length<=12 && yeniSifre.length>=8) {
   console.log("Şifre Yeterli");
}
else {
   console.log("Şifre Yetersiz");
}