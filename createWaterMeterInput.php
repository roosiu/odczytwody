<?php
include("config.php");
if (isset($_POST['done'])) {


    $indeks = str_replace('-','',filter_var($_POST['indeks'], FILTER_SANITIZE_STRING));
    try {
        $query = 'SELECT * FROM `odczyty` WHERE `Indeks lokalu`="'.$indeks.'"';
        $stmt = $db->prepare($query);
        $stmt->execute();

          while ($row = $stmt->fetch()) {
            $nr_wodomierza = $row['Nr wodomierza'];
            $typ_wodomierza = strtolower($row['Typ wodomierza']);
            echo '<span class="number_of_water_meter '.$typ_wodomierza.'">Numer wodomierza '.$row["Typ wodomierza"].': '.$nr_wodomierza.'</span><div id="'.$typ_wodomierza.'_div_'.$nr_wodomierza.'">

            <div class="water_input_div_left">
              <img src="water_meter_'.$typ_wodomierza.'.svg" />
            </div>
            <div class="water_input_div_right">
              <label>
                <input
                  type="number"
                  placeholder="Wpisz stan"
                  class="input"
                  id="'.$nr_wodomierza.'"
                  min="0"
              /></label>
              <span
                id="tooltip_'.$nr_wodomierza.'"
                data-tooltip="Wpisz stan"
                data-flow="bottom"
                class="hide"
              ></span>
            </div>
          </div>';

          }

        } catch (\Exception $e) {
          echo json_encode(["message" => $e->getMessage() ]); // sends error response to front-end

        }


}
?>