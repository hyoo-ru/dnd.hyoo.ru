namespace $.$$ {
	export class $hyoo_dungeon_ability_config extends $.$hyoo_dungeon_ability_config {
		
		@ $mol_mem
		override ability_list() {
			return Object.keys( this.$.$hyoo_dungeon_ability_all ).map( ability => this.Param_row( ability ) )
		}
		
		override ability_title( id: $hyoo_dungeon_ability ) {
			return this.$.$hyoo_dungeon_ability_all[ id ].title
		}
		
	}
}
