import "./global.css";
import { EmptyPage } from "./app/pages/empty";
import { StatusBar } from "expo-status-bar";
import { Dialog } from "./app/ui/dialog";
import { CrateGoals } from "./app/pages/create-goals";

export default function App() {
	return (
		<>
			<StatusBar />
			<EmptyPage />
			<Dialog
				isVisible={isVisible}
				title="Cadastrar meta"
				description="Adicione atividades que te
            fazem bem e que você quer
            continuar praticando toda
            semana."
			>
				<CrateGoals />
			</Dialog>
		</>
	);
}
