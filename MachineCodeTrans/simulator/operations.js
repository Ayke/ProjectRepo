/*
version 1.1 
add addi, and, or, xor, slt
*/
function op_add(addr_a, addr_b, addr_c)
{
	reg[addr_c] = reg[addr_a] + reg[addr_b];
	pc++;
}

function op_sub(addr_a, addr_b, addr_c)
{
	reg[addr_c] = reg[addr_a] - reg[addr_b];
	pc++;
}

function op_lw(addr_a, addr_b, offset)
{
	reg[addr_b] = memory[reg[addr_a] + offset];
	pc++;
}

function op_sw(addr_a, addr_b, offset)
{
	memory[reg[addr_a] + offset] = reg[addr_b];
	pc++;
}

function op_beq(addr_a, addr_b, offset)
{
	if(reg[a] == reg[b])
		pc = pc + 1 + offset;
	else pc++;
}

function op_j(target)
{
	pc = ((pc + 1) & 0xF0000000) | target;
}

function op_addi(addr_a, addr_b, imme)
{
	reg[addr_b] = reg[addr_a] + imme;
	pc++;
}

function op_and(addr_a, addr_b, addr_c)
{
	reg[addr_c] = reg[addr_a] & reg[addr_b]; 
	pc++;
}

function op_or(addr_a, addr_b, addr_c)
{
	reg[addr_c] = reg[addr_a] | reg[addr_b]; 
	pc++;
}

function op_xor(addr_a, addr_b, addr_c)
{
	reg[addr_c] = reg[addr_a] ^ reg[addr_b]; 
	pc++;
}

function op_slt(addr_a, addr_b, addr_c)
{
	if(reg[addr_a] < reg[addr_b]) reg[addr_c] = 1;
	pc++;
}

function op_addu(addr_a, addr_b, addr_c)
{
	reg[addr_c] = (reg[addr_a]>>>0) + (reg[addr_b]>>>0);
	pc++;
}

function op_subu(addr_a, addr_b, addr_c)
{
	reg[addr_c] = (reg[addr_a]>>>0) + (reg[addr_b]>>>0);
	pc++;
}
