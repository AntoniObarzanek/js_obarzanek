const seats=12;
const title="Kurs JavaScript"

let enrolled=12;
let slogan
let course

console.log(typeof seats);
console.log(typeof title);
console.log(typeof enrolled);
console.log(typeof slogan);
console.log(typeof course);

console.log(`${title}: wolne ${seats - enrolled} z ${seats}`);
console.log(title + ': wolne ' + (seats - enrolled) + ' z ' + seats);