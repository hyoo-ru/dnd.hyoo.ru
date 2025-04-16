namespace $ {
	
	export type $hyoo_dungeon_ability = {
		title: string
		description: string
	}
	
	export const $hyoo_dungeon_ability_all = {
		strength: {
			title: '💪 Мощность',
			description: 'Сила, физическая мощь',
		} as $hyoo_dungeon_ability,
		dexterity: {
			title: '🥏 Ловкость',
			description: 'Гибкость, проворство',
		} as $hyoo_dungeon_ability,
		constitution: {
			title: '🐘 Стойкость',
			description: 'Телосложение, выносливость',
		} as $hyoo_dungeon_ability,
		intelligence: {
			title: '🧠 Интеллект',
			description: 'Рассудительность, память',
		} as $hyoo_dungeon_ability,
		wisdom: {
			title: '🦉 Мудрость',
			description: 'Внимательность, проницательность',
		} as $hyoo_dungeon_ability,
		charisma: {
			title: '🌟 Харизма',
			description: 'Внушение, сила характера',
		} as $hyoo_dungeon_ability,
	}
	
	export type $hyoo_dungeon_ability_id = keyof typeof $hyoo_dungeon_ability_all
}
