var baloon = (function () {
  var init = function () {
    $('.typearea').keypress(function(e) {
      generate(String.fromCharCode(e.which));
    });
  };

  var generate = function (character) {
    if(character === ' ') {
      return;
    }

    var color = randomColor({
      luminosity: 'light',
      format: 'hex'
    });

    var style = {
      'left': getRandom(0, 100) + '%',
      'top': getRandom(0, 100) + '%',
      'transform': 'scale(0.1) translateX(-300px) translateY(-600px)',
      'color': color,
      'opacity': getRandom(0.1, 0.95)
    };

    var newCharacter = $('<div>', {
      'class': 'character'
    }).css(style).text(character).appendTo($('body'));

    setTimeout(function () {
      newCharacter.css('transform', 'scale(' + getRandom(0.1, 1) + ') translateX(-300px) translateY(-600px)');
    }, 50);

    
  };

  var getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  return {
    init: init,
    getRandom: getRandom
  };

}());