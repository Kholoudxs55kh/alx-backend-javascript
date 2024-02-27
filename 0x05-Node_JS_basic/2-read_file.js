module.exports = countStudents = () => {
    const fs = require('fs');
    const path = process.argv[2];

    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(path, 'utf-8').split('\n').filter((line) => line.length > 0);

    const fields = {};
    const students = {};

    for (const line of data) {
        const row = line.split(',');
        if (fields[row[3]]) {
            fields[row[3]].push(row[0]);
        } else {
            fields[row[3]] = [row[0]];
        }
        students[row[0]] = row[3];
    }

    console.log(`Number of students: ${data.length - 1}`);
    for (const field in fields) {
        if (field) {
            const list = fields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
    }

    return { students, fields };
};