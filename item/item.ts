namespace $ {
	
	type damage_type = '' | 'stab' | 'slash' | 'crush' | 'poison' | 'fire' | 'cold' | 'electro' | 'acid' | 'force' | 'necro' | 'psy' | 'radiant' | 'thunder'
	type size = 'small' | 'medium' | 'large'
	type ability = 'strength' | 'dexterity'
	
	export type $hyoo_dungeon_item_data = {
		title: string
		price: number
		weight: number
		defence: number
		damage_max: {
			hand1: number
			hand2: number
			near: number
			distant: number
		}
		damage_type: damage_type
		weapon_size: size
		ability: ability,
		attack_ammo: boolean
		attack_cooldown: boolean
		attack_distance_norm: number
		attack_distance_max: number
	}
	
	export class $hyoo_dungeon_item extends $mol_store< $hyoo_dungeon_item_data > {
		
		title( next?: string ) {
			return this.value( 'title', next ) ?? ''
		}
		
		price( next?: number ) {
			return this.value( 'price', next ) ?? 0
		}
		
		weight( next?: number ) {
			return this.value( 'weight', next ) ?? 0
		}
		
		defence( next?: number ) {
			return this.value( 'defence', next ) ?? 0
		}
		
		@ $mol_mem
		price_coin() {
			return new $hyoo_dungeon_coin( this.price() )
		}
		
		@ $mol_mem
		damage() {
			return this.sub( 'damage_max', new $mol_store({ hand1: 0, hand2: 0, near: 0, distant: 0 }) )
		}
		
		@ $mol_mem
		damage_hand1( next?: number ) {
			return this.damage().value( 'hand1', next ) ?? 4
		}
		
		@ $mol_mem
		damage_hand2( next?: number ) {
			return this.damage().value( 'hand2', next ) ?? 4
		}
		
		@ $mol_mem
		damage_near( next?: number ) {
			return this.damage().value( 'near', next ) ?? 0
		}
		
		@ $mol_mem
		damage_distant( next?: number ) {
			return this.damage().value( 'distant', next ) ?? 4
		}
		
		damage_type( next?: damage_type ) {
			return this.value( 'damage_type', next ) ?? ''
		}
		
		@ $mol_mem
		attack_distance_norm( next?: number ) {
			return this.value( 'attack_distance_norm', next ) ?? 20
		}
		
		@ $mol_mem
		attack_distance_max( next?: number ) {
			return this.value( 'attack_distance_max', next ) ?? 60
		}
		
		@ $mol_mem
		ability( next?: ability ) {
			return this.value( 'ability', next ) ?? 'strength'
		}
		
		@ $mol_mem
		brief() {
			
			let brief = ''
			
			brief += ` ${ this.price_coin() }`
			
			if( this.weight() ) brief += ` 🧱${ this.weight() }`
			
			if( this.defence() ) brief += ` 🦺${ this.defence() }`
			
			const damage = this.damage()
			if( damage.value( 'hand1' ) ) brief += ` 🙋d${ damage.value( 'hand1' ) }`
			if( damage.value( 'hand2' ) ) brief += ` 🙆d${ damage.value( 'hand2' ) }`
			if( damage.value( 'distant' ) ) {
				brief += ` 💨d${ damage.value( 'distant' ) }`
				brief += `:${ this.attack_distance_norm() }..${ this.attack_distance_max() }`
			}
			
			
			if( this.damage_type() ) brief += ' ' + {
				'': '',
				stab: '🤺',
				slash: '🔪',
				crush: '🥊',
				poison: '🦂',
				fire: '🔥',
				cold: '🧊',
				electro: '⚡',
				acid: '🧪',
				force: '🥋',
				necro: '💀',
				psy: '💫',
				radiant: '🔆',
				thunder: '📢',
		}[ this.damage_type() ]
			
			brief += ' ' + { strength: ' 💪', dexterity: '🥏' }[ this.ability() ]
			
			return brief
		}
		
	}
	
}
