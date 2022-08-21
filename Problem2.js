// Problem-2: isJavaScriptFile

function isJavaScriptFile(fileName) {
    const isString = typeof fileName;
    if (isString !== "string") {
        return "Please enter string input!";
    }
    else if (isString === "string" && fileName.endsWith(".js")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isJavaScriptFile("tree.js.jpg"));

