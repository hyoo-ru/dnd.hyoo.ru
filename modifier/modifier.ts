namespace $ {
	export class $hyoo_dungeon_modifier extends $mol_unit {
		
		toString() {
			return this.valueOf().toLocaleString( undefined, { signDisplay: 'always' } ).replace( '-', '−' )
		}
		
	}
}
