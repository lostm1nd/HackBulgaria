$(document).ready(function() {
	// $minFirstDigitSpan - minutes first digit holder
	// $minSecondDigitSpan - minutes second digit holder
	// $secFirstDigitSpan - seconds first digit holder
	// $secSecondDigitSpan - seconds second digit holder
	var $countUpBtn = $('#count-up'),
		$countDownBtn = $('#count-down'),
		$resetBtn = $('#reset'),
		$minFirstDigitSpan = $('#minute-first-digit'),
		$minSecondDigitSpan = $('#minute-second-digit'),
		$secFirstDigitSpan = $('#second-first-digit'),
		$secSecondDigitSpan = $('#second-second-digit'),
		timerInterval;

	$($countUpBtn).on('click', function() {
		var time = getInput();
		stopAndResetTimer();
		startCountingUp(time);
	});

	$($countDownBtn).on('click', function() {
		var time = getInput();
		stopAndResetTimer();
		setTimerTo(time);
		startCountingDown(time);
	});

	$($resetBtn).on('click', stopAndResetTimer);

	function getInput() {
		var minutes = $('#minutes').val() | 0,
			seconds = $('#seconds').val() | 0;

		while (seconds > 59) {
		seconds -= 60;
		minutes += 1;
		}

		if (minutes >= 100) {
			minutes = 99;
			seconds = 59;
		}

		return {
			minutes: minutes,
			seconds: seconds
		};
	}

	function startCountingUp(endTime) {
		timerInterval = setInterval(function() {
			var time = getCurrentTime();

			time.seconds += 1;

			if (time.seconds > 59) {
				time.seconds = 0;
				time.minutes += 1;
			}

			stopIntervalIfGivenTimeIsReached({
				minutes: time.minutes,
				seconds: time.seconds
			}, {
				endMinutes: endTime.minutes,
				endSeconds: endTime.seconds
			});

			setTimerTo(time);
		}, 1000);
	}

	function startCountingDown(fromTime) {
		timerInterval = setInterval(function() {
			var time = getCurrentTime();

			time.seconds -= 1;

			if (time.seconds < 0) {
				time.seconds = 59;
				time.minutes -= 1;
			}

			stopIntervalIfGivenTimeIsReached({
				minutes: time.minutes,
				seconds: time.seconds
			}, {
				endMinutes: 0,
				endSeconds: 0
			});

			setTimerTo(time);
		}, 1000);
	}

	function getCurrentTime() {
		var minutesFirstDigit = $minFirstDigitSpan.text(),
			minutesSecondDigit = $minSecondDigitSpan.text(),
			secondsFirstDigit = $secFirstDigitSpan.text(),
			secondsSecondDigit = $secSecondDigitSpan.text();

		return {
			minutes: (minutesFirstDigit + '' + minutesSecondDigit) | 0,
			seconds: (secondsFirstDigit + '' + secondsSecondDigit) | 0
		};
	}

	function stopIntervalIfGivenTimeIsReached(time, endTime) {
		if (time.minutes === endTime.endMinutes &&
			time.seconds === endTime.endSeconds) {

			clearInterval(timerInterval);
		}
	}

	function stopAndResetTimer() {
		$minFirstDigitSpan.text(0);
		$minSecondDigitSpan.text(0);
		$secFirstDigitSpan.text(0);
		$secSecondDigitSpan.text(0);
		clearInterval(timerInterval);
	}

	function setTimerTo(time) {
		$minFirstDigitSpan.text((time.minutes / 10) | 0);
		$minSecondDigitSpan.text(time.minutes % 10);
		$secFirstDigitSpan.text((time.seconds / 10) | 0);
		$secSecondDigitSpan.text(time.seconds % 10);
	}

});