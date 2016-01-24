#include <stdio.h>

typedef unsigned char	byte;
typedef unsigned int	word;
typedef unsigned long	dwrd;

union {
    float f;
    dwrd d;
} u;

int main(void)
{
    int i, j, k;
    dwrd m;
    
    for(;;){
        printf("Input a float: ");
        scanf("%f", &u.f);
        
        m=0x80000000; //u.d=0xFF800000;
        for(i=0; i<32; i++){
            if((i&7)==0)printf(" ");
            if(m&u.d)printf("1");
            else printf("0");
            m>>=1;
        }
        printf("\t%30.20f\n\n", u.f);
        
        if(getchar()==27)break;
    }
}