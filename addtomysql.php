<?php

include("config.php");
if (isset($_POST['done'])) {


 $table_name = filter_var($_POST['table_name'], FILTER_SANITIZE_STRING);
 $number = filter_var($_POST['number'], FILTER_SANITIZE_STRING);
 $type = filter_var($_POST['type'], FILTER_SANITIZE_STRING);
 $street = filter_var($_POST['street'], FILTER_SANITIZE_STRING);
 $local = filter_var($_POST['local'], FILTER_SANITIZE_STRING);
 $city = filter_var($_POST['city'], FILTER_SANITIZE_STRING);
 $indeks = filter_var($_POST['indeks'], FILTER_SANITIZE_STRING);
 $stat = filter_var($_POST['stat'], FILTER_SANITIZE_STRING);

 try {

  $stmt = $db->prepare("INSERT INTO ".$table_name."(`Nr wodomierza`,	`Typ wodomierza`,	`Ulica i nr bud.`,	`Nr lok.`,	`Miejscowość`,	`Nazwisko`,	`Indeks lokalu`,	`stan`) VALUES(?, ?, ?, ?, ?, ?, ?, ?)");
  $stmt->execute(array($number,$type,$street,$local,$city,"dupek",$indeks,$stat));

  echo json_encode(["message" => "success"]); // sends success response to front-end

} catch (\Exception $e) {
  echo json_encode(["message" => $e->getMessage() ]); // sends error response to front-end
}
$stmt->close();

//}
 ?>