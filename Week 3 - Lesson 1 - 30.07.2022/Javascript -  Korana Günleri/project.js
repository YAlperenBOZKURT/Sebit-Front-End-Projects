const form = document.querySelector('.question-form'); // formu çekiyoruz

const correctsAns = ["E","E","E","E"]

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


})






