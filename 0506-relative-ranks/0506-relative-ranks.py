import heapq


class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        heap = []
        for i, s in enumerate(score):
            print("s", s)
            print("i", i)
            heapq.heappush(heap, (-s, i))
        print("heap", heap)
        result = [""] * len(score)
        rank = 1
        while heap:
            _, index = heapq.heappop(heap)
            print("index",index)
            print("rank",rank)
            if rank == 1:
                result[index] = "Gold Medal"
            elif rank == 2:
                result[index] = "Silver Medal"
            elif rank == 3:
                result[index] = "Bronze Medal"
            else:
                result[index] = str(rank)
            rank += 1
        return result
