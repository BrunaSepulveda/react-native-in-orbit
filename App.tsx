import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Dialog } from "./app/ui/dialog";
import { CrateGoals } from "./app/pages/create-goals";
import { useAtomValue } from "jotai";
import { isVisible } from "./app/atoms";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Main from "./app/pages/main";

export const queryClient = new QueryClient();
export default function App() {
	const isVisibleState = useAtomValue(isVisible);

	return (
		<QueryClientProvider client={queryClient}>
			<StatusBar />
			<Main />
			<Dialog
				isVisible={isVisibleState}
				title="Cadastrar meta"
				description="Adicione atividades que te
            fazem bem e que você quer
            continuar praticando toda
            semana."
			>
				<CrateGoals />
			</Dialog>
		</QueryClientProvider>
	);
}
