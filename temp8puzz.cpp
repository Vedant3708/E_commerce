// #include <iostream>
// #include <vector>
// #include <queue>
// #include <set>
// #include <algorithm>
// #include <cstdlib>
// #include <ctime>
// #include <bits/stdc++.h>

// using namespace std;

// typedef vector<vector<int>> State;

// // Heuristic Function h1: Misplaced Tiles
// int h1(const State& state, const State& goal) {
//     int misplaced = 0;
//     for (int i = 0; i < 3; ++i) {
//         for (int j = 0; j < 3; ++j) {
//             if (state[i][j] != goal[i][j] && state[i][j] != 0) {
//                 ++misplaced;
//             }
//         }
//     }
//     return misplaced;
// }

// // Heuristic Function h2: Manhattan Distance
// int h2(const State& state, const State& goal) {
//     int distance = 0;
//     for (int i = 0; i < 3; ++i) {
//         for (int j = 0; j < 3; ++j) {
//             if (state[i][j] != 0) {
//                 int goal_x = (state[i][j] - 1) / 3;
//                 int goal_y = (state[i][j] - 1) % 3;
//                 distance += abs(i - goal_x) + abs(j - goal_y);
//             }
//         }
//     }
//     return distance;
// }

// // Helper functions for actions and state transitions
// vector<string> get_actions(const State& state) {
//     vector<string> actions;
//     int x, y;
//     for (int i = 0; i < 3; ++i) {
//         for (int j = 0; j < 3; ++j) {
//             if (state[i][j] == 0) {
//                 x = i;
//                 y = j;
//             }
//         }
//     }
//     if (x > 0) actions.push_back("up");
//     if (x < 2) actions.push_back("down");
//     if (y > 0) actions.push_back("left");
//     if (y < 2) actions.push_back("right");
//     return actions;
// }

// State apply_action(const State& state, const string& action) {
//     int x, y;
//     for (int i = 0; i < 3; ++i) {
//         for (int j = 0; j < 3; ++j) {
//             if (state[i][j] == 0) {
//                 x = i;
//                 y = j;
//             }
//         }
//     }
//     State new_state = state;
//     if (action == "up") {
//         swap(new_state[x][y], new_state[x-1][y]);
//     } else if (action == "down") {
//         swap(new_state[x][y], new_state[x+1][y]);
//     } else if (action == "left") {
//         swap(new_state[x][y], new_state[x][y-1]);
//     } else if (action == "right") {
//         swap(new_state[x][y], new_state[x][y+1]);
//     }
//     return new_state;
// }

// // Best First Search Algorithm
// bool best_first_search(const State& start, const State& goal, int (*heuristic)(const State&, const State&)) {
//     priority_queue<pair<int, State>, vector<pair<int, State>>, greater<pair<int, State>>> frontier;
//     frontier.push({0, start});
//     set<State> explored;
    
//     while (!frontier.empty()) {
//         State current = frontier.top().second;
//         frontier.pop();
        
//         if (current == goal) {
//             return true;
//         }
        
//         explored.insert(current);
        
//         for (const string& action : get_actions(current)) {
//             State child = apply_action(current, action);
//             if (explored.find(child) == explored.end()) {
//                 int cost = heuristic(child, goal);
//                 frontier.push({cost, child});
//             }
//         }
//     }
//     return false;
// }

// // Breadth First Search (BFS)
// bool bfs(const State& start, const State& goal) {
//     queue<State> frontier;
//     frontier.push(start);
//     set<State> explored;
    
//     while (!frontier.empty()) {
//         State current = frontier.front();
//         frontier.pop();
        
//         if (current == goal) {
//             return true;
//         }
        
//         explored.insert(current);
        
//         for (const string& action : get_actions(current)) {
//             State child = apply_action(current, action);
//             if (explored.find(child) == explored.end()) {
//                 frontier.push(child);
//             }
//         }
//     }
//     return false;
// }

// // Depth First Search (DFS)
// bool dfs(const State& start, const State& goal) {
//     vector<State> frontier;
//     frontier.push_back(start);
//     set<State> explored;
    
//     while (!frontier.empty()) {
//         State current = frontier.back();
//         frontier.pop_back();
        
//         if (current == goal) {
//             return true;
//         }
        
//         explored.insert(current);
        
//         for (const string& action : get_actions(current)) {
//             State child = apply_action(current, action);
//             if (explored.find(child) == explored.end()) {
//                 frontier.push_back(child);
//             }
//         }
//     }
//     return false;
// }

// // Generating Random Start and Goal States
// State generate_random_state() {
//     vector<int> state(9);
//     iota(state.begin(), state.end(), 0);
//     random_shuffle(state.begin(), state.end());
//     State result(3, vector<int>(3));
//     for (int i = 0; i < 9; ++i) {
//         result[i / 3][i % 3] = state[i];
//     }
//     return result;
// }

// int main() {
//     srand(time(0));
//     vector<State> start_states(5), goal_states(5);
//     for (int i = 0; i < 5; ++i) {
//         start_states[i] = generate_random_state();
//         goal_states[i] = generate_random_state();
//     }

//     for (int i = 0; i < 5; ++i) {
//         best_first_search(start_states[i], goal_states[i], h1);
//         best_first_search(start_states[i], goal_states[i], h2);
//         bfs(start_states[i], goal_states[i]);
//         dfs(start_states[i], goal_states[i]);
//     }

//     return 0;
// }
#include <iostream>
#include <vector>
#include <queue>
#include <set>
#include <algorithm>
#include <cstdlib>
#include <ctime>
#include <bits/stdc++.h>

using namespace std;

typedef vector<vector<int>> State;

// Heuristic Function h1: Misplaced Tiles
int h1(const State& state, const State& goal) {
    int misplaced = 0;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (state[i][j] != goal[i][j] && state[i][j] != 0) {
                ++misplaced;
            }
        }
    }
    return misplaced;
}

// Heuristic Function h2: Manhattan Distance
int h2(const State& state, const State& goal) {
    int distance = 0;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (state[i][j] != 0) {
                int goal_x = (state[i][j] - 1) / 3;
                int goal_y = (state[i][j] - 1) % 3;
                distance += abs(i - goal_x) + abs(j - goal_y);
            }
        }
    }
    return distance;
}

// Helper functions for actions and state transitions
vector<string> get_actions(const State& state) {
    vector<string> actions;
    int x, y;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (state[i][j] == 0) {
                x = i;
                y = j;
            }
        }
    }
    if (x > 0) actions.push_back("up");
    if (x < 2) actions.push_back("down");
    if (y > 0) actions.push_back("left");
    if (y < 2) actions.push_back("right");
    return actions;
}

State apply_action(const State& state, const string& action) {
    int x, y;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (state[i][j] == 0) {
                x = i;
                y = j;
            }
        }
    }
    State new_state = state;
    if (action == "up") {
        swap(new_state[x][y], new_state[x-1][y]);
    } else if (action == "down") {
        swap(new_state[x][y], new_state[x+1][y]);
    } else if (action == "left") {
        swap(new_state[x][y], new_state[x][y-1]);
    } else if (action == "right") {
        swap(new_state[x][y], new_state[x][y+1]);
    }
    return new_state;
}

// Best First Search Algorithm
bool best_first_search(const State& start, const State& goal, int (*heuristic)(const State&, const State&)) {
    priority_queue<pair<int, State>, vector<pair<int, State>>, greater<pair<int, State>>> frontier;
    frontier.push({0, start});
    set<State> explored;
    
    while (!frontier.empty()) {
        State current = frontier.top().second;
        frontier.pop();
        
        if (current == goal) {
            return true;
        }
        
        explored.insert(current);
        
        for (const string& action : get_actions(current)) {
            State child = apply_action(current, action);
            if (explored.find(child) == explored.end()) {
                int cost = heuristic(child, goal);
                frontier.push({cost, child});
            }
        }
    }
    return false;
}

// Breadth First Search (BFS)
bool bfs(const State& start, const State& goal) {
    queue<State> frontier;
    frontier.push(start);
    set<State> explored;
    
    while (!frontier.empty()) {
        State current = frontier.front();
        frontier.pop();
        
        if (current == goal) {
            return true;
        }
        
        explored.insert(current);
        
        for (const string& action : get_actions(current)) {
            State child = apply_action(current, action);
            if (explored.find(child) == explored.end()) {
                frontier.push(child);
            }
        }
    }
    return false;
}

// Depth First Search (DFS)
bool dfs(const State& start, const State& goal) {
    vector<State> frontier;
    frontier.push_back(start);
    set<State> explored;
    
    while (!frontier.empty()) {
        State current = frontier.back();
        frontier.pop_back();
        
        if (current == goal) {
            return true;
        }
        
        explored.insert(current);
        
        for (const string& action : get_actions(current)) {
            State child = apply_action(current, action);
            if (explored.find(child) == explored.end()) {
                frontier.push_back(child);
            }
        }
    }
    return false;
}

// Generating Random Start and Goal States
State generate_random_state() {
    vector<int> state(9);
    iota(state.begin(), state.end(), 0);
    random_shuffle(state.begin(), state.end());
    State result(3, vector<int>(3));
    for (int i = 0; i < 9; ++i) {
        result[i / 3][i % 3] = state[i];
    }
    return result;
}

// Function to print a state
void print_state(const State& state) {
    for (const auto& row : state) {
        for (const auto& tile : row) {
            cout << tile << " ";
        }
        cout << endl;
    }
}

int main() {
    srand(time(0));
    vector<State> start_states(5), goal_states(5);
    for (int i = 0; i < 5; ++i) {
        start_states[i] = generate_random_state();
        goal_states[i] = generate_random_state();
    }

    for (int i = 0; i < 5; ++i) {
        cout << "Test Case " << i + 1 << ":\n";
        cout << "Start State:\n";
        print_state(start_states[i]);
        cout << "Goal State:\n";
        print_state(goal_states[i]);

        bool found_h1 = best_first_search(start_states[i], goal_states[i], h1);
        bool found_h2 = best_first_search(start_states[i], goal_states[i], h2);
        bool found_bfs = bfs(start_states[i], goal_states[i]);
        bool found_dfs = dfs(start_states[i], goal_states[i]);

        cout << "Best First Search with h1 (Misplaced Tiles): " << (found_h1 ? "Found solution" : "No solution") << endl;
        cout << "Best First Search with h2 (Manhattan Distance): " << (found_h2 ? "Found solution" : "No solution") << endl;
        cout << "Breadth First Search: " << (found_bfs ? "Found solution" : "No solution") << endl;
        cout << "Depth First Search: " << (found_dfs ? "Found solution" : "No solution") << endl;
        cout << endl;
    }

    return 0;
}
