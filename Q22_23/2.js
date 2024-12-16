const makeALesson = (subject) => {
    return prepareLesson(subject)
        .then((researchLesson(subject)))
        .then((writeLesson(subject)))
        .then((teachLesson(subject)))

        .catch((err) => {
            console.error(err);
        })
}

const prepareLesson = (subject) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Lesson prepared for " + subject);
            resolve();
        }, 1000);
    });
};

const researchLesson = (subject) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Lesson researched for " + subject);
            resolve();
        }, 1000);
    });
};

const writeLesson = (subject) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Lesson written for " + subject);
            resolve();
        }, 1000);
    });
};

const teachLesson = (subject) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Lesson taught for " + subject);
            resolve();
        }, 1000);
    });
};


makeALesson('Math');
