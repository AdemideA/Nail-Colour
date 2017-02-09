
$('.SelectButton').on('click', function() {
    var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ','
                     + (Math.floor((256-199)*Math.random()) + 200) + ','
                     + (Math.floor((256-199)*Math.random()) + 200) + ')';
    $('.colourBox').css("background", hue);
});