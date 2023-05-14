let value = +prompt('Insert the value');

if (typeof value === 'number' && !isNaN(value)) {
    if (value % 2 === 0) {
        console.log('Even number');
    } else {
        console.log('Odd number');
    }
} else {
    console.log('Whoops! You\'re wrong!');
}