reg[32]
memory[131072]
pc
code[] 

operate()//operate current line
reset()//reset reg,memory,pc

op_add(addr_a,addr_b,addr_c)//reg[c]=reg[a]+reg[b]
op_sub(addr_a,addr_b,addr_c)//reg[c]=reg[a]-reg[b]
op_lw(addr_a,addr_b,offset)//reg[a]=memory[reg[b]+offset]
op_sw(addr_a,addr_b,offset)//memory[reg[b]+offset]=reg[a]
op_beq(addr_a,addr_b,offset)//if reg[a]==reg[b] then pc=pc+1+offset<<2
op_j(target)//pc=((pc+1)&0xF0000000)|target<<2