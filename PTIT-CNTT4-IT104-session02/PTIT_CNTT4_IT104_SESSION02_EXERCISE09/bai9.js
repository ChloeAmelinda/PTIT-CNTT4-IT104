function getStudentSummary(student){
    let total = 0;
    let count = 0;
    const averageScore = "hoc sinh yeu";
    for (let i of student.listmonhoc) {
        total += i.score;
        count++;

    }
    const average = total / count;
    if( average >= 8.5) {
        averageScore === "Hoc sinh gioi";

    }else if( average >= 7.0) {
        averageScore === "Hoc sinh kha";
    }else if( average >= 5.0) {
        averageScore === "Hoc sinh trung binh";
    }
    return {
        average: average.toFixed(2),
         averageScore
    };

}
function maxScore(student) {
    let max = student.listmonhoc[0].score;
    let maxSubject = student.listmonhoc[0].name;
    for (let i of student.listmonhoc) {
        if (i.score > max) {
            max = i.score;
            maxSubject = i.name;
        }
    }
    return {
        max,
         maxSubject
    };
}
function minScore(student) {
    let min = student.listmonhoc[0].score;
    let minSubject = student.listmonhoc[0].name;
    for (let i of student.listmonhoc) {
        if (i.score < min) {
            min = i.score;
            minSubject = i.name;
        }
    }
    return {
        min,
        minSubject
    };
}
const student= {
    name: "Chang",
    age: 20,
    listmonhoc: [
        { name: "Math", score: 9 },
        { name: "English", score: 7.5 },
        { name: "Physics", score: 8.5 }
    ]
}
const summary = getStudentSummary(student);
console.log(`${student.name} is ${student.age} years old .
Average score:${summary.average}->  ${summary.averageScore}.
best score:${maxScore(student).maxSubject} (${maxScore(student).max}).
worst score:${minScore(student).minSubject}  (${minScore(student).min}).`);


