function* someGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = someGenerator();

console.log(generator.next());