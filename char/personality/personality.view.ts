namespace $.$$ {
	export class $hyoo_dungeon_char_personality extends $.$hyoo_dungeon_char_personality {
		
		@ $mol_mem
		override moral_options() {
			return Object.keys( this.$.$hyoo_dungeon_moral_all )
		}
		
		@ $mol_mem_key
		override moral_title( id: $hyoo_dungeon_moral ) {
			return this.$.$hyoo_dungeon_moral_all[ id ].title
		}
		
		@ $mol_mem
		override ethics_options() {
			return Object.keys( this.$.$hyoo_dungeon_ethics_all )
		}
		
		@ $mol_mem_key
		override ethics_title( id: $hyoo_dungeon_ethics ) {
			return this.$.$hyoo_dungeon_ethics_all[ id ].title
		}
		
	}
}
