const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



function useSuggestion(e) {
	suggestions.addEventListener('click',(e) => {
		if (e.target.tagName === 'LI'){
			const selectedFruit = e.target.innerText;
		// console.log(selectedFruit)
		input.value = selectedFruit;
		}
		suggestions.innerHTML = '';
	})
}

function clearSuggestions(){
	suggestions.innerHTML = '';
}

function showSuggestions(results) {
	const suggestionsUl = document.createElement('ul');
	results.forEach(function (fruitName){
		const suggestionLi = document.createElement('li');
		suggestionLi.textContent = fruitName;

		suggestionLi.addEventListener('mouseenter',() => {
			suggestionLi.classList.add('highlight');
			// console.log(Array.from(suggestionLi.classList));
		});
	
		suggestionLi.addEventListener('mouseleave',() => {
			suggestionLi.classList.remove('highlight');
			// console.log(Array.from(suggestionLi.classList));
		});

		suggestionsUl.append(suggestionLi)

		
	});
	suggestions.innerHTML = '';
	suggestions.append(suggestionsUl);

	useSuggestion();
}

function search(str) {
	// let results = [];
	const filteredFruit = fruit.filter(val => val.toLowerCase().includes(str));

	// results.push(filteredFruit);
	// console.log (filteredFruit);
	showSuggestions(filteredFruit);
	// return results;
}

const pressedKeys = [];

function searchHandler(e) {
	const searchBar = document.getElementById('fruit');
	let searchQuery = '';
	searchBar.addEventListener('input', function(e){
		searchQuery = e.target.value.toLowerCase();
		// console.log('Search Query:', searchQuery);
		if(searchQuery === ''){
			clearSuggestions();
		}else{
		search(searchQuery);
		}
	})
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);