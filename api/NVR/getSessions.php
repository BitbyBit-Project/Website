<?php
// Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/NVRDatabase.php';
include_once '../../models/S1.php';


// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

$S1 = new S1($db);

$authHeader = $_SERVER['HTTP_AUTHORIZATION'];
$arr = explode(" ", $authHeader);




$Sess = $S1->read_single();
$results_arr = array();
$row = $Sess->fetch(PDO::FETCH_ASSOC);
extract($row);


$run_item = array(
  'idS1Session' => $idS1Session,
  'Ant_RUL' => $Ant_RUL,
  'Ant_RML' => $Ant_RML,
  'Ant_RLL' => $Ant_RLL,
  'Ant_LUL' => $Ant_LUL,
  'Ant_LLL' => $Ant_LLL,
  'POST_RUL' => $POST_RUL,
  'POST_RLL' => $POST_RLL,
  'POST_LUL' => $POST_LUL,
  'POST_LLL' => $POST_LLL,
  'Lat_RUL' => $Lat_RUL,
  'Lat_RML' => $Lat_RML,
  'Lat_RLL' => $Lat_RLL,
  'Lat_LUL' => $Lat_LUL,
  'Lat_LLL' => $Lat_LLL,
  'leftUnmeasured' => $leftUnmeasured,
);
array_push($results_arr, $run_item);
print_r(json_encode($results_arr));
