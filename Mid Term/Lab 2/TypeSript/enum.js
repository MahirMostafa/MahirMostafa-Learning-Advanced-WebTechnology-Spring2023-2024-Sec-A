var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.red;
console.log(color);
