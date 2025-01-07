import heapq


class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        ans = []
        for i in range(len(nums) - k + 1):
            subArray = nums[i : i + k]
            freqs = Counter(subArray)
            sortedSubArray = []
            for num, freq in freqs.items():
                heapq.heappush(sortedSubArray, (-freq, -num))
            topXElements = self.popTopXElements(sortedSubArray, x)
            xSum = sum(freq * nums for freq, nums in topXElements)
            ans.append(xSum)
        return ans

    def popTopXElements(self, sortedSubArray, x):
        topX = []
        elementToPop = x
        while elementToPop and sortedSubArray:
            freq, num = heapq.heappop(sortedSubArray)
            topX.append([-freq, -num])
            elementToPop -= 1
        return topX

   
