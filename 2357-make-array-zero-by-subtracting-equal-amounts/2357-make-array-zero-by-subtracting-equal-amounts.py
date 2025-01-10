import heapq


class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        heapq.heapify(nums)
        x = 0
        while nums:
            smallestNumber = heapq.heappop(nums)
            # print("smallestNumber", smallestNumber)
            while smallestNumber==0 and nums:
                smallestNumber = heapq.heappop(nums)
            print("smallesNumber",smallestNumber)
            print("nums",nums)
            if len(nums)==0 and smallestNumber==0:
                return x
            for i in range(len(nums)):
               nums[i] = nums[i] - smallestNumber
            x+=1
                   
        # print("nums",nums)
        return x
