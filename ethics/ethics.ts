namespace $ {
	
	export type $hyoo_dungeon_ethics_info = {
		title: string
	}
	
	export const $hyoo_dungeon_ethics_all = {
			
		lawful: {
			title: '🧐 Стоик',
		} as $hyoo_dungeon_moral_info,
		
		neutral: {
			title: '🤔 Нейтрал',
		} as $hyoo_dungeon_moral_info,
		
		chaotic: {
			title: '🥴 Хаотик',
		} as $hyoo_dungeon_moral_info,
		
	}

	export type $hyoo_dungeon_ethics = keyof typeof $hyoo_dungeon_ethics_all
	
}
