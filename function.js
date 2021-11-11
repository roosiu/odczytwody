function btn_next( page ){
    if (!$("#address_val_" + page).val())
    {
      $("#tooltip_"+ (page)).removeClass( "hide" );
    } else
    {
      $("#div_"+ (page) ).addClass( "hide" );
      $("#div_"+ (page+1)).removeClass( "hide" );
      $("#tooltip_"+ (page)).addClass( "hide" );
      console.log($("#address_val_" + page).val());

    }
  }

  function btn_prev( page ){
    $("#div_"+ (page) ).addClass( "hide" );
    $("#div_"+ (page-1)).removeClass( "hide" );
  }

  function start(){
    $(".start_button").addClass( "hide" );
    $("#div_1").removeClass( "hide" );
  }

  function check_text( page ){
    $("#tooltip_"+ (page)).addClass( "hide" );
  }
console.log("function.js included");