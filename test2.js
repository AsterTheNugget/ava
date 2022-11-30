import test from 'ava';

test('foo', t => {
	t.is(2 + 2, 4);
});

function sum (a, b) {
  return a + b;
}

test('foo is being tested', t => {
  t.pass();
})
test('sum of 2 numbers', t => {
  t.is(sum(1, 2), 3);
})

//TODO test multiplicacion

function mult (a, b) {
  return a * b;
}

test('Mult of 2 numbers', t => {
  t.is(mult(1, 2), 2);
})



//TODO test restar

function sub (a, b) {
  return a - b;
}


test('sub of 2 numbers', t => {
  t.is(sub(1, 2), 3);
})

