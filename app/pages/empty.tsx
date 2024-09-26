import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text } from "react-native";
import { Button, ButtonCreateGoal } from "../ui/button";
import { Dialog } from "../ui/dialog";
import { useState } from "react";
import { CrateGoals } from "./create-goals";
import { Ilustration } from "public/illustration_lets-start";
import { Logo } from "public/logo";

export function EmptyPage() {
	const [isVisible, setIsVisible] = useState(false);
	const onClose = () => setIsVisible(false);
	const onOpen = () => setIsVisible(true);

	return (
		<View className="py-4 h-full w-full bg-zinc-950 ">
			<View className="flex flex-1 flex-col items-center justify-between my-8">
				<Logo />
				<Ilustration />
				<Text className="text-zinc-300 leading-relaxed max-w-80 text-center">
					Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
					mesmo?
				</Text>
				<ButtonCreateGoal onPress={onOpen} />
			</View>
			<Dialog
				isVisible={isVisible}
				title="Cadastrar meta"
				description="Adicione atividades que te
            fazem bem e que você quer
            continuar praticando toda
            semana."
			>
				<CrateGoals onClose={onClose} />
			</Dialog>
		</View>
	);
}
