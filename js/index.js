//VARIABILI:

var winW = window.innerWidth; //Largezza iniziale pagina
var winH = window.innerHeight; //Altezza iniziale pagina

var sugW = 1024 ; //Largezza suggerita per la fruizione
var sugH = 700 ; //Altezza suggerita per la fruizione
var temp_Glitch = 26 ; // Tempo di update glitch
var cred_menu = false; // se è aperto il menu dei crediti
var strada_diritta=false;
var firstCheck = true; //se è la prima volta che si immete il codice sbagliato del trasmettitore
var cod_esatto = "1409E31";
var errore = 0 ; //inizia errori da
var errore_max = 3 ; //errori massimi concessi
var consolCount = 30; // secondi concessi prima di riconnesione trasmettitore
var tempconsole;
var genuineExit=true; //se si ricarica la pagina attraverso il tasto del browser o della pagina
var terminaleEnd = false; //se il mini gioco del termiale è finito



//se si ricarica la pagina compare un messaggio di conferma:

window.onbeforeunload = function() {
  if (genuineExit==true) {return "";}
  else {}
};



function back_reload() {location.reload();}


function bconf() { //fa comparire la finestra di conferma per tornare alla schermata del titolo
  $("#back_page").fadeIn();
  genuineExit=false;
}
function back_cancel() { //fa scomparire la finestra di ritorno al titolo
  $("#back_page").fadeOut()
  genuineExit=true;
}


//funzione scrivi:

var captionLength = 0;
var caption = '';

$(document).ready(function() {
    captionEl = $('.text');
});

function type() {
    captionEl.html(caption.substr(0, captionLength));
    if(captionLength < caption.length+1) {
        captionLength=captionLength+5; //imposta qunte lettere devono apparire a ripetizione
        setTimeout('type()', 0); //imposta quanto tempo deve passare tra la scrittura di una lettera è l'alrtra
    } else {
        captionLength = 0;
        caption = '';
    }
}

function typeFast() {
    captionEl.html(caption.substr(0, captionLength));
    if(captionLength < caption.length+1) {
        captionLength=captionLength+20; //imposta qunte lettere devono apparire a ripetizione
        setTimeout('type()', 0); //imposta quanto tempo deve passare tra la scrittura di una lettera è l'alrtra
    } else {
        captionLength = 0;
        caption = '';
    }
}


//Quando il documento si carica:

$(document).ready( function() {
  $("#title").css("animation","fadeIn 1s ease-in forwards");
  $("footer").css("animation","fadeIn 1s ease-in forwards"); //fai apparire il footer
  $(".switch-label").trigger("click"); //simula click su lable (avvia effetto CTR)
  $(".switch-label").css("display","none"); //togli swich label
})

//mostra un icona se lo userAgent del browser non è WebKit (principalmente Firefox e IE)
$(document).ready( function() {
  if (navigator.userAgent.indexOf('AppleWebKit') != -1) {}
  else{
    $("#alerbrowsIco").css("display","block");
  }
});

function checkSize () {
  if ( winW < sugW ) {$("#alerResIco").css("display","block")}
  else if ( winH < sugH ) {$("#alerResIco").css("display","block")}
  else{ $("#alerResIco").css("display","none") }
};

$(document).ready( checkSize () );

$(document).ready( function() {
  //$("#alertboxRes").html("Per una migliore esperienza si consiglia <br> di visualizzare questa finestra ad una risoluzione maggiore di " + sugW + "x" + sugH + "px") //Aggiotna automaticamente la risoluzione consigliata del popup "avvertenza risoluzione minore" secondo le variabili sopra ripotate.
  $("#alertboxRes").html("Per una migliore esperienza si consiglia <br> di visualizzare questa finestra ad una dimensione maggiore") //Aggiotna automaticamente la risoluzione consigliata del popup "avvertenza risoluzione minore" secondo le variabili sopra ripotate.
} );

$(window).resize(function () {
  winW = window.innerWidth;
  winH = window.innerHeight;
  checkSize ()
});


$('#alerbrowsIco').hover(function(){$("#alertboxBrows").css("display","block")}, function() {$("#alertboxBrows").css("display","none")});

$('#alerResIco').hover(function(){$("#alertboxRes").css("display","block")}, function() {$("#alertboxRes").css("display","none")});



//Glitch titolo quando hover:

function glitchIN() {
    document.getElementById("title").className= "glitch";
}

function glitchOUT() {
    document.getElementById("title").className= "none";
}


//Quando viene cliccato il cred1:
$("#cred1").click(function () {
  if (cred_menu == false) {
     $("#cred1_hover").css("display","block");
     $("#cred1_hover").css("animation","fadeIn 1s ease-in forwards");
     cred_menu = true;
    }
  else {
    $('#cred2_hover') //fai scomparire il titolo dopo il delay specificato
    .delay(1000)
    .queue(function (next) {
      $(this).css('display', 'none');
      next();
    });
    $("#cred2_hover").css("animation","fadeOut 1s ease-in forwards");

    $("#cred1_hover").css("display","block");
    $("#cred1_hover").css("animation","fadeIn 1s ease-in forwards");
  }
})

//per fare sparire il cred1:
$("#cred1_hover").click(function () {
  $('#cred1_hover') //fai scomparire il titolo dopo il delay specificato
  .delay(1000)
  .queue(function (next) {
    $(this).css('display', 'none');
    next();
  });
  $("#cred1_hover").css("animation","fadeOut 1s ease-in forwards");
  cred_menu = false;
})


//Quando viene cliccato il cred2:
$("#cred2").click(function () {
  if (cred_menu == false) {
     $("#cred2_hover").css("display","block");
     $("#cred2_hover").css("animation","fadeIn 1s ease-in forwards");
     cred_menu = true;
    }
  else {
    $('#cred1_hover') //fai scomparire il titolo dopo il delay specificato
    .delay(1000)
    .queue(function (next) {
      $(this).css('display', 'none');
      next();
    });
    $("#cred1_hover").css("animation","fadeOut 1s ease-in forwards");

    $("#cred2_hover").css("display","block");
    $("#cred2_hover").css("animation","fadeIn 1s ease-in forwards");
  }
})

//per fare sparire il cred2:
$("#cred2_hover").click(function () {
  $('#cred2_hover') //fai scomparire il titolo dopo il delay specificato
  .delay(1000)
  .queue(function (next) {
    $(this).css('display', 'none');
    next();
  });
  $("#cred2_hover").css("animation","fadeOut 1s ease-in forwards");
  cred_menu = false;
})

//Glitch Effect foto profilo:

$(document).ready( function() {

  var glitchProfA = setInterval(function() {
  var Ref_ProfA = (Math.floor(Math.random() * 30) + 0);
  if (Ref_ProfA < 11) {
  $("#profile_A").css("display","none");
  $("#profile_AGli").css("display","block");
  $("#profile_AGli").attr("src", "assets/ui/profile_A-g/" + Ref_ProfA + ".jpg");
  }

  else {   $("#profile_AGli").css("display","none");  $("#profile_A").css("display","block"); }
}, 250 //(Math.floor(Math.random() * 1000) + 1)
);

})

$(document).ready( function() {

  var glitchProfB = setInterval(function() {
  var Ref_ProfB = (Math.floor(Math.random() * 30) + 0);
  if (Ref_ProfB < 10) {
  $("#profile_B").css("display","none");
  $("#profile_BGli").css("display","block");
  $("#profile_BGli").attr("src", "assets/ui/profile_B-g/" + Ref_ProfB + ".jpg");
  }

  else {   $("#profile_BGli").css("display","none");  $("#profile_B").css("display","block"); }
}, 250 //(Math.floor(Math.random() * 1000) + 1)
);

})

$(document).ready( function() {

  var glitchProfC = setInterval(function() {
  var Ref_ProfC = (Math.floor(Math.random() * 30) + 0);
  if (Ref_ProfC < 10) {
  $("#profile_C").css("display","none");
  $("#profile_CGli").css("display","block");
  $("#profile_CGli").attr("src", "assets/ui/profile_C-g/" + Ref_ProfC + ".jpg");
  }

  else {   $("#profile_CGli").css("display","none");  $("#profile_C").css("display","block"); }
}, 250 //(Math.floor(Math.random() * 1000) + 1)
);

})


//INTERAZIONI E STORIA:


//qunado si clicca su continua_A

$(document).on('click', '.continua_A', function() {
  $(".risposta").css("animation","blink 0.75s 0.5s 2 step-start");
  $(".risposta")
  .delay(2000)
  .queue(function (next) {
    $(this).css('animation', '');
    next();
})})

$("#immagine").attr("src", "assets/render/TitleScreen.jpg")


//funzione per tornare alla schermata del titolo
$(document).on("click", '.gameover', function() {
  genuineExit=false
  back_reload();
});

$(document).on("click", '.end', function() {
  genuineExit=false
  back_reload();
});

//Quando viene cliccato il titolo

$(document).on('click', '#title', function() {

  $("#footer").css("animation","slideDown 1s ease-in forwards"); //fai scomparire il footer
  //$("#back").css("display","block");
  $("#back").fadeIn(); //fai comparire il pulsante back
  $("#title").css("animation","fadeOut 1s ease-in forwards"); //fai scomparire il titolo
  $('#title') //fai scomparire il titolo dopo il delay specificato
  .delay(1000)
  .queue(function (next) {
    $(this).css('display', 'none');
    next();
  });

  $("#background_intro").css("animation","fadeOut 1s ease-in forwards");

  $("#prompt").css("animation","blink 0.5s 0.5s step-start  2, rise_start 3.5s 2s 1 forwards"); //fai apparire il prompt con quella animazione
  $('#prompt') //fai apparire il prompt dopo il delay specificato
  .delay(1000)
  .queue(function (next) {
    $(this).css('display', 'block');
    next();
  });

  $('#cursor') //fai apparire il prompt dopo il delay specificato
  .delay(3000)
  .queue(function (next) {
    $(this).css('display', 'inline');
    next();
  });

  $('.text') //scrivi dopo il delay specificato
  .delay(7500)
  .queue(function (next) {
    caption = intro;
    type();
    next();
  });

  $('#cursor')
  .delay(7400)
  .queue(function (next) {
    $(this).css('display', 'none');
    next();
  });

  $("#back").css("animation","blink 0.5s 6.5s step-start  2,");

});


$(document).on('click', '.intro1', function() {
  $('#cursor').css('display', 'inline');
  $(".text").html("");
  caption = intro_1 + "<br><br><span class='continua obs_ss' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </span>";
  type();

  $('#cursor')
  .delay(1000)
  .queue(function (next) {
    $(this).css('display', 'none');
    next();
  });

});

$(document).on('click', '.intro2', function() {
  $('#cursor').css('display', 'inline');
  $(".text").html("");
  caption = intro_2 + "<br><br><span class='continua obs_ss' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </span>";
  type();

  $('#cursor')
  .delay(800)
  .queue(function (next) {
    $(this).css('display', 'none');
    next();
  });

});

$(document).on('click', '.obs_ss', function() {
  $("#back_page").animate({top: "45%"},1000,"swing"); // alza il popup di uscita
  $("#prompt").css("animation","moveDown 2s ease-in forwards, reSise 1s ease-in forwards"); //abbassa il prompt e Rimpisciolscilo
  $("#immagine").attr("src", "assets/render/obs-ss.jpg")
  $("#immagine").css("animation","fadeIn 2s 1s ease-in forwards"); //Mostra l'immagine
  $('#immagine_2').css('display', 'block');
  $('#immagine_2').css('opacity', '1');
  $('#immagine') //fai apparire l'immagine dopo l'intervallo specificato
  .delay(0)
  .queue(function (next) {
    $(this).css('display', 'block');
    next();
  });

  $('#cursor').css('display', 'inline');
  $(".text").html()
  caption = obs_ss + "<br><br><span class='continua Aoi-01' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </span>";
  type();

  $('#cursor')
  .delay(1000)
  .queue(function (next) {
    $(this).css('display', 'none');
    next();
  });

});


$(document).on('click', '.Aoi-01', function() {
    $("#immagine_2").attr("src", "assets/render/Aoi-01.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
      $(this).attr("src", "assets/render/Aoi-01.jpg");
      next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
      $(this).css("animation", "");
      next();
    });

    $(".text").html()
    caption = Aoi_01 + "<br><br><div class='continua Aoi-02' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

});

$(document).on('click', '.Aoi-02', function() {

  $(".text").html()
  caption = Aoi_02 + "<br><br><div class='continua_A'> &#60--Answer the question to continue--&#62 </div>" ;
  type();

  $("#immagine_2").attr("src", "assets/render/Aoi-02.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
    $(this).attr("src", "assets/render/Aoi-02.jpg");
    next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
    $(this).css("animation", "");
    next();
  });

});

$(document).on('click', '.Aoi-02a1', function() {

  $(".text").html()
  caption = Aoi_02a1 + "<br><br><div class='continua Aoi-02a2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

    $("#immagine_2").attr("src", "assets/render/Aoi-02a1.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
      $(this).attr("src", "assets/render/Aoi-02a1.jpg");
      next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
      $(this).css("animation", "");
      next();
    });

});

$(document).on('click', '.Aoi-02a2', function() {

  $(".text").html()
  caption = Aoi_02a2 + "<br><br><div class='continua Aoi-02a3' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Aoi-02a2.jpg")

  $("#immagine_3").css("opacity","1");
  var glitchAoi_02a2 = setInterval(function() {
    var Ref_Aoi_02a2 = (Math.floor(Math.random() * 30) + 0);
    if (Ref_Aoi_02a2 < 10) {
    $("#immagine_3").css("display","block")
    $("#immagine_3").attr("src", "assets/render/Aoi-2a2-g/Aoi-02a2-"+ Ref_Aoi_02a2 +".jpg")
    }
    else {   $("#immagine_3").css("display","none") }
  }, 350 //(Math.floor(Math.random() * (300 - 400 + 1)) + 300)
);

  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
    $(this).attr("src", "assets/render/Aoi-02a2.jpg");
    next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
    $(this).css("animation", "");
    next();
  });

});

$(document).on('click', '.Aoi-02a3', function() {

  $(".text").html()
  caption = Aoi_02a3 + "<br><br><div class='continua Aoi-031' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_3").css("opacity","0")
  $("#immagine_2").attr("src", "assets/render/Aoi-02a3.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
    $(this).attr("src", "assets/render/Aoi-02a3.jpg");
    next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
    $(this).css("animation", "");
    next();
  });

});

$(document).on('click', '.Aoi-02b1', function() {

    $(".text").html()
    caption = Aoi_02b1 + "<br><br><div class='continua Aoi-02b2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Aoi-02b1.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
      $(this).attr("src", "assets/render/Aoi-02b1.jpg");
      next();
    });
    $("#immagine")
    .delay(1000)
    .queue(function (next) {
      $(this).css("animation", "");
      next();
    });

});

$(document).on('click', '.Aoi-02b2', function() {

      $(".text").html()
      caption = Aoi_02b2 + "<br><br><div class='continua Aoi-02b3' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
      type();

      $("#immagine_2").attr("src", "assets/render/Aoi-02b2.jpg")

      $("#immagine_3").css("opacity","1");
      var glitchAoi_02b2 = setInterval(function() {
        var Ref_Aoi_02b2 = (Math.floor(Math.random() * 30) + 0);
        if (Ref_Aoi_02b2 < 10) {
        $("#immagine_3").css("display","block")
        $("#immagine_3").attr("src", "assets/render/Aoi-2b2-g/Aoi-02b2-"+ Ref_Aoi_02b2 +".jpg")
        }
        else {   $("#immagine_3").css("display","none") }
      }, 400 //(Math.floor(Math.random() * (300 - 400 + 1)) + 300)
    );


      $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
      $("#immagine")
      .delay(500)
      .queue(function (next) {
        $(this).attr("src", "assets/render/Aoi-02b2.jpg");
        next();
      });
      $("#immagine")
      .delay(500)
      .queue(function (next) {
        $(this).css("animation", "");
        next();
      });

});

$(document).on('click', '.Aoi-02b3', function() {

        $(".text").html()
        caption = Aoi_02b3 + "<br><br><div class='continua Aoi-031' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
        type();

        $("#immagine_3").css("opacity","0");
        $("#immagine_2").attr("src", "assets/render/Aoi-02b3.jpg")
        $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
        $("#immagine")
        .delay(500)
        .queue(function (next) {
          $(this).attr("src", "assets/render/Aoi-02b3.jpg");
          next();
        });
        $("#immagine")
        .delay(500)
        .queue(function (next) {
          $(this).css("animation", "");
          next();
        });

});

$(document).on('click', '.Aoe-02c1', function() {

          $(".text").html()
          caption = Aoe_02c1 + "<br><br><div class='continua Aoe-02c2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
          type();

          $("#immagine_2").attr("src", "assets/render/Aoe-02c1.jpg")
          $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
          $("#immagine")
          .delay(500)
          .queue(function (next) {
          $(this).attr("src", "assets/render/Aoe-02c1.jpg");
          next();
          });
          $("#immagine")
          .delay(500)
          .queue(function (next) {
          $(this).css("animation", "");
          next();
          });

});

$(document).on('click', '.Aoe-02c2', function() {

            $(".text").html()
            caption = Aoe_02c2 + "<br><br><div class='continua Aoe-02c3' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
            type();

                      $("#immagine_2").attr("src", "assets/render/Aoe-02c2.jpg")

                      $("#immagine_3").css("opacity","1");
                      var glitchAoe_02c2 = setInterval(function() {
                        var Ref_Aoe_02c2 = (Math.floor(Math.random() * 30) + 0);
                        if (Ref_Aoe_02c2 < 10) {
                        $("#immagine_3").css("display","block")
                        $("#immagine_3").attr("src", "assets/render/Aoe-2c2-g/Aoe-02c2-"+ Ref_Aoe_02c2 +".jpg")
                        }
                        else {   $("#immagine_3").css("display","none") }
                      }, 400 //(Math.floor(Math.random() * (300 - 400 + 1)) + 300)
                    );

                      $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
                      $("#immagine")
                      .delay(500)
                      .queue(function (next) {
                      $(this).attr("src", "assets/render/Aoe-02c2.jpg");
                      next();
                      });
                      $("#immagine")
                      .delay(500)
                      .queue(function (next) {
                      $(this).css("animation", "");
                      next();
                      });
});

$(document).on('click', '.Aoe-02c3', function() {

  $(".text").html()
  caption = Aoe_02c3 + "<br><br><div class='continua Aoi-031' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>"
  type();

  $("#immagine_3").css("opacity","0");
  $("#immagine_2").attr("src", "assets/render/Aoe-02c3.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Aoe-02c3.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Aoi-031', function() {

    $(".text").html()
    caption = Aoi_031 + "<br><br><div class='continua Aoi-0312' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

      $("#immagine_2").attr("src", "assets/render/Aoi-03.jpg")
      $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).attr("src", "assets/render/Aoi-03.jpg");
      next();
      });
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).css("animation", "");
      next();
      });

});

$(document).on('click', '.Aoi-0312', function() {

      $(".text").html()
      caption = Aoi_0312 + "<br><br><div class='continua Aoi-032' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
      type();

      $("#immagine_2").attr("src", "assets/render/Aoi-03.jpg")
      $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).attr("src", "assets/render/Aoi-03.jpg");
      next();
      });
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).css("animation", "");
      next();
      });

});

$(document).on('click', '.Aoi-032', function() {

        $(".text").html()
        caption = Aoi_032 + "<br><br><div class='continua_A'> &#60--Answer the question to continue--&#62 </div>";
        type();

        $("#immagine_2").attr("src", "assets/render/Aoi-03.jpg")
        $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
        $("#immagine")
        .delay(500)
        .queue(function (next) {
        $(this).attr("src", "assets/render/Aoi-03.jpg");
        next();
        });
        $("#immagine")
        .delay(500)
        .queue(function (next) {
        $(this).css("animation", "");
        next();
        });
});

$(document).on('click', '.Boi-01', function() {

          $(".text").html()
          caption = Boi_01 + "<br><br><div class='continua alc_ssa' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
          type();

          $("#immagine_2").attr("src", "assets/render/Boi-01.jpg")
          $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
          $("#immagine")
          .delay(500)
          .queue(function (next) {
          $(this).attr("src", "assets/render/Boi-01.jpg");
          next();
          });
          $("#immagine")
          .delay(500)
          .queue(function (next) {
          $(this).css("animation", "");
          next();
          });

    strada_diritta=true;
  });

$(document).on('click', '.alc_ssa', function() {

            $(".text").html()
            caption = alc_ssa + "<br><br><div class='continua Bai-01' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
            type();

            $("#immagine_2").attr("src", "assets/render/Alc-ss.jpg")
            $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
            $("#immagine")
            .delay(500)
            .queue(function (next) {
            $(this).attr("src", "assets/render/Alc-ss.jpg");
            next();
            });
            $("#immagine")
            .delay(500)
            .queue(function (next) {
            $(this).css("animation", "");
            next();
            });
});

$(document).on('click', '.Bai-01', function() {

              $(".text").html()
              caption = Bai_01 + "<br><br><div class='continua Bai-02' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
              type();

              $("#immagine_4").css("opacity","1");
              var glitchBai_01 = setInterval(function() {
                var Ref_Bai_01 = (Math.floor(Math.random() * 35) + 0);
                if (Ref_Bai_01 < 10) {
                $("#immagine_4").css("display","block")
                $("#immagine_4").attr("src", "assets/render/Bai-01-g/Bai-01-"+ Ref_Bai_01 +".jpg")
                }
                else {   $("#immagine_4").css("display","none") }
              }, 350 //(Math.floor(Math.random() * (300 - 400 + 1)) + 300)
            );

              $("#immagine_2").attr("src", "assets/render/Bai-01.jpg")
              $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
              $("#immagine")
              .delay(500)
              .queue(function (next) {
              $(this).attr("src", "assets/render/Bai-01.jpg");
              next();
              });
              $("#immagine")
              .delay(500)
              .queue(function (next) {
              $(this).css("animation", "");
              next();
              });
});

$(document).on('click', '.Bai-02', function() {

                $(".text").html()
                caption = Bai_02 + "<br><br><div class='continua Bai-021' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
                type();

                $("#immagine_4").css("opacity","0")
                $("#immagine_2").attr("src", "assets/render/Bai-02.jpg")
                $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
                $("#immagine")
                .delay(500)
                .queue(function (next) {
                $(this).attr("src", "assets/render/Bai-02.jpg");
                next();
                });
                $("#immagine")
                .delay(500)
                .queue(function (next) {
                $(this).css("animation", "");
                next();
                });
});

$(document).on('click', '.Bai-021', function() {

  $(".text").html()
  caption = Bai_021 + "<br><br><div class='continua Bai-031' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Bai-02.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bai-02.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Bai-031', function() {

  $(".text").html()
  caption = Bai_031 + "<br><br><div class='continua Bai-032' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Bai-03.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bai-03.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

//commentata perché doppia:
/*$(document).on('click', '.Bai-032', function() {

  $('#cursor').css('display', 'inline');
  $(".text").html()
  caption = Bai_032 + "<br><br><div class='continua Bai-04' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();
  $('#cursor')
  .delay(1000)
  .queue(function (next) {
    $(this).css('display', 'none');
    next();
  });

    $("#immagine").attr("src", "assets/render/Bai-03.jpg")
});*/

$(document).on('click', '.Bai-04', function() {

  $(".text").html()
  caption = Bai_04 + "<br><br><div class='continua Bai-05' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Bai-04.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bai-04.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Bai-05', function() {

  $(".text").html()
  caption = Bai_05 + "<br><br><div class='continua Bae-06' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Bai-05.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bai-05.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Bae-06', function() {

  $(".text").html()
  caption = Bae_06 + "<br><br><div class='continua Bae-07' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Bae-06.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bae-06.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Bae-07', function() {

  $(".text").html()
  caption = Bae_07 + "<br><br><div class='continua Mini-Gioco' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Bae-07.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bae-07.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Mini-Gioco', function() {

  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine_2").css("animation", "fadeOut 0.5s ease-in forwards")
  /*$("#immagine_2")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });
  $("#immagine_2")
  .delay(0)
  .queue(function (next) {
  $(this).css("opacity", "0");
  next();
});*/

  $(".text").html()
  $("#prompt").css("animation","moveUp_miniGame 0.5s 1 forwards, rise_up_miniGame 1s 1 forwards, change_BC_in 1s 1 forwards");
  $("input[type=button]").css("animation","change_BC_in 1s 1 forwards");
  $("input[type=text]").css("animation","change_BC_in 1s 1 forwards");

  $(".text")
  .delay(0000)
  .queue(function (next) {
    $(".text").html(Mini_Gioco1);
    next();
  });

  $(".text")
  .delay(1000)
  .queue(function (next) {
      $(".text").html( Mini_Gioco2);
    next();
  });

  $(".text")
  .delay(1000)
  .queue(function (next) {
    $(".text").html(Mini_Gioco3);
    next();
  });

  $(".text")
  .delay(1000)
  .queue(function (next) {
  $(".text").html(Mini_Gioco4);
    next();
  });

  $(".text")
  .delay(1000)
  .queue(function (next) {
  $(".text").html(Mini_Gioco5);
    next();
  });

  $(".text")
  .delay(1000)
  .queue(function (next) {
    $(".text").html( Mini_Gioco6);
    next();
  });

  $(".text")
  .delay(1000)
  .queue(function (next) {
    $(".text").html(Mini_Gioco7);
    next();
  });

  $(".text")
  .delay(1000)
  .queue(function (next) {
      $(".text").html(Mini_Gioco8);
    next();
  });

  $(".text")
  .delay(1000)
  .queue(function (next) {
    $(".text").html(Mini_Gioco9);
    next();
  });

})

//funzione mini gioco:

    function check(){
        var tempconsole;

        var cod_input = document.getElementById('id').value.toUpperCase(); //non diventa case-sensitive

        if (cod_esatto == cod_input) {
            terminaleEnd = true;
            $(".text").html(Mini_GiocoY)
            $("#immagine").attr("src", "assets/render/Bae-07.jpg")
            setTimeout(function(){
            $("#prompt").css("animation","moveDown_miniGame 1s 1 forwards, rise_down_miniGame 1s 1 forwards, change_BC_out 1s 1 forwards");
            $("input[type=button]").css("animation","change_BC_out 1s 1 forwards");
            $("input[type=text]").css("animation","change_BC_out 1s 1 forwards");

            $(".text").html()
            caption = Bae_07a1+"<br><br><div class='continua alc-ssc' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
            type();

            $("#immagine_2").css("animation", "fadeIn 0.5s ease-out forwards")
            $("#immagine_2").attr("src", "assets/render/Bae-7a1.jpg")
            $("#immagine").css("animation", "fadeOut 0.5s 1.5s ease-in forwards")
            $("#immagine")
            .delay(500)
            .queue(function (next) {
            $(this).attr("src", "assets/render/Bae-7a1.jpg");
            next();
            });
            $("#immagine")
            .delay(500)
            .queue(function (next) {
            $(this).css("animation", "");
            next();
            });

          }, 3000);
        }

        else {

          if ( errore == (errore_max-1) ) { errorTrasm () }

          else {
                errore = errore + 1;
                if (firstCheck == true) {
                  firstCheck = false;
                  $("#ris").html("[Errore: ID non trovato - Riprovare] <br> Nuovo tentativo di riconnesione tra " + consolCount + " secondi "/*+(errore+1)+" errore/i]"*/)
                  tempconsole = setTimeout(firstError, 1000)
              }
          }

        }
    }

// se si sbaglia la prima volta:

    function firstError () {
      if ( consolCount == 0 ) {  errorTrasm (); Pulisci_tempconsole() }
      else {
        if (terminaleEnd == false) {
        setTimeout(firstError, 1000);
        consolCount = consolCount - 1;
        $("#ris").html("[Errore: ID non trovato - Riprovare] <br> Nuovo tentativo di riconnesione tra " + consolCount + " secondi "/*+(errore+1)+" errore/i]"*/);
      }
       else {}
    }
    }


// pulisci tempconsole:

function Pulisci_tempconsole () {
    clearTimeout(tempconsole);
}



//se si sbaglia per 3 volte il codice:

    function errorTrasm () {
      terminaleEnd = true;
      $(".text").html(Mini_GiocoX)
      $("#immagine").attr("src", "assets/render/Bae-07.jpg")
      setTimeout(function(){
        $("#prompt").css("animation","moveDown_miniGame 1s 1 forwards, rise_down_miniGame 1s 1 forwards, change_BC_out 1s 1 forwards");
        $("input[type=button]").css("animation","change_BC_out 1s 1 forwards");
        $("input[type=text]").css("animation","change_BC_out 1s 1 forwards");

        $(".text").html()
        caption = Bae_07b1+"<br><br><div class='continua Bae-07b2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
        type();

        $("#immagine_2").css("animation", "fadeIn 0.5s ease-out forwards")
        $("#immagine_2").attr("src", "assets/render/Bae-7b1.jpg")
        $("#immagine").css("animation", "fadeOut 0.5s 1.5s ease-in forwards")
        $("#immagine")
        .delay(500)
        .queue(function (next) {
          $(this).attr("src", "assets/render/Bae-7b1.jpg");
          next();
        });
        $("#immagine")
        .delay(500)
        .queue(function (next) {
          $(this).css("animation", "");
          next();
        });

      },3000);
    }


//si attiva la funzione check() se si preme invio dentro la textbox
function enter_chk(event) {
    if(event.keyCode == 13) {
      check();
    }
}

$(document).on('click', '.Bae-07b2', function() {

  $(".text").html()
  caption = Bae_07b2;
  type();

  $("#immagine_2").attr("src", "assets/render/Bae-7b2.jpg")

  $("#immagine_5").css("opacity","1");
  var glitchBae_07b2 = setInterval(function() {
    var Ref_Bae_07b2 = (Math.floor(Math.random() * 35) + 0);
    if (Ref_Bae_07b2 < 10) {
    $("#immagine_5").css("display","block")
    $("#immagine_5").attr("src", "assets/render/Bae-07b2-g/Bae-7b2-"+ Ref_Bae_07b2 +".jpg")
    }
    else {   $("#immagine_5").css("display","none") }
    }, 250 //(Math.floor(Math.random() * (300 - 400 + 1)) + 300)
  );

  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bae-7b2.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.alc-ssc', function() {

    $(".text").html()
    caption = alc_ssc + "<br><br><div class='continua Dae-01pre' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Alc-ss.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Alc-ss.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.Dae-01pre', function() {

  $(".text").html()
  caption = Dae_01pre + "<br><br><div class='continua Dae-01' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Dae-01pre.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Dae-01pre.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Dae-01', function() {

    $(".text").html()
    caption = Dae_01 + "<br><br><div class='continua Dae-012' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Dae-01.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Dae-01.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.Dae-012', function() {
  if (strada_diritta==true) {

        $(".text").html()
        caption = Dae_012 + "<br><br><div class='continua Dae-02a' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
        type();

        $("#immagine_2").attr("src", "assets/render/Dae-01.jpg")
        $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
        $("#immagine")
        .delay(500)
        .queue(function (next) {
        $(this).attr("src", "assets/render/Dae-01.jpg");
        next();
        });
        $("#immagine")
        .delay(500)
        .queue(function (next) {
        $(this).css("animation", "");
        next();
        });
  }

 else {

       $(".text").html()
       caption = Dae_012 + "<br><br><div class='continua Dae-02b' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
       type();

       $("#immagine_2").attr("src", "assets/render/Dae-01.jpg")
       $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
       $("#immagine")
       .delay(500)
       .queue(function (next) {
       $(this).attr("src", "assets/render/Dae-01.jpg");
       next();
       });
       $("#immagine")
       .delay(500)
       .queue(function (next) {
       $(this).css("animation", "");
       next();
       });
    }
});

$(document).on('click', '.Dae-02a', function() {

  $(".text").html()
  caption = Dae_02a + "<br><br><div class='continua Dae-02a_1' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

    $("#immagine_2").attr("src", "assets/render/Dae-02.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Dae-02.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });
});

$(document).on('click', '.Dae-02a_1', function() {

  $(".text").html()

  caption = Dae_02a_1 + "<br><br><div class='continua Dae-031' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Dae-02.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Dae-02.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Dae-02b', function() {

    $(".text").html()
    caption = Dae_02b + "<br><br><div class='continua Dae-02b_1' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Dae-02.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Dae-02.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.Dae-02b_1', function() {

  $(".text").html()
  caption = Dae_02b_1 + "<br><br><div class='continua Dae-031' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Dae-02.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Dae-02.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Dae-031', function() {

  $(".text").html()
  caption = Dae_031 + "<br><br><div class='continua Dae-032' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Dae-03.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Dae-03.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Dae-032', function() {
  $(".text").html();
  caption = Dae_032 + "<br><br><div class='continua_A'> &#60--Answer the question to continue--&#62 </div>";
  type();


    var time2 = setTimeout(function () { $(document).ready(function () {

        $(".text").html();
        caption = Dae_03c1 + "<br><br><div class='continua Dae-03c2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
        type();

            $("#immagine_2").attr("src", "assets/render/Dae-03c1.jpg")
            $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
            $("#immagine")
            .delay(500)
            .queue(function (next) {
            $(this).attr("src", "assets/render/Dae-03c1.jpg");
            next();
            });
            $("#immagine")
            .delay(1000)
            .queue(function (next) {
            $(this).css("animation", "");
            next();
            });

          })}, 28000)
    var time1sh = setTimeout(function() { $(document).ready(function () {$("#prompt").css("animation","shake 150ms linear 6 forwards")})}, 24000)

    $(document).on('click', ".Dae-03a1", function() {
      $(".text").html();
      caption = Dae_03a1 + "<br><br><div class='continua Dae-03a2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
      type();

      $("#immagine_2").attr("src", "assets/render/Dae-03a1.jpg")
      $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).attr("src", "assets/render/Dae-03a1.jpg");
      next();
      });
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).css("animation", "");
      next();
      });

      window.clearInterval(time2)
      window.clearInterval(time1sh)
    });

    $(document).on('click', ".Dae-03b1", function() {
      $(".text").html();
      caption = Dae_03b1 + "<br><br><div class='continua Dae-03b2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
      type();

      $("#immagine_2").attr("src", "assets/render/Dae-03b1.jpg")
      $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).attr("src", "assets/render/Dae-03b1.jpg");
      next();
      });
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).css("animation", "");
      next();
      });

    window.clearInterval(time2)
    window.clearInterval(time1sh)
   });

})

$(document).on('click', '.Dae-03a2', function() {
  $(".text").html();
  caption = Dae_03a2 + "<br><br><div class='continua obs-ss-alt' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Dae-03a2.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Dae-03a2.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.obs-ss-alt', function() {
  $(".text").html();
  caption = obs_ss_alt + "<br><br><div class='continua Doe-03a3' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/obs-ss.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/obs-ss.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Doe-03a3', function() {
  $(".text").html();
  caption = Doe_03a3 + "<br><br><div class='continua fin-tra' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Doe-03a3.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Doe-03a3.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.fin-tra', function() {
    $(".text").html();
    caption = fin_tra;
    type();

    $("#immagine_2").attr("src", "assets/render/fin-tra.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/fin-tra.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.Dae-03b2', function() {
  $(".text").html();
  caption = Dae_03b2 + "<br><br><div class='continua Dae-03b2_1' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Dae-03b2.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Dae-03b2.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.Dae-03b2_1', function() {
  $(".text").html();
  caption = Dae_03b2_1 + "<br><br><div class='continua Dae-03b3' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Dae-03b2.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Dae-03b2.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.Dae-03b3', function() {
  $(".text").html();
  caption = Dae_03b3 + "<br><br><div class='continua fin-uff' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Dae-03b3.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Dae-03b3.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.fin-uff', function() {
  $(".text").html();
  caption = fin_uff;
    type();

    $("#immagine_2").attr("src", "assets/render/fin-uff.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/fin-uff.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});
/*
$(document).on('click', '.Dae-03c1', function() {
  $(".text").html();
  caption = Dae_03c1 + "<br><br><div class='continua Dae-03c2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

      $("#immagine_2").attr("src", "assets/render/Dae-03c1.jpg")
      $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
      $("#immagine")
      .delay(500)
      .queue(function (next) {
      $(this).attr("src", "assets/render/Dae-03c1.jpg");
      next();
      });
      $("#immagine")
      .delay(1000)
      .queue(function (next) {
      $(this).css("animation", "");
      next();
      });

});*/

$(document).on('click', '.Dae-03c2', function() {
  $(".text").html();
  caption = Dae_03c2 + "<br><br><div class='continua alc-sse' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Dae-03c2.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Dae-03c2.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.alc-sse', function() {
  $(".text").html();
    caption = alc_ssb + "<br><br><div class='continua Dai-03c3' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Alc-ss.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Alc-ss.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.Dai-03c3', function() {
  $(".text").html();
  caption = Dai_03c3 + "<br><br><div class='continua fin-alt2b' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Dai-03c3.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Dai-03c3.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.fin-alt2a', function() {
  $(".text").html();
  caption = fin_alt2a + "<br><br><div class='continua fin-alt1' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/fin-alt2.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/fin-alt2.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.fin-alt2b', function() {
  $(".text").html();
  caption = fin_alt2b + "<br><br><div class='continua fin-alt1' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";;
  type();

  $("#immagine_2").attr("src", "assets/render/fin-alt2.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/fin-alt2.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});




$(document).on('click', '.Coi-01', function() {
    $(".text").html();
    caption = Coi_01 + "<br><br><div class='continua Coi-012' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Coi-01.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Coi-01.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});
$(document).on('click', '.Coi-012', function() {
  $(".text").html();
  caption = Coi_012 + "<br><br><div class='continua Coi-02' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Coi-01.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Coi-01.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Coi-02', function() {
  $(".text").html();
  caption = Coi_02 + "<br><br><div class='continua Coi-03' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Coi-02.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Coi-02.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Coi-03', function() {
  $(".text").html();
  caption = Coi_03 + "<br><br><div class='continua Coi-031' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Coi-03.jpg")

  $("#immagine_4").css("opacity","1");
  var glitchCoi_03 = setInterval(function() {
    var Ref_Coi_03 = (Math.floor(Math.random() * 25) + 0);
    if (Ref_Coi_03 < 10) {
    $("#immagine_4").css("display","block")
    $("#immagine_4").attr("src", "assets/render/Coi-03-g/Coi-03-"+ Ref_Coi_03 +".jpg")
    }
    else {   $("#immagine_4").css("display","none") }
  }, 150 //(Math.floor(Math.random() * (100 - 150 + 1)) + 100)
);

  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Coi-03.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Coi-031', function() {
  $(".text").html()
  caption = Coi_031 + "<br><br><div class='continua Coi-04' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Coi-03.jpg")
  $("#immagine").css("animation", "fadeOut 0.5ss ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Coi-03.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Coi-04', function() {
  $(".text").html();
  caption = Coi_04 + "<br><br><div class='continua_A'> &#60--Answer the question to continue--&#62 </div>";
  type();

  $("#immagine_4").css("opacity","0");
  $("#immagine_2").attr("src", "assets/render/Coi-04.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Coi-04.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

    var time1 = setTimeout(function() { $(document).ready(function () {
      $(".text").html();
        caption = Coi_04c1 + "<br><br><div class='continua Coi-04c2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
        type();

        $("#immagine_2").attr("src", "assets/render/Coi-04c1.jpg")
        $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
        $("#immagine")
        .delay(500)
        .queue(function (next) {
        $(this).attr("src", "assets/render/Coi-04c1.jpg");
        next();
        });
        $("#immagine")
        .delay(500)
        .queue(function (next) {
        $(this).css("animation", "");
        next();
        });
    })}, 22000)
    var time2sh = setTimeout(function() { $(document).ready(function () {$("#prompt").css("animation","shake 150ms linear 6 forwards")})}, 18000)

$(document).on('click', '.Coi-04a1', function() {
  $(".text").html();
    caption = Coi_04a1 + "<br><br><div class='continua Coi-04a2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Coi-04a1.jpg")
    $("#immagine").css("animation", "fadeOut 0.5ss ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Coi-04a1.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

     window.clearInterval(time1)
     window.clearInterval(time2sh)
   });

$(document).on('click', '.Coi-04b1', function() {
  $(".text").html();
    caption = Coi_04b1 + "<br><br><div class='continua Coi-04b12' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Coi-04b1.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Coi-04b1.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

    window.clearInterval(time1)
    window.clearInterval(time2sh)
  });

$(document).on('click', '.Coi-04b12', function() {
  $(".text").html();
    caption = Coi_04b12 + "<br><br><div class='continua alc-ssd' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Coi-04b1.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Coi-04b1.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

    window.clearInterval(time1)
  });

})


$(document).on('click', '.Coi-04a2', function() {
    $(".text").html();
      caption = Coi_04a2;
      type();


          $("#immagine_2").attr("src", "assets/render/Coi-04a2.jpg")

          $("#immagine_5").css("opacity","1");
          var glitchAoi_Coi_04a2 = setInterval(function() {
            var Ref_Aoi__Coi_04a2 = (Math.floor(Math.random() * 35) + 0);
            if (Ref_Aoi__Coi_04a2 < 10) {
            $("#immagine_5").css("display","block")
            $("#immagine_5").attr("src", "assets/render/Coi-04a2-g/Coi-04a2-"+ Ref_Aoi__Coi_04a2 +".jpg")
            }
            else {   $("#immagine_5").css("display","none") }
          }, 250 //(Math.floor(Math.random() * (300 - 400 + 1)) + 300)
          );

          $("#immagine").css("animation", "fadeOut 0.5ss ease-in forwards")
          $("#immagine")
          .delay(500)
          .queue(function (next) {
          $(this).attr("src", "assets/render/Coi-04a2.jpg");
          next();
          });
          $("#immagine")
          .delay(500)
          .queue(function (next) {
          $(this).css("animation", "");
          next();
          });

});

//Commentato perché doppio:
/*$(document).on('click', '.Coi-04c1', function() {
  $(".text").html();
    caption = Coi_04c1 + "<br><br><div class='continua Coi-04c2' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Coi-04c1.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Coi-04c1.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});*/

$(document).on('click', '.Coi-04c2', function() {
  $(".text").html();
    caption = Coi_04c2 + "<br><br><div class='continua alc-ssb' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Coi-04c2.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Coi-04c2.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.alc-ssb', function() {
  $(".text").html();
    caption = alc_ssb + "<br><br><div class='continua Cai-04c3' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Alc-ss.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Alc-ss.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.Cai-04c3', function() {
  $(".text").html();
    caption = Cai_04c3 + "<br><br><div class='continua fin-alt2a' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Cai-04c3.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Cai-04c3.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

/*$(document).on('click', '.fin-alt2', function() {
  $(".text").html();
    caption = fin_alt2b + "<br><br><div class='continua fin-alt1' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine").attr("src", "assets/render/fin-alt2.jpg")
});*/

$(document).on('click', '.fin-alt1', function() {
  $(".text").html();
    caption = fin_alt1;
    type();

    $("#immagine_2").attr("src", "assets/render/fin-alt.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/fin-alt.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });

});

$(document).on('click', '.alc-ssd', function() {
  $(".text").html();
    caption = alc_ssd + "<br><br><div class='continua Bai-01-alt' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
    type();

    $("#immagine_2").attr("src", "assets/render/Alc-ss.jpg")
    $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).attr("src", "assets/render/Alc-ss.jpg");
    next();
    });
    $("#immagine")
    .delay(500)
    .queue(function (next) {
    $(this).css("animation", "");
    next();
    });
});

$(document).on('click', '.Bai-01-alt', function() {
    $(".text").html();
  caption = Bai_01_alt + "<br><br><div class='continua Bai-02-alt' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Bai-01.jpg")

  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bai-01.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Bai-02-alt', function() {
    $(".text").html();
  caption = Bai_02_alt + "<br><br><div class='continua Bai-03-alt' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_4").css("opacity","0");
  $("#immagine_2").attr("src", "assets/render/Bai-02.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bai-02.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Bai-03-alt', function() {
      $(".text").html();
  caption = Bai_03_alt + "<br><br><div class='continua Bai-032' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
  type();

  $("#immagine_2").attr("src", "assets/render/Bai-03.jpg")
  $("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).attr("src", "assets/render/Bai-03.jpg");
  next();
  });
  $("#immagine")
  .delay(500)
  .queue(function (next) {
  $(this).css("animation", "");
  next();
  });

});

$(document).on('click', '.Bai-032', function() {
  $(".text").html();
caption = Bai_032 + "<br><br><div class='continua Bai-04' style:='cursor:pointer;'> &#60--Click here to continue--&#62 </div>";
type();

$("#immagine_2").attr("src", "assets/render/Bai-03.jpg")
$("#immagine").css("animation", "fadeOut 0.5s ease-in forwards")
$("#immagine")
.delay(500)
.queue(function (next) {
$(this).attr("src", "assets/render/Bai-03.jpg");
next();
});
$("#immagine")
.delay(500)
.queue(function (next) {
$(this).css("animation", "");
next();
});

});



var intro = "Un vagone fuori controllo sta percorrendo a tutta velocità il binario ferroviario a qualche metro di distanza da voi. Sei vicina alla leva di uno scambio, ma il punto di biforcazione dei binari è coperto da un enorme masso che ti impedisce di vederlo: una direzione porta verso un canyon lungo il quale avanzano dieci persone; l’altra porta verso un secondo canyon, in cui un’unica persona, a te cara, sta seguendo il tracciato delle rotaie.<br>Se azionerai lo scambio ferroviario, potraì decidere chi salvare. Altrimenti potrai lasciare lo scambio così com’è, in questo modo il vagone imboccherà una delle due direzioni senza però sapere preventivamente quale.<br><br>Sedna, tu cosa faresti?<br><br><div class='risposta intro1'>[Azionerei lo scambio ferroviario]</div><br><div class='risposta intro2'>[Lascierei la leva com’è]</div><br><br><span class='continua_A'> &#60--Answer the question to continue--&#62 </span>"

var intro_1 = "<span class='nome'>Sedna:</span> Penso che azionerei lo scambio ferroviario. Ma perchè mi chiedi questo, papà?"

var intro_2 = "<span class='nome'>Sedna:</span> Penso che lascerei la leva così com’è. Ma perchè mi chiedi questo, papà?"

var obs_ss = "<span class='nome'>Pianeta Terra, Osservatorio Astronomico della Federazione Terrestre, ore 19:21.</span>"

var Aoi_01 = "<span class='nome'>Padre:</span> Sedna, hai controllato gli ultimi rilevamenti? Le scansioni del cielo non sembrano molto diverse da quelle fatte qualche giorno fa. Sei sicura che valga la pena lavorare anche questa notte? <br><br> <span class='nome'>Sedna:</span> Si, c’è ancora molto lavoro da fare, e ti ricordo che manca ancora tutto il settore K24 da scansionare...ci vorrà ancora del tempo, non voglio rimanere indietro. <br><br> <span class='nome'>Padre:</span> Fa come vuoi, solo non stancarti troppo, è da tutto il pomeriggio che sei chiusa qua dentro a lavorare, secondo me avresti bisogno di una pausa. Ci vediamo dopo."

var Aoi_02= "<span class='nome'>Sedna:</span> Ok, da dove iniziare? Potrei dare un’occhiata ai dati che sono appena arrivati sul server...è da tutto il giorno che sta elaborando dati e solo ora sembra aver trovato qualcosa. <br> Potrei anche controllare il cielo di persona...ci metto di più ma è sicuramente più appagante che guardare uno schermo pieno di numeri. <br>Altrimenti mi conviene veramente prendere una boccata d’aria all’esterno, è da tutto il giorno che sto lavorando qui dentro…</span> <br><br><div class='risposta Aoi-02a1'>[Controlla i dati sul server] </div><br><div class='risposta Aoi-02b1'>[Controlla il cielo al telescopio]</div><br><div class='risposta Aoe-02c1'>[Prendi una pausa]</div>"

var Aoi_02a1= "<span class='nome'>Sedna:</span> 2B6592A nel blocco A, come la scorsa volta, quindi tutto ok. Ma non riesco proprio a capire perchè nel blocco S il valore risultante sia 8BD96A...lo trovo eccessivamente basso per quella zona...possibile che sia un mio errore? è da 10 minuti che sto rifacendo i calcoli ma continua ad uscirmi questo numero. Senza contare che tutti gli altri blocchi del settore K23 non rispondono ad alcun segnale...o sto impazzendo io oppure oggi questa galassia ha qualcosa che non va."

var Aoi_02a2= "<span class='nome'>Sedna:</span> … <br><br> <span class='nome'>Sedna:</span> ok forse è meglio prendere una pausa…"

var Aoi_02b1= "<span class='nome'>Sedna:</span> Quindici anni ho passato a guardare le stelle...quindici anni e non ho mai visto qualcosa del genere prima d’ora. Come possono essere scomparse intere divisioni di blocchi? senza parlare del blocco S, che sembra completamente distorto...voglio solo sperare che sia un errore di visualizzazione altrimenti non saprei proprio cosa pensare."

var Aoi_02b2= "<span class='nome'>Sedna:</span> … <br><br> <span class='nome'>Sedna:</span> una pausa è forse la migliore soluzione…"

var Aoe_02c1= "<span class='nome'>Sedna:</span> ah, aveva ragione mio padre, ci voleva proprio, a volte basta un po’ di fresco e il più bel panorama della federazione per riprendersi…"

var Aoe_02c2= "<span class='nome'>Sedna:</span> ma si è fatto tardi, ho già allungato la pausa di parecchi minuti e sarebbe ora<br> di tornare al lavoro."

var Aoi_02a3= "<span class='nome'>Sedna:</span> AAAAAAAAAAAAAAAAARGH <br>C-CHI SEI TU? COME HAI FATTO AD ARRIVARE FIN QUI? <br><br> <span class='nome'>Bahaya:</span> scusa, non avrei dovuto comparire così all’improvviso. Mi presento, sono Bahaya, un alcione del piccolo pianeta Kematian, che fa parte di quel blocco di pianeti che voi catalogate <br> come “Blocco S”. è un piacere conoscerti!"

var Aoi_02b3= "<span class='nome'>Sedna:</span> AAAAAAAAAAAAAAAAARGH <br>C-CHI SEI TU? COME HAI FATTO AD ARRIVARE FIN QUI? <br><br> <span class='nome'>Bahaya:</span> scusa, non avrei dovuto comparire così all’improvviso. Mi presento, sono Bahaya, un alcione del piccolo pianeta Kematian, che fa parte di quel blocco di pianeti che voi catalogate come “Blocco S”. è un piacere conoscerti!"

var Aoe_02c3= "<span class='nome'>Sedna:</span> AAAAAAAAAAAAAAAAARGH <br>C-CHI SEI TU? COME HAI FATTO AD ARRIVARE FIN QUI? <br><br> <span class='nome'>Bahaya:</span> scusa, non avrei dovuto comparire così all’improvviso. Mi presento, sono Bahaya, un alcione del piccolo pianeta Kematian, che fa parte di quel blocco di pianeti che voi catalogate come “Blocco S”. è un piacere conoscerti!"

var Aoi_031= "<span class='nome'>Sedna:</span> ...Un razza aliena...qui sulla terra...non posso credere ai miei occhi. Ma come fai ad avere una forma così...umana? Come riesci a comunicare telepaticamente con me? <br><br> <span class='nome'>Bahaya:</span> Questo ha poca importanza, in confronto a quello che vogliamo proporvi. Ascoltami bene, non avrete altre occasioni oltre a questa. <br> Noi alcioni, in quanto organismi arrivati al massimo delle nostre possibilità evolutive, ci siamo posti l’obiettivo di diffondere il risultato della nostra evoluzione a tutti gli altri organismi presenti nelle galassie vicine, per poter realizzare il bene comune in tutto l’universo."

var Aoi_0312= "<span class='nome'>Bahaya:</span> Vi abbiamo osservato a lungo e abbiamo scelto te per le tue grandi conoscenze in campo astronomico, e le tue impareggiabili qualità intellettive. Confidiamo nel fatto che tu possa essere il migliore organismo che potrà farsi portatore del vostro nuovo stadio evolutivo comune. L’unica cosa che ti chiediamo è quella di seguirci ora, in questo momento, sul nostro pianeta. I moduli per il teletrasporto sono già attivi, mi basta solo dare l’ordine. Fidati, non te ne pentirai."

var Aoi_032= "<span class='nome'>Sedna:</span> <span class='pensiero'>Tutto questa situazione mi pare...surreale. Diventare la portatrice di una nuova evoluzione umana e universale...ma è veramente questo che voglio? Voglio realmente affidarmi a lui? per quanto allettante sia questa proposta è anche vero che è la prima volta che incontro una razza aliena e non so quanto affidabili siano le loro parole, in fondo si tratta sempre di abbandonare il pianeta terra per chissà quale luogo...</span> <br><br><div class='risposta Boi-01'> [Accetta l’offerta dell’alcione] </div><br><div class='risposta Coi-01'> [Rifiuta l’offerta dell’alcione]</div>"

var Boi_01= "<span class='nome'>Sedna:</span> Non rivedrò la terra per un po’, ma ne varrà la pena per me e per tutto il genere umano. Sono pronta. Partiamo."

var alc_ssa= "<span class='nome'>Pianeta Kematian, Blocco Planetario S, orario e luogo sconosciuto.</span>"

var Bai_01= "<span class='nome'>Sedna:</span> Ma cosa...dove sono finita?"

var Bai_02= "<span class='nome'>Sedna:</span> Chi diavolo sei tu? Perchè non riesco a muovermi? <br><br> <span class='nome'>Alcione:</span> è tutto a posto. Sei nella nostra crisalide di contenimento. Dobbiamo finire delle analisi e sarai pronta per la trasformazione. <br><br> <span class='nome'>Sedna:</span> Ma di cosa diavolo stai parlando? Dov’è finito l’alcione che avevo incontrato sul pianeta terra?"

var Bai_021= "<span class='nome'>Bahaya:</span> Sono sempre io, solo nella mia forma reale. E prima che tu me lo chieda, sì, ti ho mentito. L’evoluzione della tua specie non avverrà. Almeno non per quelli rimasti sul pianeta. L’arrivare ad una forma perfetta senza un lento processo di cambiamento è un miraggio che solo una mente sottosviluppata come quella umana è in grado di pensare.  Ma tu, Sedna, solo tu avrai il privilegio di diventare una di noi. La nostra regina. E governerai la nostra specie per i secoli a venire. Abbandonerai corpo e mente umana per diventare il più potente essere di tutte le galassie. <br><br> <span class='nome'>Sedna:</span> Voi siete impazziti. Non avrei dovuto fidarmi. Perchè proprio io? Vi prego, lasciatemi uscire...non voglio diventare la vostra regina, e non sarei in grado di farlo."

var Bai_031= "<span class='nome'>Bahaya:</span> Il tuo corredo genetico si presta ottimamente ad essere modificato. Abbiamo cercato invano per millenni un corpo che potesse ospitare il gene originale e finalmente l’abbiamo trovato. Non ti consiglio di opporti, o sarà peggio per te. Non abbiamo bisogno che il corpo ospitante sia vivo per compiere la trasformazione. <br><br> <span class='nome'>Sedna:</span><span class='pensiero'> In questa situazione non ho altra scelta se non stare al gioco, devo prima liberarmi da questa prigione e poi trovare un modo per uscire da qui.</span>"

var Bai_032= "<span class='nome'>Sedna:</span> Se non ho altra scelta allora che sia così. Accetto il mio destino. L’unica cosa che ti chiedo è di poter uscire da questa crisalide. Vi prego, lasciatemi libera di girare per quella che sarà la mia nuova casa. <br><br> <span class='nome'>Bahaya:</span> I rilevamenti sono finiti. Il rituale di trasformazione inizierà tra 26 lune. Per ora possiamo lasciarti libera. Non tentare di scappare o fare gesti inconsulti, altrimenti non ci penseremo due volte ad eliminarti."

var Bai_04= "<span class='nome'>Sedna:</span> Finalmente...ora devo trovare un modo per contattare mio padre. Se riuscissi in qualche modo a comunicargli la mia posizione potrebbe venire a salvarmi. è l’unico modo che ho per andarmene da questo posto orribile."

var Bai_05= "<span class='nome'>Sedna:</span> Mi sembra di intravedere i resti di una nave distrutta in lontananza. Avrà sicuramente qualche tipo di strumento di comunicazione a lunga distanza...Se riuscissi a trovarlo potrei tentare di mandare un messaggio di aiuto a mio padre!"

var Bae_06= "<span class='nome'>Sedna:</span> Mmh...questo posto è pieno di rottami...dove potrebbe essere finito il trasmettitore?"

var Bae_07= "<span class='nome'>Sedna:</span> Trovato! proviamo a vedere se funziona..."

var Mini_Gioco1= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3"
var Mini_Gioco2= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3<br><br>Booting up system...done."
var Mini_Gioco3= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3<br><br>Booting up system...done.<br>Power supply disconnected."
var Mini_Gioco4= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3<br><br>Booting up system...done.<br>Power supply disconnected.<br>Entering emergency mode...done."
var Mini_Gioco5= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3<br><br>Booting up system...done.<br>Power supply disconnected.<br>Entering emergency mode...done.<br>Checking server connection...done."
var Mini_Gioco6= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3<br><br>Booting up system...done.<br>Power supply disconnected.<br>Entering emergency mode...done.<br>Checking server connection...done.<br>Fetching planet list...failed."
var Mini_Gioco7= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3<br><br>Booting up system...done.<br>Power supply disconnected.<br>Entering emergency mode...done.<br>Checking server connection...done.<br>Fetching planet list...failed.<br><br>Recupero lista pianeti fallita."
var Mini_Gioco8= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3<br><br>Booting up system...done.<br>Power supply disconnected.<br>Entering emergency mode...done.<br>Checking server connection...done.<br>Fetching planet list...failed.<br><br>Recupero lista pianeti fallita.<br> Inserire manualmente codice ID di trasmissione:"
var Mini_Gioco9= "ES-SystemBIOS v14.0 Saitama inc. <br> PHOENIX PLANETCOM 3<br><br>Booting up system...done.<br>Power supply disconnected.<br>Entering emergency mode...done.<br>Checking server connection...done.<br>Fetching planet list...failed.<br><br>Recupero lista pianeti fallita.<br> Inserire manualmente codice ID di trasmissione:<br><br><input id='id' type='text' value='' size='40' maxlength='7' onkeypress='enter_chk(event)' /> &#160&#160 <input type='button' id='check_btn' value='Verify ID' onclick='check()''><br><br><div id='ris'></div>"


var Mini_GiocoX= "Checking server connection...failed.<br>ERROR_674 Unable to communicate with server"

var Mini_GiocoY= "ID: 1409E31<br>Pianeta Terra<br><br>Trasmissione messaggio di emergenza in corso…<br>Trasmissione avvenuta con successo."

var Bae_07a1= "<span class='nome'>Sedna:</span> Fatto! Ora speriamo solo che mio padre abbia ricevuto il segnale di aiuto e che riesca a raggiungere questo posto...26 lune non sembrano molte."

var Bae_07b1= "<span class='nome'>Sedna:</span> Oh no, il dispositivo si è bloccato...che abbiano intercettato il segnale?"

var Bae_07b2= "<span class='nome'>Bahaya:</span> Come immaginavo. Voi esseri umani siete testardi. Preparati ad essere neutralizzata. Il tuo DNA verrà raccolto dai tuoi resti. Dì addio alla tua forma umana Sedna, lunga vita alla regina. <br><br> <span class='gameover'>GAME OVER</span>"

var Coi_01= "<span class='nome'>Sedna:</span> No, mi dispiace, non voglio. Non ho modo di verificare se le tue parole sono vere. Non posso fidarmi di una razza aliena che ho appena incontrato. E il mio posto è qui sulla terra, non ho intenzione di seguirti da nessuna parte. Mi dispiace, chiedi a qualcun’altro. <br><br> <span class='nome'>Bahaya:</span> Mi dispiace, il rifiuto non è contemplato. Vieni con noi, non c’è nulla di cui aver paura. <br><br> <span class='nome'>Sedna:</span> La mia decisione è definitiva. Se le intenzioni della vostra razza sono solo queste potete anche andarvene da qua. Ho del lavoro da sbrigare."

var Coi_012= "<span class='nome'>Bahaya:</span> Bene. A quanto pare con voi umani le buone maniere non servono a niente. Forse è il caso di mostrarmi per quello che sono realmente. Magari sarò più convincente. <br><br> <span class='nome'>Sedna:</span> Ma cosa diavolo stai dicendo?"

var Coi_02= "<span class='nome'>Padre:</span> Sedna, si può sapere con chi stai parl... <br>Ma cosa…"

var Coi_03= "<span class='nome'>Bahaya:</span> Il rifiuto non è contemplato. Vieni con noi e diventerai la nostra nuova regina. Avrai la possibilità di oltrepassare i limiti umani. Non c’è spazio per gli organismi più deboli in questo universo. Sei la prescelta per guidare il nostro impero interplanetario. Hai la possibilità di arrenderti senza opporre resistenza, oppure morire. Non abbiamo bisogno che l’organismo ospitante sia vivo per attuare la trasformazione. <br><br> <span class='nome'>Padre:</span> Mostro. Sta’ lontano da mia figlia. Lei non andrà da nessuna parte. Tornate dal pianeta da cui siete venuti e non fatevi più vedere."

var Coi_031= "<span class='nome'>Bahaya:</span> Tu. Umano decrepito all’ultimo stadio di decadimento, osi dare degli ordini a me? Per quanto mi riguarda potrei eliminarti anche subito. Sei tanto inutile a me quanto alla tua razza. Farei un favore ad entrambi."

var Coi_04= "<span class='nome'>Padre:</span> Fatti avanti. Farò tutto il possibile pur di proteggerla. Preferisco morire piuttosto che finire gli ultimi anni della mia vita senza di lei. <br><br> <span class='nome'>Sedna:</span> Papà ti prego, non farlo… <br><br> <span class='nome'>Bahaya:</span> è tempo di dire addio a questo mondo. Accogli la morte, terrestre. <br><br> <div id='a' class='risposta Coi-04a1'> [Tenta di proteggere tuo padre fermando l’alcione]</div> <br><div id='b' class='risposta Coi-04b1'> [Tenta di salvare tuo padre arrendendoti e seguendo l’alcione sul suo pianeta]</div><br><br><div id='ris'></div>"

var Coi_04a1= "<span class='nome'>Sedna:</span> NO, FERMO! NON PROVARE A TOCCARLO!"

var Coi_04a2= "<span class='nome'>Padre:</span> NOOOOOOOOOOOOOOOO! SEDNAAAAAAAAAA!! <br> <span class='nome'>Bahaya:</span> Un vero peccato. <br><br> <span class='gameover'>GAME OVER</span>"

var Coi_04b1= "<span class='nome'>Sedna:</span> FERMO! <br><br> <span class='nome'>Sedna:</span> Va bene, hai vinto. Verrò con te. Ma non far del male a mio padre, ti prego... <br><br> <span class='nome'>Bahaya:</span> Ottimo. Hai evitato un inutile spreco di energie ad entrambi. Ora possiamo andare. <br><br><span class='nome'>Padre:</span> Sedna...perchè l’hai fatto?"

var Coi_04b12= "<span class='nome'>Sedna:</span> Papà...è l’unico modo...ho preferito intervenire per salvarti. Ho fatto la mia scelta. <br><br> <span class='nome'>Padre:</span> … <br><br><span class='nome'>Sedna:</span> Addio."

var alc_ssd= "<span class='nome'>Pianeta Kematian, Blocco Planetario S, orario e luogo sconosciuto.</span>"

var Bai_01_alt= "<span class='nome'>Sedna:</span> Cosa succede...perchè non riesco a muovermi? <br><br> <span class='nome'>Alcione:</span> è tutto a posto. Sei nella nostra crisalide di contenimento. Dobbiamo finire delle analisi e sarai pronta per la trasformazione."

var Bai_02_alt= "<span class='nome'>Sedna:</span> Prima di cambiare forma, posso chiedere perchè proprio me? Perchè dovrò essere io la vostra nuova regina? <br><br> <span class='nome'>Bahaya:</span> Il tuo corredo genetico si presta ottimamente ad essere modificato. Abbiamo cercato invano per millenni un corpo che potesse ospitare il gene originale e finalmente l’abbiamo trovato."

var Bai_03_alt= "<span class='nome'>Sedna:</span> <span class='pensiero'>Forse non è del tutto finita. Se riesco a stare al gioco ed essere abbastanza convincente posso riuscire a scappare…ma devo prima trovare un modo per liberarmi da questa prigione e uscire da questo posto.</span>"

var Coi_04c1= "<span class='nome'>Sedna:</span> PAPÀ NOOOOOOOOOOOOO!"

var Coi_04c2= "<span class='nome'>Bahaya:</span> Ha fatto la sua scelta. Intervenire per tentare invano di salvarti. Patetico. <br> è tempo di andare, nostra regina."

var alc_ssb= "<span class='nome'>Pianeta Kematian, Blocco Planetario S, orario e luogo sconosciuto.</span>"

var Cai_04c3= "<span class='nome'>Sedna Regina:</span> Padre, mi dispiace. Ho dovuto prendere una decisione ma non sono intervenuta per tentare di salvarti. Anche questa è stata una scelta. Ma il passato è passato. Ora essere diventata regina mi ha dato immensi poteri, e ho subito fatto il possibile per riportarti in vita."

var fin_alt2a= "<span class='nome'>Sedna Regina:</span> Al tuo risveglio sarai cambiato. Probabilmente non mi riconoscerai, ma io potrò vederti e proteggerti, sapendo che sei ancora in vita, e vivremo in eterno grazie a questi corpi perfetti. Lunga vita agli alcioni."

var fin_alt1= "<span class='end'>FINE</span>"

var fin_alt2= "<span class='end'>FINE</span>"

var alc_ssc= "<span class='nome'>Pianeta Kematian, Blocco Planetario S, 15 lune al rituale di trasformazione.</span>"

var Dae_01pre= "<span class='nome'>Sedna:</span> Sta arrivando qualcuno..."

var Dae_01= "<span class='nome'>Sedna:</span> Papà! <br><br> <span class='nome'>Padre:</span> Sedna! <br><br><span class='nome'>Sedna:</span> Finalmente...stavo per perdere le speranze… <br><br> <span class='nome'>Padre:</span> Appena ho ricevuto il segnale d’aiuto con le coordinate sono partito con la mia vecchia nave, è stata dura arrivare fin qui senza farmi scoprire dai sistemi di difesa dell’orbita, ma alla fine ce l’ho fatta...ma non perdiamoci in chiacchere..andiamo via da questo posto desolato."

var Dae_012= "<span class='nome'>Sedna:</span> Sono riuscita a raggiungere la navicella per miracolo, e non ci metteranno molto a scoprire la mia posizione, dobbiamo sbrigarci. <br><br> <span class='nome'>Padre:</span> Il motore ha bisogno di riparazioni, altrimenti non riusciremo neanche a sollevarci da terra. Facciamo così: Io salgo alla plancia di comando e tento di riattivarli da lì, tu prova ad andare a controllare direttamente il catalizzatore… <br><br> <span class='nome'>Sedna:</span> ok!"

var Dae_02a= "<span class='comlink'>- Trasmissione in arrivo, COM-Link stabilito. -</span><br><br><span class='nome'>Bahaya:</span> Uomo, il tuo accesso non autorizzato alla nostra orbita verrà punito con la morte. Arrenditi subito o preparati a combattere. <br><br> <span class='nome'>Padre:</span> Sono il padre di Sedna, sono venuto qui per portarla via con me. Lei è già qui, partiremo a momenti. Non riuscirete a fermarci!"

var Dae_02a_1= " <span class='nome'>Bahaya:</span> Osi sfidarci terrestre? Molto bene. Forse non riusciremo a localizzare la vostra posizione abbastanza in fretta per catturarvi, ma possiamo fare molto di peggio. Ti lascerò l’illusione di una libera scelta…"

var Dae_02b= "<span class='comlink'>- Trasmissione in arrivo, COM-Link stabilito. -</span><br><br><span class='nome'>Bahaya:</span> Ancora tu? come hai fatto ad arrivare fino a qui? <br><br> <span class='nome'>Padre:</span> A quanto pare quell’ “Umano decrepito all’ultimo stadio di decadimento” è riuscito ad arrivare fino a qui superando tutti i vostri sistemi di difesa. <br><br> <span class='nome'>Padre:</span> Sono venuto qui per portarla via. Sedna non diventerà la vostra regina."

var Dae_02b_1= "<span class='nome'>Bahaya:</span> Avrei dovuto eliminarti in quell’osservatorio...ma poco importa. Forse non riusciremo a localizzare la vostra posizione abbastanza in fretta per catturarvi, ma possiamo fare molto di peggio. Ti lascerò l’illusione di una libera scelta…"

var Dae_031= "<span class='nome'>Bahaya:</span> Se la tua navicella uscirà dall’orbita con tua figlia all’interno, non vi resterà che contare le ore prima della distruzione del vostro pianeta Terra. Abbiamo armi abbastanza potenti da ridurlo in frammenti. Voi diventerete gli unici esseri umani rimasti nell’universo...vivrete come nomadi, vagando di pianeta in pianeta cercando risorse per sopravvivere, e senza poter più tornare al vostro pianeta natale.<br> In alternativa possiamo pensare ad una risoluzione più pacifica. Lascia la nostra regina su questo pianeta, e ti consentiremo di uscire dall’orbita. La tua vita e quella di tutta la razza umana verrà risparmiata. L’intera esistenza della vostra specie in cambio di tua figlia, mi sembra un’offerta più che valida. Decidi."

var Dae_032= "<span class='nome'>Padre:</span> Non posso credere di essere arrivato fino a questo punto...ma non posso abbandonare qui mia figlia...Se diventerà regina e perderà la ragione nulla vieterà loro di eliminarci tutti. Preferirei vivere i miei ultimi giorni con lei, piuttosto che finire la mia esistenza in solitudine...<br>Ma avere in mano le sorti di un’intera specie...Ci sono miliardi di vite sul nostro pianeta che verrebbero spazzate via in un attimo. Voglio veramente diventare colui che causerà tutto questo? C’è una terza possibilità? <br><br> <div class='risposta Dae-03a1'>[Abbandona tua figlia sul pianeta]</div> <br> <div class='risposta Dae-03b1'>[Porta Sedna con te]</div>"

var Dae_03a1= "<span class='nome'>Sedna:</span> Papà! Sono riuscita a riparare i motori! Dammi un minuto e salgo a bordo! Non riesco a credere di essere riuscita a scappare da quegli esseri. <br><br> <span class='nome'>Padre:</span><span class='pensiero'>Sedna, perdonami per quello che sto per fare…Il genere umano deve poter continuare la sua esistenza in questo universo. Mi è stata data la possibilità di scegliere e ho scelto. Tu continuerai a vivere, anche se non vicino a me. Forse non ti ricorderai più di chi sono, e probabilmente non ci rincontreremo mai più, ma almeno potrò essere sicuro che da qualche parte nell’universo tu sarai ancora viva.</span>"

var Dae_03a2= "<span class='nome'>Sedna:</span> Papà...ma cosa…"

var obs_ss_alt= "<span class='nome'>Pianeta Terra, Osservatorio Astronomico della Federazione Terrestre, 6 anni dopo il ritorno della navicella.</span>"

var Doe_03a3= "<span class='nome'>Sedna Regina:</span> Sono tornata, papà. Senza la tua scelta di abbandonare il pianeta sarei ancora appartenuta alla vostra specie. Grazie a te ora possiedo enormi poteri. Gli alcioni domineranno su tutti i settori dell’universo conosciuti, e io li guiderò fino alla fine. E per quanto riguarda l’avermi abbandonato da sola su Kematian...tu hai fatto una scelta. Io ora ho fatto la mia."

var fin_tra= "<span class='end'>FINE</span>"

var Dae_03b1= "<span class='nome'>Padre:</span> Sedna, sali a bordo presto, non ci rimane molto tempo! <br><br> <span class='nome'>Sedna:</span> Tra qualche istante saremo fuori dall’orbita. I loro meccanismi di difesa non potranno più rilevarci! Fantastico! Non posso credere di essere uscita da qui!"

var Dae_03b2= "<span class='nome'>Padre:</span> Sedna io.. <br><br> <span class='nome'>Sedna:</span> Cosa c’è papà? <br><br> <span class='nome'>Padre:</span> non so come dirtelo... <br><br> <span class='nome'>Sedna:</span> ?"

var Dae_03b2_1= "<span class='nome'>Padre:</span> Quegli alcioni mi hanno fatto scegliere tra la tua vita e quella della razza umana. Ho dovuto scegliere...e ho scelto di salvarti. La terra verrà distrutta a momenti. <br><br> <span class='nome'>Sedna:</span> … <br><br> <span class='nome'>Padre:</span> Dovremo cambiare rotta verso qualche altro pianeta e ricostruire la nostra vita da lì."

var Dae_03b3="<span class='nome'>Padre:</span> Non ti preoccupare. In un modo o nell’altro ce la caveremo."

var fin_uff= "<span class='end'>FINE</span>"

var Dae_03c1= "<span class='nome'>Bahaya:</span> troppo tardi. <br><br><span class='nome'>Sedna:</span> Nooooo!"

var Dae_03c2= "<span class='nome'>Bahaya:</span> Catturateli e preparate subito il rituale per entrambi."

var Dai_03c3= "<span class='nome'>Padre:</span> Sedna, Non sono riuscito a prendere una decisione, Ma solo ora mi accorgo che anch’essa è stata una scelta. Presto tu diventerai la regina di tutti noi, e avrai immensi poteri e responsabilità."

var fin_alt2b= "<span class='nome'>Padre:</span> Forse non mi riconoscerai più dopo la trasformazione, ma ciò che importa è che entrambi siamo sopravvissuti, e che potremo vivere ancora a lungo grazie a questi corpi perfetti. Lunga vita agli alcioni."
