#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

long long solution(long long n) {
    string numberString = to_string(n);
    sort(numberString.begin(), numberString.end(), [](const char& a, const char& b) {
        return b < a;
    });    
    return stol(numberString);
}