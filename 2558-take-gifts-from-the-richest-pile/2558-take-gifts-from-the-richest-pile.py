import heapq
import math


class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        heap = []
        for gift in gifts:
            heapq.heappush(heap, -gift)
        i = 0
        while i < k:
            pile = math.floor(math.sqrt(-heapq.heappop(heap)))
            heapq.heappush(heap, -pile)
            i += 1
        # Convert all values to positive
        result = [abs(num) for num in heap]

        # Sum the positive values
        totalSum = sum(result)
        return totalSum
