import { Modal, View, Text, type TextProps } from "react-native";

interface DialogDescriptionProps extends TextProps {
	description?: string;
}

interface DialogTitleProps extends TextProps {
	title: string;
}

interface DialogProps extends DialogDescriptionProps, DialogTitleProps {
	children: React.ReactNode;
	isVisible: boolean;
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
}: DialogProps) {
	return (
		<Modal
			presentationStyle="fullScreen"
			animationType="fade"
			visible={isVisible}
		>
			<View className="flex-col h-full w-full items-center justify-between bg-zinc-950 gap-3 p-4">
				<DialogTitle title={title} />
				{description && <DialogDescription description={description} />}
				{children}
			</View>
		</Modal>
	);
}
