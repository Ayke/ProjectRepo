
$(document).ready(function(){

        $('body').append(" <div class='modal fade' id='myModal3' tabindex='-1'  role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'> <div class='modal-dialog ver'> <div class='modal-content btn-group-vertical ' id='mySubModal3'> <div class='modal-header' > <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button> <h4 class='modal-title' id='myModalLabel3'>更改账号权限</h4> </div> <div class='form-signin'> <label style='font-size: 20px' >选择账号进行权限修改</label> <div class='row'> <div class='col-lg-8'> <!-- Split button --> <div class='btn-group' style='margin-top: 15px '> <input type='button' id='currentState' class='btn btn-default' style='width: 195px;'  value='选择要修改权限的账号'> <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-expanded='false'> <span class='caret'></span> <span class='sr-only'>Toggle Dropdown</span> </button> <ul class='dropdown-menu' role='menu'> <li><a href='#' id='text1'onclick='changeText1()'>账号 1</a></li> <li><a href='#' id='text2'onclick='changeText2()'>账号 2</a></li> <li><a href='#' id='text3'onclick='changeText3()'>账号 3</a></li> <li class='divider'></li> <li><a href='#' id='text4'onclick='changeText4()'>账号 4</a></li></ul> </div> </div> <div class='col-md-7' style='margin-top: 25px'><label style='font-size: 20px'>选择该账户可见的相册</label> <iframe src='../pickfile1.html' marginheight='30px'  width='270'  height='200' frameborder='0' style='margin-left: 0px;margin-top: 15px' ></iframe> </div></div> </div> <div class='modal-footer' ><button type='button' class='btn btn-default' data-dismiss='modal'>取消</button> <button type='button' class='btn btn-primary' data-dismiss='modal'>确认修改</button> </div> </div> </div> </div>");


});