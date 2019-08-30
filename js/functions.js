create_drop = function(e) {
  var droplet = document.createElement('div');
  console.log(droplet);
  $(droplet)
    .addClass('drop')
    .css('left', e.clientX)
    .css('top', e.clientY);
  $('#app').append(droplet);
  animate_drop(droplet, function() {
    $(droplet).remove();
  });
};

animate_drop = function(element, callback) {
  var height = 0;
  var width = 0;
  var animateInterval = setInterval(function() {
    $(element)
      .css('height', height + 'em')
      .css('width', width + 'em')
      .css(
        'border-color',
        '#' + Math.floor(Math.random() * 16777215).toString(16)
      );
    width++;
    height++;
  }, 100);
  setTimeout(function() {
    clearInterval(animateInterval);
    callback();
  }, 5000);
};

$('#app').click(function(e) {
  create_drop(e);
});
