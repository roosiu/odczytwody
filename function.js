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
      if(page==3){ //// check number of water meter and show input
        $(".App-logo").addClass("logoSmall"); /// hide logo
        $("#summary_div").removeClass("hide"); //// show summary
        $("#summary_address_div").html( "Wybrano: <b>" + $("#address_val_" + (page-2)).val() + ", ul. " +  $("#address_val_" + (page-1)).val() + "/" + $("#address_val_" + (page)).val()+"</b>");
        readmysql('indeks',($("#address_val_" + (page-2)).val().toLowerCase())+'_street','name = "'+($("#address_val_" + (page-1)).val())+'"','#summary_indeks_span', 'b');
        $("#summary_indeks_span b").append("-" + count_local_number($("#address_val_" + (page)).val()));
        console.log($("#summary_indeks_span b").html());
        createWaterMeterInput('32','#footer');
      }
    }
  }

  function btn_prev( page ){
    $("#div_"+ (page) ).addClass( "hide" );
    $("#div_"+ (page-1)).removeClass( "hide" );
    if(page==4){
      $(".App-logo").removeClass("logoSmall");
      $("#summary_div").addClass("hide");
    }
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

  function count_local_number(x){ //// add 0 to local number
    if (x.length==1){
      x = '00'+x
    }
    if (x.length==2){
      x = '0'+x
    }
    return x;
  }


console.log("function.js included");