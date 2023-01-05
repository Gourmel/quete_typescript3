interface User {
  name: string;
  age: number;
}

const prettyPrintWilder = (users: User[]): void => {
  users.map((User) => {
    console.log(`${User.name} is ${User.age} years old.`);
  });
};

const wilders: User[] = [];
const User1: User = { name: 'Pierre', age: 23 };
const User2: User = { name: 'Paul', age: 32 };
const User3: User = { name: 'Jacques', age: 25 };
wilders.push(User1);
wilders.push(User2);
wilders.push(User3);
prettyPrintWilder(wilders);