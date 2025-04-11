namespace $.$$ {
	export class $hyoo_dungeon_char_card extends $.$hyoo_dungeon_char_card {
		
		override image() {
			return this.$.$hyoo_dungeon_race_all[ this.race() ].image
		}
		
		override race_title() {
			return this.$.$hyoo_dungeon_race_all[ this.race() ].title
		}
		
		override classes_title() {
			return this.classes().map( cl => this.$.$hyoo_dungeon_class_all[ cl ].title ).join( ', ' )
		}
		
	}
}
