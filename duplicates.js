function duplicatesBruteForce(A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] === A[j]) return true;
        }
    }
    return false;
}
