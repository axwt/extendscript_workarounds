/**
 * Issue description:
 *
 * Folder, Folder.desktop or\and Folder.userData may return undefined, when Dropbox automatically back up your Desktop, Document and etc.
 * More details here: https://aescripts.com/knowledgebase/index/view/faq/dropbox-macos-warning/
 *
 * Workaround description:
 *
 * Check system folders and return an object with available folders.
 */

function getActualSystemFolders() {

    if (!Folder) return !!alert('"Folder" variable is not available');

    var documentsFolder = null;
    var userFolder = null;
    var testFolder = null;

    try {
        userFolder = Folder.userData.fsName;
    } catch (e) {}

    try {
        documentsFolder = Folder.myDocuments.fsName;
    } catch (e) {}

    try {
        testFolder = Folder.temp.fsName;
    } catch (e) {}

    try {
        testFolder = Folder.desktop.fsName;
    } catch (e) {}

    if (!userFolder && documentsFolder) userFolder = documentsFolder;
    if (!documentsFolder && userFolder) documentsFolder = userFolder;
    if (!documentsFolder && (!userFolder)) documentsFolder = userFolder = testFolder;

    return {
        'documentsFolder' : documentsFolder,
        'userFolder' : userFolder,
        'testFolder' : testFolder
    };

};