import heapq


class Solution:
    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:
        heap = []
        for i in range(len(nums)):
            for j in range(len(nums[i])):
                heapq.heappush(heap, [i + j, -i, nums[i][j]])
        res = []
        while heap:
            index, row, value = heapq.heappop(heap)
            res.append(value)
        return res
