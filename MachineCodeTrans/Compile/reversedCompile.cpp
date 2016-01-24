#include <iostream>
char* getNameByAddress(char * address);
char* getOrderByOpAndFunct(char* Op,char* Funct);
int getNumByStr(char * res);

using namespace std;

int main()
{
    char MaCode[33];
    char op[7];
    char rs[6];
    char rt[6];
    char rd[6];
    char addOrSham[6];
    char funct[7];
    char shamt[17];
    char bigShamt[27];
    int i;
    char *order;
    
    
    while(1){
        cout <<"Please input:"<<endl;
    cin>>MaCode;
    
    for(i=0;i<=5;i++)
        op[i]=MaCode[i];
    op[i]='\0';
    
    for(i=6;i<=10;i++)
        rs[i-6]=MaCode[i];
    rs[i-6]='\0';

    for(i=11;i<=15;i++)
        rt[i-11]=MaCode[i];
    rt[i-11]='\0';

    for(i=16;i<=20;i++)
        rd[i-16]=MaCode[i];
    rd[i-16]='\0';

    for(i=21;i<=25;i++)
        addOrSham[i-21]=MaCode[i];
    addOrSham[i-21]='\0';

    for(i=26;i<=31;i++)
        funct[i-26]=MaCode[i];
    funct[i-26]='\0';
    
    for(i=16;i<=31;i++)
        shamt[i-16]=MaCode[i];
    shamt[i-16]='\0';
    
    for(i=6;i<=31;i++)
        bigShamt[i-6]=MaCode[i];
    bigShamt[i-6]='\0';
    
    order=getOrderByOpAndFunct(op, funct);
    
    if(strcmp(order,"add") == 0)
    {
        cout<<order<<" ";
        cout<<getNameByAddress(rd)<<",";
        cout<<getNameByAddress(rs)<<",";
        cout<<getNameByAddress(rt)<<endl;
    }
    
    else if(strcmp(order,"sub") == 0)
    {
        cout<<order<<" ";
        cout<<getNameByAddress(rd)<<",";
        cout<<getNameByAddress(rs)<<",";
        cout<<getNameByAddress(rt)<<endl;
        cout<<endl;
    }
    
    else if(strcmp(order,"slt") == 0)
    {
        cout<<order<<" ";
        cout<<getNameByAddress(rd)<<",";
        cout<<getNameByAddress(rs)<<",";
        cout<<getNameByAddress(rt)<<endl;
        cout<<endl;
    }
    
    else if(strcmp(order,"lw") == 0)
    {
        cout<<order<<" ";
        cout<<getNameByAddress(rt)<<",";
        cout<<getNumByStr(shamt)<<"(";
        cout<<getNameByAddress(rs)<<")";
        cout<<endl;
    }
    
    else if(strcmp(order,"sw") == 0)
    {
        cout<<order<<" ";
        cout<<getNameByAddress(rt)<<",";
        cout<<getNumByStr(shamt)<<"(";
        cout<<getNameByAddress(rs)<<")";
        cout<<endl;
    }
    
    else if(strcmp(order,"j") == 0)
    {
        cout<<order<<" ";
        cout<<getNumByStr(bigShamt)<<endl;
    }
    
    }
    
    return 0;
}



char* getNameByAddress(char * address)
{
    if(strcmp(address,"01000")==0)
        return (char*)"$t0";
    else if(strcmp(address,"01001")==0)
        return (char*)"$t1";
    else if(strcmp(address,"01010")==0)
        return (char*)"$t2";
    else if(strcmp(address,"01011")==0)
        return (char*)"$t3";
    else if(strcmp(address,"01100")==0)
        return (char*)"$t4";
    else if(strcmp(address,"01101")==0)
        return (char*)"$t5";
    else if(strcmp(address,"01110")==0)
        return (char*)"$t6";
    else if(strcmp(address,"01111")==0)
        return (char*)"$t7";
    else if(strcmp(address,"10000")==0)
        return (char*)"$s0";
    else if(strcmp(address,"10001")==0)
        return (char*)"$s1";
    else if(strcmp(address,"10010")==0)
        return (char*)"$s2";
    else if(strcmp(address,"10011")==0)
        return (char*)"$s3";
    else if(strcmp(address,"10100")==0)
        return (char*)"$s4";
    else if(strcmp(address,"10101")==0)
        return (char*)"$s5";
    else if(strcmp(address,"10110")==0)
        return (char*)"$s6";
    else if(strcmp(address,"$10111")==0)
        return (char*)"$s7";
    else return (char*)"null";
}

char* getOrderByOpAndFunct(char* Op,char* Funct)
{
    if(strcmp(Op,"000000") == 0)
    {
        if(strcmp(Funct,"100000") == 0)
            return (char*)"add";
        else if(strcmp(Funct,"100010") == 0)
            return (char*)"sub";
        else if(strcmp(Funct,"101010") == 0)
            return (char*)"slt";
    }
    else if (strcmp(Op,"100011") == 0)
    {
        return (char*)"lw";
    }
    else if (strcmp(Op,"101011") == 0)
    {
        return (char*)"sw";
    }
    else if (strcmp(Op,"000010") == 0)
    {
        return (char*)"j";
    }
    
    
    return (char*)"NULL";

}

int getNumByStr(char * res)
{
    int i;
    int sum = 0;
    for(i = 0;res[i] != '\0';i++)
        sum = sum * 2 + res[i] - '0';
    return sum;
}













