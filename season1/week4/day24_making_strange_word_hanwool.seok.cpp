#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    int indexInWord = 0;
    for (int i = 0; i < s.size(); ++i) {
        if (' ' == s[i]) {
            indexInWord = 0;
            continue;
        }
        
        if (indexInWord % 2 == 0 && 'a' <= s[i] && s[i] <= 'z') {
            s[i] -= 32;
        } else if (indexInWord % 2 == 1 && 'A' <= s[i] && s[i] <= 'Z') { 
            s[i] += 32;
        }
        ++indexInWord;
    }
    return s;
}