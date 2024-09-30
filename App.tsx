import "./global.css";
import { EmptyPage } from "./app/pages/empty";
import { StatusBar } from "expo-status-bar";
import { Dialog } from "./app/ui/dialog";
import { CrateGoals } from "./app/pages/create-goals";
import { useAtomValue } from "jotai";
import { isVisible } from "./app/atoms";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SummaryPage } from "./app/pages/summary";

export const queryClient = new QueryClient();
export default function App() {
	const isVisibleState = useAtomValue(isVisible);

	return (
		// <QueryClientProvider client={queryClient}>
		<>
			<StatusBar />
			{/* <EmptyPage /> */}
			<SummaryPage
				data={{
					completed: 1,
					total: 5,
					goalsPerDay: {
						"2024-09-30": [
							{
								id: "s2orrqhq7t4adq92rd58we15",
								title: "Chorar",
								completedAt: new Date("2024-09-30T18:19:14.38008+00:00"),
							},
						],
					},
				}}
				pendingGoals={[
					{
						id: "ser00mfj7w10wxgygqj0jah2",
						title: "Estudar",
						desiredWeeklyFrequency: 3,
						completionCount: 0,
					},
					{
						id: "zfsqv3z022sd8czws91j5aba",
						title: "Chorar",
						desiredWeeklyFrequency: 2,
						completionCount: 1,
					},
				]}
			/>
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
		</>
		// </QueryClientProvider>
	);
}
