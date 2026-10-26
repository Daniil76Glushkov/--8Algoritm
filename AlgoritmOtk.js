function duplicatesCounting(A, k) {
    const counts = new Array(k + 1).fill(false);
    for (const num of A) {
        if (counts[num]) return true;
        counts[num] = true;
    }
    return false;
}
