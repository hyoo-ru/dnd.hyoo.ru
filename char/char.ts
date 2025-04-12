namespace $ {
	
	export class $hyoo_dungeon_char extends $mol_store<{
		name: string,
		race: $hyoo_dungeon_race,
		classes: $hyoo_dungeon_class[],
		moral: 'good' | 'neutral' | 'evil',
		ethics: 'lawful' | 'neutral' | 'chaotic',
		story: string,
		level: number,
		experience: number,
		abilities: Record< $hyoo_dungeon_ability, number >,
		skills: Record< $hyoo_dungeon_skill, number >,
	}> {
		
		name( next?: string ) {
			return this.value( 'name', next ) ?? ''
		}
		
		story( next?: string ) {
			return this.value( 'story', next ) ?? ''
		}
		
		race( next?: $hyoo_dungeon_race ) {
			return this.value( 'race', next ) ?? 'tabaxi' as $hyoo_dungeon_race
		}
		
		classes( next?: $hyoo_dungeon_class[] ) {
			return this.value( 'classes', next ) ?? [] as $hyoo_dungeon_class[]
		}
		
		ability_addon( id: $hyoo_dungeon_ability, next?: number ) {
			return this.sub( 'abilities', new $mol_store( {} as any ) ).value( id, next ) ?? 0
		}
		
		ability( id: $hyoo_dungeon_ability ) {
			return 8 + this.ability_addon( id )
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
		
	}
	
}
