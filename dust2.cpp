#include <bits/stdc++.h>
using namespace std;

const int size = 10;
int xcord =0;
int ycord =0;
// void cleaner_stack(float arr[][size],int visited[][size])
// {
//     int row[4]={-1,0,1,0};
//     int col[4]={0,1,0,-1};
//     stack<int> scol;
//     stack<int> srow;
//     for(int y=0;y<size;y++)
//     {
//         for(int z=0;z<size;z++)
//         {
//             if(arr[y][z]!=2)
//             {
//                 if(arr[y-1][z]!=2 ||
//                 arr[y][z+1]!=2 ||
//                 arr[y+1][z]!=2 ||
//                 arr[y][z-1]!=2)
//                 {
//                     srow.push(y);
//                     scol.push(z);
//                     break;
//                 }
//             }
//         }
//         if(!srow.empty())
//         {break;}
//     }
//     int a;
//     int b;
//     int k=3;
//     while(!srow.empty())
//     {
//         a=srow.top();
//         srow.pop();
//         b=scol.top();
//         scol.pop();
//         if(!visited[a][b])
//         {
//             if(arr[a][b]!=2)
//             {
//                 if(arr[a][b]==1)
//                 {
//                     arr[a][b]=k++;
//                 }
//                 visited[a][b]=1;
//                 for(int x=0;x<4;x++)
//                 {
//                     srow.push(a+row[x]);
//                     scol.push(b+col[x]);
//                 }
//             }
//         }
//     }
//     for (int i = 0; i < size; i++) 
//     {
//         for (int j = 0; j < size; j++) 
//         {
//             cout << visited[i][j] << " ";
//         }
//         cout << "\n";
//     }
//     cout << "\n";
//     for (int i = 0; i < size; i++) 
//     {
//         for (int j = 0; j < size; j++) 
//         {
//             cout << arr[i][j] << " ";
//         }
//         cout << "\n";
//     }
//     cout << "\n";
// };

float cleaner_queue(float arr[][size],int visited[][size])
{
    int row[4]={-1,0,1,0};
    int col[4]={0,1,0,-1};
    queue<int> scol;
    queue<int> srow;
    if(arr[xcord][ycord]==2)
    {
        for(int y=0;y<size;y++)
        {
            for(int z=0;z<size;z++)
            {
                if(arr[y][z]!=2)
                {
                    if(arr[y-1][z]!=2 ||
                    arr[y][z+1]!=2 ||
                    arr[y+1][z]!=2 ||
                    arr[y][z-1]!=2)
                    {
                        srow.push(y);
                        scol.push(z);
                        break;
                    }
                }
            }
            if(!srow.empty())
            {break;}
        }
    }
    else{
        srow.push(xcord);
        scol.push(ycord);
    }
    int a;
    int b;
    int k=3;
    float total =0;
    float count =0;
    while(!srow.empty())
    {
        a=srow.front();
        srow.pop();
        b=scol.front();
        scol.pop();
        if(!visited[a][b])
        {
            if(arr[a][b]!=2)
            {
                // cout<<arr[a][b]<<" a"<<endl;
                count++;
                if(arr[a][b] < 1)
                {
                    // cout<<arr[a][b]<<" b"<<endl;
                    total=total+arr[a][b];
                    // cout<<total<<endl;
                    arr[a][b]=k++;
                    xcord=a;
                    ycord=b;
                }
                visited[a][b]=1;
                for(int x=0;x<4;x++)
                {
                    srow.push(a+row[x]);
                    scol.push(b+col[x]);
                }
            }
        }
        
    }
    for (int i = 0; i < size; i++) 
    {
        for (int j = 0; j < size; j++) 
        {
            cout << visited[i][j] << " ";
            visited[i][j]=0;
        }
        cout << "\n";
    }
    cout << "\n";
    for (int i = 0; i < size; i++) 
    {
        for (int j = 0; j < size; j++) 
        {
            cout << arr[i][j] << " ";
            if(arr[i][j]>2)
            {
                arr[i][j]=1;
            }
        }
        cout << "\n";
    }
    cout << "\n";
    float powr=(total*100/count);
    cout<<"performance : "<<powr<<endl;
    return powr;
};

int main()
{
    bool btn=true;
    float performance = 0;
    int tries=0;
    float a[size][size];
    int v[size][size]={0};
    for (int i = 0; i < size; i++) 
    {
        for (int j = 0; j < size; j++) 
        {
            a[i][j] = rand() % 3;
        }
    }
    for(int i=0;i<size;i++)
    {
        a[i][0]=2;
        a[i][9]=2;
        a[0][i]=2;
        a[9][i]=2;
    }
    float pwr[9]={0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9};
    while(btn)
    {
        for(int x = 0;x < size; x++)
        {
            for(int y = 0; y < size; y++)
            {
                if(a[x][y]<2)
                {
                    a[x][y]=pwr[rand() % 9];
                }
            }
        }
        for (int i = 0; i < size; i++) 
        {
            for (int j = 0; j < size; j++) 
            {
                cout << a[i][j] << " ";
            }
            cout << "\n";
        }
        cout << "\n";
        // cout<<"stack \n";
        // cleaner_stack(a,v);
        // cout<<"queue \n";
        float p = cleaner_queue(a,v);
        // cout<<p<<endl;
        performance = performance + p;
        tries++;
        if(tries==10)
        {
            btn=false;
        }    
        // btn=false;
    }
    cout<<"average performance = "<<performance/10;

    return 0;
}