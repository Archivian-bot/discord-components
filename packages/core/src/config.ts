import type { DiscordMessageOptions, Profile } from './types.js';

let config: DiscordMessageOptions = globalThis.$discordMessage ?? {};

export function getConfig(): DiscordMessageOptions {
	return config;
}

export function setConfig(partialConfig: Partial<DiscordMessageOptions>): void {
	config = Object.assign(config, partialConfig);
}

export const defaultDiscordAvatars = {
	blue: 'https://cdn.discordapp.com/embed/avatars/0.png',
	gray: 'https://cdn.discordapp.com/embed/avatars/1.png',
	green: 'https://cdn.discordapp.com/embed/avatars/2.png',
	orange: 'https://cdn.discordapp.com/embed/avatars/3.png',
	red: 'https://cdn.discordapp.com/embed/avatars/4.png',
	pink: 'https://cdn.discordapp.com/embed/avatars/5.png'
} as const;

export function profiles(id: string | undefined): Profile | undefined {
	if (!id) return undefined;
	return getConfig().profiles?.(id);
}

export function avatars(key: string): string | undefined {
	const configFn = getConfig().avatars;
	if (configFn) {
		const result = configFn(key);
		if (result !== undefined) return result;
	}

	if (key === 'default') return defaultDiscordAvatars.blue;
	return defaultDiscordAvatars[key as keyof typeof defaultDiscordAvatars];
}

export function resolveAvatar(avatar: string | undefined): string {
	if (avatar === undefined) return avatars('default') ?? '';
	return avatars(avatar) ?? avatar ?? avatars('default') ?? '';
}

export const defaultTheme: string = getConfig().defaultTheme === 'light' ? 'light' : 'dark';

export const defaultMode: string = getConfig().defaultMode === 'compact' ? 'compact' : 'cozy';

export const defaultBackground: string = getConfig().defaultBackground === 'none' ? 'none' : 'discord';
