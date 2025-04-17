namespace $ {
	
	export type $hyoo_dungeon_moral = {
		title: string
	}
	
	export const $hyoo_dungeon_moral_all = {
			
		good: {
			title: '👼 Добрый',
		} as $hyoo_dungeon_moral,
		
		neutral: {
			title: '🤔 Нейтральный',
		} as $hyoo_dungeon_moral,
		
		evil: {
			title: '👿 Злой',
		} as $hyoo_dungeon_moral,
		
	}

	export type $hyoo_dungeon_moral_id = keyof typeof $hyoo_dungeon_moral_all
	
}
