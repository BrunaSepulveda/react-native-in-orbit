import type { GoalsPerDayInfo } from "../types";
import dayjs from "dayjs";
import { ListItemTask } from "./list-item-goal";
import { Text, View } from "react-native";
import React from "react";

interface UnorderedListParams {
	goalsPerDay: {
		[key: `${number}-${number}-${number}`]: GoalsPerDayInfo[];
	};
}

export default function UnorderedList({ goalsPerDay }: UnorderedListParams) {
	return (
		<>
			{Object.entries(goalsPerDay).map(([day, goals]) => {
				const weekDay = dayjs(day).format("dddd");
				const formattedDate = dayjs(day).format("D[ de ]MMMM");

				return (
					<View key={day} className="flex flex-col gap-3 py-3">
						<h3 className="font-medium text-zinc-400">
							<Text className="capitalize">{`${weekDay} `}</Text>
							<Text className="text-xs">({formattedDate})</Text>
						</h3>
						<ul className="flex flex-col gap-3">
							{goals.map(({ id, completedAt, title }) => (
								<ListItemTask
									key={id}
									id={id}
									goalName={title}
									goalCompletedTime={completedAt}
								/>
							))}
						</ul>
					</View>
				);
			})}
		</>
	);
}
