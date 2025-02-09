arr.sort((a, b) => {
    if (a[0] == b[0]) {
        return b[1] - a[1];
    }
    return a[0] - b[0];
});
