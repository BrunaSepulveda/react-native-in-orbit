import dayjs from "dayjs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";
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
	const timeFormatted = `${dayjs(goalCompletedTime).format("HH:mm")}h`;

	return (
		<li className="flex flex-row items-center gap-2">
			<AntDesign name="checkcircleo" size={16} color="#ec4899" />
			<Text className="text-sm text-zinc-400">
				Você completou "<Text className="text-zinc-100">{goalName}</Text>" às
				<Text className="text-zinc-100">{` ${timeFormatted}`}</Text>
			</Text>
		</li>
	);
}
