function readmysql(column, table_name, where, target_element_id, tag){
    $.ajax({
        type: "POST",
        url: "readmysql.php",
        async: false,
        data: {
          "done": 1,
          "column": column,
          "table_name": table_name,
          "where": where,
          "tag" : tag
        },
        dataType: "html",   //expect html to be returned
        success: function(response){
            $(target_element_id).html(response);
            //alert(response);
        }

    });
}


function addAttrFromMysql(column, table_name, where, target_element_id, attr, addedText){
    $.ajax({
        type: "POST",
        url: "addAttrFromMysql.php",
        async: false,
        data: {
          "done": 1,
          "column": column,
          "table_name": table_name,
          "where": where,
          "attr" : attr,
          "addedText" : addedText
        },
        dataType: "html",   //expect html to be returned
        success: function(response){
            $(target_element_id).attr(attr , addedText+''+response);
            //alert(response);
        }

    });
}

function createWaterMeterInput(indeks, target_element_id) {

    $.ajax({
        type: "POST",
        url: "createWaterMeterInput.php",
        async: false,
        data: {
          "done": 1,
          "indeks": indeks
        },
        dataType: "html",   //expect html to be returned
        success: function(response){
            $(target_element_id).html(response);
            alert(response);
        }

    });
}


console.log("mysql.js included");