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
      if(page==1){ //// read street name  from mysql
        readmysql('name',($("#address_val_" + page).val().toLowerCase())+'_street','id is not NULL','#address_val_2', 'option');
      }
      if(page==2){ //// read max number of house  from mysql
        addAttrFromMysql('max_number',($("#address_val_" + (page-1)).val().toLowerCase())+'_street','name = "'+($("#address_val_" + page).val())+'"','#address_val_3', 'max', '');
        addAttrFromMysql('max_number',($("#address_val_" + (page-1)).val().toLowerCase())+'_street','name = "'+($("#address_val_" + page).val())+'"','#tooltip_3', 'data-tooltip', 'Wybierz od 1 do ');
        $("#address_val_" + (page+1)).attr('min' , 1);
        $("#address_val_" + (page+1)).val('');
      }
    }
  }

  function btn_prev( page ){
    $("#div_"+ (page) ).addClass( "hide" );
    $("#div_"+ (page-1)).removeClass( "hide" );
  }

  function start(){
    $(".start_button").addClass( "hide" );
    $("#div_1").removeClass( "hide" );
    readmysql('name','city','id is not NULL','#address_val_1', 'option'); //// read city from mysql

  }

  function check_text( page ){
    $("#tooltip_"+ (page)).addClass( "hide" );
  }

  function check_number( page ){
    if(Number($("#address_val_" + (page)).val()) > $("#address_val_" + (page)).attr("max") || Number($("#address_val_" + (page)).val()) < $("#address_val_" + (page)).attr("min") ){
      $("#tooltip_"+ (page)).removeClass( "hide" );
      $("#address_val_" + (page)).val('');
    } else {
      $("#tooltip_"+ (page)).addClass( "hide" );
    }
  }
console.log("function.js included");