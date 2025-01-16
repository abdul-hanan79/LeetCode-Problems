import heapq


class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        heap = []
        for i in range(len(nums)):
            heapq.heappush(heap, [nums[i], i])
        while k:
            value, index = heapq.heappop(heap)
            value *= multiplier
            heapq.heappush(heap, [value, index])
            k -= 1
        res = [None] * (len(heap))
        while heap:
            value, index = heapq.heappop(heap)
            res[index] = value
        return res
