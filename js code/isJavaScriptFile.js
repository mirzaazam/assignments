function isJavaScriptFile(file){
    const checkFile = '.js';
    if ( file == checkFile){
        return 'this is javaScript file';
    }
    else {
        return 'This is not javaScript file'
    }
}

const fileName = '.html';
const result = isJavaScriptFile(fileName);
console.log(result);