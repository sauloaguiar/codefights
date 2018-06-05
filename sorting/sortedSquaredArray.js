function sortedSquaredArray(array) {
    let result = [];
    let negIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            break;
        }
        negIndex++;
    }
    let posIndex = negIndex + 1;
    while (posIndex < array.length) {
        let negSq;
        let posSq = array[posIndex] * array[posIndex];
        if (negIndex < 0) {
            result.push(posSq);
            posIndex++;
            continue;
        } else {
            negSq = array[negIndex] * array[negIndex];
        }
        if (negSq < posSq) {
            result.push(negSq);
            negIndex--;
        } else {
            result.push(posSq);
            posIndex++;
        }
    }

    while (negIndex >= 0) {
        result.push(array[negIndex] * array[negIndex]);
        negIndex--;
    }

    return result;
}
