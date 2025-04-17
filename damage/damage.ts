namespace $ {
	
	export type $hyoo_dungeon_damage = {
		title: string
		description: string
	}
	
	export const $hyoo_dungeon_damage_all = {
		
		stab: {
			title: '🤺 Колющий',
			description: 'Проникающий удар острым предметом, концентрирующем всю силу удара в одной точке',
		} as $hyoo_dungeon_damage,
		
		slash: {
			title: '🔪 Режущий',
			description: 'Скользящий удар, рассекающий мягкую плоть',
		} as $hyoo_dungeon_damage,
		
		crush: {
			title: '🥊 Дробящий',
			description: 'Сминающий или сдавливающий удар тяжёлым предметом',
		} as $hyoo_dungeon_damage,
		
		poison: {
			title: '🦂 Ядовитый',
			description: 'Отравление организма токсичными веществами',
		} as $hyoo_dungeon_damage,
		
		fire: {
			title: '🔥 Огненный',
			description: 'Разрушение воздействием высокой температуры',
		} as $hyoo_dungeon_damage,
		
		cold: {
			title: '🧊 Холодовой',
			description: 'Обморожение и внутреннее повреждение кристаллами льда',
		} as $hyoo_dungeon_damage,
		
		electro: {
			title: '⚡ Электрический',
			description: 'Молниеносный пробой высокого напряжения',
		} as $hyoo_dungeon_damage,
		
		acid: {
			title: '🧪 Кислотный',
			description: 'Раздушение, воздействием едких веществ',
		} as $hyoo_dungeon_damage,
		
		force: {
			title: '🥋 Силовой',
			description: 'Магический урон силовым полем',
		} as $hyoo_dungeon_damage,
		
		necro: {
			title: '💀 Некротический',
			description: 'Лишение жизненной силы, разрушающией как плоть, так и душу.',
		} as $hyoo_dungeon_damage,
		
		psy: {
			title: '💫 Психический',
			description: 'Разрушительное воздействие на психику',
		} as $hyoo_dungeon_damage,
		
		radiant: {
			title: '🔆 Сияющий',
			description: 'Переполнение божественной силой, опаляющей плоть и сжигающей слабую душу',
		} as $hyoo_dungeon_damage,
		
		thunder: {
			title: '📢 Громовой',
			description: 'Разрушение мощными колебаниями воздуха',
		} as $hyoo_dungeon_damage,
		
	}

	export type $hyoo_dungeon_damage_id = keyof typeof $hyoo_dungeon_damage_all
	
}
