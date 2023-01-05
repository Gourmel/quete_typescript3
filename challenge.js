var prettyPrintWilder = function (users) {
    users.map(function (User) {
        console.log("".concat(User.name, " is ").concat(User.age, " years old."));
    });
};
var wilders = [];
var User1 = { name: 'Pierre', age: 23 };
var User2 = { name: 'Paul', age: 32 };
var User3 = { name: 'Jacques', age: 25 };
wilders.push(User1);
wilders.push(User2);
wilders.push(User3);
prettyPrintWilder(wilders);
