namespace $.$$ {
	export class $hyoo_dungeon_ability_config extends $.$hyoo_dungeon_ability_config {
		
		@ $mol_mem
		override title() {
			if( !this.pending() ) return super.title()
			return super.title() + ' ' + this.pending()
		}
		
		@ $mol_mem
		pending() {
			const char = this.char()
			const total = Object.keys( this.$.$hyoo_dungeon_ability_all )
				.reduce( ( sum, id )=> sum + char.ability_addon( id as $hyoo_dungeon_ability ), 0 )
			return 25 - total
		}
		
		@ $mol_mem
		override ability_list() {
			return Object.keys( this.$.$hyoo_dungeon_ability_all ).map( ability => this.Param_row( ability ) )
		}
		
		override ability_title( id: $hyoo_dungeon_ability ) {
			return this.$.$hyoo_dungeon_ability_all[ id ].title
		}
		
	}
}
