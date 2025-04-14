namespace $ {
	
	export type $hyoo_dungeon_ability = {
		title: string
	}
	
	export const $hyoo_dungeon_ability_all = {
		strength: {
			title: '💪 Мощность',
		} as $hyoo_dungeon_ability,
		dexterity: {
			title: '🥏 Ловкость',
		} as $hyoo_dungeon_ability,
		constitution: {
			title: '🐘 Живучесть',
		} as $hyoo_dungeon_ability,
		intelligence: {
			title: '🧠 Интеллект',
		} as $hyoo_dungeon_ability,
		wisdom: {
			title: '🦉 Мудрость',
		} as $hyoo_dungeon_ability,
		charisma: {
			title: '🌟 Харизма',
		} as $hyoo_dungeon_ability,
	}
	
	export type $hyoo_dungeon_ability_id = keyof typeof $hyoo_dungeon_ability_all
}
