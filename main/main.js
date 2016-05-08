var lcdNode = require('./lcd.js');

var getLcd = function (digit) {
    
    var allGrids = lcdNode.loadAllDigits();
    var digitArrays = lcdNode.buildDigitArrays(digit);
    var digitGrids = lcdNode.buildDigitGrids(digitArrays, allGrids);
    var finalPrint = lcdNode.buildFinalPrint(digitGrids);
    console.log(finalPrint);
};

exports.getLcd = getLcd;
