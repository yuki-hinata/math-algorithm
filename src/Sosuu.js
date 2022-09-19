import './App.css';

// 自分の年齢が素数かどうか判定してください。
function Sosuu( age ) {
    for (let i = 2; i * i <= age; i++) {
        if (age % i !== 0) return 'not prime number';

    }
    return 'prime number';
}

export default Sosuu;
