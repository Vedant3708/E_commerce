#include <bits/stdc++.h>
using namespace std;
using namespace std::chrono;

void print_state(vector<vector<int>>& state)
{
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            cout<<state[i][j]<<" ";
        }
        cout<<endl;
    }
}

vector<int> get_actions(vector<vector<int>>& state) {
    vector<int> actions;
    int x, y;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (state[i][j] == 0) {
                x = i;
                y = j;
                break;
            }
        }
    }
    if (x > 0) actions.push_back(1);
    if (x < 2) actions.push_back(2);
    if (y > 0) actions.push_back(3);
    if (y < 2) actions.push_back(4);
    return actions;
}

vector<vector<int>> apply_action (vector<vector<int>>& state, int& action) {
    int x, y;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (state[i][j] == 0) {
                x = i;
                y = j;
            }
        }
    }
    vector<vector<int>> new_state = state;
    if (action == 1) {
        swap(new_state[x][y], new_state[x-1][y]);
    } else if (action == 2) {
        swap(new_state[x][y], new_state[x+1][y]);
    } else if (action == 3) {
        swap(new_state[x][y], new_state[x][y-1]);
    } else if (action == 4) {
        swap(new_state[x][y], new_state[x][y+1]);
    }
    return new_state;
}

bool bfs(vector<vector<int>> start,vector<vector<int>> goal)
{
    int count = 1;
    queue<vector<vector<int>>> notvisited;
    notvisited.push(start);
    set<vector<vector<int>>> visited;

    while(!notvisited.empty())
    {
        vector<vector<int>> current = notvisited.front();
        notvisited.pop();
        count++;

        if(current == goal)
        {
            cout<<"nodes visited : "<<count<<endl;
            return true;
        }

        visited.insert(current);
        vector<int> actions = get_actions(current);
        int length =actions.size();
        for (int i = 0; i<length; i++) {
            vector<vector<int>> child = apply_action(current, actions[i]);
            if (visited.find(child) == visited.end()) {
                notvisited.push(child);
            }
        }
    }
    return false;
}

bool dfs(vector<vector<int>> start,vector<vector<int>> goal)
{
    int count = 1;
    stack<vector<vector<int>>> notvisited;
    notvisited.push(start);
    set<vector<vector<int>>> visited;

    while(!notvisited.empty())
    {
        vector<vector<int>> current = notvisited.top();
        notvisited.pop();
        count++;

        if(current == goal)
        {
            cout<<"nodes visited : "<<count<<endl;
            return true;
        }

        visited.insert(current);
        vector<int> actions = get_actions(current);
        int length =actions.size();
        for (int i = 0; i<length; i++) {
            vector<vector<int>> child = apply_action(current, actions[i]);
            if (visited.find(child) == visited.end()) {
                notvisited.push(child);
            }
        }
    }
    return false;
}

vector<vector<int>> generate_random_state() 
{
    vector<int> state(9);
    iota(state.begin(), state.end(), 0);
    random_shuffle(state.begin(), state.end());
    vector<vector<int>> result(3, vector<int>(3));
    for (int i = 0; i < 9; ++i) {
        result[i / 3][i % 3] = state[i];
    }
    return result;
}

int main()
{
    vector<vector<int>> domain;
    srand(time(0));
    vector<vector<vector<int>>> start_states(5), goal_states(5);
    for (int i = 0; i < 5; ++i) {
        start_states[i] = generate_random_state();
        goal_states[i] = generate_random_state();

        cout << "Test Case " << i + 1 << ":\n";
        cout << "Start State:\n";
        print_state(start_states[i]);
        cout << "Goal State:\n";
        print_state(goal_states[i]);

        auto start = high_resolution_clock::now();
        bool found_bfs = bfs(start_states[i], goal_states[i]);
        auto stop = high_resolution_clock::now();
        auto duration = duration_cast<microseconds>(stop - start);
        cout<<"time for bfs " << duration.count()<<endl;
        cout << "Breadth First Search: " << (found_bfs ? "Found solution" : "No solution") << endl;

        auto start1 = high_resolution_clock::now();
        bool found_dfs = dfs(start_states[i], goal_states[i]);
        auto stop1 = high_resolution_clock::now();
        auto duration1 = duration_cast<microseconds>(stop1 - start1);
        cout<<"time for dfs " << duration1.count()<<endl;
        cout << "Depth First Search: " << (found_dfs ? "Found solution" : "No solution") << endl;
    }

    return 0;
}