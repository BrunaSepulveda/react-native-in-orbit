import { View, Text } from "react-native";
import { ButtonCreateGoal } from "../ui/button";
import { Ilustration } from "public/illustration_lets-start";
import { Logo } from "public/logo";
import { useSetAtom } from "jotai";
import { isVisible } from "../atoms";

export function EmptyPage() {
	const setVisible = useSetAtom(isVisible);

	return (
		<View className="py-4 h-full w-full bg-zinc-950 ">
			<View className="flex flex-1 flex-col items-center justify-between my-8">
				<Logo />
				<Ilustration />
				<Text className="text-zinc-300 leading-relaxed max-w-80 text-center">
					Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
					mesmo?
				</Text>
				<ButtonCreateGoal onPress={() => setVisible(true)} />
			</View>
		</View>
	);
}
