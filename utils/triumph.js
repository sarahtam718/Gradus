const translators = require("./translators")
const tests = require("./tests")
const testsuites = require("./testsuites")
const dummy = { key: "C", midiArray: [60, 62, 64, 65, 67, 62, 65, 64, 62, 60] }
const analyze = require("../controller/index")
// this initial iteration of triumph will focus solely on the generation of a single upper counterpoint to a given cantus
let midiCantus = dummy.midiArray
// given our cantus we need to use create an array of potential arrays, then range them
let matrix = []
midiCantus.forEach((note, index) => {
    let column = []
    for (var i = note; i <= note + 21; i++) {
        column.push(i)
    }
    matrix.push(column)
})
// next we convert them into duals so we can keycomb them.
matrix.forEach((column, index) => {
    let pitch = translators.evalPitchArray(column, dummy.key);
    let dualColumn =
        translators.formatDual(column, pitch)
    matrix[index] = dualColumn
})
matrix.forEach(column => {
    let newColumn = []
    let trash = []
    let comb = tests.keyComb(column, dummy.key)[2]
    for (var i = comb.length - 1; i >= 0; i--) {
        trash.push(column.splice(comb[i], 1))
    }
})
console.log("keycombed", matrix)
let cantusPitch = translators.evalPitchArray(midiCantus, dummy.key);
let dualCantus =
    translators.formatDual(midiCantus, cantusPitch)
// we have to slightly alter the functionality of the verticalDissonance function 
// to assess multiple notes against each voice by making each note an array of 
// iterations of that note equal to the length of the comparativematrix column
for (var i = 0; i < midiCantus.length; i++) {
    console.log("note", dualCantus[i]);
    let trivialArray = []
    for (var j = 0; j < matrix[i].length; j++) {
        trivialArray.push(dualCantus[i])
    }
    let vertComb = new Set(tests.verticalDissonanceBass(translators.intervalCompare(trivialArray, matrix[i]))[2])
    vertComb = [...vertComb]
    let trash = []
    for (var k = vertComb.length - 1; k >= 0; k--) {
        trash.push(matrix[i].splice(vertComb[i], 1))
    }
}
console.log("dissonance combed", matrix)

