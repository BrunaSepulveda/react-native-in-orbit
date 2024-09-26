import "./global.css";
import { EmptyPage } from "./app/pages/empty";
import { StatusBar } from "expo-status-bar";

export default function App() {
	return (
		<>
			<StatusBar />
			<EmptyPage />
		</>
	);
}
