function higherVersion2(ver1, ver2) {

    let ver1Array = ver1.split('.');
    let ver2Array = ver2.split('.');

    for (let i = 0; i < ver1Array.length; i++) {
        let v1 = parseInt(ver1Array[i], 10);
        let v2 = parseInt(ver2Array[i], 10);
        if (v1 > v2) {
            return 1;
        }
        if (v1 < v2) {
            return -1;
        }
    }
    return 0;
}
