document.getElementById("omikuji").onclick = function() {
    let rand = Math.floor(Math.random()*7);

    let resultIMGs = [
        'omikuji-1.jpg',
        'omikuji-2.jpg',
        'omikuji-3.jpg',
        'omikuji-4.jpg',
        'omikuji-5.jpg',
        'omikuji-6.jpg',
        'omikuji-7.jpg',
    ];

    let resultKim = ['大凶','凶','末吉','吉','小吉','中吉','大吉'];

    let commentKim = ['かわいそうに…','残念！','うーん、微妙。','まあまあかな！','ウキウキ！','なにかいいことあるかな？','おめでとう！']

    if (rand === 0) {
        result = 0;
    }
    else if (rand === 1) {
        result = 1;
    }
    else if (rand === 2) {
        result = 2;
    }
    else if (rand === 3) {
        result = 3;
    }
    else if (rand === 4) {
        result = 4;
    }
    else if (rand === 5) {
        result = 5;
    }
    else if (rand === 6) {
        result = 6;
    }

    let target = document.getElementById("result");
    target.src = "img/" + resultIMGs[rand];

    document.getElementById("alert").innerHTML = "あなたの運勢は" + resultKim[rand] + "です！" + commentKim[rand];
    document.getElementById("omikuji").disabled = true;
}
