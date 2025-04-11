namespace $ {
	
	export class $hyoo_dungeon_char extends $mol_store<{
		name: string,
		race: $hyoo_dungeon_race,
		classes: $hyoo_dungeon_class[],
		goodness: 'good' | 'neutral' | 'evil',
		principality: 'lawful' | 'neutral' | 'chaotic',
		story: string,
		level: number,
		experience: number,
		params: Record< $hyoo_dungeon_param, number >,
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
		
		param_addon( id: $hyoo_dungeon_param, next?: number ) {
			return this.sub( 'params', new $mol_store( {} as any ) ).value( id, next ) ?? 0
		}
		
		param( id: $hyoo_dungeon_param ) {
			return 8 + this.param_addon( id )
		}
		
		skill_addon( id: $hyoo_dungeon_skill, next?: number ) {
			return this.sub( 'skills', new $mol_store( {} as any ) ).value( id, next ) ?? 0
		}
		
		skill( id: $hyoo_dungeon_skill ) {
			return this.skill_addon( id )
		}
		
		goodness( next?: 'good' | 'neutral' | 'evil' ) {
			return this.value( 'goodness', next ) ?? 'neutral'
		}
		
		principality( next?: 'lawful' | 'neutral' | 'chaotic' ) {
			return this.value( 'principality', next ) ?? 'neutral'
		}
		
	}
	
}
