<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>PicDb</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</head>
<body>



<button type="button" class="btn btn-default btn-lg" id="start" style=" margin-top: 10%;margin-left: 10%;background-color: blueviolet; color:#ffffff" data-toggle="modal" data-target="#myModal6">
    Start!
</button>





<div class="modal fade" id="myModal6" tabindex="-1"  role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">



    <div class="modal-dialog" style="height: 1000px ;margin:auto;margin-top: 10%" >
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                <li data-target="#carousel-example-generic" data-slide-to="4"></li>
            </ol>


            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox" align="middle" id="slide">

               <div class="item active" >
                    <img src="http://www.dctofs.com/pic/h&m.REF.0257586005.jpeg"  alt="" >
                    <div class="carousel-caption">
                        It's first picture.
                    </div>
                </div>



            

            </div>


            <!-- Controls -->
            <a class="left carousel-control"   href="#carousel-example-generic" role="button" data-slide="prev" onmousemove="out1()" onmouseout="over1()">
                <span class="glyphicon glyphicon-chevron-left" style="visibility: hidden "  id="toLeft" aria-hidden="true"   ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control"   href="#carousel-example-generic" role="button" data-slide="next" onmousemove="out2()" onmouseout="over2()">
                <span class="glyphicon glyphicon-chevron-right" style="visibility: hidden" id="toRight" aria-hidden="true"  ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>


<script type="text/javascript">
    function over1()
    {
        document.getElementById("toLeft").style.visibility="hidden";
    }
    function out1()
    {
        document.getElementById("toLeft").style.visibility="visible";
    }
     function over2()
    {
        document.getElementById("toRight").style.visibility="hidden";
    }
    function out2()
    {
        document.getElementById("toRight").style.visibility="visible";
    }
</script>






<?php
    
    error_reporting(0);
    
    $link = mysql_connect("localhost","root","") or die("cannot connect!".mysql_error());
    if(!($link))
    {
        echo "Fail connecting!";
    }
    
    $db_selected = mysql_select_db("Kiwi",$link);
    if(!($db_selected))
    {
        echo "Fail connecting to database!";
    }
    
    
    $trans=array();
    
    function addPic()
    {
           $i = 0;

        $sql = mysql_query("select * from info");
        
        while($info2 = mysql_fetch_array($sql))
        {   
            
            $src[i] = $info2[7];
            $i=$i+1;
            echo "<script>\$(document).ready(function(){\$('#slide')."."append(\"<div class='item'>"."<img src='"."$src[i]"."'></div>\");});</script>";

            
        }  


    }

    addPic();

   
    ?>


</body>
</html>












