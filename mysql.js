function readmysql(column, table_name, target_element_id){
    $.ajax({    //create an ajax request to display.php
        type: "POST",
        url: "readmysql.php",
        async: false,
        data: {
          "done": 1,
          "column": column,
          "table_name": table_name
        },
        dataType: "html",   //expect html to be returned
        success: function(response){
            $("#" + target_element_id).html(response);
            //alert(response);
        }

    });
}
readmysql('name,number','street','responsecontainer');
console.log("readmysql.js included");