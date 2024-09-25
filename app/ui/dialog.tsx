import { Modal, View, Text, type TextProps } from "react-native";
import { Button } from "./button";

interface DialogDescriptionProps extends TextProps {
	description: string;
}

interface DialogTitleProps extends TextProps {
	title: string;
}

interface DialogProps extends DialogDescriptionProps, DialogTitleProps {
	children: React.ReactNode;
	isVisible: boolean;
	onClose: () => void;
}

function DialogTitle({ title, ...rest }: DialogTitleProps) {
	return (
		<Text {...rest} className="text-lg text-zinc-400 font-semibold">
			{title}
		</Text>
	);
}
function DialogDescription({ description, ...rest }: DialogDescriptionProps) {
	return (
		<Text {...rest} className="text-zinc-400 text-sm leading-relaxed">
			{description}
		</Text>
	);
}

export function Dialog({
	children,
	isVisible,
	title,
	description,
	onClose,
}: DialogProps) {
	return (
		<Modal
			presentationStyle="fullScreen"
			animationType="fade"
			visible={isVisible}
		>
			<View className="flex-col h-full w-full items-center justify-between bg-zinc-950 p-4">
				<View className="gap-3 items-center">
					<DialogTitle title={title} />
					<DialogDescription description={description} />
				</View>
				{children}
				<View className="flex-row w-full gap-3">
					<Button
						style={{ width: "50%" }}
						onPress={onClose}
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
					>
						OK
					</Button>
				</View>
			</View>
		</Modal>
	);
}
