import { Text, Pressable, type PressableProps } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
interface ButtonProps extends PressableProps {
	variant?: "primary" | "secondary" | "underline";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
}

const ButtonStyle = {
	base: "flex items-center justify-center gap-2 rounded-lg text-sm font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2",
	variants: {
		primary: "bg-violet-500 hover:bg-violet-600 ring-violet-500",
		secondary: "bg-zinc-900 hover:bg-zinc-800 ring-zinc-900",
		underline: "bg-transparent",
	},
	size: {
		large: "px-6 py-2.5",
		medium: "px-3 py-1.5",
		small: "px-1 py-0.5",
	},
	variantsTextColor: {
		primary: "text-violet-50",
		secondary: "text-zinc-400",
		underline:
			"underline underline-offset-4 text-xs text-zinc-400 outline-none ",
	},
};

export const Button = ({
	variant = "primary",
	size = "medium",
	children,
	...rest
}: ButtonProps) => {
	return (
		<Pressable
			{...rest}
			className={`${ButtonStyle.base} ${ButtonStyle.variants[variant]} ${ButtonStyle.size[size]}`}
		>
			<Text className={`${ButtonStyle.variantsTextColor[variant]}`}>
				{children}
			</Text>
		</Pressable>
	);
};

export function ButtonCreateGoal({ ...rest }: PressableProps) {
	return (
		<Button {...rest} variant="primary" size="large">
			<AntDesign name="plus" size={16} className="color-violet-50 pr-2" />
			Cadastrar meta
		</Button>
	);
}

interface OutlineButtonProps extends PressableProps {
	title: string;
}

export function OutlineButton({ title, ...rest }: OutlineButtonProps) {
	return (
		<Pressable
			{...rest}
			className="flex flex-row px-3 py-2 gap-2 leading-none rounded-full border border-dashed text-sm text-zinc-300 border-zinc-800 hover:border-zinc-700 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:border-pink-500 ring-pink-500/10 focus-visible:ring-4"
		>
			<AntDesign name="plus" size={16} className="color-zinc-600" />
			{title}
		</Pressable>
	);
}
