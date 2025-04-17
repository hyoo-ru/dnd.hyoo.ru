namespace $ {
	
	export type $hyoo_dungeon_ethics = {
		title: string
	}
	
	export const $hyoo_dungeon_ethics_all = {
			
		lawful: {
			title: '🧐 Стоик',
		} as $hyoo_dungeon_ethics,
		
		neutral: {
			title: '🤔 Нейтрал',
		} as $hyoo_dungeon_ethics,
		
		chaotic: {
			title: '🥴 Хаотик',
		} as $hyoo_dungeon_ethics,
		
	}

	export type $hyoo_dungeon_ethics_id = keyof typeof $hyoo_dungeon_ethics_all
	
}
