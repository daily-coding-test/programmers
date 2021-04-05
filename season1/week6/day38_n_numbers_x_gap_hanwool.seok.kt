class Solution1 {
    fun solution(x: Int, n: Int): LongArray {
        return LongArray(n) {i -> (i+1) * x.toLong() }
    }
}

class Solution2 {
    fun solution(x: Int, n: Int): LongArray {
        val answer = arrayListOf<Long>()
        for (i in 1..n) {
            answer.add(x.toLong() * i)
        }
        return answer.toLongArray()
    }
}