import heapq


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        heap = []
        for num in nums:
            heapq.heappush(heap, num)
        sortedNums = []
        while heap:
            sortedNums.append(heapq.heappop(heap))
        return ((sortedNums[len(sortedNums) - 1]-1) * (sortedNums[len(sortedNums) - 2]-1))
