#include <iostream>
#include <string.h>
using namespace std;
char* getAddressByname(char* name);
void getStrByNum(int num ,char * res);


int main()
{
    char op[10];
    char rs[10];
    char rt[10];
    char addr[10];
    int shamt;
    int constant;
    char final[33];
    char res[17];
    int i;
    
    while(1){
    cout <<"Please input:"<<endl;
    cin >> op;
    getchar();
    
    if(strcmp(op,"add")==0)
    {
        i=0;
        addr[i]=getchar();
        while((addr[i]!='\n')&&(addr[i]!=',')&&(addr[i]!=' '))
        {
            i++;
            addr[i]=getchar();
        }
        addr[i]='\0';
        
        i=0;
        rs[i]=getchar();
        while((rs[i]!='\n')&&(rs[i]!=',')&&(rs[i]!=' '))
        {
            i++;
            rs[i]=getchar();
        }
        rs[i]='\0';
        
        
        i=0;
        rt[i]=getchar();
        while((rt[i]!='\n')&&(rt[i]!=',')&&(rt[i]!=' '))
        {
            i++;
            rt[i]=getchar();
        }
        rt[i]='\0';
        
        memcpy(final,"000000",6);
        memcpy(final+21,"00000",5);
        memcpy(final+26,"100000",6);
        
        memcpy(final+6,getAddressByname(rs),5);
        memcpy(final+11,getAddressByname(rt),5);
        memcpy(final+16,getAddressByname(addr),5);
        final[32]='\0';
        
    }
    else if(strcmp(op,"sub")==0)
    {
        i=0;
        addr[i]=getchar();
        while((addr[i]!='\n')&&(addr[i]!=',')&&(addr[i]!=' '))
        {
            i++;
            addr[i]=getchar();
        }
        addr[i]='\0';
        
        i=0;
        rs[i]=getchar();
        while((rs[i]!='\n')&&(rs[i]!=',')&&(rs[i]!=' '))
        {
            i++;
            rs[i]=getchar();
        }
        rs[i]='\0';
        
        
        i=0;
        rt[i]=getchar();
        while((rt[i]!='\n')&&(rt[i]!=',')&&(rt[i]!=' '))
        {
            i++;
            rt[i]=getchar();
        }
        rt[i]='\0';
        
        memcpy(final,"000000",6);

        
        memcpy(final+6,getAddressByname(rs),5);
        memcpy(final+11,getAddressByname(rt),5);
        memcpy(final+16,getAddressByname(addr),5);
        
        final[32]='\0';
    }
    
    else if(strcmp(op,"lw")==0)
    {
        
        i=0;
        rt[i]=getchar();
        while((rt[i]!='\n')&&(rt[i]!=',')&&(rt[i]!=' ')&&(rt[i]!='(')&&(rt[i]!=')'))
        {
            i++;
            rt[i]=getchar();
        }
        rt[i]='\0';
        
        
        
        cin >> shamt;
        getchar();
        
        i=0;
        rs[i]=getchar();
        while((rs[i]!='\n')&&(rs[i]!=',')&&(rs[i]!=' ')&&(rt[i]!='(')&&(rt[i]!=')'))
        {
            i++;
            rs[i]=getchar();
        }
        rs[i]='\0';
        
        
        
        getStrByNum(shamt, res);
        
        memcpy(final,"100011",6);
        
        memcpy(final+6,getAddressByname(rs),5);
        memcpy(final+11,getAddressByname(rt),5);
        memcpy(final+16,res,16);
        
        final[32]='\0';
    }
 
    
    else if(strcmp(op,"sw")==0)
    {
        i=0;
        rt[i]=getchar();
        while((rt[i]!='\n')&&(rt[i]!=',')&&(rt[i]!=' ')&&(rt[i]!='(')&&(rt[i]!=')'))
        {
            i++;
            rt[i]=getchar();
        }
        rt[i]='\0';
        
        
        
        cin >> shamt;
        getchar();
        
        i=0;
        rs[i]=getchar();
        while((rs[i]!='\n')&&(rs[i]!=',')&&(rs[i]!=' ')&&(rt[i]!='(')&&(rt[i]!=')'))
        {
            i++;
            rs[i]=getchar();
        }
        rs[i]='\0';
        
        getStrByNum(shamt, res);
        
        memcpy(final,"101011",6);
        
        memcpy(final+6,getAddressByname(rs),5);
        memcpy(final+11,getAddressByname(rt),5);
        memcpy(final+16,res,16);
        
        final[32]='\0';
    }
    
    else if(strcmp(op,"addi")==0)
    {
        
        
        
        i=0;
        rs[i]=getchar();
        while((rs[i]!='\n')&&(rs[i]!=',')&&(rs[i]!=' ')&&(rt[i]!='(')&&(rt[i]!=')'))
        {
            i++;
            rs[i]=getchar();
        }
        rs[i]='\0';
        
        
        i=0;
        rt[i]=getchar();
        while((rt[i]!='\n')&&(rt[i]!=',')&&(rt[i]!=' ')&&(rt[i]!='(')&&(rt[i]!=')'))
        {
            i++;
            rt[i]=getchar();
        }
        rt[i]='\0';
        
        
        cin >> constant;
        getchar();
        
        
        
        
        getStrByNum(constant, res);
        
        memcpy(final,"001000",6);
        
        memcpy(final+6,getAddressByname(rs),5);
        memcpy(final+11,getAddressByname(rt),5);
        memcpy(final+16,res,16);
        
        final[32]='\0';
    }
     
        cout<<final<<endl;
    }
    
    
}

char* getAddressByname(char* name)
{
    if(strcmp(name,"$t0")==0)
        return (char*)"01000";
    else if(strcmp(name,"$t1")==0)
        return (char*)"01001";
    else if(strcmp(name,"$t2")==0)
        return (char*)"01010";
    else if(strcmp(name,"$t3")==0)
        return (char*)"01011";
    else if(strcmp(name,"$t4")==0)
        return (char*)"01100";
    else if(strcmp(name,"$t5")==0)
        return (char*)"01101";
    else if(strcmp(name,"$t6")==0)
        return (char*)"01110";
    else if(strcmp(name,"$t7")==0)
        return (char*)"01111";
    else if(strcmp(name,"$s0")==0)
        return (char*)"10000";
    else if(strcmp(name,"$s1")==0)
        return (char*)"10001";
    else if(strcmp(name,"$s2")==0)
        return (char*)"10010";
    else if(strcmp(name,"$s3")==0)
        return (char*)"10011";
    else if(strcmp(name,"$s4")==0)
        return (char*)"10100";
    else if(strcmp(name,"$s5")==0)
        return (char*)"10101";
    else if(strcmp(name,"$s6")==0)
        return (char*)"10110";
    else if(strcmp(name,"$s7")==0)
        return (char*)"10111";
    else return (char*)"000000";
}

void getStrByNum(int num ,char * res)
{
    int temp=0x1;
    int i;
    
    
    for(i=15;i>=0;i--)
    {
        if((num & temp) == temp)
        res[i] = '1';
        else res[i] = '0';
        temp <<= 1;
    }
    
    res[16]='\0';

}











