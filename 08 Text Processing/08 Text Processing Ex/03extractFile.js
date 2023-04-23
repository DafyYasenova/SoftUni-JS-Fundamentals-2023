function extractFile(input) {
    let currentFile = input.substring(input.lastIndexOf("\\") + 1);
    // връща инпута изрязан до последния индекс, съдържащ \\
    let fileName = currentFile.substring(0, currentFile.lastIndexOf("."));
    // връща инпута до последната .
    let fileExtension = currentFile.substring(currentFile.lastIndexOf(".") + 1)
    // връща инпута след послената .

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`)

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')