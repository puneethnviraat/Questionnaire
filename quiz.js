$(document).ready(function () {

	$('input.answer1').on('change', function () {
		$('input.answer1').not(this).prop('checked', false);
	});

	$('input.answer1a').on('change', function () {
		$('input.answer1a').not(this).prop('checked', false);
	});
	$('input.answer11').on('change', function () {
		$('input.answer11').not(this).prop('checked', false);
	});
	$('input.answer2').on('change', function () {
		$('input.answer2').not(this).prop('checked', false);
	});
	$('input.answer2a').on('change', function () {
		$('input.answer2a').not(this).prop('checked', false);
	});
	$('input#answer2aa').on('change', function () {
		$('input#answer2aa').not(this).prop('checked', false);
	});

	$('input#answer2ab').on('change', function () {
		$('input#answer2ab').not(this).prop('checked', false);
	});
	$('input#answer4n').on('change', function () {
		$('input#answer4').not(this).prop('checked', false);
	});
	$('input#answer4').on('change', function () {
		$('input#answer4n').not(this).prop('checked', false);
	});

	$('input#answer4an').on('change', function () {
		$('input#answer4a').not(this).prop('checked', false);
	});
	$('input#answer4a').on('change', function () {
		$('input#answer4an').not(this).prop('checked', false);
	});

	$('input#answer4bn').on('change', function () {
		$('input#answer4b').not(this).prop('checked', false);
	});
	$('input#answer4b').on('change', function () {
		$('input#answer4bn').not(this).prop('checked', false);
	});

	$('input#answer4cn').on('change', function () {
		$('input#answer4c').not(this).prop('checked', false);
	});
	$('input#answer4c').on('change', function () {
		$('input#answer4cn').not(this).prop('checked', false);
	});

	$('input.4en').on('change', function () {
		$('input.4e').not(this).prop('checked', false);
	});
	$('input.4e').on('change', function () {
		$('input.4en').not(this).prop('checked', false);
	});


	$('input#answer5n').on('change', function () {
		$('input#answer5').not(this).prop('checked', false);
	});
	$('input#answer5').on('change', function () {
		$('input#answer5n').not(this).prop('checked', false);
	});


	$(function () {
		$('.close_options').on('click', function () {
			document.getElementById('options').style.display = 'none';
			$('.answer2a, .answer2b').each(function () {
				this.checked = false;
			});
		});
	});
	$(function () {
		$('.open_options').on('click', function () {
			document.getElementById('options').style.display = 'block';
		});
	});
});

function show1() {
	document.getElementById('div1').style.display = 'none';
	$('input[name="question1"]').each(function () {
		this.checked = false;
	});
}

function show2() {
	document.getElementById('div1').style.display = 'block';
}

function show5() {
	document.getElementById('div2').style.display = 'none';
	$('#answer2aa,#answer2ab').each(function () {
		this.checked = false;
	});

}

function show6() {
	document.getElementById('div2').style.display = 'block';
}

function show3() {
	document.getElementById('div3').style.display = 'none';
	$('.question3').each(function () {
		this.checked = false;
	});
}

function show4() {
	document.getElementById('div3').style.display = 'block';
}

function show7() {
	document.getElementById('sides').style.display = 'none';
	$('.answer1a').each(function () {
		this.checked = false;
	});
}

function show8() {
	document.getElementById('sides').style.display = 'block';
}

function validate(form) {
	var total1 = 0;
	for (var i = 0; i < document.form1.question1.length; i++) {

		if (document.form1.question1[i].checked)

			total1 += parseInt(document.form1.question1[i].value);

	}
	total1 += parseInt(+(document.form1.Yn.value));

	total1 += parseInt(+(document.form1.qu1.value));

	// logic for second answer
	var total2 = 0;
	for (var i = 0; i < document.form1.question2.length; i++) {

		if (document.form1.question2[i].checked)

			total2 += parseInt(document.form1.question2[i].value);
	}
	var total3 = 0;

	for (var i = 0; i < document.form1.question3.length; i++) {

		if (document.form1.question3[i].checked)

			total3 += parseInt(document.form1.question3[i].value);

	}
	total3 += parseInt(+(document.form1.YorN3a.value));

	total3 += parseInt(+(document.form1.YorN3b.value));
	var total4 = 0;
	for (var i = 0; i < document.form1.question4.length; i++) {

		if (document.form1.question4[i].checked)

			total4 += parseInt(document.form1.question4[i].value);

	}
	total4 += parseInt(+(document.form1.Yn4d.value));

	total4 += parseInt(+(document.form1.Yn4e.value));
	var total5 = 0;

	for (var i = 0; i < document.form1.question5.length; i++) {

		if (document.form1.question5[i].checked)

			total5 += parseInt(document.form1.question5[i].value);

	}
	total5 += parseInt(+(document.form1.YorN6a.value));
	total5 += parseInt(+(document.form1.YorN6b.value));
	console.log(total1)
	console.log(total2)
	console.log(total3)
	console.log(total4)
	console.log(total5)


	if (total1 == "") {
		alert("select Answers to question 1")
	} else if (total2 == "") {
		alert("select Answers of question 2")
	} else if (total4 == "") {
		alert("select Answers of quesions number 4")
	} else if (total5 == "") {
		alert("select answers of question 5")
	} else if (total2 > 5 || total1 >= 6 || total3 >= 5 || total4 >= 7 || total5 >= 6) {
		$.alert({
			title: '',
			content: 'You require consultation with a rheumatologist.',
			type: 'red',
			typeAnimated: true,
			useBootstrap: false,
		});
	} else if (total2 == 3 || total2 == 4 || total1 >= 4 || total1 == 4 || total3 >= 3 || total4 >= 5 || total5 >= 3) {
		$.alert({
				title: 'You may require consultation with a rheumatologist or assessment.',
			content: 'You may probably have a rheumatologic disease to be confirmed with rheumatologist',
			type: 'blue',
			typeAnimated: true,
			useBootstrap: false,
		});
	} else
		$.alert({
			title: 'Consult your family physician for further assessment',
			content: 'You may not have rheumatologic disease kindly contact your physician for further assistance.',
			type: 'green',
			typeAnimated: true,
			useBootstrap: false,
		});

	return false;
}
