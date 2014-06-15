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
		var minutesFirstDigit = $(timer[0]).text(),
			minutesSecondDigit = $(timer[1]).text(),
			secondsFirstDigit = $(timer[2]).text(),
			secondsSecondDigit = $(timer[3]).text();

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