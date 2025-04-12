namespace $.$$ {
	
	$mol_style_define( $hyoo_dungeon_char_summary, {
		
		flex: {
			basis: '60rem',
		},
		
		Columns: {
			justify: {
				content: 'space-between',
			},
		},
		
		Info: {
			background: {
				color: $mol_theme.card,
			},
		},
		
		Image: {
			width: 'auto',
			justify: {
				self: 'stretch',
			},
			aspectRatio: 1,
		},
		
		Base: {
			justify: {
				self: 'stretch',
			},
		},
		
		Main: {
			flex: {
				wrap: 'wrap',
			},
			justify: {
				self: 'stretch',
				content: 'space-between',
			},
		},
		
		Stat: {
			padding: 0,
		},
		
		Name: {
			color: $mol_theme.special,
		},
		
	} )
	
}
