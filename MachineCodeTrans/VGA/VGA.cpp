#include <stdio.h>
#define VGAadr 1000	//显存映射内存

char	Memory[4096];	//内存
int	Width=80, Height=25;	//系统参数
int	xc, yc;	//当前光标位置

/*操作系统：系统调用*/
void dispxy(int x, int y, char ch)
{
    Memory[VGAadr+y*80+x]=ch;	//1000
}

void disp(char ch){
    if(ch==13)xc=0;   //若为'\r'则将光标设为第一列
    if(ch==10)yc++;   //若为'\n'则跳到下一行
    if(ch==9)xc=(xc&(0xff8))+8;  //若为'\t'则除8位以后前进8格
    
    Memory[VGAadr+yc*80+xc]=ch;	//1000
    xc++;
    if(xc>79){yc++;xc=0;}  //换行操作
}

int main(int argc, char *argv[])
{
    /*应用程序*/
    int	i, j, m;
    
    xc=yc=0;
    //	for(;;){
    for(i=0; i<80*25; i++)
    Memory[VGAadr+i]=' ';   //初始化内存
    
    scanf("%d", &m);
    disp((m/10000)+0x30);
    disp((m/1000)%10+0x30);
    disp((m/100)%10+0x30);
    disp((m/10)%10+0x30);
    disp((m%10)+0x30);
    
    for(j=0; j<10; j++){
        for(i=0; i<j; i++){
            disp('*');	//系统调用
            //	dispxy(i, j, '*');	//系统调用
            //	Memory[VGAadr+j*80+i]='*';	//直接写屏显示
        }	disp(13);disp(10);
    }
    
    /*硬件：文本模式*/
    for(j=0; j<20; j++){
        for(i=0; i<80; i++){
            printf("%c",Memory[VGAadr+j*80+i]);
        }
    }
    /*Graph*/
    /*	for(j=0; j<25; j++){
     for(i=0; i<80; i++){
     putpixel(j,i,LUT[VM[i]]);
     }	
     }
     *///	}
    
    getchar();
    printf("Hello, world\n");
    return 0;
}