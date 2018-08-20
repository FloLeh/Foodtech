window.onload = function(){

  $('.pres').css({'opacity': '1'});
  $('.pres').css({'padding-top': '100px'});

  function disp(classe) {
    $('.pres,.menu,.team').css({'opacity':'0'});
    $('.pres,.menu,.team').css({'padding-top':'0px'});
    $(classe).css({'opacity': '1'});
    $(classe).css({'padding-top': '100px'});
  }

  $('.pres-lab').click(function(){disp('.pres');})
  $('.menu-lab').click(function(){disp('.menu');})
  $('.team-lab').click(function(){disp('.team');})
}
