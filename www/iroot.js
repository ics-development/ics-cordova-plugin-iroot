var exec = require('cordova/exec');

function IRoot () {}

IRoot.prototype.isRooted = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'isRooted', []);
};
IRoot.prototype.isRootedWithBusyBox = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'isRootedWithBusyBox', []);
}
IRoot.prototype.detectRootManagementApps = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'detectRootManagementApps', []);
}
IRoot.prototype.detectPotentiallyDangerousApps = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'detectPotentiallyDangerousApps', []);
}
IRoot.prototype.detectTestKeys = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'detectTestKeys', []);
}
IRoot.prototype.checkForBusyBoxBinary = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkForBusyBoxBinary', []);
}
IRoot.prototype.checkForSuBinary = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkForSuBinary', []);
}
IRoot.prototype.checkSuExists = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkSuExists', []);
}
IRoot.prototype.checkForRWPaths = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkForRWPaths', []);
}
IRoot.prototype.checkForDangerousProps = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkForDangerousProps', []);
}
IRoot.prototype.checkForRootNative = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkForRootNative', []);
}
IRoot.prototype.detectRootCloakingApps = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'detectRootCloakingApps', []);
}
IRoot.prototype.isSelinuxFlagInEnabled = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'isSelinuxFlagInEnabled', []);
}
IRoot.prototype.isExistBuildTags = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'isExistBuildTags', []);
}
IRoot.prototype.doesSuperuserApkExist = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'doesSuperuserApkExist', []);
}
IRoot.prototype.isExistSUPath = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'isExistSUPath', []);
}
IRoot.prototype.checkDirPermissions = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkDirPermissions', []);
}
IRoot.prototype.checkExecutingCommands = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkExecutingCommands', []);
}
IRoot.prototype.checkInstalledPackages = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkInstalledPackages', []);
}
IRoot.prototype.checkforOverTheAirCertificates = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkforOverTheAirCertificates', []);
}
IRoot.prototype.isRunningOnEmulator = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'isRunningOnEmulator', []);
}
IRoot.prototype.simpleCheckEmulator = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'simpleCheckEmulator', []);
}
IRoot.prototype.simpleCheckSDKBF86 = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'simpleCheckSDKBF86', []);
}
IRoot.prototype.simpleCheckQRREFPH = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'simpleCheckQRREFPH', []);
}
IRoot.prototype.simpleCheckBuild = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'simpleCheckBuild', []);
}
IRoot.prototype.checkGenymotion = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkGenymotion', []);
}
IRoot.prototype.checkGeneric = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkGeneric', []);
}
IRoot.prototype.checkGoogleSDK = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'checkGoogleSDK', []);
}
IRoot.prototype.togetDeviceInfo = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'togetDeviceInfo', []);
}
IRoot.prototype.isRootedWithEmulator = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'isRootedWithEmulator', []);
}
IRoot.prototype.isRootedWithBusyBoxWithEmulator = function(onSuccess, onError) {
    exec(onSuccess, onError, 'IRoot', 'isRootedWithBusyBoxWithEmulator', []);
}

var iRoot = new IRoot();
module.exports = iRoot;
