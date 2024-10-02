import { View, Text, TextInput, SafeAreaView } from "react-native";
import { RadioButton } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { useSetAtom } from "jotai";
import { isVisible } from "../atoms";
import { queryClient } from "App";
import type { CreateGoalParams } from "../types";
import { createGoal } from "../service";

const validationSchema = Yup.object().shape({
	title: Yup.string().min(1).required("Expecifique o título da atividade"),
	desiredWeeklyFrequency: Yup.string().required(
		"Você precisa selecionar uma opção",
	),
});

const initialValues = {
	title: "",
	desiredWeeklyFrequency: "",
};

export function CrateGoals() {
	const setVisible = useSetAtom(isVisible);
	async function handleCreateGoal({
		title,
		desiredWeeklyFrequency,
	}: CreateGoalParams) {
		await createGoal({
			title,
			desiredWeeklyFrequency,
		});

		queryClient.invalidateQueries({
			queryKey: ["getWeekPendingGoals", "summary"],
		});
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={({ desiredWeeklyFrequency, title }, { resetForm }) => {
				try {
					handleCreateGoal({
						title,
						desiredWeeklyFrequency: Number(desiredWeeklyFrequency),
					});
				} catch (error) {
					console.error(error);
				} finally {
					setVisible(false);
					resetForm();
				}
			}}
		>
			{({ setFieldValue, values, resetForm, handleSubmit }) => (
				<SafeAreaView className="flex flex-1 w-full flex-col justify-between px-4 py-4 gap-4">
					<View className="flex flex-col gap-4 w-full">
						<Text className="text-zinc-300 text-sm font-medium leading-none">
							Qual a atividade?
						</Text>
						<TextInput
							aria-label="Qual a atividade?"
							className="px-4 h-12 bg-black border border-zinc-900 rounded-lg placeholder-zinc-400 text-zinc-400 outline-none text-sm hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10"
							placeholder="Praticar exercícios, meditar, etc..."
							onChangeText={(title) => setFieldValue("title", title)}
							value={values.title}
						/>
					</View>
					<RadioButton.Group
						onValueChange={(value) =>
							setFieldValue("desiredWeeklyFrequency", value)
						}
						value={values.desiredWeeklyFrequency}
					>
						<Text className="text-zinc-300 text-sm font-medium leading-none mb-3">
							Quantas vezes na semana?
						</Text>
						{["🙂", "😎", "😜", "🤨", "🤯", "🔥"].map((value, i) => {
							const frequency = String(i + 1);
							return (
								<RadioButton.Item
									style={{
										display: "flex",
										flexDirection: "row",
										width: "100%",
										justifyContent: "space-between",
										alignItems: "center",
										backgroundColor: "black",
										borderRadius: 4,
										paddingTop: 1,
										paddingBottom: 1,
										paddingLeft: 4,
										paddingRight: 4,
										borderWidth: 1,
										borderStyle: "solid",
										borderColor:
											values.desiredWeeklyFrequency === frequency
												? "#ec4899"
												: "#18181b",
										marginTop: 4,
										marginBottom: 4,
									}}
									key={frequency}
									position="leading"
									labelStyle={{ color: "#a1a1aa" }}
									label={`${frequency}x na semana ${value}`}
									value={frequency}
								/>
							);
						})}
					</RadioButton.Group>
					<View className="flex-row w-full gap-3">
						<Button
							onPress={() => {
								setVisible(false);
								resetForm();
							}}
							style={{ width: "50%" }}
							variant="secondary"
							size="large"
						>
							Cancel
						</Button>
						<Button
							className="text-violet-50"
							style={{ width: "50%" }}
							variant="primary"
							size="large"
							// disabled={!values.desiredWeeklyFrequency || !values.title}
							disabled={true}
							onPress={() => {
								handleSubmit();
							}}
						>
							OK
						</Button>
					</View>
				</SafeAreaView>
			)}
		</Formik>
	);
}
