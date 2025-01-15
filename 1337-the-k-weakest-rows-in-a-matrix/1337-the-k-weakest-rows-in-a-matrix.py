import heapq


class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        heap = []
        for i in range(len(mat)):
            value = 0
            for j in mat[i]:
                value += j
            heapq.heappush(heap, [value, i])
        res = []
        while k and heap:
            value, index = heapq.heappop(heap)
            res.append(index)
            k -= 1
        return res

        # numberOfSoldiers = []
        # # for i in range(len(mat)):
        # #     value=0
        # #     for j in mat[i]:
        # #         value+=j
        # #     numberOfSoldiers.append([i,value])
        # # print("number of ",numberOfSoldiers)
        # # heap=[]
        # # for i in numberOfSoldiers:
        # #     heapq.heappush(heap,(i[1],i[0]))
        # # heap = [*numberOfSoldiers]
        # # heapq.heapify(heap)
