function duplicatesSet(A) {
    const seen = new Set();
    for (const num of A) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}
