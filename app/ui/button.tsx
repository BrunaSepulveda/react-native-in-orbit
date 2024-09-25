import {
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
	variant?: "primary" | "secondary" | "underline";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
}

const ButtonStyle = {
	base: "flex items-center justify-center gap-2 rounded-lg text-sm font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2",
	variants: {
		primary: "bg-violet-300 hover:bg-violet-600 ring-violet-500",
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
		<TouchableOpacity
			{...rest}
			className={`${ButtonStyle.base} ${ButtonStyle.variants[variant]} ${ButtonStyle.size[size]}`}
		>
			<Text className={`${ButtonStyle.variantsTextColor[variant]}`}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};
