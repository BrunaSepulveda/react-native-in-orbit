import { View, Text, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	title: Yup.string().required("Expecifique o título da atividade"),
	option: Yup.string().required("Você precisa selecionar uma opção"),
});

const initialValues = {
	title: "",
	option: "",
};

export function CrateGoals() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ setFieldValue, values }) => (
				<View className="flex flex-1 w-full flex-col justify-between px-4 py-4 gap-4">
					<View className="flex flex-col gap-4 w-full">
						<Text className="text-zinc-300 text-sm font-medium leading-none">
							Qual a atividade?
						</Text>
						<TextInput
							className="px-4 h-12 bg-black border border-zinc-900 rounded-lg placeholder-zinc-400 outline-none text-sm hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10"
							placeholder="Praticar exercícios, meditar, etc..."
							onChangeText={(title) => setFieldValue("title", title)}
							value={values.title}
						/>
					</View>
					<View className="flex flex-col gap-4 w-full">
						<Text className="text-zinc-300 text-sm font-medium leading-none">
							Quantas vezes na semana?
						</Text>

						<RadioButton.Group
							onValueChange={(value) => setFieldValue("option", value)}
							value={values.option}
						>
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
											borderColor: "#18181b",
											gap: 2,
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
					</View>
				</View>
			)}
		</Formik>
	);
}
