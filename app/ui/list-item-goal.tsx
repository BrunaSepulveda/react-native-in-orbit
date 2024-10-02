import dayjs from "dayjs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";
import { Button } from "./button";
import { deleteCompletedGoals } from "../service";
import { queryClient } from "App";
interface ListItemTaskParams {
	id: string;
	goalName: string;
	goalCompletedTime: Date;
}

export function ListItemTask({
	id,
	goalCompletedTime,
	goalName,
}: ListItemTaskParams) {
	const deleteCompleted = async (id: string) => {
		await deleteCompletedGoals(id);
		queryClient.invalidateQueries({
			queryKey: ["summary"],
		});
		queryClient.invalidateQueries({
			queryKey: ["getWeekPendingGoals"],
		});
	};

	const timeFormatted = `${dayjs(goalCompletedTime).format("HH:mm")}h`;

	return (
		<li className="flex flex-row items-center gap-2">
			<AntDesign name="checkcircleo" size={16} color="#ec4899" />
			<Text className="text-sm text-zinc-400">
				Você completou "<Text className="text-zinc-100">{goalName}</Text>" às
				<Text className="text-zinc-100">{` ${timeFormatted}`}</Text>
			</Text>
			<Button variant="underline" onPress={() => deleteCompleted(id)}>
				Desfazer
			</Button>
		</li>
	);
}
