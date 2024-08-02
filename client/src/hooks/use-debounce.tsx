import { useEffect, useState } from "react";

type DebouncedValue<T> = { value: T; timeoutId?: number };

export const useDebounce = <T,>(value: T, delay: number): DebouncedValue<T> => {
	const [debouncedValue, setDebouncedValue] = useState<DebouncedValue<T>>({
		value,
	});

	useEffect(() => {
		const timeoutId = setTimeout(() => setDebouncedValue({ value }), delay);

		// Cleanup function to clear timeout on unmount
		return () => clearTimeout(timeoutId);
	}, [value, delay]);

	return debouncedValue;
};
