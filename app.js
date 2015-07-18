var app = angular.module('cubApp', []);

app.controller('cubController', function($scope) {

    $scope.moves = {};
    $scope.moves.faceMoves = ['U', 'D', 'L', 'R', 'F', 'B'];
    $scope.moves.sliceMoves = ['M', 'E', 'S'];
    $scope.moves.rotations = ['x', 'y', 'z'];

    $scope.color = {};

    $scope.color.white = '#ffffff';
    $scope.color.yellow = '#ffff00';
    $scope.color.orange = '#ff8000';
    $scope.color.red = '#ff0000';
    $scope.color.green = '#00ff00';
    $scope.color.blue = '#0000ff';

    $scope.cub = {};

    $scope.cub['U'] = $scope.color.white;
    $scope.cub['D'] = $scope.color.yellow;
    $scope.cub['L'] = $scope.color.orange;
    $scope.cub['R'] = $scope.color.red;
    $scope.cub['F'] = $scope.color.green;
    $scope.cub['B'] = $scope.color.blue;

    $scope.cub['UR'] = $scope.color.white;
    $scope.cub['RU'] = $scope.color.red;
    $scope.cub['UF'] = $scope.color.white;
    $scope.cub['FU'] = $scope.color.green;
    $scope.cub['UL'] = $scope.color.white;
    $scope.cub['LU'] = $scope.color.orange;
    $scope.cub['UB'] = $scope.color.white;
    $scope.cub['BU'] = $scope.color.blue;
    $scope.cub['DR'] = $scope.color.yellow;
    $scope.cub['RD'] = $scope.color.red;
    $scope.cub['DF'] = $scope.color.yellow;
    $scope.cub['FD'] = $scope.color.green;
    $scope.cub['DL'] = $scope.color.yellow;
    $scope.cub['LD'] = $scope.color.orange;
    $scope.cub['DB'] = $scope.color.yellow;
    $scope.cub['BD'] = $scope.color.blue;
    $scope.cub['FL'] = $scope.color.green;
    $scope.cub['LF'] = $scope.color.orange;
    $scope.cub['FR'] = $scope.color.green;
    $scope.cub['RF'] = $scope.color.red;
    $scope.cub['BL'] = $scope.color.blue;
    $scope.cub['LB'] = $scope.color.orange;
    $scope.cub['BR'] = $scope.color.blue;
    $scope.cub['RB'] = $scope.color.red;

    $scope.cub['URF'] = $scope.color.white;
    $scope.cub['RFU'] = $scope.color.red;
    $scope.cub['FUR'] = $scope.color.green;
    $scope.cub['UFL'] = $scope.color.white;
    $scope.cub['FLU'] = $scope.color.green;
    $scope.cub['LUF'] = $scope.color.orange;
    $scope.cub['ULB'] = $scope.color.white;
    $scope.cub['LBU'] = $scope.color.orange;
    $scope.cub['BUL'] = $scope.color.blue;
    $scope.cub['UBR'] = $scope.color.white;
    $scope.cub['BRU'] = $scope.color.blue;
    $scope.cub['RUB'] = $scope.color.red;
    $scope.cub['DFR'] = $scope.color.yellow;
    $scope.cub['FRD'] = $scope.color.green;
    $scope.cub['RDF'] = $scope.color.red;
    $scope.cub['DLF'] = $scope.color.yellow;
    $scope.cub['LFD'] = $scope.color.orange;
    $scope.cub['FDL'] = $scope.color.green;
    $scope.cub['DBL'] = $scope.color.yellow;
    $scope.cub['BLD'] = $scope.color.blue;
    $scope.cub['LDB'] = $scope.color.orange;
    $scope.cub['DRB'] = $scope.color.yellow;
    $scope.cub['RBD'] = $scope.color.red;
    $scope.cub['BDR'] = $scope.color.blue;

    $scope.cubSolved = isCubSolved($scope.cub);

    $scope.$watch(function(scope) {
        return scope.scramble;
    }, function() {
        $scope.performMoves(genScramble(20));
    });

    $scope.$watch(function(scope) {
        return scope.cub;
    }, function() {
        $scope.cubSolved = isCubSolved($scope.cub);
    });

    $scope.newScramble = function() {
        $scope.reset();
        $scope.performMoves(genScramble(20));
    };

    $scope.keypress = function(event) {
        switch(event.keyCode) {
            case 69: performL($scope.cub, -1); break; // E
            case 68: performL($scope.cub, 1); break; // D
            case 73: performR($scope.cub, 1); break; // I
            case 75: performR($scope.cub, -1); break; // K
            case 70: performU($scope.cub, -1); break; // F
            case 74: performU($scope.cub, 1); break; // J
            case 71: performF($scope.cub, -1); break; // G
            case 72: performF($scope.cub, 1); break; // H
            case 83: performD($scope.cub, 1); break; // S
            case 76: performD($scope.cub, -1); break; // L
            case 87: performB($scope.cub, 1); break; // W
            case 79: performB($scope.cub, -1); break; // O
            case 89: performx($scope.cub, 1); break; // Y
            case 78: performx($scope.cub, -1); break; // N
            case 65: performy($scope.cub, -1); break; // A
            case 186: performy($scope.cub, 1); break; // ;
            case 80: performz($scope.cub, 1); break; // P
            case 81: performz($scope.cub, -1); break; // Q
            case 37: performy($scope.cub, 1); break; // Left
            case 38: performx($scope.cub, 1); break; // Up
            case 39: performy($scope.cub, -1); break; // Right
            case 40: performx($scope.cub, -1); break; // Down
        }
    };

    $scope.reset = function() {
        console.log($scope.cub);
        setColor([$scope.cub['U'], $scope.cub['UR'], $scope.cub['UF'], $scope.cub['UL'], $scope.cub['UB'], $scope.cub['URF'], $scope.cub['UFL'], $scope.cub['ULB'], $scope.cub['UBR']], '#ffffff'); // white
        setColor([$scope.cub['D'], $scope.cub['DR'], $scope.cub['DF'], $scope.cub['DL'], $scope.cub['DB'], $scope.cub['DFR'], $scope.cub['DLF'], $scope.cub['DBL'], $scope.cub['DRB']], '#ffff00'); // yellow
        setColor([$scope.cub['L'], $scope.cub['LU'], $scope.cub['LD'], $scope.cub['LF'], $scope.cub['LB'], $scope.cub['LUF'], $scope.cub['LBU'], $scope.cub['LFD'], $scope.cub['LDB']], '#ff8000'); // orange
        setColor([$scope.cub['R'], $scope.cub['RU'], $scope.cub['RD'], $scope.cub['RF'], $scope.cub['RB'], $scope.cub['RFU'], $scope.cub['RUB'], $scope.cub['RDF'], $scope.cub['RBD']], '#ff0000'); // red
        setColor([$scope.cub['F'], $scope.cub['FU'], $scope.cub['FD'], $scope.cub['FL'], $scope.cub['FR'], $scope.cub['FUR'], $scope.cub['FLU'], $scope.cub['FRD'], $scope.cub['FDL']], '#00ff00'); // green
        setColor([$scope.cub['B'], $scope.cub['BU'], $scope.cub['BD'], $scope.cub['BL'], $scope.cub['BR'], $scope.cub['BUL'], $scope.cub['BRU'], $scope.cub['BLD'], $scope.cub['BDR']], '#0000ff'); // blue
        console.log($scope.cub);
    };

    $scope.performMoves = function(moves) {
        var movesArray = moves.split(" ");
        for (var i = 0; i < movesArray.length; i++) {
            switch (movesArray[i]) {
                case 'U': performU($scope.cub, 1); break;
                case 'U2': performU($scope.cub, 0); break;
                case 'U\'': performU($scope.cub, -1); break;
                case 'D2': performD($scope.cub, 1); break;
                case 'D': performD($scope.cub, 0); break;
                case 'D\'': performD($scope.cub, -1); break;
                case 'L': performL($scope.cub, 1); break;
                case 'L\'': performL($scope.cub, 0); break;
                case 'L2': performL($scope.cub, -1); break;
                case 'R': performR($scope.cub, 1); break;
                case 'R\'': performR($scope.cub, 0); break;
                case 'R2': performR($scope.cub, -1); break;
                case 'F': performF($scope.cub, 1); break;
                case 'F\'': performF($scope.cub, 0); break;
                case 'F2': performF($scope.cub, -1); break;
                case 'B': performB($scope.cub, 1); break;
                case 'B\'': performB($scope.cub, 0); break;
                case 'B2': performB($scope.cub, -1); break;
                case 'M': performM($scope.cub, 1); break;
                case 'M\'': performM($scope.cub, 0); break;
                case 'M2': performM($scope.cub, -1); break;
                case 'E': performE($scope.cub, 1); break;
                case 'E\'': performE($scope.cub, 0); break;
                case 'E2': performE($scope.cub, -1); break;
                case 'S': performS($scope.cub, 1); break;
                case 'S\'': performS($scope.cub, 0); break;
                case 'S2': performS($scope.cub, -1); break;
                case 'x': performx($scope.cub, 1); break;
                case 'x\'': performx($scope.cub, 0); break;
                case 'x2': performx($scope.cub, -1); break;
                case 'y': performy($scope.cub, 1); break;
                case 'y\'': performy($scope.cub, 0); break;
                case 'y2': performy($scope.cub, -1); break;
                case 'z': performz($scope.cub, 1); break;
                case 'z\'': performz($scope.cub, 0); break;
                case 'z2': performz($scope.cub, -1); break;
            }
        }
    };

});

function setColor(stickers, color) {
    for (var i = 0; i < stickers.length; i++) {
        stickers[i] = color;
    }
}

function cycle(cub, dir, s) {
    switch(dir) {
        case 1: var temp = cub[s[0]]; cub[s[0]] = cub[s[1]]; cub[s[1]] = cub[s[2]]; cub[s[2]] = cub[s[3]]; cub[s[3]] = temp; break;
        case 0: var temp = cub[s[0]]; cub[s[0]] = cub[s[2]]; cub[s[2]] = temp; temp = cub[s[1]]; cub[s[1]] = cub[s[3]]; cub[s[3]] = temp; break;
        case -1: var temp = cub[s[0]]; cub[s[0]] = cub[s[3]]; cub[s[3]] = cub[s[2]]; cub[s[2]] = cub[s[1]]; cub[s[1]] = temp; break;
    }
}

function genScramble(length) {
    var previousMove = -1, secondPreviousMove = -1, scramble = "";
    for (i = 0; i < length; i++) {
        var move = Math.floor((Math.random() * 6)),
          dir = Math.floor((Math.random() * 3));
        if (((previousMove == 0) && (secondPreviousMove != 1)) || ((previousMove == 1) && (secondPreviousMove != 0)) || ((previousMove == 2) && (secondPreviousMove != 3)) || ((previousMove == 3) && (secondPreviousMove != 2)) || ((previousMove == 4) && (secondPreviousMove != 5)) || ((previousMove == 5) && (secondPreviousMove != 4)))
            secondPreviousMove = -1;
        while ((move == previousMove) || (move == secondPreviousMove))
            move = Math.floor((Math.random() * 6));
        switch (move) {
            case 0: scramble = scramble.concat("U"); break;
            case 1: scramble = scramble.concat("D"); break;
            case 2: scramble = scramble.concat("L"); break;
            case 3: scramble = scramble.concat("R"); break;
            case 4: scramble = scramble.concat("F"); break;
            case 5: scramble = scramble.concat("B"); break;
        }
        switch (dir) {
            case 1: scramble = scramble.concat("'"); break;
            case 2: scramble = scramble.concat("2"); break;
        }
        secondPreviousMove = previousMove;
        previousMove = move;
        if (i < length - 1)
            scramble = scramble.concat(" ");
    }
    return scramble;
}

function isCubSolved(cub) {
    return ((cub['UR'] == cub['U']) && (cub['RU'] == cub['R']) && (cub['UF'] == cub['U']) && (cub['FU'] == cub['F']) && (cub['UL'] == cub['U']) && (cub['LU'] == cub['L']) && (cub['UB'] == cub['U']) && (cub['BU'] == cub['B']) && (cub['DR'] == cub['D']) && (cub['RD'] == cub['R']) && (cub['DF'] == cub['D']) && (cub['FD'] == cub['F']) && (cub['DL'] == cub['D']) && (cub['LD'] == cub['L']) && (cub['DB'] == cub['D']) && (cub['BD'] == cub['B']) && (cub['FL'] == cub['F']) && (cub['LF'] == cub['L']) && (cub['FR'] == cub['F']) && (cub['RF'] == cub['R']) && (cub['BL'] == cub['B']) && (cub['LB'] == cub['L']) && (cub['BR'] == cub['B']) && (cub['RB'] == cub['R']) && (cub['URF'] == cub['U']) && (cub['RFU'] == cub['R']) && (cub['FUR'] == cub['F']) && (cub['UFL'] == cub['U']) && (cub['FLU'] == cub['F']) && (cub['LUF'] == cub['L']) && (cub['ULB'] == cub['U']) && (cub['LBU'] == cub['L']) && (cub['BUL'] == cub['B']) && (cub['UBR'] == cub['U']) && (cub['BRU'] == cub['B']) && (cub['RUB'] == cub['R']) && (cub['DFR'] == cub['D']) && (cub['FRD'] == cub['F']) && (cub['RDF'] == cub['R']) && (cub['DLF'] == cub['D']) && (cub['LFD'] == cub['L']) && (cub['FDL'] == cub['F']) && (cub['DBL'] == cub['D']) && (cub['BLD'] == cub['B']) && (cub['LDB'] == cub['L']) && (cub['DRB'] == cub['D']) && (cub['RBD'] == cub['R']) && (cub['BDR'] == cub['B']));
}

function performU(cub, dir) {
    cycle(cub, dir, ['UR', 'UB', 'UL', 'UF']);
    cycle(cub, dir, ['RU', 'BU', 'LU', 'FU']);
    cycle(cub, dir, ['URF', 'UBR', 'ULB', 'UFL']);
    cycle(cub, dir, ['RFU', 'BRU', 'LBU', 'FLU']);
    cycle(cub, dir, ['FUR', 'RUB', 'BUL', 'LUF']);
}

function performD(cub, dir) {
    cycle(cub, dir, ['DR', 'DF', 'DL', 'DB']);
    cycle(cub, dir, ['RD', 'FD', 'LD', 'BD']);
    cycle(cub, dir, ['DFR', 'DLF', 'DBL', 'DRB']);
    cycle(cub, dir, ['RDF', 'FDL', 'LDB', 'BDR']);
    cycle(cub, dir, ['LFD', 'BLD', 'RBD', 'FRD']);
}

function performL(cub, dir) {
    cycle(cub, dir, ['LU', 'LB', 'LD', 'LF']);
    cycle(cub, dir, ['UL', 'BL', 'DL', 'FL']);
    cycle(cub, dir, ['LUF', 'LBU', 'LDB', 'LFD']);
    cycle(cub, dir, ['UFL', 'BUL', 'DBL', 'FDL']);
    cycle(cub, dir, ['FLU', 'ULB', 'BLD', 'DLF']);
}

function performR(cub, dir) {
    cycle(cub, dir, ['RU', 'RF', 'RD', 'RB']);
    cycle(cub, dir, ['UR', 'FR', 'DR', 'BR']);
    cycle(cub, dir, ['RFU', 'RDF', 'RBD', 'RUB']);
    cycle(cub, dir, ['URF', 'FRD', 'DRB', 'BRU']);
    cycle(cub, dir, ['FUR', 'DFR', 'BDR', 'UBR']);
}

function performF(cub, dir) {
    cycle(cub, dir, ['FU', 'FL', 'FD', 'FR']);
    cycle(cub, dir, ['UF', 'LF', 'DF', 'RF']);
    cycle(cub, dir, ['FUR', 'FLU', 'FDL', 'FRD']);
    cycle(cub, dir, ['URF', 'LUF', 'DLF', 'RDF']);
    cycle(cub, dir, ['RFU', 'UFL', 'LFD', 'DFR']);
}

function performB(cub, dir) {
    cycle(cub, dir, ['BU', 'BR', 'BD', 'BL']);
    cycle(cub, dir, ['UB', 'RB', 'DB', 'LB']);
    cycle(cub, dir, ['BRU', 'BDR', 'BLD', 'BUL']);
    cycle(cub, dir, ['UBR', 'RBD', 'DBL', 'LBU']);
    cycle(cub, dir, ['RUB', 'DRB', 'LDB', 'ULB']);
}

function performM(cub, dir) {
    cycle(cub, dir, ['U', 'B', 'D', 'F']);
    cycle(cub, dir, ['UF', 'BU', 'DB', 'FD']);
    cycle(cub, dir, ['FU', 'UB', 'BD', 'DF']);
}

function performS(cub, dir) {
    cycle(cub, dir, ['U', 'L', 'D', 'R']);
    cycle(cub, dir, ['UR', 'LU', 'DL', 'RD']);
    cycle(cub, dir, ['RU', 'UL', 'LD', 'DR']);
}

function performE(cub, dir) {
    cycle(cub, dir, ['F', 'L', 'B', 'R']);
    cycle(cub, dir, ['FR', 'LF', 'BL', 'RB']);
    cycle(cub, dir, ['RF', 'FL', 'LB', 'BR']);
}

function performx(cub, dir) {
    performL(cub, dir * -1);
    performM(cub, dir * -1);
    performR(cub, dir);
}

function performy(cub, dir) {
    performU(cub, dir);
    performE(cub, dir * -1);
    performD(cub, dir * -1);
}

function performz(cub, dir) {
    performF(cub, dir);
    performS(cub, dir);
    performB(cub, dir * -1);
}