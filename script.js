let table = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function sorting(x) {

    for (i = 0; i < x.length; i++) {// weż pierwszy element
        for (j = 0; j < x.length - i - 1; j++) {//wez drugi element
            if (x[j - 1] < x[j]) {//porównaj
                let storage = x[j - 1];//zapisz w zmiennej
                x[j - 1] = x[j];//zamien miejscami
                x[j] = storage;//zapisz
            }
        }
    }

    return x.reverse();
}
sorting(table);
console.log(table);