namespace $.$$ {
	export class $hyoo_dungeon_item_config extends $.$hyoo_dungeon_item_config {
		
		override title() {
			return this.item().title()
		}
		
		@ $mol_mem
		override damage_options() {
			return Object.keys( this.$.$hyoo_dungeon_damage_all )
		}
		
		override damage_title( id: $hyoo_dungeon_damage_id ) {
			return this.$.$hyoo_dungeon_damage_all[ id ].title
		}
		
	}
}
