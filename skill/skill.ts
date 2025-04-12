namespace $ {
	
	export type $hyoo_dungeon_skill_info = {
		title: string
		ability_main: $hyoo_dungeon_ability
	}
	
	export const $hyoo_dungeon_skill_all = {
		
		athletics: {
			title: 'Атлетика',
			ability_main: 'strength',
		} as $hyoo_dungeon_skill_info,
		
		acrobatics: {
			title: 'Акробатика',
			ability_main: 'dexterity',
		} as $hyoo_dungeon_skill_info,
		sleight: {
			title: 'Ловкость рук',
			ability_main: 'dexterity',
		} as $hyoo_dungeon_skill_info,
		stealth: {
			title: 'Скрытность',
			ability_main: 'dexterity',
		} as $hyoo_dungeon_skill_info,
		
		analysis: {
			title: 'Анализ',
			ability_main: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		history: {
			title: 'История',
			ability_main: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		magicity: {
			title: 'Магия',
			ability_main: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		nature: {
			title: 'Природа',
			ability_main: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		religion: {
			title: 'Религия',
			ability_main: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		
		perception: {
			title: 'Восприятие',
			ability_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		survival: {
			title: 'Выживание',
			ability_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		medicine: {
			title: 'Медицина',
			ability_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		insight: {
			title: 'Интуиция',
			ability_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		animals: {
			title: 'Звероводство',
			ability_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		
		performing: {
			title: 'Выступление',
			ability_main: 'charisma',
		} as $hyoo_dungeon_skill_info,
		intimidation: {
			title: 'Запугивание',
			ability_main: 'charisma',
		} as $hyoo_dungeon_skill_info,
		deception: {
			title: 'Обман',
			ability_main: 'charisma',
		} as $hyoo_dungeon_skill_info,
		persuasion: {
			title: 'Убеждение',
			ability_main: 'charisma',
		} as $hyoo_dungeon_skill_info,
		
	}

	export type $hyoo_dungeon_skill = keyof typeof $hyoo_dungeon_skill_all
}
