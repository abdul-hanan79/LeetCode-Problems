import heapq


class Solution:
    def smallestChair(self, times: List[List[int]], targetFriend: int) -> int:
        chairsHeap = []
        leavingTimeHeap = []
        chairNumber = 0
        currentChairNumber = 0
        targetFriendDetails = times[targetFriend]
        heapq.heapify(times)
        
        i = 0
        while times:
            time = heapq.heappop(times)
            # for i, time in enumerate(times):
            print("**************", i)
            print("**************", time)

            if i == 0 or not chairsHeap:
                heapq.heappush(chairsHeap, chairNumber)
                heapq.heappush(leavingTimeHeap, [time[1], chairNumber])
                currentChairNumber = 0
                chairNumber += 1
                print("chairsHeap", chairsHeap)
                print("leavingTimeHeap", leavingTimeHeap)
            elif leavingTimeHeap[0][0] <= time[0]:
                leavingTime, chNumber = heapq.heappop(leavingTimeHeap)
                print("leaving time",leavingTime)
                print("leaving time",chNumber)
                if chNumber not in chairsHeap:
                    heapq.heappush(chairsHeap, chNumber)
                heapq.heappush(leavingTimeHeap, [time[1], chNumber])
                currentChairNumber = chNumber+1
                print("chairsHeap elif", chairsHeap)
                print("leavingTimeHeap elif", leavingTimeHeap)
            else:
                # heapq.heappush(chairsHeap, chairNumber)
                heapq.heappush(leavingTimeHeap, [time[1], chairNumber])
                currentChairNumber = chairNumber
                chairNumber += 1
                print("chairsHeap else", chairsHeap)
                print("leavingTimeHeap else", leavingTimeHeap)
            if time[0] == targetFriendDetails[0] and time[1] == targetFriendDetails[1]:
                return currentChairNumber
            i += 1
