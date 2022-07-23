// querySelector 3 tane çağırma seçenği
// const button = document.querySelector('button');
// const button = document.querySelector('#buttonId');
//const button = document.querySelector('.buttonClass');
const button = document.getElementById('buttonId');
//const button = document.getElementsByClassName('buttonClass')[0];


//İlk Yöntem
// button.addEventListener('click',() =>{
//     console.log("Tıklandı");
// })

//İkinci Yöntem

// function add(){
//     console.log('Tıklandı');
// }

console.log(button);


const liElemanlari=document.querySelectorAll('li');
console.log(liElemanlari);

liElemanlari.forEach(eleman =>{
    eleman.addEventListener('click', e =>{
        // console.log("Tıklandı");
       
        // console.log(e);
        //console.log(e.target);
        e.target.style.color='blue';
    })
})


const ulDegerlerim =document.querySelector('ul');
console.log(ulDegerlerim);

// ulDegerlerim.remove();

liElemanlari.forEach(eleman =>{
    eleman.addEventListener('click', e =>{
      
        e.target.remove();
    })
})
const liElemanim = document.createElement('li');
liElemanim.textContent = 'Javascript';
// append // sona eleman ekler
// prepend // başa eleman ekler


// step 1

// UL etiketini seç

// li oluşturduk

// step 3

// butona tıkladığımda ekle

button.addEventListener('click',() =>{
    const liElemanim = document.createElement('li');
liElemanim.textContent = 'Javascript';
//  ulDegerlerim.prepend(liElemanim);
 ulDegerlerim.append(liElemanim);

})



