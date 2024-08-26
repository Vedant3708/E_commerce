#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <algorithm>
#include <cmath>

using namespace std;

struct Node {
    vector<int> state;
    int g, h;
    Node* parent;

    Node(vector<int> s, int g_val, int h_val, Node* p = nullptr) : state(s), g(g_val), h(h_val), parent(p) {}

    int f() const {
        return g + h;
    }

    bool operator>(const Node& other) const {
        return f() > other.f();
    }
};

vector<vector<int>> movegen(const vector<int>& state) {
    vector<vector<int>> moves;
    int zero_pos = find(state.begin(), state.end(), 0) - state.begin();
    int row = zero_pos / 3, col = zero_pos % 3;
    vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    for (const auto& dir : directions) {
        int new_row = row + dir.first, new_col = col + dir.second;
        if (new_row >= 0 && new_row < 3 && new_col >= 0 && new_col < 3) {
            vector<int> new_state = state;
            swap(new_state[zero_pos], new_state[new_row * 3 + new_col]);
            moves.push_back(new_state);
        }
    }
    return moves;
}

int heuristic(const vector<int>& state, const vector<int>& goal) {
    int h = 0;
    for (int i = 0; i < 9; ++i) {
        if (state[i] != 0) {
            int goal_pos = find(goal.begin(), goal.end(), state[i]) - goal.begin();
            h += abs(i / 3 - goal_pos / 3) + abs(i % 3 - goal_pos % 3);
        }
    }
    return h;
}

void print_solution(Node* node) {
    if (node == nullptr) return;
    print_solution(node->parent);
    for (int i = 0; i < 9; ++i) {
        if (i % 3 == 0) cout << endl;
        cout << node->state[i] << " ";
    }
    cout << endl << "-----" << endl;
}

void solve_8_puzzle(const vector<int>& start, const vector<int>& goal) {
    priority_queue<Node, vector<Node>, greater<Node>> open_list;
    unordered_set<string> closed_list;

    auto state_to_string =  -> string {
        string s;
        for (int num : state) s += to_string(num);
        return s;
    };

    Node* root = new Node(start, 0, heuristic(start, goal));
    open_list.push(*root);

    while (!open_list.empty()) {
        Node current = open_list.top();
        open_list.pop();

        if (current.state == goal) {
            print_solution(&current);
            return;
        }

        closed_list.insert(state_to_string(current.state));

        for (const auto& move : movegen(current.state)) {
            if (closed_list.find(state_to_string(move)) == closed_list.end()) {
                Node* child = new Node(move, current.g + 1, heuristic(move, goal), new Node(current));
                open_list.push(*child);
            }
        }
    }
    cout << "No solution found!" << endl;
}

int main() {
    vector<int> start = {1, 2, 3, 4, 5, 6, 0, 7, 8};
    vector<int> goal = {1, 2, 3, 4, 5, 6, 7, 8, 0};

    solve_8_puzzle(start, goal);

    return 0;
}
