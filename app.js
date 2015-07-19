angular.module('cubApp', []).controller('cubController', function($scope) {

    $scope.moves = { faceMoves: ['U', 'D', 'L', 'R', 'F', 'B'], sliceMoves: ['M', 'E', 'S'],
        rotations: ['x', 'y', 'z'], wideMoves: ['u', 'd', 'l', 'r', 'f', 'b']};

    $scope.cub = {};
    $scope.scramble = genScramble(20);
    $scope.cubSolved = false;

    $scope.reset = function() {
        reset($scope.cub);
    };

    $scope.newScramble = function() {
        $scope.scramble = genScramble(20);
    };

    $scope.keypress = function(event) {
        switch(event.keyCode) {
            case 32: perform($scope.cub, 'M\''); break; // Spacebar
            case 37: perform($scope.cub, 'y'); break; // Left
            case 38: perform($scope.cub, 'x'); break; // Up
            case 39: perform($scope.cub, 'y\''); break; // Right
            case 40: perform($scope.cub, 'x\''); break; // Down
            case 65: perform($scope.cub, 'y'); break; // A
            case 68: perform($scope.cub, 'L'); break; // D
            case 69: perform($scope.cub, 'L\''); break; // E
            case 70: perform($scope.cub, 'U'); break; // F
            case 71: perform($scope.cub, 'F'); break; // G
            case 72: perform($scope.cub, 'F\''); break; // H
            case 73: perform($scope.cub, 'R'); break; // I
            case 74: perform($scope.cub, 'U\''); break; // J
            case 75: perform($scope.cub, 'R\''); break; // K
            case 76: perform($scope.cub, 'D\''); break; // L
            case 77: perform($scope.cub, 'r\''); break; // M
            case 78: perform($scope.cub, 'x\''); break; // N
            case 79: perform($scope.cub, 'B\''); break; // O
            case 80: perform($scope.cub, 'z'); break; // P
            case 81: perform($scope.cub, 'z\''); break; // Q
            case 82: perform($scope.cub, 'l\''); break; // R
            case 83: perform($scope.cub, 'D'); break; // S
            case 85: perform($scope.cub, 'r'); break; // U
            case 86: perform($scope.cub, 'l'); break; // V
            case 87: perform($scope.cub, 'B'); break; // W
            case 89: perform($scope.cub, 'x'); break; // Y
            case 186: perform($scope.cub, 'y\''); break; // ;
        }
        $scope.cubSolved = isCubSolved($scope.cub);
    };

    $scope.performMoves = function(moves) {
        perform($scope.cub, moves);
        $scope.cubSolved = isCubSolved($scope.cub);
    };

    $scope.$watch(function(scope) {
        return scope.scramble;
    }, function() {
        reset($scope.cub);
        $scope.performMoves($scope.scramble);
    });

});

function reset(cub) {
    setColor(cub, ['U', 'UR', 'UF', 'UL', 'UB', 'URF', 'UFL', 'ULB', 'UBR'], '#ffffff'); // white
    setColor(cub, ['D', 'DR', 'DF', 'DL', 'DB', 'DFR', 'DLF', 'DBL', 'DRB'], '#ffff00'); // yellow
    setColor(cub, ['L', 'LU', 'LD', 'LF', 'LB', 'LUF', 'LBU', 'LFD', 'LDB'], '#ff8000'); // orange
    setColor(cub, ['R', 'RU', 'RD', 'RF', 'RB', 'RFU', 'RUB', 'RDF', 'RBD'], '#ff0000'); // red
    setColor(cub, ['F', 'FU', 'FD', 'FL', 'FR', 'FUR', 'FLU', 'FRD', 'FDL'], '#00ff00'); // green
    setColor(cub, ['B', 'BU', 'BD', 'BL', 'BR', 'BUL', 'BRU', 'BLD', 'BDR'], '#0000ff'); // blue
}

function setColor(cub, stickers, color) {
    for (var i = 0; i < stickers.length; i++) {
        cub[stickers[i]] = color;
    }
}

function perform(cub, moves) {
    var movesArray = moves.split(" ");
    for (var i = 0; i < movesArray.length; i++) {
        var face = movesArray[i].substr(0,1), dir = 1;
        if ((movesArray[i].length > 1) && (movesArray[i].substr(1,2) == '\''))
            dir = -1;
        else if (movesArray[i].substr(1,2) == '2')
            dir = 0;
        switch(face) {
            case 'U': s = [['UR', 'UB', 'UL', 'UF'], ['RU', 'BU', 'LU', 'FU'],
                ['URF', 'UBR', 'ULB', 'UFL'], ['RFU', 'BRU', 'LBU', 'FLU'], ['FUR', 'RUB', 'BUL', 'LUF']]; break;
            case 'D': s = [['DR', 'DF', 'DL', 'DB'], ['RD', 'FD', 'LD', 'BD'],
                ['DFR', 'DLF', 'DBL', 'DRB'], ['RDF', 'FDL', 'LDB', 'BDR'], ['LFD', 'BLD', 'RBD', 'FRD']]; break;
            case 'L': s = [['LU', 'LB', 'LD', 'LF'], ['UL', 'BL', 'DL', 'FL'],
                ['LUF', 'LBU', 'LDB', 'LFD'], ['UFL', 'BUL', 'DBL', 'FDL'], ['FLU', 'ULB', 'BLD', 'DLF']]; break;
            case 'R': s = [['RU', 'RF', 'RD', 'RB'], ['UR', 'FR', 'DR', 'BR'],
                ['RFU', 'RDF', 'RBD', 'RUB'], ['URF', 'FRD', 'DRB', 'BRU'], ['FUR', 'DFR', 'BDR', 'UBR']]; break;
            case 'F': s = [['FU', 'FL', 'FD', 'FR'], ['UF', 'LF', 'DF', 'RF'],
                ['FUR', 'FLU', 'FDL', 'FRD'], ['URF', 'LUF', 'DLF', 'RDF'], ['RFU', 'UFL', 'LFD', 'DFR']]; break;
            case 'B': s = [['BU', 'BR', 'BD', 'BL'], ['UB', 'RB', 'DB', 'LB'],
                ['BRU', 'BDR', 'BLD', 'BUL'], ['UBR', 'RBD', 'DBL', 'LBU'], ['RUB', 'DRB', 'LDB', 'ULB']]; break;
            case 'M': s = [['U', 'B', 'D', 'F'], ['UF', 'BU', 'DB', 'FD'], ['FU', 'UB', 'BD', 'DF']]; break;
            case 'E': s = [['F', 'L', 'B', 'R'], ['FR', 'LF', 'BL', 'RB'], ['RF', 'FL', 'LB', 'BR']]; break;
            case 'S': s = [['U', 'L', 'D', 'R'], ['UR', 'LU', 'DL', 'RD'], ['RU', 'UL', 'LD', 'DR']]; break;
            case 'x': s = [['LU', 'LF', 'LD', 'LB'], ['UL', 'FL', 'DL', 'BL'],
                ['LUF', 'LFD', 'LDB', 'LBU'], ['UFL', 'FDL', 'DBL', 'BUL'], ['FLU', 'DLF', 'BLD', 'ULB'],
                ['U', 'F', 'D', 'B'], ['UF', 'FD', 'DB', 'BU'], ['FU', 'DF', 'BD', 'UB'],
                ['RU', 'RF', 'RD', 'RB'], ['UR', 'FR', 'DR', 'BR'],
                ['RFU', 'RDF', 'RBD', 'RUB'], ['URF', 'FRD', 'DRB', 'BRU'], ['FUR', 'DFR', 'BDR', 'UBR']]; break;
            case 'y': s = [['UR', 'UB', 'UL', 'UF'], ['RU', 'BU', 'LU', 'FU'],
                ['URF', 'UBR', 'ULB', 'UFL'], ['RFU', 'BRU', 'LBU', 'FLU'], ['FUR', 'RUB', 'BUL', 'LUF'],
                ['F', 'R', 'B', 'L'], ['FR', 'RB', 'BL', 'LF'], ['RF', 'BR', 'LB', 'FL'],
                ['DR', 'DB', 'DL', 'DF'], ['RD', 'BD', 'LD', 'FD'],
                ['DFR', 'DRB', 'DBL', 'DLF'], ['RDF', 'BDR', 'LDB', 'FDL'], ['LFD', 'FRD', 'RBD', 'BLD']]; break;
            case 'z': s = [['FU', 'FL', 'FD', 'FR'], ['UF', 'LF', 'DF', 'RF'],
                ['FUR', 'FLU', 'FDL', 'FRD'], ['URF', 'LUF', 'DLF', 'RDF'], ['RFU', 'UFL', 'LFD', 'DFR'],
                ['U', 'L', 'D', 'R'], ['UR', 'LU', 'DL', 'RD'], ['RU', 'UL', 'LD', 'DR'],
                ['BU', 'BL', 'BD', 'BR'], ['UB', 'LB', 'DB', 'RB'],
                ['BRU', 'BUL', 'BLD', 'BDR'], ['UBR', 'LBU', 'DBL', 'RBD'], ['RUB', 'ULB', 'LDB', 'DRB']]; break;
            case 'u': s = [['UR', 'UB', 'UL', 'UF'], ['RU', 'BU', 'LU', 'FU'],
                ['URF', 'UBR', 'ULB', 'UFL'], ['RFU', 'BRU', 'LBU', 'FLU'], ['FUR', 'RUB', 'BUL', 'LUF'],
                ['F', 'R', 'B', 'L'], ['FR', 'RB', 'BL', 'LF'], ['RF', 'BR', 'LB', 'FL']]; break;
            case 'd': s = [['DR', 'DF', 'DL', 'DB'], ['RD', 'FD', 'LD', 'BD'],
                ['DFR', 'DLF', 'DBL', 'DRB'], ['RDF', 'FDL', 'LDB', 'BDR'], ['LFD', 'BLD', 'RBD', 'FRD'],
                ['F', 'L', 'B', 'R'], ['FR', 'LF', 'BL', 'RB'], ['RF', 'FL', 'LB', 'BR']]; break;
            case 'l': s = [['LU', 'LB', 'LD', 'LF'], ['UL', 'BL', 'DL', 'FL'],
                ['LUF', 'LBU', 'LDB', 'LFD'], ['UFL', 'BUL', 'DBL', 'FDL'], ['FLU', 'ULB', 'BLD', 'DLF'],
                ['U', 'B', 'D', 'F'], ['UF', 'BU', 'DB', 'FD'], ['FU', 'UB', 'BD', 'DF']]; break;
            case 'r': s = [['RU', 'RF', 'RD', 'RB'], ['UR', 'FR', 'DR', 'BR'],
                ['RFU', 'RDF', 'RBD', 'RUB'], ['URF', 'FRD', 'DRB', 'BRU'], ['FUR', 'DFR', 'BDR', 'UBR'],
                ['U', 'F', 'D', 'B'], ['UF', 'FD', 'DB', 'BU'], ['FU', 'DF', 'BD', 'UB']]; break;
            case 'f': s = [['FU', 'FL', 'FD', 'FR'], ['UF', 'LF', 'DF', 'RF'],
                ['FUR', 'FLU', 'FDL', 'FRD'], ['URF', 'LUF', 'DLF', 'RDF'], ['RFU', 'UFL', 'LFD', 'DFR'],
                ['U', 'L', 'D', 'R'], ['UR', 'LU', 'DL', 'RD'], ['RU', 'UL', 'LD', 'DR']]; break;
            case 'b': s = [['BU', 'BR', 'BD', 'BL'], ['UB', 'RB', 'DB', 'LB'],
                ['BRU', 'BDR', 'BLD', 'BUL'], ['UBR', 'RBD', 'DBL', 'LBU'], ['RUB', 'DRB', 'LDB', 'ULB'],
                ['U', 'R', 'D', 'L'], ['UR', 'RD', 'DL', 'LU'], ['RU', 'DR', 'LD', 'UL']]; break;
        }
        for (var j = 0; j < s.length; j++) {
            switch(dir) {
                case 1:
                    var temp = cub[s[j][0]];
                    cub[s[j][0]] = cub[s[j][1]];
                    cub[s[j][1]] = cub[s[j][2]];
                    cub[s[j][2]] = cub[s[j][3]];
                    cub[s[j][3]] = temp; break;
                case 0:
                    var temp = cub[s[j][0]];
                    cub[s[j][0]] = cub[s[j][2]];
                    cub[s[j][2]] = temp;
                    temp = cub[s[j][1]];
                    cub[s[j][1]] = cub[s[j][3]];
                    cub[s[j][3]] = temp; break;
                case -1:
                    var temp = cub[s[j][0]];
                    cub[s[j][0]] = cub[s[j][3]];
                    cub[s[j][3]] = cub[s[j][2]];
                    cub[s[j][2]] = cub[s[j][1]];
                    cub[s[j][1]] = temp; break;
            }
        }
    }
}

function isCubSolved(cub) {
    return ((cub['UR'] == cub['U']) && (cub['RU'] == cub['R']) && (cub['UF'] == cub['U']) && (cub['FU'] == cub['F']) &&
    (cub['UL'] == cub['U']) && (cub['LU'] == cub['L']) && (cub['UB'] == cub['U']) && (cub['BU'] == cub['B']) &&
    (cub['DR'] == cub['D']) && (cub['RD'] == cub['R']) && (cub['DF'] == cub['D']) && (cub['FD'] == cub['F']) &&
    (cub['DL'] == cub['D']) && (cub['LD'] == cub['L']) && (cub['DB'] == cub['D']) && (cub['BD'] == cub['B']) &&
    (cub['FL'] == cub['F']) && (cub['LF'] == cub['L']) && (cub['FR'] == cub['F']) && (cub['RF'] == cub['R']) &&
    (cub['BL'] == cub['B']) && (cub['LB'] == cub['L']) && (cub['BR'] == cub['B']) && (cub['RB'] == cub['R']) &&
    (cub['URF'] == cub['U']) && (cub['RFU'] == cub['R']) && (cub['FUR'] == cub['F']) && (cub['UFL'] == cub['U']) &&
    (cub['FLU'] == cub['F']) && (cub['LUF'] == cub['L']) && (cub['ULB'] == cub['U']) && (cub['LBU'] == cub['L']) &&
    (cub['BUL'] == cub['B']) && (cub['UBR'] == cub['U']) && (cub['BRU'] == cub['B']) && (cub['RUB'] == cub['R']) &&
    (cub['DFR'] == cub['D']) && (cub['FRD'] == cub['F']) && (cub['RDF'] == cub['R']) && (cub['DLF'] == cub['D']) &&
    (cub['LFD'] == cub['L']) && (cub['FDL'] == cub['F']) && (cub['DBL'] == cub['D']) && (cub['BLD'] == cub['B']) &&
    (cub['LDB'] == cub['L']) && (cub['DRB'] == cub['D']) && (cub['RBD'] == cub['R']) && (cub['BDR'] == cub['B']));
}

function genScramble(length) {
    var prevMove = -1, secPrevMove = -1, scramble = "";
    for (i = 0; i < length; i++) {
        var move = Math.floor((Math.random() * 6)),
          dir = Math.floor((Math.random() * 3));
        if (((prevMove == 0) && (secPrevMove != 1)) || ((prevMove == 1) && (secPrevMove != 0)) || ((prevMove == 2) && (secPrevMove != 3)) ||
          ((prevMove == 3) && (secPrevMove != 2)) || ((prevMove == 4) && (secPrevMove != 5)) || ((prevMove == 5) && (secPrevMove != 4)))
            secPrevMove = -1;
        while ((move == prevMove) || (move == secPrevMove))
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
        secPrevMove = prevMove;
        prevMove = move;
        if (i < length - 1)
            scramble = scramble.concat(" ");
    }
    return scramble;
}
