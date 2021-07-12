let inputSearch = document.querySelector('input');

let mas = [];

const validate = document.querySelector('.validateBtn');
validate.addEventListener('click', function (event) {
    event.preventDefault()
    if (inputSearch.value == '') {
        console.log('field is empty');
    } else {
        console.log(inputSearch.value);
        mas.push(inputSearch.value);
        draw();
    }
    console.log(mas);
})
function draw() {
    let out = ''
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] == mas[i - 1]) {
            mas.pop(inputSearch.value);
            continue
        } else {
            out += `<li>${mas[i]}</li>`
        }

    }
    document.querySelector('.inner').innerHTML = out;
}
