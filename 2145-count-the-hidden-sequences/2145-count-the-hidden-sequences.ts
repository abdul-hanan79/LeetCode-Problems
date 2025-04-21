function numberOfArrays(differences: number[], lower: number, upper: number): number {
    ;et x:number=0
    ;et y:number=0
    ;et curr:number=0
    for(let d of differences){
        curr+=d
        x=Math.min(x,curr)
        y=Math.max(y,curr)
    }
    return Math.max(0,(upper-lower)-(y-x)+1)
};