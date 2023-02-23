<?php
if (!isset($_POST["set"]) or !isset($_POST["orderOfCountries"]) or !isset($_POST["countryIndex"])) {
    exit();
}

$set = $_POST["set"];
$order= json_decode($_POST["orderOfCountries"],true);
$index = $_POST["countryIndex"];
$thisFilePath = dirname(dirname(__FILE__));
$countries = file_get_contents($thisFilePath . "\Countries Info\data_file.json");
$countries = json_decode($countries,true);
if ($index == 0) {
    $order = array();
    $i = 0;
    foreach ($countries as $country) {
        array_push($order,$i);

        $i++;
    }
    shuffle($order);
}


$selectedCountry = (array_keys($countries[$order[$index]]));
echo json_encode(array("order"=> $order,"country" =>$selectedCountry));

?>