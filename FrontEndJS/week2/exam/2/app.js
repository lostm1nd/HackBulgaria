$(document).ready(function() {
	// buttons[0] - count up
	// buttons[1] - count down
	// buttons[2] - stop & reset
	// timer[0] - minutes first digit holder
	// timer[1] - minutes second digit holder
	// timer[2] - seconds first digit holder
	// timer[3] - seconds second digit holder
	var buttons = $('button'),
		timer = $('#timer span'),
		timerInterval;

	$(buttons[0]).on('click', function() {
		var time = getInput();
		stopAndResetTimer();
		startCountingUp(time);
	});

	$(buttons[1]).on('click', function() {
		var time = getInput();
		setTimerTo(time);
		startCountingDown(time);
	});

	$(buttons[2]).on('click', stopAndResetTimer);

	function getInput() {
		var minutes = $('#minutes').val() | 0,
			seconds = $('#seconds').val() | 0;

		while (seconds > 59) {
		seconds -= 60;
		minutes += 1;
		}

		return {
			minutes: minutes,
			seconds: seconds
		};
	}

	function startCountingUp(toTime) {
		timerInterval = setInterval(function() {
			var minutesFirstDigit = $(timer[0]).text() | 0,
				minutesSecondDigit = $(timer[1]).text() | 0,
				secondsFirstDigit = $(timer[2]).text() | 0,
				secondsSecondDigit = $(timer[3]).text() | 0;

			secondsSecondDigit += 1;

			if (secondsSecondDigit > 9) {
				secondsSecondDigit = 0;
				secondsFirstDigit += 1;
			}

			if (secondsFirstDigit > 5) {
				secondsFirstDigit = 0;
				minutesSecondDigit += 1;
			}

			if (minutesSecondDigit > 9) {
				minutesSecondDigit = 0;
				minutesFirstDigit += 1;
			}

			stopIntervalIfGivenTimeIsReached({
				minutes: (minutesFirstDigit + '' + minutesSecondDigit) | 0,
				seconds: (secondsFirstDigit + '' + secondsSecondDigit) | 0
			}, {
				minutes: toTime.minutes,
				seconds: toTime.seconds
			});

			$(timer[0]).text(minutesFirstDigit);
			$(timer[1]).text(minutesSecondDigit);
			$(timer[2]).text(secondsFirstDigit);
			$(timer[3]).text(secondsSecondDigit);

		}, 1000);
	}

	function startCountingDown(fromTime) {
		timerInterval = setInterval(function() {
			var minutesFirstDigit = $(timer[0]).text() | 0,
				minutesSecondDigit = $(timer[1]).text() | 0,
				secondsFirstDigit = $(timer[2]).text() | 0,
				secondsSecondDigit = $(timer[3]).text() | 0;

			secondsSecondDigit -= 1;

			if (secondsSecondDigit < 0) {
				secondsSecondDigit = 9;
				secondsFirstDigit -= 1;
			}

			if (secondsFirstDigit < 0) {
				secondsFirstDigit = 5;
				minutesSecondDigit -= 1;
			}

			if (minutesSecondDigit < 0) {
				minutesSecondDigit = 0;
				minutesFirstDigit -= 1;
			}

			stopIntervalIfGivenTimeIsReached({
				minutes: (minutesFirstDigit + '' + minutesSecondDigit) | 0,
				seconds: (secondsFirstDigit + '' + secondsSecondDigit) | 0
			}, {
				minutes: 0,
				seconds: 0
			});

			$(timer[0]).text(minutesFirstDigit);
			$(timer[1]).text(minutesSecondDigit);
			$(timer[2]).text(secondsFirstDigit);
			$(timer[3]).text(secondsSecondDigit);

		}, 1000);
	}

	function stopIntervalIfGivenTimeIsReached(time, endTime) {
		if (time.minutes === endTime.minutes && time.seconds === endTime.seconds) {
			clearInterval(timerInterval);
		}
	}

	function stopAndResetTimer() {
		$(timer[0]).text(0);
		$(timer[1]).text(0);
		$(timer[2]).text(0);
		$(timer[3]).text(0);
		clearInterval(timerInterval);
	}

	function setTimerTo(time) {
		$(timer[0]).text((time.minutes / 10) | 0);
		$(timer[1]).text(time.minutes % 10);
		$(timer[2]).text((time.seconds / 10) | 0);
		$(timer[3]).text(time.seconds % 10);
	}

});