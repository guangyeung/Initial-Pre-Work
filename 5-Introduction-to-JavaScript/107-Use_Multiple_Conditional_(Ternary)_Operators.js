// In this lesson, I learned that it is possible to chain together multiple ternary operators.

function checkSign(num) {
    return (num == 0) ? "zero" : (num < 0) ? "negative" : "positive";
}

checkSign(10);
