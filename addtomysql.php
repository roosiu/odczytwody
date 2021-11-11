<?php

include("config.php");
//if (isset($_POST['done'])) {

  // $q_no = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
  // $total_no = filter_var($_POST['comment'], FILTER_SANITIZE_STRING);
 $table = 'street';
 $column = 'name';
 $value = 'lecia3';
try {

  $stmt = $db->prepare("INSERT INTO ".$table."(".$column.") VALUES(?)");
  $stmt->execute(array($value));

  echo json_encode(["message" => "success"]); // sends success response to front-end

} catch (\Exception $e) {
  echo json_encode(["message" => $e->getMessage() ]); // sends error response to front-end
}
$stmt->close();

//}
 ?>