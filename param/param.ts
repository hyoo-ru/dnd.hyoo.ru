namespace $ {
	
	export type $hyoo_dungeon_param_info = {
		title: string
	}
	
	export const $hyoo_dungeon_param_all = {
		strength: {
			title: 'Сила',
		} as $hyoo_dungeon_param_info,
		agility: {
			title: 'Ловкость',
		} as $hyoo_dungeon_param_info,
		constitution: {
			title: 'Телосложение',
		} as $hyoo_dungeon_param_info,
		intellect: {
			title: 'Интеллект',
		} as $hyoo_dungeon_param_info,
		wisdom: {
			title: 'Мудрость',
		} as $hyoo_dungeon_param_info,
		charisma: {
			title: 'Харизма',
		} as $hyoo_dungeon_param_info,
	}
	
	export type $hyoo_dungeon_param = keyof typeof $hyoo_dungeon_param_all
}
