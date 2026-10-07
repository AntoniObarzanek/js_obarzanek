const seats=12;
const title="Kurs JavaScript"

let enrolled=1;
let slogan
let course

console.log(typeof seats);
console.log(typeof title);
console.log(typeof enrolled);
console.log(typeof slogan);
console.log(typeof course);

console.log(`${title}: wolne ${seats - enrolled} z ${seats}`);
console.log(title + ': wolne ' + (seats - enrolled) + ' z ' + seats);

if (enrolled > 10)
{
    console.log(`${enrolled} miejsc zajetych.`);
}
else if (enrolled < 4)
{
    console.log(`${enrolled} miejsc zajetych.`);
}
else {
    console.log(`Mozna siadac dowolnie`);
}

switch (enrolled) {
    case 0:
     console.log(`Nikogo w JSach`);
        break;

    case 1:
        console.log(`Pierwszy w JS`);
    default:
     console.log(`Kurs w przygotowaniu`);
}