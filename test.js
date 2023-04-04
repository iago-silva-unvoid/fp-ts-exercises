import {
  safeDivision,
  head,
  last,
  safeGet,
  safeGetOBJ,
  safeFindIndex,
  getSubArrays,
  getUppercase,
  getLowercase,
  getVowels,
} from './main.js';
import { some, none } from 'fp-ts/lib/Option.js';
import chalk from 'chalk';
import assert from 'assert';

// - safeDivision -
try {
  console.log(chalk.magenta('---- Safe Division ----'));

  assert.deepStrictEqual(safeDivision(5, 5), some(1));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(safeDivision(10, 5), some(2));
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(safeDivision(942, 10), some(94.2));
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(safeDivision(0, 0), none);
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);

  console.log(chalk.red('[-] safeDivison failed!!\n\n\n'));
}

// - head -
try {
  console.log(chalk.magenta('---- head ----'));

  assert.deepStrictEqual(head([5, 5]), some(5));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(head([]), none);
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(
    head([
      [1, 2, 3],
      [2, 3, 4],
    ]),
    some([1, 2, 3])
  );
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(head(0), none);
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);

  console.log(chalk.red('[-] head failed!!\n\n\n'));
}

// - last -
try {
  console.log(chalk.magenta('---- last ----'));

  assert.deepStrictEqual(last([1, 2, 3, 4, 5, 6]), some(6));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(last([]), none);
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(
    last([
      [1, 2, 3],
      [2, 3, 4],
    ]),
    some([2, 3, 4])
  );
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(last(0), none);
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);

  console.log(chalk.red('[-] last failed!!\n\n\n'));
}

// - safeGet -
try {
  console.log(chalk.magenta('---- safeGet ----'));

  assert.deepStrictEqual(safeGet(3, [1, 2, 3, 0, 5, 6]), some(0));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(safeGet(0, [0]), some(0));
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(
    safeGet(1, [
      [1, 2, 3],
      [2, 3, 4],
    ]),
    some([2, 3, 4])
  );
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(safeGet(5, [0, 2, 3, 4, 5]), none);
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);
  console.log(chalk.red('[-] safeGet failed!!\n\n\n'));
}

// - safeGetOBJ -
try {
  console.log(chalk.magenta('---- safeGetOBJ ----'));

  assert.deepStrictEqual(safeGetOBJ('age', { age: 12 }), some(12));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(safeGetOBJ('age', {}), none);
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(
    safeGetOBJ('age', {
      age: {
        1: 2,
        2: 3,
      },
    }),
    some({ 1: 2, 2: 3 })
  );
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(safeGetOBJ('age', { AGE: 23 }), none);
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);
  console.log(chalk.red('[-] safeGet failed!!\n\n\n'));
}

// - safeFindIndex -
try {
  console.log(chalk.magenta('---- safeFindIndex ----'));

  assert.deepStrictEqual(safeFindIndex([1, 2, 3, 4], 4), some(3));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(safeFindIndex([1, 2, 3, 4], 5), none);
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(
    safeFindIndex(
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      [5, 6]
    ),
    some(2)
  );
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(
    safeFindIndex([{ age: 10 }, { age: 20 }], { age: 20 }),
    some(1)
  );
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);
  console.log(chalk.red('[-] safeFindIndex failed!!\n\n\n'));
}

// - getSubArrays -
try {
  console.log(chalk.magenta('---- getSubArrays ----'));

  assert.deepStrictEqual(getSubArrays([1, 2, 3, [4]]), some([[4]]));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(getSubArrays([]), none);
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(
    getSubArrays([
      [1, 2],
      [3, 4],
      [5, 6],
    ]),
    some([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  );
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(getSubArrays([{ age: 10 }, { age: 20 }]), none);
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);
  console.log(chalk.red('[-] getSubArrays failed!!\n\n\n'));
}

// - getUppercase -
try {
  console.log(chalk.magenta('---- getUppercase ----'));

  assert.deepStrictEqual(getUppercase('YOOO'), some('YOOO'));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(getUppercase('no uppercase'), none);
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(getUppercase('Lost Out Lake'), some('LOL'));
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(getUppercase('From Baking Ice'), some('FBI'));
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);
  console.log(chalk.red('[-] getUppercase failed!!\n\n\n'));
}

// - getLowercase -
try {
  console.log(chalk.magenta('---- getLowercase ----'));

  assert.deepStrictEqual(getLowercase('YOOO'), none);
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(getLowercase('no uppercase'), some('nouppercase'));
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(getLowercase('Lost Out Lake'), some('ostutake'));
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(getLowercase('From Baking Ice'), some('romakingce'));
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);
  console.log(chalk.red('[-] getLowercase failed!!\n\n\n'));
}

// - getVowels -
try {
  console.log(chalk.magenta('---- getVowels ----'));

  assert.deepStrictEqual(getVowels('YOOO'), some('OOO'));
  console.log(chalk.green('[+] 1 Test OK!'));

  assert.deepStrictEqual(getVowels('no uppercase'), some('oueae'));
  console.log(chalk.green('[+] 2 Test OK!'));

  assert.deepStrictEqual(getVowels('Lost Out Lake'), some('oOuae'));
  console.log(chalk.green('[+] 3 Test OK!'));

  assert.deepStrictEqual(getVowels('xdrts plrs'), none);
  console.log(chalk.green('[+] 4 Test OK!\n\n\n'));
} catch (err) {
  console.log(err.message);
  console.log(chalk.red('[-] getVowels failed!!\n\n\n'));
}
