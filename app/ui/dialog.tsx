import { Modal, View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface DialogProps {
	children: React.ReactNode;
	isVisible: boolean;
}

export function Dialog({ children, isVisible }: DialogProps) {
	return (
		<Modal className="fixed z-50 right-0 top-0 bottom-0 w-[400px] h-screen border-l border-zinc-900 bg-zinc-950 p-8" animationType="fade" visible={isVisible}>
			<View>
				<View>
					<Text>Choose a sticker</Text>
					<MaterialIcons name="close" color="#fff" size={22} />
				</View>
				{children}
			</View>
		</Modal>
	);
}
