import type { PendingGoal, Summary } from "../types";
import { Inorbit } from "../../public/inorbit";
import { View, Text } from "react-native";
import ptBR from "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { Progress } from "../ui/progress";
import { ButtonCreateGoal, OutlineButton } from "../ui/button";
import { useSetAtom } from "jotai";
import { isVisible } from "../atoms";

type SummaryPageParams = {
	data: Summary;
	pendingGoals: PendingGoal[];
};

dayjs.locale(ptBR);

export function SummaryPage({ data, pendingGoals }: SummaryPageParams) {
	const setVisible = useSetAtom(isVisible);
	const firstDay = dayjs().startOf("week").format("D MMMM");
	const lastDay = dayjs().endOf("week").format("D MMMM");

	const completedPercentage = Math.round((data.completed * 100) / data.total);

	return (
		<View className="py-10 px-5 mx-auto w-full h-full flex flex-col gap-6 bg-black">
			<View className="flex flex-row items-center justify-between">
				<View className="flex-row items-center gap-3">
					<Inorbit />
					<Text className="text-lg font-semibold text-zinc-400">
						{firstDay} - {lastDay}
					</Text>
				</View>
				<ButtonCreateGoal onPress={() => setVisible(true)} />
			</View>
			<View className="flex flex-col gap-3">
				<Progress progress={completedPercentage} />
				<View className="flex-row items-center justify-between">
					<Text className="text-xs text-zinc-400">
						Você completou
						<Text className="text-zinc-100">{` ${data.completed} `}</Text>
						de
						<Text className="text-zinc-100">{` ${data.total} `}</Text>
						metas nessa semana.
					</Text>
					<Text className="text-zinc-400">{completedPercentage}%</Text>
				</View>
			</View>
			<View className="h-px bg-zinc-800" />
			<View className="flex flex-row flex-wrap gap-3">
				{pendingGoals.map(
					({ id, title, completionCount, desiredWeeklyFrequency }) => (
						<OutlineButton
							disabled={completionCount >= desiredWeeklyFrequency}
							key={id}
							onPress={() => console.log(id)}
							title={title}
						/>
					),
				)}
			</View>
			<View className="flex flex-col text-zinc-400 gap-6">
				<h2 className="text-xl font-medium">Sua semana</h2>
				<Text className="">
					{data.goalsPerDay
						? "Precisa da listagem"
						: "Você ainda não completou nenhuma meta essa semana."}
				</Text>
			</View>
		</View>
	);
}
