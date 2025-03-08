"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var anon_1 = require("./anon");
var friend_1 = require("./friend");
var createUser_1 = require("./createUser");
var user = {
    name: "Taka",
    address: "Jl. Pasir Kaliki no 22",
    gender: "Laki-laki"
};
(0, anon_1.createAnon)(user); //hanya tampil gender dan address
(0, friend_1.createFriend)(user); //hanya tampil nama
(0, createUser_1.createUser)(user); //tampil semua index
