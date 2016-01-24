var machine_code = new Array;
var compile_code = new Array;
var isRunAll=false;
var height=78;

compile_code[0]="gan: addu $v0, $k0, $t2";
compile_code[1]="add $sp,$gp,$ra";
compile_code[2]="j gan";
compile_code[3]="add $sp,$gp,$ra";

//machine_code[0]="0000FFF0";
//machine_code[1]="0000FFF1";
//machine_code[2]="0000FFF2";
//machine_code[3]="0000FFF3";

$(document).ready(function(){
    resetAll();
    //refreshMacCode();
    refreshComCode();
    refreshReg();
    setInterval(function(){
    if (isRunAll)
        runOne();},500)
})

function runOne()
{
    var s;
    var macCode;
    s=$("#macCode").val();
    s = s.replace('\t', ' ');
    macCode = s.split("\n");
    for (i in macCode)
        macCode[i]=parseInt(macCode[i],16);
    machine_code = macCode;
    code = machine_code;
    operate();
    refreshReg();
    document.getElementById("PC").style.marginTop =  78 + 20 * pc + 'px';

}

function runAll()
{
    isRunAll = true;
}

function refresh()
{
    height = 78;
    document.getElementById("PC").style.marginTop =  height + 'px';
    resetAll();
    refreshReg();
}

function coToMa()
{
    var s;
    var compileCode;

    s=$("#comCode").val();
    s = s.replace('\t', ' ');
    compileCode = s.split("\n");

   if(compileCode.length>=15)
    document.getElementById("macCode").rows=compileCode.length;


    var object = assembler(compileCode);
    if(object.answer==0)
        machine_code = object.result;
    else
        machine_code[0] = "Error!";
    refreshMacCode();
}

function maToCo()
{
    var s;
    var macCode;


    s=$("#macCode").val();
    s = s.replace('\t', ' ');
    macCode = s.split("\n");
    for (i in macCode)
        macCode[i]=parseInt(macCode[i],16)
    machine_code = macCode;

    var object = disassembler(macCode);
    if(object.answer==0)
        compile_code = object.result;
    else
        compile_code[0] = "Error!";
    refreshComCode();
}


function refreshMacCode()
{
    $("#macCode").val(machine_code[0]);
    for(var i = 1;i < machine_code.length;i++)
    {
        $("#macCode").val($("#macCode").val()+"\n"+machine_code[i]);
    }
}

function refreshComCode()
{
    $("#comCode").val(compile_code[0]);
    for(var i = 1;i < compile_code.length;i++)
    {
        $("#comCode").val($("#comCode").val()+"\n"+compile_code[i]);
    }
}

function refreshReg()
{
    $("#zero").val(reg[0]);
    $("#at").val(reg[1]);
    $("#v0").val(reg[2]);
    $("#v1").val(reg[3]);
    $("#a0").val(reg[4]);
    $("#a2").val(reg[5]);
    $("#a1").val(reg[6]);
    $("#a3").val(reg[7]);
    $("#t0").val(reg[8]);
    $("#t1").val(reg[9]);
    $("#t2").val(reg[10]);
    $("#t3").val(reg[11]);
    $("#t4").val(reg[12]);
    $("#t5").val(reg[13]);
    $("#t6").val(reg[14]);
    $("#t7").val(reg[15]);
    $("#s0").val(reg[16]);
    $("#s1").val(reg[17]);
    $("#s2").val(reg[18]);
    $("#s3").val(reg[19]);
    $("#s4").val(reg[20]);
    $("#s5").val(reg[21]);
    $("#s6").val(reg[22]);
    $("#s7").val(reg[23]);
    $("#t8").val(reg[24]);
    $("#t9").val(reg[25]);
    $("#k0").val(reg[26]);
    $("#k1").val(reg[27]);
    $("#gp").val(reg[28]);
    $("#sp").val(reg[29]);
    $("#fp").val(reg[30]);
    $("#ra").val(reg[31]);
}

function changeValue()
{
    reg[0] =  $("#zero").val();
    reg[1] =  $("#at").val();
    reg[2] =  $("#v0").val();
    reg[3] =  $("#v1").val();
    reg[4] =  $("#a0").val();
    reg[5] =  $("#a2").val();
    reg[6] =  $("#a1").val();
    reg[7] =  $("#a3").val();
    reg[8] =  $("#t0").val();
    reg[9] =  $("#t1").val();
    reg[10] = $("#t2").val();
    reg[11] = $("#t3").val();
    reg[12] = $("#t4").val();
    reg[13] = $("#t5").val();
    reg[14] = $("#t6").val();
    reg[15] = $("#t7").val();
    reg[16] = $("#s0").val();
    reg[17] = $("#s1").val();
    reg[18] = $("#s2").val();
    reg[19] = $("#s3").val();
    reg[20] = $("#s4").val();
    reg[21] = $("#s5").val();
    reg[22] = $("#s6").val();
    reg[23] = $("#s7").val();
    reg[24] = $("#t8").val();
    reg[25] = $("#t9").val();
    reg[26] = $("#k0").val();
    reg[27] = $("#k1").val();
    reg[28] = $("#gp").val();
    reg[29] = $("#sp").val();
    reg[30] = $("#fp").val();
    reg[31] = $("#ra").val();
    for(var i=0;i<=31;i++)
        reg[i]=parseInt(reg[i]);
    alert("Done!");
}
