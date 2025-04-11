namespace $.$$ {
	export class $hyoo_dungeon_app extends $.$hyoo_dungeon_app {
		
		@ $mol_mem
		char() {
			return this.$.$mol_store_local.sub( 'char', new $hyoo_dungeon_char({
				name: '',
				race: 'tabaxi',
				classes: [],
				goodness: 'neutral',
				principality: 'neutral',
				experience: 0,
				level: 0,
				params: {
					agility: 0,
					charisma: 0,
					constitution: 0,
					intellect: 0,
					strength: 0,
					wisdom: 0,
				},
				skills: {
					acrobatics: 0,
					analysis: 0,
					athletics: 0,
					attention: 0,
					stealth: 0,
					animals: 0,
					deception: 0,
					dexterity: 0,
					discernment: 0,
					history: 0,
					intimidation: 0,
					magicity: 0,
					medicine: 0,
					nature: 0,
					performing: 0,
					persuasion: 0,
					religion: 0,
					survival: 0,
				},
				story: 'чужеземец',
			}) )
		}
		
	}
}
