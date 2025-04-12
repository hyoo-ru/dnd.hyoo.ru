namespace $ {
	
	export type $hyoo_dungeon_class_info = {
		title: string
		link: string
		description: string
		image: string
		dice: 6 | 8
		ability_main: $hyoo_dungeon_ability
		ability_safe: $hyoo_dungeon_ability[]
		weapon: string
	}
	
	export const $hyoo_dungeon_class_all = {
			
		bard: {
			title: '🎻Бард',
			link: 'https://dnd.su/class/88-bard/',
			description: 'Вдохновляющий заклинатель, черпающий мощь в музыке созидания',
			image: 'https://i.imgur.com/3dO7ESp.jpeg',
			dice: 8,
			ability_main: 'charisma',
			ability_safe: [ 'dexterity', 'charisma' ],
			weapon: 'Лёгкие доспехи, простое оружие, длинные мечи, короткие мечи, рапиры, ручные арбалеты',
		} as $hyoo_dungeon_class_info,
		
	}

	export type $hyoo_dungeon_class = keyof typeof $hyoo_dungeon_class_all
	
}
