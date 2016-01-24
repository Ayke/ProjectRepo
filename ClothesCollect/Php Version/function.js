function showInfo() {
    var str = $("#GoodID").val();
    if (str == "") {
        return;
    } else {
        xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("InfoShow").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","query.php?q="+str,true);
        xmlhttp.send();
    }
}

function showInfo2() {
    var str = $("#CustomerName").val();
    if (str == "") {
        return;
    } else {
        xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("InfoShow").innerHTML = xmlhttp.responseText;

            }
        }
        xmlhttp.open("GET","query.php?q="+str,true);
        xmlhttp.send();
    }
}

function uploadClothes(){


    var ID =     $("#Cl_Identity").val();
    var COLLECTION = $("#Cl_Collection").val();
    var BRAND =  $("#Cl_Brand").val();
    var Spring = $("#Spring").is(":checked");
    var Summer = $("#Summer").is(":checked");
    var Autumn = $("#Autumn").is(":checked");
    var Winter = $("#Winter").is(":checked");


    var data='{' +
        '"ID":"'+ID+'",' +
        '"COLLECTION":"'+COLLECTION+'",' +
        '"BRAND":"'+BRAND+'",'+
        '"Spring":"'+Spring+'",'+
        '"Summer":"'+Summer+'",'+
        '"Autumn":"'+Autumn+'",'+
        '"Winter":"'+Winter+'"}';



    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("InfoShow").innerHTML = xmlhttp.responseText;

        }
    }


    xmlhttp.open("GET","upload_Clothes.php?data="+data,true);
    xmlhttp.send();

}


function uploadPrice(){


    var ID =     $("#Pr_Identity").val();
    var DealerName = $("#Pr_DealerName").val();
    var Price =  $("#Pr_Price").val();



    var data='{' +
        '"ID":"'+ID+'",' +
        '"DealerName":"'+DealerName+'",' +
        '"Price":"'+Price+'"}';



    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("InfoShow").innerHTML = xmlhttp.responseText;

        }
    }


    xmlhttp.open("GET","upload_Price.php?data="+data,true);
    xmlhttp.send();

}

function uploadRefer(){
    var ClothesID =  $("#Re_ClothesID").val();
    var Website = $("#Website").val();
    var PicAddr =  $("#PicAddr").val();



    var data='{' +
        '"ClothesID":"'+ClothesID+'",' +
        '"Website":"'+Website+'",' +
        '"PicAddr":"'+PicAddr+'"}';



    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("InfoShow").innerHTML = xmlhttp.responseText;

        }
    }


    xmlhttp.open("GET","upload_Refer.php?data="+data,true);
    xmlhttp.send();

}


function uploadFeedBack(){
    var Username =  $("#Fb_Username").val();
    var ClothesID = $("#Fb_ClothesID").val();
    var Score =  $("#Fb_Score").val();
    var Comment =  $("#Fb_Comment").val();


    var data='{' +
        '"Username":"'+Username +'",' +
        '"ClothesID":"'+ClothesID+'",' +
        '"Score":"'+Score+'",' +
        '"Comment":"'+Comment+'"}';

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("InfoShow").innerHTML = xmlhttp.responseText;

        }
    }


    xmlhttp.open("GET","upload_feedback.php?data="+data,true);
    xmlhttp.send();
}
function uploadCustomer(){
    var Username =  $("#Cu_Username").val();
    var Gender = $("#Cu_Gender").val();



    var data='{' +
        '"Username":"'+Username +'",' +
        '"Gender":"'+Gender+'"}';

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("InfoShow").innerHTML = xmlhttp.responseText;

        }
    }


    xmlhttp.open("GET","upload_Customer.php?data="+data,true);
    xmlhttp.send();
}
function uploadDealer(){
    var DealerName=  $("#De_DealerName").val();
    var Reputation = $("#De_Reputation").val();

    var data='{' +
        '"DealerName":"'+DealerName +'",' +
        '"Reputation":"'+Reputation+'"}';

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("InfoShow").innerHTML = xmlhttp.responseText;

        }
    }


    xmlhttp.open("GET","upload_Deal.php?data="+data,true);
    xmlhttp.send();
}

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

$('.collapse').collapse('show');
$('.collapse').collapse('hide');
$("#Clothes"). collapse('show');

function makeActive(id)
{
    $("#"+id+"").attr("class","item active");
    $('#myModal').on('hidden.bs.modal', function (e) {
        $("#"+id+"").attr("class","item");
    })
}

function showContent(id)
{
    $('.collapse').collapse('hide');
    $("#"+id+"").collapse('show');
}
$(".pinned").pin();