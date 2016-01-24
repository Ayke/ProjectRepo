#include <stdio.h>
#include <string.h>
typedef unsigned long dword;

union{
    float f;
    dword k;
}u, v, z1, z2, z3, z4;

/*所有以下6个函数中，不能有任何float类型变量*/
dword atof2(char*);
void ftoa(char*, dword);
void split(char* origin,char* inte,char* mino);
dword getfloat(int flag,dword exp,dword inte,dword mino,int offset,int pm);

int main(int argc, char *argv[])
{
    char s[80], t[80];
    
    /*验证atof()与ftoa()*/
    scanf("%s", s);
    u.k = atof2(s);
    ftoa(t, u.k);
    printf("%s",s);
    printf("%70.40f\n",u.f);
    printf("%s\n",t);
    
    return 0;
}

dword atof2(char* origin)
{
    char inte[80];
    char mino[80];
    int i,e,e2=0,c,flag,pm=0;
    dword exp;
    int n,offset = 0;
    dword m = 0,m2;
    dword l = 0,num;
    
    split(origin,inte,mino);
    
    //判断数的正负
    if(origin[0]=='-')
        flag = 1;
    else flag = 0;
    
    //整数部分
    for(i = 0; inte[i]!=0; i++)
    {
        m = m*10 + inte[i] - '0';
    }
    
    while(m&0xF0000000)
    {
        m>>=1;e++;
    }
    
    //得到偏移量
    m2 = m;
    while(m2 != 0)
    {
        m2>>=1;
        offset++;
    }
    offset--;
    
    n=(int)strlen(mino);
    
    //小数部分
    for(i = 0; mino[i]!=0; i++)
    {
        mino[i] = mino[i] - '0';
    }
    
    while(e2<24-offset){
        c=0;
        for(i=n-1; i>=0; i--){
            mino[i]= (mino[i]<<1)+c;
            if(mino[i]>=10){mino[i]-=10; c=1;}
            else c=0;
        }
        l=(l<<1)+c;
        if(l==0) pm++;
        e2++;
    }
    
    if(m!=0)
    exp = e+offset+127;
    else
        exp = e+offset+127-pm;
    
    num = getfloat(flag,exp,m,l,offset,pm);
    
    return num;
}

void split(char* origin,char* inte,char* mino)
{
    int i=0,j=0;
    
    if(origin[0]=='-')
        i++;
    
    for(;origin[i] != '\0'&&origin[i] != '.';i++)
    {
        inte[j]=origin[i];
        j++;
    }
    
    inte[j]='\0';
    j = 0;
    
    for(i++;origin[i]!='\0';i++)
    {
        mino[j]=origin[i];
        j++;
    }
    mino[j]='\0';
    
}

dword getfloat(int flag,dword exp,dword inte,dword mino,int offset,int pm)
{
    char res[33];
    dword num = 0;
    int i;
    int n=0x80;
    int range=1;
    
    //flag
    res[0]=flag+'0';
    
    /*
     res[1]=((exp&0x80)==(0x80))+'0';
     res[2]=((exp&0x40)==(0x80))+'0';
     res[3]=((exp&0x20)==(0x80))+'0';
     res[4]=((exp&0x10)==(0x80))+'0';
     res[5]=((exp&0x8)==(0x80))+'0';
     res[6]=((exp&0x4)==(0x80))+'0';
     res[7]=((exp&0x2)==(0x80))+'0';
     res[8]=((exp&0x1)==(0x80))+'0';
     */
    
    
    //Exp
    for(i = 1;i <= 8;i++)
    {
        res[i]=((exp&n)==n)+'0';
        n>>=1;
    }
    
    
    //插入整数部分
    n=0x1;
    for(i = 8 + offset;i >= 9;i--)
    {
        res[i]=((inte&n)==n)+'0';
        n<<=1;
    }
    
    //插入小数部分
    
    if(inte==0)
    {
        offset = 0;
        pm=0;
    }
    for(i = 9+offset;i<=9+offset+pm-1;i++)
    {
        res[i]='0';
    }
    
    while(range < mino)
        range<<=1;
    range>>=1;
    if(inte==0)
        range>>=1;
    
    for(i = 9+offset+pm;i <= 31;i++)
    {
        res[i]=((mino&range)==range)+'0';
        range>>=1;
    }
    
    res[32]='\0';
    
    for(i = 0; res[i]!=0; i++)
    {
        num = num*2 + res[i] - '0';
    }
    
        return num;
}

void ftoa(char* a, dword f)
{
    int i;
    int n=0x40000000;
    
    if(f&0x80000000)
    {
        a[0]='1';
    }
    else a[0]='0';
    
    for(i = 1;i <= 31;i++)
    {
        a[i]=((f&n)==n)+'0';
        n>>=1;
    }
    
    a[32] = '\0';
}