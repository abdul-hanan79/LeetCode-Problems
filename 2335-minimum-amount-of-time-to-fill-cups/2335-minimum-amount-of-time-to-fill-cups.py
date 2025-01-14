import heapq


class Solution:
    def fillCups(self, amount: List[int]) -> int:
        heapq.heapify(amount)
        if amount[0]+amount[1]<=amount[2]:
            return amount[2]
        count=0
        while not amount[0]+amount[1]<=amount[2]:
            amount[0]-=1
            amount[1]-=1
            count+=1
        return amount[2]+count