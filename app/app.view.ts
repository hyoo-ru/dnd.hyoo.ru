namespace $.$$ {
	export class $hyoo_dungeon_app extends $.$hyoo_dungeon_app {
		
		@ $mol_mem
		char() {
			return this.$.$mol_store_local.sub( 'char', new $hyoo_dungeon_char({
				name: '',
				race: 'human',
				classes: [],
				moral: 'neutral',
				ethics: 'neutral',
				experience: 0,
				level: 1,
				age: 20,
				hits: 0,
				hits_max: 0,
				hits_addon: 0,
				abilities: {
					dexterity: 0,
					charisma: 0,
					constitution: 0,
					intelligence: 0,
					strength: 0,
					wisdom: 0,
				},
				skills: {
					acrobatics: 0,
					investigation: 0,
					athletics: 0,
					insight: 0,
					stealth: 0,
					animals: 0,
					deception: 0,
					sleight: 0,
					perception: 0,
					history: 0,
					intimidation: 0,
					arcana: 0,
					medicine: 0,
					nature: 0,
					performance: 0,
					persuasion: 0,
					religion: 0,
					survival: 0,
				},
				story: '🏃‍♂️Чужеземец',
				biography: '',
				affection: '',
				ideals: '',
				traits: '',
				weakness: '',
			}) )
		}
		
	}
}
