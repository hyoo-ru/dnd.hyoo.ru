namespace $.$$ {
	export class $hyoo_dungeon_char_summary extends $.$hyoo_dungeon_char_summary {
		
		override image() {
			return this.$.$hyoo_dungeon_race_all[ this.race() ].image
		}
		
		override race_title() {
			return this.char().race_info().title
		}
		
		override race_link() {
			return this.char().race_info().link
		}
		
		override story_title() {
			return this.char().story_info().title
		}
		
		override story_link() {
			return this.char().story_info().link
		}
		
		override class_title() {
			return this.char().class_info().title
		}
		
		override class_link() {
			return this.char().class_info().link
		}
		
		override moral_title() {
			return this.$.$hyoo_dungeon_moral_all[ this.moral() ].title
		}
		
		override ethics_title() {
			return this.$.$hyoo_dungeon_ethics_all[ this.ethics() ].title
		}
		
		override speed() {
			return this.$.$hyoo_dungeon_race_all[ this.race() ].speed
		}
		
		override perks() {
			return this.$.$hyoo_dungeon_race_all[ this.race() ].perks.join( '\n' )
		}
		
	}
}
