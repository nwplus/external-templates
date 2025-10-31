import { useEffect, useState } from "react";

const getReturnValues = (countdown: number) => {
	if (countdown < 0) {
		return { days: 0, hours: 0, minutes: 0 };
	}

	// calculate time left
	const days = Math.floor(countdown / (1000 * 60 * 60 * 24)).toString();
	const hours = twoify(
		Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	);
	const minutes = twoify(
		Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
	);

	return { days, hours, minutes };
};

export const useCountdown = () => {
	const countDownDate = new Date("Nov 15, 2025 9:00:00").getTime();
	const [countDown, setCountDown] = useState(countDownDate - Date.now());

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - Date.now());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};

const twoify = (num: number) => {
	const str = num.toString();
	return str.length === 1 ? `0${str}` : str;
};
