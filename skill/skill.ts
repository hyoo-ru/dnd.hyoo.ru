namespace $ {
	
	export type $hyoo_dungeon_skill_info = {
		title: string
		ability: $hyoo_dungeon_ability
	}
	
	export const $hyoo_dungeon_skill_all = {
		
		athletics: {
			title: 'Атлетика',
			ability: 'strength',
		} as $hyoo_dungeon_skill_info,
		
		acrobatics: {
			title: 'Акробатика',
			ability: 'dexterity',
		} as $hyoo_dungeon_skill_info,
		sleight: {
			title: 'Ловкость рук',
			ability: 'dexterity',
		} as $hyoo_dungeon_skill_info,
		stealth: {
			title: 'Скрытность',
			ability: 'dexterity',
		} as $hyoo_dungeon_skill_info,
		
		investigation: {
			title: 'Анализ',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		history: {
			title: 'История',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		arcana: {
			title: 'Магия',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		nature: {
			title: 'Природа',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		religion: {
			title: 'Религия',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill_info,
		
		perception: {
			title: 'Восприятие',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		survival: {
			title: 'Выживание',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		medicine: {
			title: 'Медицина',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		insight: {
			title: 'Интуиция',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		animals: {
			title: 'Звероводство',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		
		performance: {
			title: 'Выступление',
			ability: 'charisma',
		} as $hyoo_dungeon_skill_info,
		intimidation: {
			title: 'Запугивание',
			ability: 'charisma',
		} as $hyoo_dungeon_skill_info,
		deception: {
			title: 'Обман',
			ability: 'charisma',
		} as $hyoo_dungeon_skill_info,
		persuasion: {
			title: 'Убеждение',
			ability: 'charisma',
		} as $hyoo_dungeon_skill_info,
		
	}

	export type $hyoo_dungeon_skill = keyof typeof $hyoo_dungeon_skill_all
}
