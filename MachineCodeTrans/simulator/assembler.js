//c should be an array of input
function assembler(c)
{

var reg = [];
var m = [];
var n_command = 0; 
var FIRST = -1;
var tar_opnumber = FIRST;
var content = [];
var tar_opnumber;
var line_now = 0;

var answer = 0;
var errormessage = "";
var result = [];

function error(s,num,code)
{
	errormessage = "There're some problem with " + s + " in " + num + "th code.";
	answer = 1;	//1 for error, 0 for no error
}

function reg(x)
{
	var fu = 0;
	switch (x) {
		case "$zero": fu = 0; break;
		case "$at": fu =  1;	break;  
		case "$v0": fu =  2;	break;  
		case "$v1": fu =  3;	break;  
		case "$a0": fu =  4;	break;  
		case "$a1": fu =  5;	break;  
		case "$a2": fu =  6;	break;  
		case "$a3": fu =  7;	break;  
		case "$t0": fu =  8;	break;  
		case "$t1": fu =  9;	break;  
		case "$t2": fu = 10;	break;  
		case "$t3": fu = 11;	break;  
		case "$t4": fu = 12;	break;  
		case "$t5": fu = 13;	break;  
		case "$t6": fu = 14;	break;  
		case "$t7": fu = 15;	break;  
		case "$s0": fu = 16;	break;  
		case "$s1": fu = 17;	break;  
		case "$s2": fu = 18;	break;  
		case "$s3": fu = 19;	break;  
		case "$s4": fu = 20;	break;  
		case "$s5": fu = 21;	break;  
		case "$s6": fu = 22;	break;  
		case "$s7": fu = 23;	break;  
		case "$t8": fu = 24;	break;  
		case "$t9": fu = 25;	break;  
		case "$k0": fu = 26;	break;  
		case "$k1": fu = 27;	break;  
		case "$gp": fu = 28;	break;  
		case "$sp": fu = 29;	break;  
		case "$fp": fu = 30;	break;  
		case "$ra": fu = 31;	break;  
		default: 	error(x,line_now,0);	break;
	}
	return fu;
}

function imme(x)
{
	var y = parseInt(x);
	if (!isNaN(y)) return y;
	else error(x,line_now,0);
}

function addtag(s, a)
{
	m.push({
		name:s,
		opnumber:a
	});	
}

function find(s)
//s is source, t is target
{
	var i;
	for(i = 0; i < m.length; i++) {
		if (m[i].name == s) {
			tar_opnumber = m[i].opnumber;
			return;
		}
	}
}


function prework(cc)
//return 1 for empty line or annotation line
//return 0 for normal line
//return -1 for EOF
{
	//console.log("Prework");
	//console.log(cc, cc == "", cc[0] == '#');
	if (cc == "" || cc[0] == '#') return 1
	content.push(cc.split(/ *, *| +/));
	//console.log(0,content[n_command][0],1,content[n_command][1],2,content[n_command][2],3,content[n_command][3]);
	var k = content[n_command][0].indexOf(":");
	if (k > 0) {
		addtag(content[n_command][0].substring(0,k),n_command);
		content[n_command][0] = content[n_command][1];
		content[n_command][1] = content[n_command][2];
		content[n_command][2] = content[n_command][3];
		content[n_command][3] = content[n_command][4];
		content[n_command][4] = content[n_command][5];
	}
	//console.log("PreworkFinish");
	return 0;
}


function prelw(num)
//1 for failure
//0 for success
//translate data like "473(xxx)" varo "473" and "xxx"
{
	var i,k,k2;
	i = 0;
	k = content[num][2].indexOf("(");
	if (k == -1) return 1;
	k2 = content[num][2].indexOf(")");
	if (k2 == -1) return 1;
	content[num][3] = content[num][2].substring(k+1,k2);
	content[num][2] = content[num][2].substring(0,k);
	return 0;
}

function fr(num, type, t1, t2, t3)
//return 0 for normal ending, 1 for error
{
	function reg(x)
	{
		var fu = 0;
		switch (x) {
			case "$zero": fu = 0; break;
			case "$at": fu =  1;	break;  
			case "$v0": fu =  2;	break;  
			case "$v1": fu =  3;	break;  
			case "$a0": fu =  4;	break;  
			case "$a1": fu =  5;	break;  
			case "$a2": fu =  6;	break;  
			case "$a3": fu =  7;	break;  
			case "$t0": fu =  8;	break;  
			case "$t1": fu =  9;	break;  
			case "$t2": fu = 10;	break;  
			case "$t3": fu = 11;	break;  
			case "$t4": fu = 12;	break;  
			case "$t5": fu = 13;	break;  
			case "$t6": fu = 14;	break;  
			case "$t7": fu = 15;	break;  
			case "$s0": fu = 16;	break;  
			case "$s1": fu = 17;	break;  
			case "$s2": fu = 18;	break;  
			case "$s3": fu = 19;	break;  
			case "$s4": fu = 20;	break;  
			case "$s5": fu = 21;	break;  
			case "$s6": fu = 22;	break;  
			case "$s7": fu = 23;	break;  
			case "$t8": fu = 24;	break;  
			case "$t9": fu = 25;	break;  
			case "$k0": fu = 26;	break;  
			case "$k1": fu = 27;	break;  
			case "$gp": fu = 28;	break;  
			case "$sp": fu = 29;	break;  
			case "$fp": fu = 30;	break;  
			case "$ra": fu = 31;	break;  
			default: 	error(x,line_now,0);	break;
		}
		return fu;
	}
	var tmp = 0;
	switch (type) {
		case "add": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x20;	break;
		}
		case "addu": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x21;	break;
		}
		case "sub": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x22;	break;
		}
		case "subu": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x23;	break;
		}
		case "and": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x24;	break;
		}
		case "or": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x25;	break;
		}
		case "xor": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x26;	break;
		}
		case "nor": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x27;	break;
		}

		case "break": {
			tmp = 0x0D;	break;
		}
		case "syscall": {
			tmp = 0x0C;	break;
		}

		case "mult": {
			tmp = (reg(t1) << 21) + (reg(t2) << 16) + 0x18;	break;
		}
		case "multu": {
			tmp = (reg(t1) << 21) + (reg(t2) << 16) + 0x19;	break;
		}
		case "div": {
			tmp = (reg(t1) << 21) + (reg(t2) << 16) + 0x1A;	break;
		}
		case "divu": {
			tmp = (reg(t1) << 21) + (reg(t2) << 16) + 0x1B;	break;
		}
		
		case "jr": {
			tmp = (reg(t1) << 21) + 0x08;	break;
		}
		case "jalr": {
			tmp = (reg(t2) << 21) + (reg(t1) << 11) + 0x09;	break;
		}
		case "mthi": {
			tmp = (reg(t1) << 21) + 0x11;	break;
		}
		case "mtlo": {
			tmp = (reg(t1) << 21) + 0x13;	break;
		}
		case "mfhi": {
			tmp = (reg(t1) << 11) + 0x10;	break;
		}
		case "mflo": {
			tmp = (reg(t1) << 11) + 0x12;	break;
		}

		case "sll": {
			tmp = (reg(t2) << 16) + (reg(t1) << 11) + (reg(t3) << 6) + 0x00;	break;
		}
		case "srl": {
			tmp = (reg(t2) << 16) + (reg(t1) << 11) + (reg(t3) << 6) + 0x02;	break;
		}
		case "sra": {
			tmp = (reg(t2) << 16) + (reg(t1) << 11) + (reg(t3) << 6) + 0x03;	break;
		}

		case "slt": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x2A;	break;
		}
		case "sltu": {
			tmp = (reg(t2) << 21) + (reg(t3) << 16) + (reg(t1) << 11) + 0x2B;	break;
		}

		case "sllv": {
			tmp = (reg(t3) << 21) + (reg(t2) << 16) + (reg(t1) << 11) + 0x04;	break;
		}
		case "srlv": {
			tmp = (reg(t3) << 21) + (reg(t2) << 16) + (reg(t1) << 11) + 0x06;	break;
		}
		case "srav": {
			tmp = (reg(t3) << 21) + (reg(t2) << 16) + (reg(t1) << 11) + 0x07;	break;
		}
		default: {
			return 1;
			break;
		}
	}
	result.push(tmp);	///problem
	return 0;
}

function fj(num, type, t1)
//mode is 0:j
//return 0 for normal ending, 1 for error
{
	find(t1);
	if (tar_opnumber == FIRST) { error(t1,num,0);	return;	}
	switch (type) {
		case "j":{
			tmp = (0x02 << 26) + imme(tar_opnumber);
			break;
		}
		case "j":{
			tmp = (0x03 << 26) + imme(tar_opnumber);
			break;
		}
	}
	result.push(tmp);			//problem
	return 0;
}

function fi(num, type, t1, t2, t3)
{
	console.log("fi in");
	console.log("type=",type,"t1=",t1,"t2=",t2,"t3=",t3);
	function reg(x)
	{
		var fu = 0;
		switch (x) {
			case "$zero": fu = 0; break;
			case "$at": fu =  1;	break;  
			case "$v0": fu =  2;	break;  
			case "$v1": fu =  3;	break;  
			case "$a0": fu =  4;	break;  
			case "$a1": fu =  5;	break;  
			case "$a2": fu =  6;	break;  
			case "$a3": fu =  7;	break;  
			case "$t0": fu =  8;	break;  
			case "$t1": fu =  9;	break;  
			case "$t2": fu = 10;	break;  
			case "$t3": fu = 11;	break;  
			case "$t4": fu = 12;	break;  
			case "$t5": fu = 13;	break;  
			case "$t6": fu = 14;	break;  
			case "$t7": fu = 15;	break;  
			case "$s0": fu = 16;	break;  
			case "$s1": fu = 17;	break;  
			case "$s2": fu = 18;	break;  
			case "$s3": fu = 19;	break;  
			case "$s4": fu = 20;	break;  
			case "$s5": fu = 21;	break;  
			case "$s6": fu = 22;	break;  
			case "$s7": fu = 23;	break;  
			case "$t8": fu = 24;	break;  
			case "$t9": fu = 25;	break;  
			case "$k0": fu = 26;	break;  
			case "$k1": fu = 27;	break;  
			case "$gp": fu = 28;	break;  
			case "$sp": fu = 29;	break;  
			case "$fp": fu = 30;	break;  
			case "$ra": fu = 31;	break;  
			default: 	error(x,line_now,0);	break;
		}
		return fu;
	}
	var tmp;
	switch (type) {
		case "addi": {
			tmp = (0x08 << 26) + (reg(t2) << 21) + (reg(t1) << 16) + imme(t3);	break;
		}
		case "addiu": {
			tmp = (0x09 << 26) + (reg(t2) << 21) + (reg(t1) << 16) + imme(t3);	break;
		}
		case "andi": {
			tmp = (0x0C << 26) + (reg(t2) << 21) + (reg(t1) << 16) + imme(t3);	break;
		}
		case "lb": {
			tmp = (0x20 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "lh": {
			tmp = (0x21 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "lw": {
			tmp = (0x23 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "lbu": {
			tmp = (0x24 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "lhu": {
			tmp = (0x25 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "sb": {
			tmp = (0x28 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "sh": {
			tmp = (0x29 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "sw": {
			tmp = (0x2B << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "lwc1": {
			tmp = (0x31 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "swc1": {
			tmp = (0x39 << 26) + (reg(t3) << 21) + (reg(t1) << 16) + imme(t2);	break;
		}
		case "lui": {
			tmp = (0x0F << 26)                       + (reg(t1) << 16) + imme(t2);	break;
		}
		case "slti": {
			tmp = (0x0A << 26) + (reg(t2) << 21) + (reg(t1) << 16) + imme(t3);	break;
		}
		case "sltiu": {
			tmp = (0x0B << 26) + (reg(t2) << 21) + (reg(t1) << 16) + imme(t3);	break;
		}
		case "ori": {
			tmp = (0x0D << 26) + (reg(t2) << 21) + (reg(t1) << 16) + imme(t3);	break;
		}
		case "xori": {
			tmp = (0x0E << 26) + (reg(t2) << 21) + (reg(t1) << 16) + imme(t3);	break;
		}
		case "beq": {
			find(t3);
			var ta = tar_opnumber-num-1;
			tmp = (0x04 << 26) + (reg(t1) << 21) + (reg(t2) << 16) + imme(ta);	break;	
		}
		case "bne": {
			find(t3);
			var ta = tar_opnumber-num-1;
			tmp = (0x05 << 26) + (reg(t1) << 21) + (reg(t2) << 16) + imme(ta);	break;	
		}
		case "bgez": {
			find(t2);
			var ta = tar_opnumber-num-1;
			tmp = (0x01 << 26) + (reg(t1) << 21) + (0x01 << 16) + imme(ta);	break;	
		}
		case "bgtz": {
			find(t2);
			var ta = tar_opnumber-num-1;
			tmp = (0x07 << 26) + (reg(t1) << 21) + imme(ta);	break;	
		}
		case "blez": {
			find(t2);
			var ta = tar_opnumber-num-1;
			tmp = (0x06 << 26) + (reg(t1) << 21) + imme(ta);	break;	
		}
		case "bltz": {
			find(t2);
			var ta = tar_opnumber-num-1;
			tmp = (0x01 << 26) + (reg(t1) << 21) + imme(ta);	break;	
		}
	}
	result.push(tmp);	///problem
	return 0;
}




function work()
{
	//console.log("Work");
	var i;
	for(i = 0; i < n_command; i++) {
		line_now = i;
		//console.log("Now I'm at",i);
		//console.log(0,content[i][0],1,content[i][1],2,content[i][2],3,content[i][3]);
		tar_opnumber = FIRST;
		if (content[i][0] == "add" || content[i][0] == "addu" || content[i][0] == "and" || content[i][0] == "nor" ||
			content[i][0] == "or" || content[i][0] == "div" || content[i][0] == "divu" || content[i][0] == "break" ||
			content[i][0] == "jalr" || content[i][0] == "jr" || content[i][0] == "mfhi" || content[i][0] == "mflo" ||
			content[i][0] == "mthi" || content[i][0] == "mtlo" || content[i][0] == "mult" || content[i][0] == "multu" ||
			content[i][0] == "sll" || content[i][0] == "sllv" || content[i][0] == "slt" || content[i][0] == "sltu" ||
			content[i][0] == "sra" || content[i][0] == "srav" || content[i][0] == "srl" || content[i][0] == "srlv" ||
			content[i][0] == "sub" || content[i][0] == "subu" || content[i][0] == "syscall" || content[i][0] == "xor" 
			) {
			if (fr(i,content[i][0],content[i][1],content[i][2],content[i][3])) return;
		}
		else {
			if (content[i][0] == "lb" || content[i][0] == "lh" || content[i][0] == "lw" || 
				content[i][0] == "lbu" || content[i][0] == "lhu" || content[i][0] == "sb" || 
				content[i][0] == "sh" || content[i][0] == "sw" || content[i][0] == "lwc1" || 
				content[i][0] == "swc1" ) {
				if (prelw(i)) {	
					error("lw",i,0);	
					return;	
				}
			}
			if (content[i][0] == "lb" || content[i][0] == "lh" || content[i][0] == "lw" || 
				content[i][0] == "lbu" || content[i][0] == "lhu" || content[i][0] == "sb" || 
				content[i][0] == "sh" || content[i][0] == "sw" || content[i][0] == "lwc1" || 
				content[i][0] == "swc1" || content[i][0] == "lui" || content[i][0] == "ori" ||
				content[i][0] == "slti" || content[i][0] == "sltiu" || content[i][0] == "xori" ||
				content[i][0] == "addi" || content[i][0] == "addiu" || content[i][0] == "andi" ||
				content[i][0] == "beq" || content[i][0] == "bne" || content[i][0] == "bgez" ||
				content[i][0] == "bgtz" || content[i][0] == "blez" || content[i][0] == "bltz" )
			{
				if (fi(i,content[i][0],content[i][1],content[i][2],content[i][3])) return;
			}
			else {
				if (content[i][0] == "j" || content[i][0] == "jar") {
					if (fj(i,content[i][0],content[i][1])) return;
				}
				else {
					error(content[i][0],i,0);
				}
			}
		}
	}
	//console.log("WorkFinish");
}

	var address = 0;
	var tmp;

	for(n_command = 0; n_command < c.length; n_command++) {
		tmp = prework(c[n_command]);
		address += 4;
		if (tmp == 1) {
			n_command--;
			address -= 4;
		}
	}
	n_command = c.length;
	work();
	console.log(answer,errormessage,result);
	return {
		answer:answer,
		errormessage:errormessage,
		result:result
	};
}

var pap = [];
pap.push("addi $v0, $k0, 5");
pap.push("gan: add $sp,$gp,$ra");
pap.push("j gan");
pap.push("add $sp,$gp,$ra");
assembler(pap);