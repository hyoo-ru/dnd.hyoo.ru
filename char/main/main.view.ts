namespace $.$$ {
	export class $hyoo_dungeon_char_main extends $.$hyoo_dungeon_char_main {
		
		@ $mol_mem
		override race_options() {
			return Object.keys( this.$.$hyoo_dungeon_race_all )
		}
		
		@ $mol_mem_key
		override race_title( id: $hyoo_dungeon_race ) {
			return this.$.$hyoo_dungeon_race_all[ id ].title
		}
		
		@ $mol_mem
		override story_options() {
			return Object.keys( this.$.$hyoo_dungeon_story_all )
		}
		
		@ $mol_mem_key
		override story_title( id: $hyoo_dungeon_story ) {
			return this.$.$hyoo_dungeon_story_all[ id ].title
		}
		
		@ $mol_mem
		override class_options() {
			return Object.keys( this.$.$hyoo_dungeon_class_all )
		}
		
		@ $mol_mem_key
		override class_title( id: $hyoo_dungeon_class ) {
			if( !id ) return ''
			return this.$.$hyoo_dungeon_class_all[ id ].title
		}
		
	}
}
