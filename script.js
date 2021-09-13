let table = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function sortowanie(x) {

    for (i = 0; i < x.length; i++) {
        for (j = 0; j < x.length - i - 1; j++) {
            if (x[j - 1] < x[j]) {
                let inicjacja = x[j - 1];
                x[j - 1] = x[j];
                x[j] = inicjacja;
            }
        }
    }

    return x.reverse();
}
sortowanie(table);
console.log(table);