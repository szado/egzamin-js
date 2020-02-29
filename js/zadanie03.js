function bigestSumOfTwoElements(array) {
  if (array.length === 0) {
    console.log(false);
    return false;
  } else if (array.length === 1) {
    console.log(array[0]);
    return array[0];
  } else {
    let first, second;

    if (array[0] > array[1]) {
      first = array[0];
      second = array[1];
    } 
    else {
      first = array[1];
      second = array[0];
    }

    for (let i = 2; i < array.length; i++) {
      if (array[i] > first) {
        second = first;
        first = array[i];
      } else if (array[i] > second && array[i] != first) {
          second = array[i];
      } 
    }

    console.log(first + second);
    return first + second;
  }
}

bigestSumOfTwoElements([1, 2, 3, 4]);
bigestSumOfTwoElements([]);
bigestSumOfTwoElements([76]);
bigestSumOfTwoElements([23, 45, 17, 12]);
