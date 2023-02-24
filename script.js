let arr = ['this', 'is', 'text']

let $case = 'lower';

const p = document.createElement('p');

p.textContent = arr.join(' ')

p.addEventListener('click', function() {
    $case == 'lower'
    ? (p.textContent = `${arr.map(x => x.toUpperCase()).join(' ')}`, $case = 'upper')
    : (p.textContent = `${arr.map(x => x.toLowerCase()).join(' ')}`, $case = 'lower')
})

document.body.append(p);
