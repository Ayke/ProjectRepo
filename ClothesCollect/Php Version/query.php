<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Form View</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css">

</head>
<body>

</body>




<?php

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


$trans=array();
$q = $_GET['q'];

  if(is_numeric($q))
  {
      $GoodID=$q;
    $sql = mysql_query("select * from Price,Clothes where Price.ClothesID=$GoodID and Clothes.ID=$GoodID");

    while($info = mysql_fetch_array($sql))
    {
        echo "<br><br>";
        echo "<table class='table table-bordered'><tr><td class='active'>"."GoodID"."</td><td class='success'>"."Dealer"."</td><td class='warning'>"."Price"."</td><td class='danger'>"."Collection"."</td><td class='info'>"."Brand"."</td><td class='success'>"."Season"."</td></tr>";

        echo "<tr><td class='active'>"."$info[0]"."</td><td class='success'>"."$info[1]"."</td><td class='warning'>"."$info[2]"."</td><td class='danger'>"."$info[4]"."</td><td class='info'>"."$info[5]"."</td><td class='success'>"."$info[6]"."</td></tr>";

        echo "</table>";
    }
   }

  else
    {

    $CustomerName = $q;
    $sql2 = mysql_query("select * from Customer,FeedBack where Customer.Name = "."'$CustomerName'"." and FeedBack.CustomerName = "."'$CustomerName'");


    echo "<table class='table table-bordered'>";
    echo "<tr><td class='active'>"."Name"."</td><td class='success'>"."Gender"."</td><td class='warning'>"."ClothesID"."</td><td class='danger'>"."Score"."</td><td class='info'>"."Comment"."</td></tr>";


    while($info = mysql_fetch_array($sql2))
    {


        echo "<tr><td class='active'>"."$info[0]"."</td><td class='success'>"."$info[1]"."</td><td class='warning'>"."$info[2]"."</td><td class='danger'>"."$info[3]"."</td><td class='info'>"."$info[4]"."</td></tr>";

    }
    echo "</table>";
    echo "<br><br><br>";


}




?>