function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";

    let base:string = strs[0];
    for (let i = 0; i < base.length; i++) {
        for (let j = 1; j < strs.length; j++) { 
            let word:string = strs[j];
            if (i === word.length || word[i] !== base[i]) {
                return base.slice(0, i);
            }
        }
    }
    return base;
};