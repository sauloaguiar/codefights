function sortByString(s, t) {
    let alphabet = {};
    for (let i = 0; i < t.length; i++) {
        console.log(alphabet);
        alphabet[t.charAt(i)] = i;
    }
    let sArray = s.split("");

    sArray.sort((a, b) => {
        if (alphabet[a] < alphabet[b]) {
            return -1;
        }
        if (alphabet[a] > alphabet[b]) {
            return 1;
        }
        return 0;
    });

    return sArray.join("");
}
