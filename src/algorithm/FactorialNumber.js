
// 1以上20以下の整数があたえられます。その数字の階乗を出力してください。
function FactorialNumber(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
        // result = result * i;
        result *= i;
    }
    return result;
}

export default FactorialNumber;

// 階乗は順番にその数字から表示していくこと。例えば5なら1, 2, 3, 4, 5を出力すればいい。
// 5 * 4の答えを格納する変数、その変数 * 引数からfor文のiを引いた数、そしてそれを再度代入する。
