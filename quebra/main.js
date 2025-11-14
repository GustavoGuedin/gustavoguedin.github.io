const breakInput = document.getElementById('breakInput');
const weightResult = document.getElementById('weightResult');
const metreageResult = document.getElementById('metreageResult');
const tileSize = document.getElementsByName('tile-size');
const recipent = document.getElementsByName('recipent');

if (!localStorage.getItem("selectedTileSize")) {
	inicialSetup();
} else {
	loadValues();
}

function loadValues() {
	const tileSizeStoredValue = localStorage.getItem("selectedTileSize");
	const recipentStoredValue = localStorage.getItem("selectedRecipent");
	
	const tileSizeRadio = document.querySelector(`input[name="tile-size"][value="${tileSizeStoredValue}"]`);
	const recipentRadio =  document.querySelector(`input[name="recipent"][value="${recipentStoredValue}"]`);
	
	try {
		tileSizeRadio.checked = true;
		recipentRadio.checked = true;
	} catch (error) {
		localStorage.clear;
		inicialSetup();
	}
}

function inicialSetup() {
	localStorage.setItem("selectedTileSize", "22.38");
	localStorage.setItem("selectedRecipent", "66");
	
	loadValues();
}

let selectedTileSize = document.querySelector('input[name=tile-size]:checked');
let selectedRecipent = document.querySelector('input[name=recipent]:checked');

function updateSelectedTileSize() {
    selectedTileSize = document.querySelector('input[name=tile-size]:checked');
	localStorage.setItem("selectedTileSize", selectedTileSize.value);
	mainCalculation();
}

tileSize.forEach(radio => {
    radio.addEventListener('change', updateSelectedTileSize);
})

function updateSelectedRecipent() {
    selectedRecipent = document.querySelector('input[name=recipent]:checked');
	localStorage.setItem("selectedRecipent", selectedRecipent.value);
	mainCalculation();
}

recipent.forEach(radio => {
    radio.addEventListener('change', updateSelectedRecipent);
})

function mainCalculation() {
	const calculatedWeightResult
		= (parseFloat(breakInput.value)
		- parseFloat(selectedRecipent.value));
	
	const calculatedMetreageResult
		= ((parseFloat(breakInput.value)
		- parseFloat(selectedRecipent.value))
		/ parseFloat(selectedTileSize.value));

	if (breakInput.value == "") {
		weightResult.textContent = "0 kg";
		metreageResult.textContent = "0.00 m²";	
	} else {
		weightResult.textContent = (calculatedWeightResult).toFixed(0) + " kg";
		metreageResult.textContent = (calculatedMetreageResult).toFixed(2) + " m²";
	}
	
}


breakInput.addEventListener('input', mainCalculation);
