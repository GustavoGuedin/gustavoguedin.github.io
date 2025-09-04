$("input").on('input change', () => {
	let calculatedWeightResult = (parseFloat($("#breakInput").val()) - parseFloat($("input[name=recipent]:checked").val()));
	let calculatedMetreageResult = calculatedWeightResult / parseFloat($("input[name=tile-size]:checked").val());

	if ($("#breakInput").val() == "") {
		$("#weightResult").text("0 kg");
		$("#metreageResult").text("0.00 m²");
	} else {
		$("#weightResult").text(calculatedWeightResult.toFixed(0) + " kg");
		$("#metreageResult").text((calculatedMetreageResult).toFixed(2) + " m²");
	}
})