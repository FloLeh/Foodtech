document.addEventListener('DOMContentLoaded', function() {
  let i = 1;
  let j = 3;
  let widthWindow = $(window).width()-350;
  $(' .arrow_left ').css({'opacity':'0'})
  $(' .arrow_right ').click(function(){
    $(' .arrow_left ').css({'opacity':'0.6'})
    if (i < 3){
      $(' .carousel1 ').css({'transform':'translateX(-'+widthWindow*i+'px)'})
      i++;
      console.log(i);
      if (i == 3) {
        $(' .arrow_right ').css({'opacity':'0'})
      }
    }
  })
  $(' .arrow_left ').click(function(){
    $(' .arrow_right ').css({'opacity':'0.6'})
    if (i > 1){
      i--;
      $(' .carousel1 ').css({'transform':'translateX(-'+widthWindow*(i-1)+'px)'})
      console.log(i);
      if (i == 1) {
        $(' .arrow_left ').css({'opacity':'0'})
      }
    }

  })
})
