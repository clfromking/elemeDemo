(function () {
    var logo = document.getElementsByClassName('logo')[0];
    var mask = document.getElementsByClassName('mask')[0];
    var content = document.getElementsByClassName('content')[0];
    var close = document.getElementsByClassName('close')[0];
    var start = document.getElementsByClassName('clickMe')[0];
    var list = document.getElementsByClassName('list')[0];
    var arrList = [];
    function init() {
        showMask();
        hideMask();
        clickStart();
    }
    init();

    function showMask() {
        logo.onclick = function () {
            mask.style.display = 'block';
            content.style.display = 'block';
        }
    }

    function hideMask() {
        close.onclick = function () {
            mask.style.display = 'none';
            content.style.display = 'none';
        }
    }

    function clickStart() {
        start.onmouseenter = function () {
            start.style.backgroundPosition = '0' + ' ' + '-40px';
        }
        start.onmouseleave = function () {
            start.style.backgroundPosition = '0' + ' ' + '0px';
        }
        start.onmouseup = function () {
            start.style.backgroundPosition = '0' + ' ' + '-40px';
        }
        start.onmousedown = function () {
            start.style.backgroundPosition = '0' + ' ' + '-80px';
            createRandom();
        }
    }

    function createRandom() {
        var random = Math.floor(Math.random() * 100 + 1);
        arrList.push(random);
        if(arrList.length > 9){
            arrList.shift();
        }
        console.log(arrList);
        for(var i = 0; i < arrList.length; i++){
            var li = document.createElement('li');
            li.innerText = '此时扔出了一个' + arrList[i];
            list.appendChild(li);
        }
    }
})()