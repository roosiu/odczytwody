<?php

include("config.php");
if (isset($_POST['done'])) {


    $table_name = filter_var($_POST['table_name'], FILTER_SANITIZE_STRING);
    $column =  filter_var($_POST['column'], FILTER_SANITIZE_STRING);
   /// $where =  filter_var($_POST['where'], FILTER_SANITIZE_STRING);
    $where = stripslashes(trim($_POST['where']));
try {
  $query = 'SELECT '.$column.' FROM '.$table_name.' WHERE '.$where.'';
  $stmt = $db->prepare($query);
  $stmt->execute();

    while ($row = $stmt->fetch()) {
      echo $row[0];
    }

  } catch (\Exception $e) {
    echo json_encode(["message" => $e->getMessage() ]); // sends error response to front-end
    echo $query;
  }


}
 ?>