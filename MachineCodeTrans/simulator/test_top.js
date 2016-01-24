var reg = new Array()
var memory = new Array()
var pc
var code = new Array()
/*
op_add(addr_a,addr_b,addr_c)//reg[c]=reg[a]+reg[b]
op_sub(addr_a,addr_b,addr_c)//reg[c]=reg[a]-reg[b]
op_lw(addr_a,addr_b,offset)//reg[a]=memory[reg[b]+offset]
op_sw(addr_a,addr_b,offset)//memory[reg[b]+offset]=reg[a]
op_beq(addr_a,addr_b,offset)//if reg[a]==reg[b] then pc=pc+1+offset<<2
op_j(target)//pc=((pc+1)&0xF0000000)|target<<2
*/
function op_add(addr_a, addr_b, addr_c)
{
	reg[addr_c] = reg[addr_a] + reg[addr_b];
}

function op_sub(addr_a, addr_b, addr_c)
{
	reg[addr_c] = reg[addr_a] - reg[addr_b];
}

function op_lw(addr_a, addr_b, offset)
{
	reg[addr_b] = memory[reg[addr_a] + offset];
}

function op_sw(addr_a, addr_b, offset)
{
	memory[reg[addr_a] + offset] = reg[addr_b];
}

function op_beq(addr_a, addr_b, offset)
{
	if(reg[a] == reg[b])
		pc = pc + 1 + offset<<2;
}

function op_j(target)
{
	pc = ((pc + 1) & 0xF0000000) | target<<2;
}

function operate(){
	var op_code = code[pc]>>>26
	var addr_a = (code[pc]>>>21)&0x1F
	var addr_b = (code[pc]>>>16)&0x1F
	var addr_c = (code[pc]>>>11)&0x1F
	var func = code[pc]&0x2F
	var immediate = code[pc]&0xFFFF
	var target = code[pc]&0x03FFFFFF
	switch(op_code){
		case 0x0:
			switch(func){
				case 0x20:
			 		op_add(addr_a,addr_b,addr_c)
			 	break;
			 	case 0x22:
			 		op_sub(addr_a,addr_b,addr_c)
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
		case 0x03:
			op_j(target)
		break;
		default: return {code:"nok",message:"op_code not supported"}
	}
}

code[0]=0x8C200001
reg[0]=11
reg[1]=1
memory[2]=10
pc=0
operate()
console.log(reg[0],reg[1])