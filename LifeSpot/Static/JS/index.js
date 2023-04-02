function filterContent() {

    // Сохраняем текст пользовательского запроса.
    //let inputString = document.getElementsByTagName('input')[1].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');
    
    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('h2').innerText;
        //console.log(videoText.toLowerCase());
        //console.log(inputString.toLowerCase());
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            /*console.log("!!");*/
            elements[i].style.display = 'none';
        } else {
            /*console.log("@@");*/
            elements[i].style.display = 'inline-block';
        }
    }
    
}
let session = new Map();




function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}
function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.yandex.ru"
    }
}
let sessionLog = function logSession(session) {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}

