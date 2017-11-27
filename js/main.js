$('.hover1').hover(function() {
    $('.hoverimg1').toggleClass ('hideimg')
    
})

$('.hover2').hover(function() {
    $('.hoverimg2').toggleClass ('hideimg')
    
})

$("#img2").on({
 "mouseover" : function() {
    this.src = 'img/line2.png';
  },
  "mouseout" : function() {
    this.src='img/line.png';
  }
});

