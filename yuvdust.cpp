#include <bits/stdc++.h>
using namespace std;

void dfs(int i, int j, vector<vector<int>> &vis, vector<vector<int>> &grid, vector<vector<char>> &power, int &count)
{
    int n = grid.size();
    int m = grid[0].size();

    if (i < 0 || i >= n || j < 0 || j >= m || vis[i][j] == 1 || grid[i][j] == 0)
    {
        return;
    }
    vis[i][j] = 1;
    if (grid[i][j] == 4)
    {
        power[i][j] = 'o';
        return;
    }
    // vis[i][j] = 1;
    if (grid[i][j] == 1)
    {
        power[i][j] = 's';
        count++;
    }
    if (grid[i][j] == 2)
    {
        power[i][j] = 'm';
        count += 2;
    }
    if (grid[i][j] == 3)
    {
        power[i][j] = 'l';
        count += 3;
    }

    grid[i][j] = 0;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << grid[i][j] << " ";
        }
        cout << "  ";
        for (int j = 0; j < m; j++)
        {
            cout << power[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl;
    int delrow[4] = {0, -1, 0, 1};
    int delcol[4] = {-1, 0, 1, 0};
    for (int k = 0; k < 4; k++)
    {
        dfs(i + delrow[k], j + delcol[k], vis, grid, power, count);
    }
    return;
}

int main()
{
    int n, m;
    cout << "enter the length and breadth of the room" << endl;
    cin >> n >> m;
    vector<vector<int>> grid(n, vector<int>(m, 0));
    // vector<vector<int>> vis(n, vect1or<int>(m, 0));
    int button = 1;
    while (button)
    {
        // cout << "Switch on the vaccum " << endl;
        // cin >5 5> butt5 5on;

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                int a = rand() % 5;
                grid[i][j] = a;
            }
        }

        vector<vector<int>> vis(n, vector<int>(m, 0));
        vector<vector<char>> power(n, vector<char>(m, '.'));
        int count = 0;
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                cout << grid[i][j] << " ";
            }
            cout << endl;
        }
        cout << endl;
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {

                if (grid[i][j] != 0 && vis[i][j] == 0)
                {

                    // vis[i][j] = 1;
                    dfs(i, j, vis, grid, power, count);
                }
            }
        }
        int perdiv = 3 * n * m;
        cout << "Performance of the vacuum: " << (double)count / perdiv * 100 << "%" << endl;

        cout << "Done cleaning" << endl;
        cout << "Switch on the vacuum " << endl;
        cin >> button;
    }
    return 0;
}