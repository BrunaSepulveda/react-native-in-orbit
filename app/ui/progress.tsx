import { ProgressBar, type ProgressBarProps } from "react-native-paper";

interface ProgressProps extends ProgressBarProps {
	progress: number;
}

export function Progress({ progress, ...rest }: ProgressProps) {
	return (
		<ProgressBar
			{...rest}
			className="rounded-full w-1/2 h-2"
			progress={progress}
			color="#8b5cf6"
		/>
	);
}
