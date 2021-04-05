import scala.collection

object Solution {
    def solution(x: Int, n: Int): Vector[Long] = {
        var result = for (i <- 1l to n.toLong)
            yield(x*i)
        return result.toVector
    }
}