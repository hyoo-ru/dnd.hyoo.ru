namespace $ {
	
	export type $hyoo_dungeon_class_info = {
		title: string
		description: string
		image: string
		dice: 'k8' | 'k10'
		param_main: $hyoo_dungeon_param
		param_safe: $hyoo_dungeon_param[]
		weapon: string
	}
	
	export const $hyoo_dungeon_class_all = {
			
		bard: {
			title: 'Бард',
			description: 'Вдохновляющий заклинатель, черпающий мощь в музыке созидания',
			image: 'https://i.imgur.com/3dO7ESp.jpeg',
			dice: 'k8',
			param_main: 'charisma',
			param_safe: [ 'agility', 'charisma' ],
			weapon: 'Лёгкие доспехи, простое оружие, длинные мечи, короткие мечи, рапиры, ручные арбалеты',
		} as $hyoo_dungeon_class_info,
		
	}

	export type $hyoo_dungeon_class = keyof typeof $hyoo_dungeon_class_all
	
}
