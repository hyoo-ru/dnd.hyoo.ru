namespace $.$$ {
	export class $hyoo_dungeon_param_config extends $.$hyoo_dungeon_param_config {
		
		@ $mol_mem
		override param_list() {
			return Object.keys( this.$.$hyoo_dungeon_param_all ).map( param => this.Param_row( param ) )
		}
		
		override param_title( id: $hyoo_dungeon_param ) {
			return this.$.$hyoo_dungeon_param_all[ id ].title
		}
		
	}
}
