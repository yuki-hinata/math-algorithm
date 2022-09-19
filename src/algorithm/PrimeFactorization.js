

// 引数numを素因数分解するプログラムを作成してください。計算量はO(ルートN)
function PrimeFactorization(num) {
    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            num /= i;
            console.log(i);
        }
    }

    if (num >= 2) {
        console.log(num);
    }
    return 'fin';
}

export default PrimeFactorization;

