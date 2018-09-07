'use strict'
// расположение облаков
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
// параметры колонок в гистограмме
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
//отступы текста
var TEXT_GAP = 240;
var FONT_HEIGHT = 240;
var FONT_GAP = 40;



// отрисовка информационного облака
var renderCloud = function(ctx, x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

//отрисовка расположения текста в облаке
var renderText = function(ctx, text, x, y){
  ctx.fillStyle = '#8A2BE2';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);
};

var getMaxElem = function(arr){
  var maxElem = arr[0];

  for (var i = 0; i < arr.length; i++){
    if (arr[i] > maxElem) {
      maxElem = arr[i];
    }
  }
  return maxElem;
};


window.renderStatistics = function(ctx, names, times){
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  //вывод текста и его расположение
  renderText(ctx, 'Ура вы победили!', 250, 30);
  renderText(ctx, 'Список результатов:', 240, 50);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];
  var maxTime = getMaxElem(times);

//цикл для отрисовки гитограмм и случайного выбора цвета
  for(var i = 0; i < players.length; i++){
    //var staturate = Math.random();
    var colorOther = 'rgba(25, 25, 112,' + Math.random().toFixed(2) + ')';
    var colorYou = 'rgba(255, 0, 0, 1)';
    var sumOne = CLOUD_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var sumTwo = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], sumOne, CLOUD_Y + FONT_HEIGHT);
    ctx.fillStyle = 'rgba(25, 25, 112, 1';
    // проверка заполнение гистограмм цветом
    if(players[i] !== 'Вы'){
      ctx.fillStyle = colorOther;
    } else {
      ctx.fillStyle = colorYou;
    }
    ctx.fillRect(sumOne, TEXT_GAP - sumTwo, BAR_WIDTH, sumTwo);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.round(times[i]), sumOne, TEXT_GAP - GAP * 2 - sumTwo);
  }
};
