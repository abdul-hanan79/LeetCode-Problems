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
        for x in str(num):
            x=int(x)
            if x%2==0:
                res.append(-heapq.heappop(evenHeap))
            else:
                res.append(-heapq.heappop(oddHeap))
              
        return int("".join(map(str, res)))
