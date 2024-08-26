#include <iostream>
#include <cstdlib>
using namespace std;

const int size = 10;

void cleaner(int arr[][size]) 
{
    int i = 0, j = 0, k = 1;
    while (i < size) {
        if (arr[i][j] == 1) 
        {
            arr[i][j] = k++;
        }
        if (i % 2 == 0) 
        {
            j++;
            if (j == size) 
            {
                i++;
                j--;
            }
        } 
        else 
        {
            j--;
            if (j == -1) 
            {
                i++;
                j++;
            }
        }
    }
    for (int x = 0; x < size; x++) 
    {
        for (int y = 0; y < size; y++) 
        {
            cout << arr[x][y] << " ";
        }
        cout << "\n";
    }
}

int main() {
    int a[size][size];
    for (int i = 0; i < size; i++) 
    {
        for (int j = 0; j < size; j++) 
        {
            a[i][j] = rand() % 2;
        }
    }
    for(int i=0;i<10;i++)
    {
        a[i][0]=2;
        a[i][9]=2;
    }
    for(int i=0;i<10;i++)
    {
        a[0][i]=2;
        a[9][i]=2;
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
    // cleaner(a);
    return 0;
}