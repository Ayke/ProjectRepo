<?php



$json = $_GET['data'];

$obj = json_decode($json,true);


$Identity = $obj['ID'];
$Collection = $obj['COLLECTION'];
$Brand = $obj['BRAND'];
$Spring = $obj['Spring'];
$Summer = $obj['Summer'];
$Autumn = $obj['Autumn'];
$Winter = $obj['Winter'];


$Season="";

if($Spring=='true') {
    $Season = "$Season"."Spring";
}

if($Summer=='true') {
    $Season = "$Season"."Summer";
}

if($Autumn=='true') {
    $Season = "$Season"."Autumn";
}

if($Winter=='true') {
    $Season = "$Season"."Winter";
}

if($Spring=='true'&&$Summer=='true'&&$Autumn='true'&&$Winter='true')
    $Season="All";



error_reporting(0);


$link = mysql_connect("hdm-139.hichina.com","hdm1390571","lcx411370939") or die("cannot connect!".mysql_error());
if(!($link))
{
    echo "Fail connecting!";
}

$db_selected = mysql_select_db("hdm1390571_db",$link);
if(!($db_selected))
{
    echo "Fail connecting to database!";
}


mysql_query("insert into Clothes(ID,COLLECTION,BRAND,SEASON) values('$Identity','$Collection','$Brand','$Season')",$link);



?>
