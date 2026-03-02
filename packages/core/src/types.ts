export type DiscordTimestamp = Date | string | null;

export interface LightTheme {
	lightTheme: boolean;
}

export interface Avatars {
	[key: string]: string | undefined;
	blue?: string;
	default: 'blue' | 'gray' | 'green' | 'orange' | 'red';
	gray?: string;
	green?: string;
	orange?: string;
	red?: string;
}

export interface Profile {
	author?: string;
	avatar?: string;
	bot?: boolean;
	clanIcon?: string;
	clanTag?: string;
	officialApp?: boolean;
	op?: boolean;
	roleColor?: string;
	roleIcon?: string;
	roleName?: string;
	server?: boolean;
	verified?: boolean;
}

export interface DiscordMessageOptions {
	avatars?: (key: string) => string | undefined;
	defaultBackground?: 'discord' | 'none';
	defaultMode?: string;
	defaultTheme?: string;
	emojis?: (emoji: string) => Emoji | undefined;
	icons?: (icon: string) => object | undefined;
	profiles?: (profile: string) => Profile | undefined;
}

export interface Emoji {
	embedEmoji?: boolean;
	name?: string;
	url?: string;
}
