function duplicatesSort(A) {
    const sorted = [...A].sort((a, b) => a - b); 
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) return true;
    }
    return false;
}
