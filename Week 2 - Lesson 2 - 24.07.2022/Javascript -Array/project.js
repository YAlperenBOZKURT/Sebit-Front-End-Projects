let isimler = ['alperen', 'yusuf', 'can'];
// console.log(isimler[0]); 

// isimler[1] = 'bozkurt';
// console.log(isimler);


let yaslar = [46, 5, 6, 30];
console.log(yaslar[3]);


let rastgele = ["yusuf", "alperen", 10, 15];
console.log(rastgele);


    //Dizimin eleman sayısı 

console.log(rastgele.length);


let tireli = isimler.join('-');
console.log(tireli);

let virgüllü =isimler.join(", ");
console.log(virgüllü);


let index = isimler.indexOf("can");
console.log(index);


//Concat - Birleştirme Methodu (Ana dizi değişmiyor )

let eklenmis = isimler.concat(["osman", "merve"]);
console.log(eklenmis);
console.log(isimler);

isimler.push('Leyla');
console.log(isimler);


isimler.pop();
console.log(isimler);


