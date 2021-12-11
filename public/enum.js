"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["top"] = 0] = "top";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["bottom"] = 2] = "bottom";
    Direction[Direction["left"] = 3] = "left";
})(Direction || (Direction = {}));
console.log(Direction.left); // 3
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["blue"] = "blue";
    Color["yellow"] = "yellow";
})(Color || (Color = {}));
console.log(Color.red); // red
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
    Days[Days["sunday"] = 7] = "sunday";
})(Days || (Days = {}));
console.log(Days.friday); // 5
