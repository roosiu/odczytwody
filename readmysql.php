<?php

include("config.php");
if (isset($_POST['done'])) {


    $table_name = filter_var($_POST['table_name'], FILTER_SANITIZE_STRING);
    //$column =  filter_var($_POST['column'], FILTER_SANITIZE_STRING);;
try {

  $stmt = $db->prepare("SELECT * FROM ".$table_name);
  $stmt->execute();

  while ($row = $stmt->fetch()) {
    echo $row['name']." ".$row['number']."<br />\n";
}

} catch (\Exception $e) {
  echo json_encode(["message" => $e->getMessage() ]); // sends error response to front-end
}


}
 ?>