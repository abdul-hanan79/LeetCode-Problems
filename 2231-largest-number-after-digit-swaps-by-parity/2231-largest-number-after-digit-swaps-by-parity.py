import heapq


class Solution:
    def largestInteger(self, num: int) -> int:
        evenHeap = []
        oddHeap = []
        firstElementParity = None
        for x in str(num):
            print("x", x)
            x = int(x)
            if x % 2 == 0:
                if firstElementParity == None:
                    firstElementParity = "even"
                heapq.heappush(evenHeap, -x)
            else:
                if firstElementParity == None:
                    firstElementParity = "odd"
                heapq.heappush(oddHeap, -x)
        res = []
        while oddHeap or evenHeap:
            if firstElementParity == "even":
                if evenHeap:
                    res.append(-heapq.heappop(evenHeap))

                if oddHeap:
                    res.append(-heapq.heappop(oddHeap))
            else:
                if oddHeap:
                    res.append(-heapq.heappop(oddHeap))
                if evenHeap:
                    res.append(-heapq.heappop(evenHeap))
        
        return int("".join(map(str, res)))
