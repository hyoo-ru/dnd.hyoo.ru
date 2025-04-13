namespace $.$$ {
	export class $hyoo_dungeon_app extends $.$hyoo_dungeon_app {
		
		@ $mol_mem
		char() {
			return this.$.$mol_store_local.sub( 'char', new $hyoo_dungeon_char({
				name: '',
				race: Object.keys( $hyoo_dungeon_race_all )[0] as $hyoo_dungeon_race,
				class: Object.keys( $hyoo_dungeon_class_all )[0] as $hyoo_dungeon_class,
				story: Object.keys( $hyoo_dungeon_story_all )[0] as $hyoo_dungeon_story,
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
				skills: [],
				biography: '',
				affection: '',
				ideals: '',
				traits: '',
				weakness: '',
			}) )
		}
		
		@ $mol_mem
		background() {
			const color = this.$.$mol_lights() ? `rgba(255,255,255,.75)` : `rgba(0,0,0,.75)`
			return `linear-gradient( to bottom, ${color}, ${color} ), url(${ JSON.stringify( this.char_image() ) })`
		}
		
	}
}
