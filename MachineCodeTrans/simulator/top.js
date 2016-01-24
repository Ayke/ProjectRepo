var reg = new Array;
var memory = new Array;
var pc;
var code = new Array;
var memory_size = 128*1024;

function operate(){
	if (pc==code.length) return {code:"nok",message:"end of code" } 
	var op_code = code[pc]>>>26
	var addr_a = (code[pc]>>>21)&0x1F
	var addr_b = (code[pc]>>>16)&0x1F
	var addr_c = (code[pc]>>>11)&0x1F
	var func = code[pc]&0x2F
	var immediate
	if (code[pc]&0x8000)immediate = code[pc]|0xFFFF0000
		else immediate = code[pc]&0xFFFF
	var target = code[pc]&0x03FFFFFF
	switch(op_code){
		//R type
		case 0x0:
			switch(func){
				case 0x20:
			 		op_add(addr_a,addr_b,addr_c)
			 	break;
			 	case 0x22:
			 		op_sub(addr_a,addr_b,addr_c)
			 	break;
			 	case 0x24:
			 		op_and(addr_a,addr_b,addr_c)
			 	break;
			 	case 0x25:
			 		op_or(addr_a,addr_b,addr_c)
			 	break;
			 	case 0x26:
			 		op_xor(addr_a,addr_b,addr_c)
			 	break;
			 	case 0x2A:
			 		op_slt(addr_a,addr_b,addr_c)
			 	break;
			 	case 0x21:
			 		op_addu(addr_a,addr_b,addr_c)
			 	break;
			 	case 0x23:
			 		op_subu(addr_a,addr_b,addr_c)
			 	break;
			}
		break;
		case 0x23:
			op_lw(addr_a,addr_b,immediate)
		break;
		case 0x2B:
			op_sw(addr_a,addr_b,immediate)
		break;
		case 0x04:
			op_beq(addr_a,addr_b,immediate)
		break;
		case 0x08:
			op_addi(addr_a,addr_b,immediate)
		break;
		case 0x02:
			op_j(target)
		break;
		default: pc++;return {code:"nok",message:"op_code not supported"}
	}
	return {code:"ok"}
}

function resetAll(){
	pc = 0
	for (i=0;i<32;++i) reg[i] = 0 
	for (i=0;i<memory_size;++i) memory[i] = 0
	isRunAll = 0
}