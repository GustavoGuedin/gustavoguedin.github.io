const breakInput = document.getElementById('breakInput');
const weightResult = document.getElementById('weightResult');
const metreageResult = document.getElementById('metreageResult');
const tileSize = document.getElementsByName('tile-size');
const recipent = document.getElementsByName('recipent');
let selectedTileSize = document.querySelector('input[name=tile-size]:checked');
let selectedRecipent = document.querySelector('input[name=recipent]:checked');

function updateSelectedTileSize() {
    selectedTileSize = document.querySelector('input[name=tile-size]:checked');
	mainCalculation();
}

tileSize.forEach(radio => {
    radio.addEventListener('change', updateSelectedTileSize);
})

function updateSelectedRecipent() {
    selectedRecipent = document.querySelector('input[name=recipent]:checked');
	mainCalculation();
}

recipent.forEach(radio => {
    radio.addEventListener('change', updateSelectedRecipent);
})

function mainCalculation() {
	const calculatedWeightResult = (parseFloat(breakInput.value) - parseFloat(selectedRecipent.value));
	const calculatedMetreageResult = ((parseFloat(breakInput.value) - parseFloat(selectedRecipent.value)) / parseFloat(selectedTileSize.value));

	if (breakInput.value == "") {
		weightResult.textContent = "0 kg";
		metreageResult.textContent = "0.00 m²";	
	} else {
		weightResult.textContent = (calculatedWeightResult).toFixed(0) + " kg";
		metreageResult.textContent = (calculatedMetreageResult).toFixed(2) + " m²";
	}
	
}

breakInput.addEventListener('input', mainCalculation);