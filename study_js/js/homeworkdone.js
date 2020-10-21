let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

employers = employers.filter(it => it.length > 0 && it != "").map(it => it.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
}

function calcCash({cash}) {
    return cash.reduce((prev, current) => prev + current);
}

const money = calcCash(sponsors);

const {cash, eu, rus} = sponsors;

function makeBusiness(owner, director = "Victor", emp, cash, eu, rus) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers:
    ${emp}`);
    console.log(`And we have a sponsors: ${eu} ${rus} unexpected sponsor`);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness("Sam", "Viktor", employers, money, eu, rus);
