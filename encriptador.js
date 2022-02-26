var active_a,active_b,active_c,active_d;
function doencrypt(){
  var unico = Math.floor((Math.random() * 100) + 1);
  enctext=encrypt($("#codent").val());
  if(enctext !== ""){
    codeinicio="<script>";
    codetocopy="document.getElementById('identif"+unico+"').innerHTML = unescape('"+enctext+"');";
    codetofin="<\/script\>"
    codetodiv="<div id='identif"+unico+"'><\/div>";
    $("#precode").text(codeinicio);
    $("#ecode").text(codetocopy);
    $("#ecodefin").text(codetofin);
    $("#divcode").text(codetodiv);
    $("#abolal").css('opacity','1');
  }
  $("#codar").css('opacity','.2');
  return false;
}
function encrypt(tx){
  var hex='';
  var i;
  for (i=0; i<tx.length; i++){
    hex += '%'+hexfromdec(tx.charCodeAt(i));
  }
  return hex;
}
function hexfromdec(num){
  if (num > 65535){
    return ("error!") ;
  }
  first = Math.round(num/4096 -.5);
  temp1 = num - first * 4096;
  second = Math.round(temp1/256 -.5);
  temp2 = temp1 - second * 256;
  third = Math.round(temp2/16 -.5);
  fourth = temp2 - third * 16;
  return (""+getletter(third)+getletter(fourth));
}
function getletter(num){
  if (num < 10){
    return num;
  }
  switch(num){
    case 10: return("A");
    case 11: return("B");
    case 12: return("C");
    case 13: return("D");
    case 14: return("E");
    case 15: return("F");
    default: return("");
  }
}
$(document).on("pagecreate","#encriptador",function(){
  $("#codar,#abolal").css('opacity','.2');
  $("#codent").on('keyup', function(){
    $("#codar,#abolal").css('opacity','1');
  });
  $("#acodar").on('vclick', doencrypt);
  $("#bolal").on('vclick', function(e){
    e.preventDefault();
    $("#codar,#abolal").css('opacity','.2');
    $("#codent").val('');
    $("#ecode,#precode,#precodedos,#ecodeprend,#ecodefin,#divcode").text('');
    $("#subir").trigger('click');
  });
  $("#bajar").on('vclick', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(document).height()
    },
    1500);
  });
  $('#subir').on('vclick', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: '0px'
    },
    1500);
  });
});