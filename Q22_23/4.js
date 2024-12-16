const first = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Welcome Everyone');
    }, 1000);
});

const second = new Promise((resolve) => {
    setTimeout(() => {
        resolve('to Jayjay Lesson');
    }, 3000);
});

const third = new Promise((resolve) => {
    setTimeout(() => {
        resolve('for Async/Await');
    }, 2000);
});

const promises = [first, second, third];

async function promiseExample(promises) {
    
    // Membuat Array untuk output
    const results = [];
    
    // Memasukkan output data ke array
    for (const promise of promises) {
        const result = await promise;
        results.push(result);
    }

    console.log(`["${results.join(', ')}"]`);
}

promiseExample(promises);
