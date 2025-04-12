namespace $ {
	
	export type $hyoo_dungeon_ability_info = {
		title: string
	}
	
	export const $hyoo_dungeon_ability_all = {
		strength: {
			title: 'Сила',
		} as $hyoo_dungeon_ability_info,
		dexterity: {
			title: 'Ловкость',
		} as $hyoo_dungeon_ability_info,
		constitution: {
			title: 'Телосложение',
		} as $hyoo_dungeon_ability_info,
		intelligence: {
			title: 'Интеллект',
		} as $hyoo_dungeon_ability_info,
		wisdom: {
			title: 'Мудрость',
		} as $hyoo_dungeon_ability_info,
		charisma: {
			title: 'Харизма',
		} as $hyoo_dungeon_ability_info,
	}
	
	export type $hyoo_dungeon_ability = keyof typeof $hyoo_dungeon_ability_all
}
