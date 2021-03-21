#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

vector<int> solution(long long n) {
    string digits = to_string(n);
    reverse(digits.begin(), digits.end());
    
    vector<int> answer;
    transform(digits.begin(), digits.end(), back_inserter(answer), [](const char& c) {
        return static_cast<int>(c- 48);
    });
    return answer;
}