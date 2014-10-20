var baloon = (function () {
  var init = function() {
    $('.typearea').keypress(function(e) {
      console.log(String.fromCharCode(e.which));
      generate(String.fromCharCode(e.which));
    });
  };

  var generate = function(character) {
    if(character === ' ') {
      return;
    }

    var color = randomColor({
      luminosity: 'bright',
      format: 'hex'
    });

    var style = {
      'left': '50%',
      'right': '50%',
      'transform': 'scale(40)',
      'color': color,
      'opacity': 0.6
    };

    $('<div>', {
      'class': 'character'
    }).css(style).text(character).appendTo($('body'));


  };

  return {
    init: init
  };

}());