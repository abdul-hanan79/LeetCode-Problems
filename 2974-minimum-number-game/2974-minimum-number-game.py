import heapq


class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        heapq.heapify(nums)
        ansArray = []
        while nums:
            alice = heapq.heappop(nums)
            bob = heapq.heappop(nums)
            ansArray.append(bob)
            ansArray.append(alice)
        return ansArray
