namespace $ {
	
	export type $hyoo_dungeon_moral_info = {
		title: string
	}
	
	export const $hyoo_dungeon_moral_all = {
			
		good: {
			title: '👼 Добрый',
		} as $hyoo_dungeon_moral_info,
		
		neutral: {
			title: '🤔 Нейтральный',
		} as $hyoo_dungeon_moral_info,
		
		evil: {
			title: '👿 Злой',
		} as $hyoo_dungeon_moral_info,
		
	}

	export type $hyoo_dungeon_moral = keyof typeof $hyoo_dungeon_moral_all
	
}
