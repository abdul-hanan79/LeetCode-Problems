import heapq


class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        heap = []
        for num in nums:
            heapq.heappush(heap, -num)
        elementsToPop = k
        newArray = []
        while elementsToPop:
            newArray.append(heapq.heappop(heap))
            elementsToPop -= 1
    
        restIndex = 0
        res = []
       
        for index, item in enumerate(nums):
            if restIndex == k:
                return res
            item = -item
          
            if item in newArray:
                res.append(-item)
                restIndex += 1
                newArray.remove(item)
        return res
