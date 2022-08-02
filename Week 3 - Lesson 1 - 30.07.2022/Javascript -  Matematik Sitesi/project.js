const form = document.querySelector('.question-form'); // formu çekiyoruz
const submit =document.getElementById('submit');
const correctsAns = ["E","H","H","E"];
const button = document.getElementById('submit');

const result = document.querySelector('.result'); // sonucu çekiyoruz

form.addEventListener('submit',(submit) => {
    submit.preventDefault(); // sayfanın yenilenmesini engellemek için
    let trueScore=0;
    const answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value] // burada kullanıcın verdiği cevapları alıyoruz

    answers.forEach ((ans,index) => {
        if ( ans === correctsAns[index])
    {
        trueScore +=25 // böylece her doğru cevapta +25 puan gelecke
    }    } )
    result.classList.remove('d-none');   // result classını görünür yapmak için
    document.getElementById("percentage").textContent = `${trueScore}% `; // span içindeki yazıyı değiştirmek için
    if (trueScore === 100) {
        document.getElementById("full").classList.remove('d-none'); 
        // document.getElementById('submit').classList.add("disabled");  // boostrap class yapısını kullanarak il böyle yaptım
        // document.getElementById("submit").disabled = true;  disabled olayını aktif etmek
        button.setAttribute ('disabled',"");  // attribute etklemek için başak bir seçenek


    }

})






