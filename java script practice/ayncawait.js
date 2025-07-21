// async function myFunc() {
//     let result = await somePromise();
//     console.log(result);
// }

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("done waiting !") , ms);
    });
}

async function run() {
    console.log("waiting....");
    const message = await wait (2000);
    console.log(message);
}

run();