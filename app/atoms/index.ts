import type { Summary, PendingGoal } from "../../app/types";
import { atom } from "jotai";

const isVisible = atom(false);
const summary = atom<Summary>();
const pendingGoals = atom<PendingGoal[]>([]);
const goalIdToCompletation = atom<string>();
const goalIdToDelete = atom<string>();

export {
	isVisible,
	summary,
	pendingGoals,
	goalIdToCompletation,
	goalIdToDelete,
};
