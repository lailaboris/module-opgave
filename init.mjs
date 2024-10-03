import fs from 'node:fs';
import { studentData } from './students.mjs';
import { log } from 'node:console';

const rootName = './assets/js/';
let studentImports = '';
let studentCalls = '';

studentData.students.forEach(student => {
    let foldername = rootName + 'modules/' + student.name;
    let fileName = `${foldername}/${student.name}.js`;

    studentImports += `import setup${student.name} from './modules/${student.name}/${student.name}.js';\n`;
    studentCalls += `setup${student.name}();\n`;
    try {
        if (!fs.existsSync(foldername)) {
            fs.mkdirSync(foldername);
        }
    } catch (err) {
        console.error(err);
    }
    // bruger fil
    let content = `export default function setup${student.name}() {\n  console.log("Hello from ${student.name}");\n}\n`;

    fs.writeFile(fileName, content, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });

});

log('Folders created');

createBaseFile(studentImports, studentCalls);

function createBaseFile(studentImports, studentCalls) {

    const content = studentImports + studentCalls
    fs.writeFile(rootName + '/main.js', content, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });
}