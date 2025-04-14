namespace $ {
	
	export type $hyoo_dungeon_skill = {
		title: string
		ability: $hyoo_dungeon_ability_id
	}
	
	export const $hyoo_dungeon_skill_all = {
		
		athletics: {
			title: 'Атлетика',
			ability: 'strength',
		} as $hyoo_dungeon_skill,
		
		acrobatics: {
			title: 'Акробатика',
			ability: 'dexterity',
		} as $hyoo_dungeon_skill,
		sleight: {
			title: 'Моторика',
			ability: 'dexterity',
		} as $hyoo_dungeon_skill,
		stealth: {
			title: 'Скрытность',
			ability: 'dexterity',
		} as $hyoo_dungeon_skill,
		
		investigation: {
			title: 'Анализ',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill,
		history: {
			title: 'История',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill,
		arcana: {
			title: 'Магия',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill,
		nature: {
			title: 'Природа',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill,
		religion: {
			title: 'Религия',
			ability: 'intelligence',
		} as $hyoo_dungeon_skill,
		
		perception: {
			title: 'Восприятие',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill,
		survival: {
			title: 'Выживание',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill,
		medicine: {
			title: 'Медицина',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill,
		insight: {
			title: 'Интуиция',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill,
		animals: {
			title: 'Звероводство',
			ability: 'wisdom',
		} as $hyoo_dungeon_skill,
		
		performance: {
			title: 'Выступление',
			ability: 'charisma',
		} as $hyoo_dungeon_skill,
		intimidation: {
			title: 'Запугивание',
			ability: 'charisma',
		} as $hyoo_dungeon_skill,
		deception: {
			title: 'Обман',
			ability: 'charisma',
		} as $hyoo_dungeon_skill,
		persuasion: {
			title: 'Убеждение',
			ability: 'charisma',
		} as $hyoo_dungeon_skill,
		
	}

	export type $hyoo_dungeon_skill_id = keyof typeof $hyoo_dungeon_skill_all
}
