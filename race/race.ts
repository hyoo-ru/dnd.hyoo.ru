namespace $ {
	
	export type $hyoo_dungeon_race_info = {
		title: string
		description: string
		image: string
		param: Record< $hyoo_dungeon_param, number >
		age_max: number
		alignment: string
		size: 'small' | 'medium' | 'big'
		speed: number
		abilities: string[]
		weapons: string[]
		skills: $hyoo_dungeon_skill[]
	}
	
	export const $hyoo_dungeon_race_all = {
			
		tabaxi: {
			title: 'Табакси',
			description: 'Родом из странных и далёких земель, странствующие табакси – кошкоподобные гуманоиды, которых любопытство заставляет собирать интересные артефакты, записывать рассказы и истории, и осматривать все чудеса в мире. Отъявленные путешественники, любознательные табакси редко на долго оседают на одном месте. Их врожденный характер толкает их раскрывать тайны и находить потерянные сокровища и легенды.',
			image: 'https://i.imgur.com/3QaQLIa.jpeg',
			param: {
				agility: 2,
				charisma: 1,
				constitution: 0,
				intellect: 0,
				strength: 0,
				wisdom: 0,
			},
			age_max: 150,
			alignment: 'Табакси склонны к хаотическому мировоззрению, поскольку они позволяют своим порывам и увлечениям направлять их решения. Они редко являются злыми, большинство из них ведомы любопытством, а не жадностью или другими темными побуждениям.',
			size: 'medium',
			speed: 30,
			abilities: [
				'Тёмное зрение',
				'Кошачье проворство',
				'Кошачьи когти',
			],
			weapons: [
				'Кошачьи когти',
			],
			skills: [
				'attention',
				'stealth',
			],
		} as $hyoo_dungeon_race_info,
	
	}
	
	export type $hyoo_dungeon_race = keyof typeof $hyoo_dungeon_race_all
	
}
