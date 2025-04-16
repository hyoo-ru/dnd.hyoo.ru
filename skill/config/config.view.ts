namespace $.$$ {
	export class $hyoo_dungeon_skill_config extends $.$hyoo_dungeon_skill_config {
		
		@ $mol_mem
		override skill_list() {
			return Object.keys( this.$.$hyoo_dungeon_skill_all ).map( ability => this.Skill_row( ability ) )
		}
		
		override skill_title( id: $hyoo_dungeon_skill_id ) {
			return this.$.$hyoo_dungeon_skill_all[ id ].title
		}
		
		@ $mol_mem_key
		override skill_value( id: $hyoo_dungeon_skill_id ) {
			const ability = this.$.$hyoo_dungeon_skill_all[ id ].ability
			const icon = this.$.$hyoo_dungeon_ability_all[ ability ].title.slice( 0, 2 )
			const skill = new $hyoo_dungeon_modifier( this.skill( id ) )
			return `${skill} ${icon}`
		}
		
	}
}
