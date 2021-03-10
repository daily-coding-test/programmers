#https://programmers.co.kr/learn/courses/30/lessons/12904
def solution(s):
    answer = 0

    max_len = 0
    for end in range(len(s),0,-1):
        for start in range(0,len(s)):
            if start > end:
                continue
            tmp = s[start:end]
            if tmp == tmp[::-1]:
                if max_len < end - start:
                    max_len = end - start

    return max_len
