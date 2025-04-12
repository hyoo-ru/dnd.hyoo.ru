namespace $ {
	
	export class $hyoo_dungeon_char extends $mol_store<{
		name: string,
		race: $hyoo_dungeon_race,
		classes: $hyoo_dungeon_class[],
		moral: 'good' | 'neutral' | 'evil',
		ethics: 'lawful' | 'neutral' | 'chaotic',
		story: string,
		age: number,
		level: number,
		experience: number,
		hits_max: number,
		hits: number,
		traits: string,
		ideals: string,
		affection: string,
		weakness: string,
		abilities: Record< $hyoo_dungeon_ability, number >,
		skills: Record< $hyoo_dungeon_skill, number >,
	}> {
		
		name( next?: string ) {
			return this.value( 'name', next ) ?? ''
		}
		
		story( next?: string ) {
			return this.value( 'story', next ) ?? ''
		}
		
		age( next?: number ) {
			return this.value( 'age', next ) ?? 20
		}
		
		level( next?: number ) {
			return this.value( 'level', next ) ?? 0
		}
		
		experience( next?: number ) {
			return this.value( 'experience', next ) ?? 0
		}
		
		race( next?: $hyoo_dungeon_race ) {
			return this.value( 'race', next ) ?? 'tabaxi' as $hyoo_dungeon_race
		}
		
		classes( next?: $hyoo_dungeon_class[] ) {
			return this.value( 'classes', next ) ?? [] as $hyoo_dungeon_class[]
		}
		
		ability_addon( id: $hyoo_dungeon_ability, next?: number ) {
			return this.sub( 'abilities', new $mol_store( {} as any ) ).value( id, next && Math.max( 0, Math.min( next, 7 ) ) ) ?? 0
		}
		
		ability( id: $hyoo_dungeon_ability ) {
			return 8 + this.ability_addon( id ) + this.$.$hyoo_dungeon_race_all[ this.race() ].abilities[ id ]
		}
		
		ability_modifier( id: $hyoo_dungeon_ability ) {
			return Math.floor( this.ability( id ) / 2 - 5 )
		}
		
		skill_addon( id: $hyoo_dungeon_skill, next?: number ) {
			return this.sub( 'skills', new $mol_store( {} as any ) ).value( id, next ) ?? 0
		}
		
		skill( id: $hyoo_dungeon_skill ) {
			return this.skill_addon( id )
		}
		
		moral( next?: 'good' | 'neutral' | 'evil' ) {
			return this.value( 'moral', next ) ?? 'neutral'
		}
		
		ethics( next?: 'lawful' | 'neutral' | 'chaotic' ) {
			return this.value( 'ethics', next ) ?? 'neutral'
		}
		
		traits( next?: string ) {
			return this.value( 'traits', next ) ?? ''
		}
		
		ideals( next?: string ) {
			return this.value( 'ideals', next ) ?? ''
		}
		
		affection( next?: string ) {
			return this.value( 'affection', next ) ?? ''
		}
		
		weakness( next?: string ) {
			return this.value( 'weakness', next ) ?? ''
		}
		
		master_bonus() {
			return 2 + Math.floor( this.level() / 4 - 1/4 )
		}
		
		hits_dice() {
			return this.$.$hyoo_dungeon_class_all[ this.classes()[0] ].dice
		}
		
		@ $mol_mem
		hits_max( next?: number ) {
			const def = this.hits_dice() + this.ability_modifier( 'constitution' )
			return this.value( 'hits_max', next ) ?? def
		}
		
		@ $mol_mem
		hits( next?: number ) {
			return this.value( 'hits', next && Math.max( 0, Math.min( next, this.hits_max() ) ) ) ?? this.hits_max()
		}
		
		@ $mol_mem
		hits_heal() {
			const mod = Math.max( 1, this.ability_modifier( 'constitution' ) )
			const dice = this.$.$hyoo_dungeon_class_all[ this.classes()[0] ].dice
			return `d${dice}+${mod}`
		}
		
	}
	
}
