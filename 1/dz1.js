/*Напишите функцию для создания таблицы размером NхM. Такой, чтобы каждая ячейка заполнялась
случайной буквой русского алфавита и случайным цветом фона (для выполнения задания, воспользуйтесь
методом Math.Random объекта Math; кроме того создайте массив в элементами – буквами алфавита).*/

var tr = prompt();
var td = prompt();

var index = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф', 'ы','в','а',
             'п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю'];

var result = createTable(tr,td);
var elem = document.getElementById('table_from_js');
elem.innerHTML = result;

function createTable(tr,td) {
    var html = '';
    for (var i = 1; i <= tr; i++) {
        html = html + '<tr>';
        for (var k = 1; k <= td; k++) {
            html = html + '<td style="background:' +'rgb('
                +Math.floor(Math.random() * (256))+','
                +Math.floor(Math.random() * (256))+','
                +Math.floor(Math.random() * (256))+')'
                +'">'+index[Math.floor(Math.random() * index.length)]+'</td>';
        }
        html = html + '</tr>';
    }
    return html;
}