namespace $ {
	
	export type $hyoo_dungeon_skill_info = {
		title: string
		param_main: $hyoo_dungeon_param
	}
	
	export const $hyoo_dungeon_skill_all = {
		
		athletics: {
			title: 'Атлетика',
			param_main: 'strength',
		} as $hyoo_dungeon_skill_info,
		
		acrobatics: {
			title: 'Акробатика',
			param_main: 'agility',
		} as $hyoo_dungeon_skill_info,
		dexterity: {
			title: 'Ловкость рук',
			param_main: 'agility',
		} as $hyoo_dungeon_skill_info,
		stealth: {
			title: 'Скрытность',
			param_main: 'agility',
		} as $hyoo_dungeon_skill_info,
		
		analysis: {
			title: 'Анализ',
			param_main: 'intellect',
		} as $hyoo_dungeon_skill_info,
		history: {
			title: 'История',
			param_main: 'intellect',
		} as $hyoo_dungeon_skill_info,
		magicity: {
			title: 'Магия',
			param_main: 'intellect',
		} as $hyoo_dungeon_skill_info,
		nature: {
			title: 'Природа',
			param_main: 'intellect',
		} as $hyoo_dungeon_skill_info,
		religion: {
			title: 'Религия',
			param_main: 'intellect',
		} as $hyoo_dungeon_skill_info,
		
		attention: {
			title: 'Внимательность',
			param_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		survival: {
			title: 'Выживание',
			param_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		medicine: {
			title: 'Медицина',
			param_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		discernment: {
			title: 'Проницательность',
			param_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		animals: {
			title: 'Животноводство',
			param_main: 'wisdom',
		} as $hyoo_dungeon_skill_info,
		
		performing: {
			title: 'Выступление',
			param_main: 'charisma',
		} as $hyoo_dungeon_skill_info,
		intimidation: {
			title: 'Запугивание',
			param_main: 'charisma',
		} as $hyoo_dungeon_skill_info,
		deception: {
			title: 'Обман',
			param_main: 'charisma',
		} as $hyoo_dungeon_skill_info,
		persuasion: {
			title: 'Убеждение',
			param_main: 'charisma',
		} as $hyoo_dungeon_skill_info,
		
	}

	export type $hyoo_dungeon_skill = keyof typeof $hyoo_dungeon_skill_all
}
