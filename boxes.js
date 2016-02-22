$(function(){
  // $('#secretBox').append('<h1>secret box!<h1>');
  // $('#secretBox').css('background-color','white');
  // $('#row1').children().attr('class','box boxType3');
  // $('#row2').children().last().css('background-color','rgb(255,255,153)');
  // $('#row3').children().last().css('background-color','rgb(255,255,153)');
  // $('#row4').children().last().css('background-color','rgb(255,255,153)');
  // $('.boxType1').css('background','white');
  // $('#row2 div:nth-last-child(n+3)').removeAttr('class');
  // $('div').not('.row, #secretBox, #container').css('width','2px');
  // $('#container').on('click',function(){
  //   console.log(event.pageX,event.pageY);
  // })
  // $('.boxType1').on('click',function(){
  //   window.location.href = "https://workbook.galvanize.com/cohorts/42/dashboard";
  //   alert('You cannot leave this page!');
  // })
  // $('.box').on('click', function(){
  //   $('.box').append('<img src="http://i2.cdn.turner.com/cnnnext/dam/assets/150324154025-14-internet-cats-restricted-super-169.jpeg">');
  // }, function(){
  //   $('img').remove();
  // })
  $("#container").on('click',function(event){
    console.log('click');
    var tar = $(event.target)
    $(this).css("background","black");
    tar.css("background",'white');
    if(tar.attr('id')===('#container')){
      $(this).css("background-color","lime");
    }
  })
});
