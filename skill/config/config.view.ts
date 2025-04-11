namespace $.$$ {
	export class $hyoo_dungeon_skill_config extends $.$hyoo_dungeon_skill_config {
		
		@ $mol_mem
		override skill_list() {
			return Object.keys( this.$.$hyoo_dungeon_skill_all ).map( param => this.Skill_row( param ) )
		}
		
		override skill_title( id: $hyoo_dungeon_skill ) {
			return this.$.$hyoo_dungeon_skill_all[ id ].title
		}
		
	}
}
