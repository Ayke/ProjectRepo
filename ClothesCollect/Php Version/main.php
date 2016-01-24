<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Form View</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>

<body  style="background-image: url(dust.png)">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 left-col" style="margin-top: 30px" id="getInfo">
            <img src="logo.jpg"><br>
            <div class="pinned form-container">
                <ol class="breadcrumb" style="font-size: large;background-image: url(dust.png)">
                    <li class="active"><a id="ctl_Clothes" data-toggle="collapse" onclick="showContent('Clothes')") aria-expanded="false" aria-controls="Clothes">Clothes</a></li>
                    <li><a id="ctl_Price" data-toggle="collapse"  onclick="showContent('Price')" aria-expanded="false" aria-controls="Price">Price</a></li>
                    <li><a id="ctl_Reference"data-toggle="collapse" onclick="showContent('Reference')" aria-expanded="false" aria-controls="Reference">Refer</a></li>
                    <li><a id="ctl_Feedback" data-toggle="collapse" onclick="showContent('Feedback')" aria-expanded="false" aria-controls="Feedback">Feedback</a></li>
                    <li><a id="ctl_Customer" data-toggle="collapse" onclick="showContent('Customer')" aria-expanded="false" aria-controls="Customer">Customer</a></li>
                    <li><a id="ctl_Dealer" data-toggle="collapse" onclick="showContent('Dealer')" aria-expanded="false" aria-controls="Dealer">Dealer</a></li>
                    <li><a id="ctl_Query" data-toggle="collapse" onclick="showContent('Query')" aria-expanded="false" aria-controls="Query">Query</a></li>
                </ol>
                <div class="collapse" id="Clothes">
                      <div class="form">
                                <div class="form-group">
                                    <label>Enter the ID of Good:</label>
                                    <input type="text" class="form-control" id="Cl_Identity"  placeholder="Identity">
                                </div>

                                <div class="form-group">
                                    <label>Enter the Collection of Good:</label>
                                    <input type="text" class="form-control"  id="Cl_Collection" placeholder="Collection">
                                </div>
                                <div class="form-group">
                                    <label>Enter the Brand of Good:</label>
                                    <input type="text" class="form-control"  id="Cl_Brand" placeholder="Brand">
                                </div>
                                <div class="form-group">
                                    <label>Pick the Season of Good:</label>
                                    <div class="checkbox btn-group-vertical" id="Cl_Season">
                                        <label>
                                            <input type="checkbox" id="Spring" > Spring
                                        </label>
                                        <label>
                                            <input type="checkbox" id="Summer"> Summer
                                        </label>
                                        <label>
                                            <input type="checkbox" id="Autumn"> Autumn
                                        </label>
                                        <label>
                                            <input type="checkbox" id="Winter"> Winter
                                        </label>
                                    </div>

                                </div>
                                <button onclick="uploadClothes()" name="submit"  class="btn btn-success">Submit</button>
                                 <br>
                      </div>
                 </div>
                <div class="collapse" id="Price">
                    <div class="form">
                            <div class="form-group">
                                <label>Enter the ID of Good:</label>
                                <input type="text" class="form-control"  id="Pr_Identity" placeholder="Clothes ID">
                            </div>
                            <div class="form-group">
                                <label>Enter the Name of Dealer:</label>
                                <input type="text" class="form-control"  id="Pr_DealerName" placeholder="Dealer Name">
                            </div>
                            <div class="form-group">
                                <label>Enter the Price of Good:</label>
                                <input type="text" class="form-control"  id="Pr_Price" placeholder="Price">
                            </div>
                            <button  name="submit" onclick="uploadPrice()" class="btn btn-success">Submit</button>
                    </div>
                </div>

                <div class="collapse" id="Reference">
                    <div class="form">
                            <div class="form-group">
                                <label>Enter the ID of Good:</label>
                                <input type="text" class="form-control"  id="Re_ClothesID" placeholder="Good ID">
                            </div>
                            <div class="form-group">
                                <label>Enter the Website of Good:</label>
                                <input type="text" class="form-control"  id="Website" placeholder="Website">
                            </div>
                            <div class="form-group">
                                <label>Enter the Picture Address of Good:</label>
                                <input type="text" class="form-control"  id="PicAddr" placeholder="Picture Address">
                            </div>
                            <button  onclick="uploadRefer()"  class="btn btn-success">Submit</button>
                    </div>
                </div>

                <div class="collapse" id="Feedback">
                    <div class="form">
                            <div class="form-group">
                                <label>Enter your name:</label>
                                <input type="text" class="form-control" id="Fb_Username" placeholder="Username">
                            </div>

                            <div class="form-group">
                                <label>Enter the ID of Good:</label>
                                <input type="text" class="form-control"  id="Fb_ClothesID" placeholder="Good ID">
                            </div>

                            <div class="form-group">
                                <label>Enter the Score of Good:</label>
                                <input type="text" class="form-control" id="Fb_Score"  placeholder="Score">
                            </div>

                            <div class="form-group">
                                <label>Enter your comment:</label>
                                <input type="text" class="form-control" id="Fb_Comment"  placeholder="Comment">
                            </div>

                            <button onclick="uploadFeedBack()" name="submit" class="btn btn-success">Submit</button>
                    </div>
                </div>
                <div class="collapse" id="Customer">
                    <div class="form">
                            <div class="form-group">
                                <label>Enter the Username:</label>
                                <input type="text" class="form-control" id="Cu_Username"  placeholder="Username">
                            </div>

                            <div class="form-group">
                                <label>Enter the Gender:</label>
                                <input type="text" class="form-control"  id="Cu_Gender" placeholder="Gender">
                            </div>

                            <button onclick="uploadCustomer()" name="submit" class="btn btn-success">Submit</button>
                    </div>
                </div>
                <div class="collapse" id="Dealer">
                    <div class="form">
                            <div class="form-group">
                                <label>Enter the name of Dealer:</label>
                                <input type="text" class="form-control" id="De_DealerName"  placeholder="Name">
                            </div>

                            <div class="form-group">
                                <label>Enter the reputation of Dealer:</label>
                                <input type="text" class="form-control" id="De_Reputation"  placeholder="Reputation">
                            </div>
                            <button onclick="uploadDealer()" name="submit" class="btn btn-success">Submit</button>

                    </div>
                </div>
                <div class="collapse" id="Query">
                    <div class="form">
                            <div class="form-group">
                                <label>Enter the ID of goods to search:</label>
                                <input type="text" class="form-control" id="GoodID" name="GoodID"  placeholder="Goods ID">
                            </div>
                            <button type="submit" name="query1"  onclick=showInfo() class="btn btn-success">Search</button>
                        <br><br>
                            <div class="form-group">
                                <label>Enter the name of customer to search:</label>
                                <input type="text" class="form-control" id="CustomerName" name="CustomerName"  placeholder="Customer Name">
                            </div>
                            <button type="submit" name="query2" onclick=showInfo2() class="btn btn-success">Search</button>

                    </div>
                    <br>
                </div>
           </div>
        </div>

        <div class="col-lg-8 col-md-8 col-sm-8 right-col">
            <div id="InfoShow"></div>
            <div class="row" id="pic">
                <div class='col-xs-6 col-md-6'></div>
            </div>
      </div>

          <div class="modal fade" id="myModal" tabindex="-1"  role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">
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
                      <div class="carousel-inner" role="listbox" align="middle" id="slide"></div>

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
      </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

        <script src="http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
        <script src="http://cdn.bootcss.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
        <script src="jquery.pin.js"></script>
        <script src="function.js"></script>


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
function addPic()
    {
        $sql = mysql_query("select * from Reference");
        while($info = mysql_fetch_array($sql))
        {
            echo "<script>\$(document).ready(function(){\$('#slide')."."append(\"<div class='item' id="."$info[2]".">"."<img src='"."$info[1]"."'><div class='carousel-caption'>这是一个好商品！</div></div>\");});</script>";
            echo "<br>";
            echo "<script>\$(document).ready(function(){\$('#pic')."."append(\"<div class='col-xs-6 col-md-6'><a href='#' class='thumbnail' data-toggle='modal' data-target='#myModal' onclick="."makeActive('"."$info[2]"."')"."><img src='"."$info[1]"."'></a></div>\");});</script>";
        }
    }
    addPic();
    ?>
</body>
</html>



