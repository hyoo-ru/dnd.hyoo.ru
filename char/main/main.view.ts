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
		override class_options() {
			return Object.keys( this.$.$hyoo_dungeon_class_all )
		}
		
		@ $mol_mem_key
		override class_title( id: $hyoo_dungeon_class ) {
			if( !id ) return ''
			return this.$.$hyoo_dungeon_class_all[ id ].title
		}
		
		@ $mol_mem_key
		class_selected( id: $hyoo_dungeon_class, next?: boolean ) {
			let all = this.classes()
			if( next !== undefined ) {
				if( next ) all = this.classes([ ... all, id ])
				else all = this.classes( all.filter( i => i !== id ) )
			}
			return all.includes( id )
		}
		
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
