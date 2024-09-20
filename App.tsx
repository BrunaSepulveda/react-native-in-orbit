import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "./app/ui/button";
import { useState } from "react";
import { Dialog } from "./app/ui/dialog";

export default function App() {
	const [isVisible, setIsVisible] = useState(false);
	const onClose = () => setIsVisible(false);
	const onOpen = () => setIsVisible(true);

	return (
		<View className="flex-1 items-center justify-center bg-orange-700">
			<Text>Open up App.tsx to start working on your app!</Text>
			<Button onPress={onOpen}>Open</Button>
			<StatusBar style="auto" />
			<Dialog isVisible={isVisible}>
				<Text>This is a dialog</Text>
				<Button onPress={onClose}>Close</Button>
			</Dialog>
		</View>
	);
}
