namespace $ {
	
	export type $hyoo_dungeon_story_info = {
		title: string
		link: string
		description: string
		skills: $hyoo_dungeon_skill[]
		perks: string[]
		mastery: string[]
		inventory: string[]
	}
	
	export const $hyoo_dungeon_story_all = {
			
		pirate: {
			title: '🏴‍☠️ Пират',
			link: 'https://dnd.su/backgrounds/770-pirate/',
			description: 'Провел молодость среди жутких пиратов, безжалостных головорезов, научивших выживать среди акул и дикарей. Занимались грабежом в морях, и не одну душу отправил в солёную пучину. Хорошо знаком со страхом и кровью, и заслужил сомнительную репутацию во многих портовых городах.',
			skills: [ 'athletics', 'perception' ],
			perks: [
				'😨 Дурная репутация',
			],
			mastery: [
				'🧭 Инструменты навигатора',
				'⛵ Водный транспорт'
			],
			inventory: [
				'🏏 Дубинка Кофель-нагель',
				'🧵 50 футов шёлковой верёвки',
				'📿 Талисман',
				'👘 Обычная одежда',
				'💰 Поясной кошель с 10 зм',
			],
		} as $hyoo_dungeon_story_info,
		
	}

	export type $hyoo_dungeon_story = keyof typeof $hyoo_dungeon_story_all

}
