import { useQueries } from "@tanstack/react-query";
import { getSummary, getWeekPendingGoals } from "../service";
import { SummaryPage } from "./summary";
import { EmptyPage } from "./empty";
import React from "react";

export default function Main() {
	const [{ data }, { data: pendingGoals }] = useQueries({
		queries: [
			{
				queryKey: ["summary"],
				queryFn: getSummary,
				staleTime: 1000 * 60,
				refetchOnWindowFocus: true,
			},
			{
				queryKey: ["getWeekPendingGoals"],
				queryFn: getWeekPendingGoals,
				staleTime: 1000 * 60,
				refetchOnWindowFocus: true,
			},
		],
	});

	return (
		<>
			{data?.total && data?.total > 0 ? (
				<SummaryPage data={data} pendingGoals={pendingGoals || []} />
			) : (
				<EmptyPage />
			)}
		</>
	);
}
