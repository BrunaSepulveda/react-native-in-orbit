import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ProgressProps {
	progress: number; // Deve ser um valor entre 0 e 1
}

export function Progress({ progress }: ProgressProps) {
	return (
		<View className="h-1 bg-zinc-900 rounded-md w-full">
			<LinearGradient
				colors={["#F472B6", "#8B5CF6"]}
				start={[0, 0]}
				end={[1, 0]}
				style={{ width: `${progress}%` }}
				className="h-full rounded-md"
			/>
		</View>
	);
}
