const dateCheck = (a) => {
    if (a < 2023) {
        return -1;
    } else if (a > 2023) {
        return 1;
    } else {
        return 0;
    }
}

module.exports = dateCheck;