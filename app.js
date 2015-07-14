var app = angular.module('cubApp', []);

app.controller('cubController', function($scope) {

    $scope.moves = ['U', 'D', 'L', 'R', 'F', 'B'];

    // cube graphics

    $scope.color = {};

    $scope.color.white = '#ffffff';
    $scope.color.yellow = '#ffff00';
    $scope.color.orange = '#ff8000';
    $scope.color.red = '#ff0000';
    $scope.color.green = '#00ff00';
    $scope.color.blue = '#0000ff';

    $scope.cub = {};

    $scope.cub.U = $scope.color.white;
    $scope.cub.D = $scope.color.yellow;
    $scope.cub.L = $scope.color.orange;
    $scope.cub.R = $scope.color.red;
    $scope.cub.F = $scope.color.green;
    $scope.cub.B = $scope.color.blue;

    $scope.cub.UR = $scope.color.white;
    $scope.cub.RU = $scope.color.red;
    $scope.cub.UF = $scope.color.white;
    $scope.cub.FU = $scope.color.green;
    $scope.cub.UL = $scope.color.white;
    $scope.cub.LU = $scope.color.orange;
    $scope.cub.UB = $scope.color.white;
    $scope.cub.BU = $scope.color.blue;
    $scope.cub.DR = $scope.color.yellow;
    $scope.cub.RD = $scope.color.red;
    $scope.cub.DF = $scope.color.yellow;
    $scope.cub.FD = $scope.color.green;
    $scope.cub.DL = $scope.color.yellow;
    $scope.cub.LD = $scope.color.orange;
    $scope.cub.DB = $scope.color.yellow;
    $scope.cub.BD = $scope.color.blue;
    $scope.cub.FL = $scope.color.green;
    $scope.cub.LF = $scope.color.orange;
    $scope.cub.FR = $scope.color.green;
    $scope.cub.RF = $scope.color.red;
    $scope.cub.BL = $scope.color.blue;
    $scope.cub.LB = $scope.color.orange;
    $scope.cub.BR = $scope.color.blue;
    $scope.cub.RB = $scope.color.red;

    $scope.cub.URF = $scope.color.white;
    $scope.cub.RFU = $scope.color.red;
    $scope.cub.FUR = $scope.color.green;
    $scope.cub.UFL = $scope.color.white;
    $scope.cub.FLU = $scope.color.green;
    $scope.cub.LUF = $scope.color.orange;
    $scope.cub.ULB = $scope.color.white;
    $scope.cub.LBU = $scope.color.orange;
    $scope.cub.BUL = $scope.color.blue;
    $scope.cub.UBR = $scope.color.white;
    $scope.cub.BRU = $scope.color.blue;
    $scope.cub.RUB = $scope.color.red;
    $scope.cub.DFR = $scope.color.yellow;
    $scope.cub.FRD = $scope.color.green;
    $scope.cub.RDF = $scope.color.red;
    $scope.cub.DLF = $scope.color.yellow;
    $scope.cub.LFD = $scope.color.orange;
    $scope.cub.FDL = $scope.color.green;
    $scope.cub.DBL = $scope.color.yellow;
    $scope.cub.BLD = $scope.color.blue;
    $scope.cub.LDB = $scope.color.orange;
    $scope.cub.DRB = $scope.color.yellow;
    $scope.cub.RBD = $scope.color.red;
    $scope.cub.BDR = $scope.color.blue;

    $scope.performMoves = function(moves) {
        var movesArray = moves.split(" ");
        for (i = 0; i < movesArray.length; i++) {
            switch (movesArray[i]) {
                case 'U':
                    $scope.performU();
                    break;
                case 'U\'':
                    $scope.performU();
                    $scope.performU();
                    $scope.performU();
                    break;
                case 'U2':
                    $scope.performU();
                    $scope.performU();
                    break;
                case 'D':
                    $scope.performDPrime();
                    $scope.performDPrime();
                    $scope.performDPrime();
                    break;
                case 'D\'':
                    $scope.performDPrime();
                    break;
                case 'D2':
                    $scope.performDPrime();
                    $scope.performDPrime();
                    break;
                case 'L':
                    $scope.performL();
                    break;
                case 'L\'':
                    $scope.performL();
                    $scope.performL();
                    $scope.performL();
                    break;
                case 'L2':
                    $scope.performL();
                    $scope.performL();
                    break;
                case 'R':
                    $scope.performRPrime();
                    $scope.performRPrime();
                    $scope.performRPrime();
                    break;
                case 'R\'':
                    $scope.performRPrime();
                    break;
                case 'R2':
                    $scope.performRPrime();
                    $scope.performRPrime();
                    break;
                case 'F':
                    $scope.performF();
                    break;
                case 'F\'':
                    $scope.performF();
                    $scope.performF();
                    $scope.performF();
                    break;
                case 'F2':
                    $scope.performF();
                    $scope.performF();
                    break;
                case 'B':
                    $scope.performBPrime();
                    $scope.performBPrime();
                    $scope.performBPrime();
                    break;
                case 'B\'':
                    $scope.performBPrime();
                    break;
                case 'B2':
                    $scope.performBPrime();
                    $scope.performBPrime();
                    break;
            }
        }
        console.log(isCubSolved($scope.cub));
    };

    $scope.performU = function() {
        var temp = $scope.cub.UR;
        $scope.cub.UR = $scope.cub.UB;
        $scope.cub.UB = $scope.cub.UL;
        $scope.cub.UL = $scope.cub.UF;
        $scope.cub.UF = temp;
        temp = $scope.cub.RU;
        $scope.cub.RU = $scope.cub.BU;
        $scope.cub.BU = $scope.cub.LU;
        $scope.cub.LU = $scope.cub.FU;
        $scope.cub.FU = temp;
        temp = $scope.cub.URF;
        $scope.cub.URF = $scope.cub.UBR;
        $scope.cub.UBR = $scope.cub.ULB;
        $scope.cub.ULB = $scope.cub.UFL;
        $scope.cub.UFL = temp;
        temp = $scope.cub.RFU;
        $scope.cub.RFU = $scope.cub.BRU;
        $scope.cub.BRU = $scope.cub.LBU;
        $scope.cub.LBU = $scope.cub.FLU;
        $scope.cub.FLU = temp;
        temp = $scope.cub.FUR;
        $scope.cub.FUR = $scope.cub.RUB;
        $scope.cub.RUB = $scope.cub.BUL;
        $scope.cub.BUL = $scope.cub.LUF;
        $scope.cub.LUF = temp;
    };

    $scope.performDPrime = function() {
        var temp = $scope.cub.DR;
        $scope.cub.DR = $scope.cub.DB;
        $scope.cub.DB = $scope.cub.DL;
        $scope.cub.DL = $scope.cub.DF;
        $scope.cub.DF = temp;
        temp = $scope.cub.RD;
        $scope.cub.RD = $scope.cub.BD;
        $scope.cub.BD = $scope.cub.LD;
        $scope.cub.LD = $scope.cub.FD;
        $scope.cub.FD = temp;
        temp = $scope.cub.DFR;
        $scope.cub.DFR = $scope.cub.DRB;
        $scope.cub.DRB = $scope.cub.DBL;
        $scope.cub.DBL = $scope.cub.DLF;
        $scope.cub.DLF = temp;
        temp = $scope.cub.RDF;
        $scope.cub.RDF = $scope.cub.BDR;
        $scope.cub.BDR = $scope.cub.LDB;
        $scope.cub.LDB = $scope.cub.FDL;
        $scope.cub.FDL = temp;
        temp = $scope.cub.FRD;
        $scope.cub.FRD = $scope.cub.RBD;
        $scope.cub.RBD = $scope.cub.BLD;
        $scope.cub.BLD = $scope.cub.LFD;
        $scope.cub.LFD = temp;
    };

    $scope.performL = function() {
        var temp = $scope.cub.LU;
        $scope.cub.LU = $scope.cub.LB;
        $scope.cub.LB = $scope.cub.LD;
        $scope.cub.LD = $scope.cub.LF;
        $scope.cub.LF = temp;
        temp = $scope.cub.UL;
        $scope.cub.UL = $scope.cub.BL;
        $scope.cub.BL = $scope.cub.DL;
        $scope.cub.DL = $scope.cub.FL;
        $scope.cub.FL = temp;
        temp = $scope.cub.LUF;
        $scope.cub.LUF = $scope.cub.LBU;
        $scope.cub.LBU = $scope.cub.LDB;
        $scope.cub.LDB = $scope.cub.LFD;
        $scope.cub.LFD = temp;
        temp = $scope.cub.UFL;
        $scope.cub.UFL = $scope.cub.BUL;
        $scope.cub.BUL = $scope.cub.DBL;
        $scope.cub.DBL = $scope.cub.FDL;
        $scope.cub.FDL = temp;
        temp = $scope.cub.FLU;
        $scope.cub.FLU = $scope.cub.ULB;
        $scope.cub.ULB = $scope.cub.BLD;
        $scope.cub.BLD = $scope.cub.DLF;
        $scope.cub.DLF = temp;
    };

    $scope.performRPrime = function() {
        var temp = $scope.cub.RU;
        $scope.cub.RU = $scope.cub.RB;
        $scope.cub.RB = $scope.cub.RD;
        $scope.cub.RD = $scope.cub.RF;
        $scope.cub.RF = temp;
        temp = $scope.cub.UR;
        $scope.cub.UR = $scope.cub.BR;
        $scope.cub.BR = $scope.cub.DR;
        $scope.cub.DR = $scope.cub.FR;
        $scope.cub.FR = temp;
        temp = $scope.cub.RFU;
        $scope.cub.RFU = $scope.cub.RUB;
        $scope.cub.RUB = $scope.cub.RBD;
        $scope.cub.RBD = $scope.cub.RDF;
        $scope.cub.RDF = temp;
        temp = $scope.cub.URF;
        $scope.cub.URF = $scope.cub.BRU;
        $scope.cub.BRU = $scope.cub.DRB;
        $scope.cub.DRB = $scope.cub.FRD;
        $scope.cub.FRD = temp;
        temp = $scope.cub.FUR;
        $scope.cub.FUR = $scope.cub.UBR;
        $scope.cub.UBR = $scope.cub.BDR;
        $scope.cub.BDR = $scope.cub.DFR;
        $scope.cub.DFR = temp;
    };

    $scope.performF = function() {
        var temp = $scope.cub.FU;
        $scope.cub.FU = $scope.cub.FL;
        $scope.cub.FL = $scope.cub.FD;
        $scope.cub.FD = $scope.cub.FR;
        $scope.cub.FR = temp;
        temp = $scope.cub.UF;
        $scope.cub.UF = $scope.cub.LF;
        $scope.cub.LF = $scope.cub.DF;
        $scope.cub.DF = $scope.cub.RF;
        $scope.cub.RF = temp;
        temp = $scope.cub.FUR;
        $scope.cub.FUR = $scope.cub.FLU;
        $scope.cub.FLU = $scope.cub.FDL;
        $scope.cub.FDL = $scope.cub.FRD;
        $scope.cub.FRD = temp;
        temp = $scope.cub.URF;
        $scope.cub.URF = $scope.cub.LUF;
        $scope.cub.LUF = $scope.cub.DLF;
        $scope.cub.DLF = $scope.cub.RDF;
        $scope.cub.RDF = temp;
        temp = $scope.cub.RFU;
        $scope.cub.RFU = $scope.cub.UFL;
        $scope.cub.UFL = $scope.cub.LFD;
        $scope.cub.LFD = $scope.cub.DFR;
        $scope.cub.DFR = temp;
    };

    $scope.performBPrime = function() {
        var temp = $scope.cub.BU;
        $scope.cub.BU = $scope.cub.BL;
        $scope.cub.BL = $scope.cub.BD;
        $scope.cub.BD = $scope.cub.BR;
        $scope.cub.BR = temp;
        temp = $scope.cub.UB;
        $scope.cub.UB = $scope.cub.LB;
        $scope.cub.LB = $scope.cub.DB;
        $scope.cub.DB = $scope.cub.RB;
        $scope.cub.RB = temp;
        temp = $scope.cub.BRU;
        $scope.cub.BRU = $scope.cub.BUL;
        $scope.cub.BUL = $scope.cub.BLD;
        $scope.cub.BLD = $scope.cub.BDR;
        $scope.cub.BDR = temp;
        temp = $scope.cub.UBR;
        $scope.cub.UBR = $scope.cub.LBU;
        $scope.cub.LBU = $scope.cub.DBL;
        $scope.cub.DBL = $scope.cub.RBD;
        $scope.cub.RBD = temp;
        temp = $scope.cub.RUB;
        $scope.cub.RUB = $scope.cub.ULB;
        $scope.cub.ULB = $scope.cub.LDB;
        $scope.cub.LDB = $scope.cub.DRB;
        $scope.cub.DRB = temp;
    };

    $scope.reset = function() {

        $scope.cub.U = $scope.color.white;
        $scope.cub.D = $scope.color.yellow;
        $scope.cub.L = $scope.color.orange;
        $scope.cub.R = $scope.color.red;
        $scope.cub.F = $scope.color.green;
        $scope.cub.B = $scope.color.blue;

        $scope.cub.UR = $scope.color.white;
        $scope.cub.RU = $scope.color.red;
        $scope.cub.UF = $scope.color.white;
        $scope.cub.FU = $scope.color.green;
        $scope.cub.UL = $scope.color.white;
        $scope.cub.LU = $scope.color.orange;
        $scope.cub.UB = $scope.color.white;
        $scope.cub.BU = $scope.color.blue;
        $scope.cub.DR = $scope.color.yellow;
        $scope.cub.RD = $scope.color.red;
        $scope.cub.DF = $scope.color.yellow;
        $scope.cub.FD = $scope.color.green;
        $scope.cub.DL = $scope.color.yellow;
        $scope.cub.LD = $scope.color.orange;
        $scope.cub.DB = $scope.color.yellow;
        $scope.cub.BD = $scope.color.blue;
        $scope.cub.FL = $scope.color.green;
        $scope.cub.LF = $scope.color.orange;
        $scope.cub.FR = $scope.color.green;
        $scope.cub.RF = $scope.color.red;
        $scope.cub.BL = $scope.color.blue;
        $scope.cub.LB = $scope.color.orange;
        $scope.cub.BR = $scope.color.blue;
        $scope.cub.RB = $scope.color.red;

        $scope.cub.URF = $scope.color.white;
        $scope.cub.RFU = $scope.color.red;
        $scope.cub.FUR = $scope.color.green;
        $scope.cub.UFL = $scope.color.white;
        $scope.cub.FLU = $scope.color.green;
        $scope.cub.LUF = $scope.color.orange;
        $scope.cub.ULB = $scope.color.white;
        $scope.cub.LBU = $scope.color.orange;
        $scope.cub.BUL = $scope.color.blue;
        $scope.cub.UBR = $scope.color.white;
        $scope.cub.BRU = $scope.color.blue;
        $scope.cub.RUB = $scope.color.red;
        $scope.cub.DFR = $scope.color.yellow;
        $scope.cub.FRD = $scope.color.green;
        $scope.cub.RDF = $scope.color.red;
        $scope.cub.DLF = $scope.color.yellow;
        $scope.cub.LFD = $scope.color.orange;
        $scope.cub.FDL = $scope.color.green;
        $scope.cub.DBL = $scope.color.yellow;
        $scope.cub.BLD = $scope.color.blue;
        $scope.cub.LDB = $scope.color.orange;
        $scope.cub.DRB = $scope.color.yellow;
        $scope.cub.RBD = $scope.color.red;
        $scope.cub.BDR = $scope.color.blue;
    };

});

function generate3x3Scramble(length) {
    var previousMove = -1,
        secondPreviousMove = -1,
        scramble = "";
    for (i = 0; i < length; i++) {
        var move = Math.floor((Math.random() * 6)),
            direction = Math.floor((Math.random() * 3));
        if (((previousMove == 0) && (secondPreviousMove != 1)) || ((previousMove == 1) && (secondPreviousMove != 0)) || ((previousMove == 2) && (secondPreviousMove != 3)) || ((previousMove == 3) && (secondPreviousMove != 2)) || ((previousMove == 4) && (secondPreviousMove != 5)) || ((previousMove == 5) && (secondPreviousMove != 4)))
            secondPreviousMove = -1;
        while ((move == previousMove) || (move == secondPreviousMove))
            move = Math.floor((Math.random() * 6));
        switch (move) {
            case 0:
                scramble = scramble.concat("U");
                break;
            case 1:
                scramble = scramble.concat("D");
                break;
            case 2:
                scramble = scramble.concat("L");
                break;
            case 3:
                scramble = scramble.concat("R");
                break;
            case 4:
                scramble = scramble.concat("F");
                break;
            case 5:
                scramble = scramble.concat("B");
                break;
        }
        switch (direction) {
            case 1:
                scramble = scramble.concat("'");
                break;
            case 2:
                scramble = scramble.concat("2");
                break;
        }
        secondPreviousMove = previousMove;
        previousMove = move;
        if (i < length - 1)
            scramble = scramble.concat(" ");
    }
    return scramble;
}

function isCubSolved(cub) {

    var color = {};
    color.white = '#ffffff';
    color.yellow = '#ffff00';
    color.orange = '#ff8000';
    color.red = '#ff0000';
    color.green = '#00ff00';
    color.blue = '#0000ff';

    if (cub.U != color.white) return false;
    if (cub.D != color.yellow) return false;
    if (cub.L != color.orange) return false;
    if (cub.R != color.red) return false;
    if (cub.F != color.green) return false;
    if (cub.B != color.blue) return false;

    if (cub.UR != color.white) return false;
    if (cub.RU != color.red) return false;
    if (cub.UF != color.white) return false;
    if (cub.FU != color.green) return false;
    if (cub.UL != color.white) return false;
    if (cub.LU != color.orange) return false;
    if (cub.UB != color.white) return false;
    if (cub.BU != color.blue) return false;
    if (cub.DR != color.yellow) return false;
    if (cub.RD != color.red) return false;
    if (cub.DF != color.yellow) return false;
    if (cub.FD != color.green) return false;
    if (cub.DL != color.yellow) return false;
    if (cub.LD != color.orange) return false;
    if (cub.DB != color.yellow) return false;
    if (cub.BD != color.blue) return false;
    if (cub.FL != color.green) return false;
    if (cub.LF != color.orange) return false;
    if (cub.FR != color.green) return false;
    if (cub.RF != color.red) return false;
    if (cub.BL != color.blue) return false;
    if (cub.LB != color.orange) return false;
    if (cub.BR != color.blue) return false;
    if (cub.RB != color.red) return false;

    if (cub.URF != color.white) return false;
    if (cub.RFU != color.red) return false;
    if (cub.FUR != color.green) return false;
    if (cub.UFL != color.white) return false;
    if (cub.FLU != color.green) return false;
    if (cub.LUF != color.orange) return false;
    if (cub.ULB != color.white) return false;
    if (cub.LBU != color.orange) return false;
    if (cub.BUL != color.blue) return false;
    if (cub.UBR != color.white) return false;
    if (cub.BRU != color.blue) return false;
    if (cub.RUB != color.red) return false;
    if (cub.DFR != color.yellow) return false;
    if (cub.FRD != color.green) return false;
    if (cub.RDF != color.red) return false;
    if (cub.DLF != color.yellow) return false;
    if (cub.LFD != color.orange) return false;
    if (cub.FDL != color.green) return false;
    if (cub.DBL != color.yellow) return false;
    if (cub.BLD != color.blue) return false;
    if (cub.LDB != color.orange) return false;
    if (cub.DRB != color.yellow) return false;
    if (cub.RBD != color.red) return false;
    if (cub.BDR != color.blue) return false;

    return true;
}
