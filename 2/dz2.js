/*Напишите функцию создания шахматной доски: таблица размером 8х8, 
в которой строки и столбцы пронумерованы соответствующим образом, 
а так же ячейки чередуются по цвету. Подсказка: для чередования можно использовать операцию %.  */

var tr = 9;
var td = 9;

var index = ['A','B','C','D','E','F','G','H'];

var result = createChessBoart(tr,td);
var elem = document.getElementById('chessBoard');
elem.innerHTML = result;

function createChessBoart(tr,td) {
    var html = '';
    for (var i = 1; i <= tr; i++) {
        html = html + '<tr>';
        for (var k = 1; k <= td; k++) {
            if (i == 1) {
                if (k != 1) {
                    html = html + '<td style="border: none !important;">' + index[k-2] + '</td>';
                } else {
                    html = html + '<td style="border: none !important;"></td>';
                }
            } else {

                if (k == 1) {
                    html = html + '<td style="border: none !important;">'+(i-1)+'</td>';
                } else {
                    var color = '';
                    if (i%2==0) {
                        if ((k%2 == 0)) {
                            color = 'white';
                        } else {
                            color = 'black';

                        }
                        html = html + '<td id="'+index[k-2]+(i-1)+'" onclick="inDiv(\''+index[k-2]+(i-1)+'\');" style="background:'+color+';"></td>';
                    } else {
                        if ((k%2 != 0)) {
                            color = 'white';
                        } else {
                            color = 'black';

                        }
                        html = html + '<td id="'+index[k-2]+(i-1)+'"  onclick="inDiv(\''+index[k-2]+(i-1)+'\');" style="background:'+color+';"></td>';
                    }

                }
            }
        }
        html = html + '</tr>';
    }
    return html;
}