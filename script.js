//calculadora

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

   
    if(bmi <18.5){
        description = 'Cuidado você esta abaixo do peso!'
    } else if(bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideal.';
    } else if(bmi >= 25 && bmi <= 30){
        description = 'Você está com sobrepeso!';
    } else if(bmi >= 30 && bmi <= 35){
        description = 'Cuidado você esta com obesidade moderada!';
    } else if(bmi >= 35 && bmi <= 40){
        description = 'Cuidado você esta com obesidade severa!';
    } else{
        description = 'Você esta com obesidade morbida!'
    }
    

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});




document.querySelectorAll('.gender-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    });
});


function substituirDiv(){
    window.location.href = 'refeição.html';
}





































