<?php
// Headers
header("Access-Control-Allow-Origin: http://localhost/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/NVRDatabase.php';
include_once '../../models/S1.php';


// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

$authHeader = $_SERVER['HTTP_AUTHORIZATION'];
$arr = explode(" ", $authHeader);

$S1 = new S1($db);



$S1->Ant_RUL = "" . $_GET['Ant_RUL'];
$S1->Ant_RML = "" . $_GET['Ant_RML'];
$S1->Ant_RLL = "" . $_GET['Ant_RLL'];
$S1->Ant_LUL = "" . $_GET['Ant_RUL2'];
$S1->Ant_LLL = "" . $_GET['Ant_LLL'];
$S1->Post_RUL = "" . $_GET['Post_RUL'];
$S1->Post_RLL = "" . $_GET['Post_RLL'];
$S1->Post_LUL = "" . $_GET['Post_RUL2'];
$S1->Post_LLL = "" . $_GET['Post_LLL'];
$S1->Lat_RUL = "" . $_GET['Lat_RUL'];
$S1->Lat_RML = "" . $_GET['Lat_RML'];
$S1->Lat_RLL = "" . $_GET['Lat_RLL'];
$S1->Lat_LUL = "" . $_GET['Lat_RUL2'];
$S1->Lat_LLL = "" . $_GET['Lat_LLL'];
$S1->leftUnmeasured = "" . $_GET['leftUnmeasured'];


if ($S1->create()) {
    echo json_encode(

        array('message' => 'S1 Created')
    );
} else {
    echo json_encode(
        array('message' => 'S1 Not Created')
    );
}
