// Function to create and handle a promise
async function handlePromise(i) {
    let promise1 = new Promise((resolveOuter) => {
        resolveOuter(
            new Promise((resolveInner) => {
                console.log("inside promise 1", i);
                setTimeout(() => {
                    console.log("inside promise", i);
                    resolveInner();
                }, 1000);
            })
        );
    });
    console.log("before", i);
    await promise1;
    console.log("After", i);
}// Function to iterate using a for loop
async function fn1() {
    for (let i = 0; i < 5; i++) {
        await handlePromise(i);
    }
}// Test the functions
(async function testFunctions() {
    await fn1();
    console.log('>>>> fn1 completed');})();console.log('>>>> last');// Function to create and handle a promise
// async function handlePromise(i) {
//     let promise1 = new Promise((resolveOuter) => {
//         resolveOuter(
//             new Promise((resolveInner) => {
//                 console.log("inside promise 1", i);
//                 setTimeout(() => {
//                     console.log("inside promise", i);
//                     resolveInner();
//                 }, 1000);
//             })
//         );
//     });
//     console.log("before", i);
//     await promise1;
//     console.log("After", i);
// }// // Function to iterate using forEach loop
// async function fn2() {
//     const array = [0, 1, 2, 3, 4];
//     array.forEach(async (i) => {
//         await handlePromise(i);
//     });
// }// // Test the functions
// (async function testFunctions() {
//     console.log('>>>> Starting fn2');
//     await fn2();
//     console.log('>>>> fn2 completed');
// })();// console.log('>>>> last');

const arr = ['asd', 'lsf', 'htw', 'htek'];

const result = arr.map(val => ({name: val}))
console.log(result);
console.log('Practice merge conflict resolve');