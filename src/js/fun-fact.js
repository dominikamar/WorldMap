const funFact = document.querySelector(".hello-section__fun-fact-paragraph");

const facts = [
	"Uruguay: This country has the Guinness record of the biggest roast in the world: 1,252 roasters and 12,000 kilos of meat.",
	"Portugal: Here is the longest bridge in Europe: The Vasco da Gama. It is 12 km long and crosses the river Tagus in the northern part of Lisbon.",
	"Spain: Our country is the third most visited in the world, only surpassed by the United States and France.",
	"Denmark: According to Columbia University, this country is the happiest in the world. Several socio-economic factors were measured to determine this fact.",
	"France: In 2016 it became the first country where it was made illegal for supermarkets to throw away or destroy food that they did not sell, but that was in good condition. Now they donate them to food banks",
	"Argentina: The Rio de la Plata is the widest in the world with its maximum in 219 km. It is formed by the Panama and Uruguay rivers.",
	"Croatia: In La Ciudad Alta they keep 200 gas lamps from the 19th century, two people light them by hand every day.",
	"Brazil: It has the longest river in the world, the Amazon, it is the largest in terms of volume of water and the second largest in terms of extension. It also has the longest beach in the world with 7,500 km, Praia do Cassino.",
	"Belgium: In 2014 the French fries were named Intangible Heritage by the UNESCO and are one of the icons of the typical gastronomy of Belgium.",
	"England: has only won the World Cup once, in 1966. They played in England and defeated Germany 4-2.",
	"Colombia: It is the second country in biodiversity in general and the first in biodiversity per square meter. 3,500 species of butterflies, 1,870 of birds, 700 of amphibians and more than 50,000 species of plants.",
	"Switzerland: In the Canton of Valais you can find the longest suspension bridge in the world. With 494 meters long and 85 meters of maximum height, it connects Grächen and Zermatt.",
	"Mexico: Due to its great ethnic diversity and indigenous groups, it has more dialects than in all of Europe.",
	"Sweden: Almost 1.8% of the country is made up of lakes. It has the largest lake in Northern Europe, with an area of 5,648 square km.",
	"Japan: They have very strict recycling codes, organic is thrown away every day, but there is one day a week marked for all the others. If you skip it, your neighbors might scold you.",
];

const showRandom = () => {
	const number = Math.floor(Math.random() * facts.length);
	funFact.textContent = facts[number];
};
showRandom();
