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

    $scope.cubSolved = isCubSolved($scope.cub);

    $scope.$watch(function(scope) {
        return scope.scramble;
    }, function() {
        $scope.performMoves(generate3x3Scramble(20));
        $scope.cubSolved = isCubSolved($scope.cub);
    });

    $scope.newScramble = function() {
        $scope.reset();
        $scope.performMoves(generate3x3Scramble(20));
    };

    $scope.keypress = function(event) {
        switch(event.keyCode) {
            case 69: $scope.performLPrime(); break; // E
            case 68: $scope.performL(); break; // D
            case 73: $scope.performR(); break; // I
            case 75: $scope.performRPrime(); break; // K
            case 70: $scope.performUPrime(); break; // F
            case 74: $scope.performU(); break; // J
            case 71: $scope.performFPrime(); break; // G
            case 72: $scope.performF(); break; // H
            case 83: $scope.performD(); break; // S
            case 76: $scope.performDPrime(); break; // L
            case 87: $scope.performB(); break; // W
            case 79: $scope.performBPrime(); break; // O
            case 89: $scope.performx(); break; // Y
            case 78: $scope.performxPrime(); break; // N
            case 65: $scope.performyPrime(); break; // A
            case 186: $scope.performy(); break; // ;
            case 80: $scope.performz(); break; // P
            case 81: $scope.performzPrime(); break; // Q
            case 37: $scope.performy(); break; // Left
            case 38: $scope.performx(); break; // Up
            case 39: $scope.performyPrime(); break; // Right
            case 40: $scope.performxPrime(); break; // Down
        }
        $scope.cubSolved = isCubSolved($scope.cub);
    };

    $scope.performMoves = function(moves) {
        var movesArray = moves.split(" ");
        for (var i = 0; i < movesArray.length; i++) {
            switch (movesArray[i]) {
                case 'U': $scope.performU(); break;
                case 'U\'': $scope.performUPrime(); break;
                case 'U2': $scope.performU2(); break;
                case 'D': $scope.performD(); break;
                case 'D\'': $scope.performDPrime(); break;
                case 'D2': $scope.performD2(); break;
                case 'L': $scope.performL(); break;
                case 'L\'': $scope.performLPrime(); break;
                case 'L2': $scope.performL2(); break;
                case 'R': $scope.performR(); break;
                case 'R\'': $scope.performRPrime(); break;
                case 'R2': $scope.performR2(); break;
                case 'F': $scope.performF(); break;
                case 'F\'': $scope.performFPrime(); break;
                case 'F2': $scope.performF2(); break;
                case 'B': $scope.performB(); break;
                case 'B\'': $scope.performBPrime(); break;
                case 'B2': $scope.performB2(); break;
                case 'M': $scope.performM(); break;
                case 'M\'': $scope.performMPrime(); break;
                case 'M2': $scope.performM2(); break;
                case 'S': $scope.performS(); break;
                case 'S\'': $scope.performSPrime(); break;
                case 'S2': $scope.performS2(); break;
                case 'S': $scope.performS(); break;
                case 'S\'': $scope.performSPrime(); break;
                case 'S2': $scope.performS2(); break;
                case 'x': $scope.performx(); break;
                case 'x\'': $scope.performxPrime(); break;
                case 'x2': $scope.performx2(); break;
                case 'y': $scope.performy(); break;
                case 'y\'': $scope.performyPrime(); break;
                case 'y2': $scope.performy2(); break;
                case 'z': $scope.performz(); break;
                case 'z\'': $scope.performzPrime(); break;
                case 'z2': $scope.performz2(); break;
            }
        }
        $scope.cubSolved = isCubSolved($scope.cub);
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

    $scope.performUPrime = function() {
        $scope.performU();
        $scope.performU();
        $scope.performU();
    };

    $scope.performU2 = function() {
        $scope.performU();
        $scope.performU();
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

    $scope.performD = function() {
        $scope.performDPrime();
        $scope.performDPrime();
        $scope.performDPrime();
    };

    $scope.performD2 = function() {
        $scope.performDPrime();
        $scope.performDPrime();
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

    $scope.performLPrime = function() {
        $scope.performL();
        $scope.performL();
        $scope.performL();
    };

    $scope.performL2 = function() {
        $scope.performL();
        $scope.performL();
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

    $scope.performR = function() {
        $scope.performRPrime();
        $scope.performRPrime();
        $scope.performRPrime();
    };

    $scope.performR2 = function() {
        $scope.performRPrime();
        $scope.performRPrime();
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

    $scope.performFPrime = function() {
        $scope.performF();
        $scope.performF();
        $scope.performF();
    };

    $scope.performF2 = function() {
        $scope.performF();
        $scope.performF();
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

    $scope.performB = function() {
        $scope.performBPrime();
        $scope.performBPrime();
        $scope.performBPrime();
    };

    $scope.performB2 = function() {
        $scope.performBPrime();
        $scope.performBPrime();
    };

    $scope.performM = function() {
        var temp = $scope.cub.U;
        $scope.cub.U = $scope.cub.B;
        $scope.cub.B = $scope.cub.D;
        $scope.cub.D = $scope.cub.F;
        $scope.cub.F = temp;
        temp = $scope.cub.UF;
        $scope.cub.UF = $scope.cub.BU;
        $scope.cub.BU = $scope.cub.DB;
        $scope.cub.DB = $scope.cub.FD;
        $scope.cub.FD = temp;
        temp = $scope.cub.FU;
        $scope.cub.FU = $scope.cub.UB;
        $scope.cub.UB = $scope.cub.BD;
        $scope.cub.BD = $scope.cub.DF;
        $scope.cub.DF = temp;
    };

    $scope.performMPrime = function() {
        $scope.performM();
        $scope.performM();
        $scope.performM();
    };

    $scope.performM2 = function() {
        $scope.performM();
        $scope.performM();
    };

    $scope.performS = function() {
        var temp = $scope.cub.U;
        $scope.cub.U = $scope.cub.L;
        $scope.cub.L = $scope.cub.D;
        $scope.cub.D = $scope.cub.R;
        $scope.cub.R = temp;
        temp = $scope.cub.UR;
        $scope.cub.UR = $scope.cub.LU;
        $scope.cub.LU = $scope.cub.DL;
        $scope.cub.DL = $scope.cub.RD;
        $scope.cub.RD = temp;
        temp = $scope.cub.RU;
        $scope.cub.RU = $scope.cub.UL;
        $scope.cub.UL = $scope.cub.LD;
        $scope.cub.LD = $scope.cub.DR;
        $scope.cub.DR = temp;
    };

    $scope.performSPrime = function() {
        $scope.performS();
        $scope.performS();
        $scope.performS();
    };

    $scope.performS2 = function() {
        $scope.performS();
        $scope.performS();
    };

    $scope.performE = function() {
        var temp = $scope.cub.F;
        $scope.cub.F = $scope.cub.L;
        $scope.cub.L = $scope.cub.B;
        $scope.cub.B = $scope.cub.R;
        $scope.cub.R = temp;
        temp = $scope.cub.FR;
        $scope.cub.FR = $scope.cub.LF;
        $scope.cub.LF = $scope.cub.BL;
        $scope.cub.BL = $scope.cub.RB;
        $scope.cub.RB = temp;
        temp = $scope.cub.RF;
        $scope.cub.RF = $scope.cub.FL;
        $scope.cub.FL = $scope.cub.LB;
        $scope.cub.LB = $scope.cub.BR;
        $scope.cub.BR = temp;
    };

    $scope.performEPrime = function() {
        $scope.performE();
        $scope.performE();
        $scope.performE();
    };

    $scope.performE2 = function() {
        $scope.performE();
        $scope.performE();
    };

    $scope.performx = function() {
        $scope.performLPrime();
        $scope.performMPrime();
        $scope.performR();
    };

    $scope.performxPrime = function() {
        $scope.performL();
        $scope.performM();
        $scope.performRPrime();
    };

    $scope.performx2 = function() {
        $scope.performLPrime();
        $scope.performLPrime();
        $scope.performMPrime();
        $scope.performMPrime();
        $scope.performR();
        $scope.performR();
    };

    $scope.performy = function() {
        $scope.performU();
        $scope.performEPrime();
        $scope.performDPrime();
    };

    $scope.performyPrime = function() {
        $scope.performUPrime();
        $scope.performE();
        $scope.performD();
    };

    $scope.performy2 = function() {
        $scope.performU();
        $scope.performU();
        $scope.performEPrime();
        $scope.performEPrime();
        $scope.performDPrime();
        $scope.performDPrime();
    };

    $scope.performz = function() {
        $scope.performF();
        $scope.performS();
        $scope.performBPrime();
    };

    $scope.performzPrime = function() {
        $scope.performFPrime();
        $scope.performSPrime();
        $scope.performB();
    };

    $scope.performz2 = function() {
        $scope.performF();
        $scope.performF();
        $scope.performS();
        $scope.performS();
        $scope.performBPrime();
        $scope.performBPrime();
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
    return ((cub.UR == cub.U) && (cub.RU == cub.R) && (cub.UF == cub.U) && (cub.FU == cub.F) && (cub.UL == cub.U) && (cub.LU == cub.L) && (cub.UB == cub.U) && (cub.BU == cub.B) && (cub.DR == cub.D) && (cub.RD == cub.R) && (cub.DF == cub.D) && (cub.FD == cub.F) && (cub.DL == cub.D) && (cub.LD == cub.L) && (cub.DB == cub.D) && (cub.BD == cub.B) && (cub.FL == cub.F) && (cub.LF == cub.L) && (cub.FR == cub.F) && (cub.RF == cub.R) && (cub.BL == cub.B) && (cub.LB == cub.L) && (cub.BR == cub.B) && (cub.RB == cub.R) && (cub.URF == cub.U) && (cub.RFU == cub.R) && (cub.FUR == cub.F) && (cub.UFL == cub.U) && (cub.FLU == cub.F) && (cub.LUF == cub.L) && (cub.ULB == cub.U) && (cub.LBU == cub.L) && (cub.BUL == cub.B) && (cub.UBR == cub.U) && (cub.BRU == cub.B) && (cub.RUB == cub.R) && (cub.DFR == cub.D) && (cub.FRD == cub.F) && (cub.RDF == cub.R) && (cub.DLF == cub.D) && (cub.LFD == cub.L) && (cub.FDL == cub.F) && (cub.DBL == cub.D) && (cub.BLD == cub.B) && (cub.LDB == cub.L) && (cub.DRB == cub.D) && (cub.RBD == cub.R) && (cub.BDR == cub.B));
}
