function disassembler(data)
{
var answer = 0;
var result = [];
var n_dis = 0;
var name = "";

function next(x)
{
	var k = x.length;
	if (x[k-1] != 'z')
	return x + "a";
}

function process(x)
{
	switch (x) {
		case  0:	result[n_dis] += ("$zero");	break;
		case  1:	result[n_dis] += ("$at");	break;
		case  2:	result[n_dis] += ("$v0");	break;
		case  3:	result[n_dis] += ("$v1");	break;
		case  4:	result[n_dis] += ("$a0");	break;
		case  5:	result[n_dis] += ("$a1");	break;
		case  6:	result[n_dis] += ("$a2");	break;
		case  7:	result[n_dis] += ("$a3");	break;
		case  8:	result[n_dis] += ("$t0");	break;
		case  9:	result[n_dis] += ("$t1");	break;
		case 10:	result[n_dis] += ("$t2");	break;
		case 11:	result[n_dis] += ("$t3");	break;
		case 12:	result[n_dis] += ("$t4");	break;
		case 13:	result[n_dis] += ("$t5");	break;
		case 14:	result[n_dis] += ("$t6");	break;
		case 15:	result[n_dis] += ("$t7");	break;
		case 16:	result[n_dis] += ("$s0");	break;
		case 17:	result[n_dis] += ("$s1");	break;
		case 18:	result[n_dis] += ("$s2");	break;
		case 19:	result[n_dis] += ("$s3");	break;
		case 20:	result[n_dis] += ("$s4");	break;
		case 21:	result[n_dis] += ("$s5");	break;
		case 22:	result[n_dis] += ("$s6");	break;
		case 23:	result[n_dis] += ("$s7");	break;
		case 24:	result[n_dis] += ("$t8");	break;
		case 25:	result[n_dis] += ("$t9");	break;
		case 26:	result[n_dis] += ("$k0");	break;
		case 27:	result[n_dis] += ("$k1");	break;
		case 28:	result[n_dis] += ("$gp");	break;
		case 29:	result[n_dis] += ("$sp");	break;
		case 30:	result[n_dis] += ("$fp");	break;
		case 31:	result[n_dis] += ("$ra");	break;
		default: 	answer = 1;	break;
	}
}

function immepro(x)
{
	result[n_dis] += parseInt(x);
}

function work(t)
{
	var c;
	var type;
	var tmp = (t & 0xFC000000) >> 26; 
	if (tmp == 0) type = 1;							//type == 1  R type
	else {
		if ((tmp == 2) || (tmp == 3)) type = 3;		//type == 3   J type
		else {
			if ((tmp >= 16) && (tmp <= 19)) type = 4;	//type == 4   Coprocessor type
			else type = 2;							//type == 2  I type
		}
	}
	var t0,t1,t2,t3,t4,t5;
	switch (type) {
		case 1:	{//t0:Func 	t1:rd 	t2:rs 	t3:rt 
			t0 = (t & 0x0000003F);
			t2 = (t & 0x03E00000) >> 21;
			t3 = (t & 0x001F0000) >> 16;
			t1 = (t & 0x0000F800) >> 11;
			t4 = (t & 0x000007C0) >> 6;
			switch (t0) {
				case 0x20: {
					result[n_dis] += ("add ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x21: {
					result[n_dis] += ("addu ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x24: {
					result[n_dis] += ("and ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x0D: {
					result[n_dis] += ("break ");	break;
				}
				case 0x1A: {
					result[n_dis] += ("div ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x1B: {
					result[n_dis] += ("divu ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x09: {
					result[n_dis] += ("jalr ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	
					break;
				}
				case 0x08: {
					result[n_dis] += ("jr ");	
					process(t2);	
					break;
				}
				case 0x10: {
					result[n_dis] += ("mfhi ");	
					process(t1);	
					break;
				}
				case 0x12: {
					result[n_dis] += ("mflo ");	
					process(t1);	
					break;
				}
				case 0x11: {
					result[n_dis] += ("mthi ");	
					process(t2);	
					break;
				}
				case 0x13: {
					result[n_dis] += ("mtlo ");	
					process(t2);	
					break;
				}
				case 0x18: {
					result[n_dis] += ("mult ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x19: {
					result[n_dis] += ("multu ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x27: {
					result[n_dis] += ("nor ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x25: {
					result[n_dis] += ("or ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x00: {
					result[n_dis] += ("sll ");	
					process(t1);	result[n_dis] += (", ");	
					process(t3);	result[n_dis] += (", ");
					immepro(t4);	
					break;
				}
				case 0x04: {
					result[n_dis] += ("sllv ");	
					process(t1);	result[n_dis] += (", ");	
					process(t3);	result[n_dis] += (", ");
					process(t2);	
					break;
				}
				case 0x2A: {
					result[n_dis] += ("slt ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x2B: {
					result[n_dis] += ("sltu ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x03: {
					result[n_dis] += ("sra ");	
					process(t1);	result[n_dis] += (", ");	
					process(t3);	result[n_dis] += (", ");
					immepro(t4);	
					break;
				}
				case 0x07: {
					result[n_dis] += ("srav ");	
					process(t1);	result[n_dis] += (", ");	
					process(t3);	result[n_dis] += (", ");
					process(t2);	
					break;
				}
				case 0x02: {
					result[n_dis] += ("srl ");	
					process(t1);	result[n_dis] += (", ");	
					process(t3);	result[n_dis] += (", ");
					immepro(t4);	
					break;
				}
				case 0x06: {
					result[n_dis] += ("srlv ");	
					process(t1);	result[n_dis] += (", ");	
					process(t3);	result[n_dis] += (", ");
					process(t2);	
					break;
				}
				case 0x22: {
					result[n_dis] += ("sub ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x23: {
					result[n_dis] += ("subu ");	
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x0C: { result[n_dis] += ("syscall\n"); break; }
				case 0x26: {
					result[n_dis] += ("xor ");
					process(t1);	result[n_dis] += (", ");	
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				default: {
					answer = 1;
					break;
				}
			}
			break;
		}
		case 2:	{//t0:OP	t1:rt 	t2:rs 	t3:immediate
			t0 = (t & 0xFC000000) >> 26;
			t2 = (t & 0x03E00000) >> 21;
			t1 = (t & 0x001F0000) >> 16;
			t3 = (t & 0x0000FFFF);
			switch (t0) {
				case 0x08: {
					result[n_dis] += ("addi ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x09: {
					result[n_dis] += ("addiu ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x0C: {
					result[n_dis] += ("andi ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x04: {
					result[n_dis] += ("beq ");
					process(t2);	result[n_dis] += (", ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x01: {
					if (t1 == 0) result[n_dis] += ("bltz ");
					else result[n_dis] += ("bgez ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x07: {
					result[n_dis] += ("bgtz ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x06: {
					result[n_dis] += ("blez ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x05: {
					result[n_dis] += ("bne ");
					process(t2);	result[n_dis] += (", ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x20: {
					result[n_dis] += ("lb ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x24: {
					result[n_dis] += ("lbu ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x21: {
					result[n_dis] += ("lh ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x25: {
					result[n_dis] += ("lhu ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x23: {
					result[n_dis] += ("lw ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x31: {
					result[n_dis] += ("lwc1 ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x28: {
					result[n_dis] += ("sb ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x29: {
					result[n_dis] += ("sh ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x2B: {
					result[n_dis] += ("sw ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x39: {
					result[n_dis] += ("swc1 ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	result[n_dis] += ("(");
					process(t2);	result[n_dis] += (")\n");
					break;
				}
				case 0x0F: {
					result[n_dis] += ("lui ");
					process(t1);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x0D: {
					result[n_dis] += ("ori ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x0A: {
					result[n_dis] += ("slti ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x0B: {
					result[n_dis] += ("sltiu ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				case 0x0E: {
					result[n_dis] += ("xori ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					immepro(t3);	
					break;
				}
				default: {
					answer = 1;
					break;
				}
			}
			break;
		}
		case 3:	{//t0:0 for j 1 for jal
			t0 = (t & 0x0C000000) >> 26;
			t1 = (t & 0x03FFFFFF);
			if (t0 == 2) {
				result[n_dis] += ("j ");
				name = next(name);
				result[n_dis] += name;
				result[t1] = name + ": " + result[t1];				
			}
			else {
				if (t0 == 3) {
					result[n_dis] += ("jal ");
					name = next(name);
					result[n_dis] += name;
					result[t1] = name + ": " + result[t1];
				}
				else {
					answer = 1;
				}
			}
			break;
		}
		case 4:	{//t0:format 	t1:fd 	t2:fs 	t3:ft 	t4:func
			t0 = (t & 0x03E00000) >> 21;
			t3 = (t & 0x001F0000) >> 16;
			t2 = (t & 0x0000F800) >> 11;
			t1 = (t & 0x000008C0) >> 6;
			t4 = (t & 0x0000003F);
			switch (t4) {
				case 0x00: {
					switch (t0) {
						case 0x10: {
							result[n_dis] += ("add.s ");
							process(t1);	result[n_dis] += (", ");
							process(t2);	result[n_dis] += (", ");
							process(t3);	
							break;
						}
						case 0x00: {
							result[n_dis] += ("mfc1 ");
							process(t3);	result[n_dis] += (", ");
							process(t2);	
							break;
						}
						case 0x04: {
							result[n_dis] += ("mtc1 ");
							process(t3);	result[n_dis] += (", ");
							process(t2);	
							break;
						}
						default: {
							answer = 1;
							break;
						}
					}
					break;
				}
				case 0x20: {
					result[n_dis] += ("cvt.s.w ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x24: {
					result[n_dis] += ("cvt.w.s ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x03: {
					result[n_dis] += ("div.s ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x06: {
					result[n_dis] += ("mov.s ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	
					break;
				}
				case 0x02: {
					result[n_dis] += ("mul.s ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				case 0x01: {
					result[n_dis] += ("sub.s ");
					process(t1);	result[n_dis] += (", ");
					process(t2);	result[n_dis] += (", ");
					process(t3);	
					break;
				}
				default: {
					answer = 1;
					break;
				}
			}
			break;
		}
	}
}
	var status;
	for(n_dis = 0; n_dis < data.length; n_dis++) {
		result.push("");
		work(data[n_dis]);
	}
	console.log(answer);
	for(var i = 0; i < result.length; i++) console.log(result[i]);
	return {
		answer:answer,
		result:result
	};
}


var pap = [60811296, 539033605, 134217729];

disassembler(pap);