
var prev_elem = '';

function inDiv (address) {
    document.getElementById('address').innerText = address;

    document.getElementById(address).className = 'active';
    if (prev_elem != '') {
        prev_elem.className = '';
    }
    prev_elem = document.getElementById(address);
}

var i = 1, j = 1;
function activeCell(i, j, flag) {
    if (i < 1) i = 1;
    if (j < 1) j = 1;
    if (i > 8) i = (i%8)+1;
    if (j > 8) j = (j%8)+1;


    if (flag) {
        document.getElementById('chessBoard').children[0].children[i].children[j].classList.add('active');
    } else {
        document.getElementById('chessBoard').children[0].children[i].children[j].classList.remove('active');
    }
}

window.onkeydown = function (event) {
    activeCell(i, j, false);
    switch (event.keyCode) {
        case 37:
            j--;
            activeCell(i, j, true);
            console.log(event.keyCode, i, j);
            break;
        case 38:
            i--;
            activeCell(i, j, true);
            console.log(event.keyCode, i, j);
            break;
        case 39:
            j++;
            activeCell(i, j, true);
            console.log(event.keyCode, i, j);
            break;
        case 40:
            i++;
            activeCell(i, j, true);
            console.log(event.keyCode, i, j);
            break;
    }
};