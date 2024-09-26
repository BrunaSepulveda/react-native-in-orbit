import type { PendingGoal, Summary } from "../types";
import { Inorbit } from "../../public/inorbit";
import { View, Text } from "react-native";
import ptBR from "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { Progress } from "../ui/progress";
import { Button, ButtonCreateGoal, OutlineButton } from "../ui/button";
import AntDesign from "@expo/vector-icons/AntDesign";

type SummaryPageParams = {
	data: Summary;
	pendingGoals: PendingGoal[];
};

dayjs.locale(ptBR);

export function SummaryPage({ data, pendingGoals }: SummaryPageParams) {
	const firstDay = dayjs().startOf("week").format("D MMMM");
	const lastDay = dayjs().endOf("week").format("D MMMM");

	const completedPercentage = Math.round((data.completed * 100) / data.total);

	return (
		<View className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
			<View className="flex items-center gap-3">
				<Inorbit />
				<Text className="text-lg font-semibold">
					{firstDay} - {lastDay}
				</Text>
			</View>
			<ButtonCreateGoal onPress={() => console.log("open")} />
			<View className="flex flex-col gap-3">
				<Progress progress={completedPercentage} />
				<Text className="flex items-center justify-between text-xs text-zinc-400">
					Você completou
					<Text className="text-zinc-100">{` ${data.completed} `}</Text>de
					<Text className="text-zinc-100">{` ${data.total} `}</Text>metas nessa
					semana.
					<Text>{completedPercentage}%</Text>
				</Text>
			</View>
			<View className="h-px bg-zinc-800" />
			<View className="flex flex-wrap gap-3">
				{pendingGoals.map(
					({ id, title, completionCount, desiredWeeklyFrequency }) => (
						<OutlineButton
							disabled={completionCount >= desiredWeeklyFrequency}
							key={id}
							onPress={() => console.log(id)}
						>
							<AntDesign
								name="plus"
								size={16}
								className="color-zinc-600 pr-2 size-4"
							/>
							<Text className="size-4 text-zinc-600">{title}</Text>
						</OutlineButton>
					),
				)}
			</View>
			{data.goalsPerDay && (
				<View className="flex flex-col gap-6">
					<h2 className="text-xl font-medium">Sua semana</h2>
				</View>
			)}

			{/* {data.goalsPerDay && (
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">
            Sua semana
          </h2>
          <UnorderedList
            goalsPerDay={
              data.goalsPerDay
            }
          />
        </div>
      )} */}
		</View>
	);
}
