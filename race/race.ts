namespace $ {
	
	export type $hyoo_dungeon_race_info = {
		title: string
		link: string
		description: string
		image: string
		abilities: Record< $hyoo_dungeon_ability, number >
		age_max: number
		alignment: string
		size: 'small' | 'medium' | 'big'
		speed: number
		perks: string[]
		weapons: string[]
		skills: $hyoo_dungeon_skill[]
	}
	
	export const $hyoo_dungeon_race_all = {
		
		human: {
			title: '👩‍🦲Человек',
			link: 'https://dnd.su/race/81-human/',
			description: 'В большинстве миров люди — это самая молодая из распространённых рас. Они поздно вышли на мировую сцену и живут намного меньше, чем дварфы, эльфы и драконы. Возможно, именно краткость их жизней заставляет их стремиться достигнуть как можно большего в отведённый им срок. А быть может, они хотят что-то доказать старшим расам, и поэтому создают могучие империи, основанные на завоеваниях и торговле. Что бы ни двигало ими, люди всегда были инноваторами и пионерами во всех мирах.',
			image: 'https://i.imgur.com/48pZ1oG.jpeg',
			abilities: {
				dexterity: 1,
				charisma: 1,
				constitution: 1,
				intelligence: 1,
				strength: 1,
				wisdom: 1,
			},
			age_max: 100,
			alignment: 'Люди не имеют склонности к определённому мировоззрению. Среди них встречаются как лучшие, так и худшие представители.',
			size: 'medium',
			speed: 30,
			perks: [],
			weapons: [],
			skills: [],
		} as $hyoo_dungeon_race_info,
	
		tabaxi: {
			title: '🐈Табакси',
			link: 'https://dnd.su/race/183-tabaxi/',
			description: 'Родом из странных и далёких земель, странствующие табакси – кошкоподобные гуманоиды, которых любопытство заставляет собирать интересные артефакты, записывать рассказы и истории, и осматривать все чудеса в мире. Отъявленные путешественники, любознательные табакси редко на долго оседают на одном месте. Их врожденный характер толкает их раскрывать тайны и находить потерянные сокровища и легенды.',
			image: 'https://i.imgur.com/3QaQLIa.jpeg',
			abilities: {
				dexterity: 2,
				charisma: 1,
				constitution: 0,
				intelligence: 0,
				strength: 0,
				wisdom: 0,
			},
			age_max: 100,
			alignment: 'Табакси склонны к хаотическому мировоззрению, поскольку они позволяют своим порывам и увлечениям направлять их решения. Они редко являются злыми, большинство из них ведомы любопытством, а не жадностью или другими темными побуждениям.',
			size: 'medium',
			speed: 30,
			perks: [
				'👀Тёмное зрение',
				'🐱‍👤Кошачье проворство',
				'🐾Кошачьи когти',
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
