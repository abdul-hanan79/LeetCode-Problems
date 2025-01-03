import heapq
import math


class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        heap = []
        for gift in gifts:
            heapq.heappush(heap, -gift)
        while  k:
            pile = math.floor(math.sqrt(-heapq.heappop(heap)))
            heapq.heappush(heap, -pile)
            k -= 1

        return -sum(heap)
