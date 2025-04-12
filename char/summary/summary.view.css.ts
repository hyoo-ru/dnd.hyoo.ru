namespace $.$$ {
	
	$mol_style_define( $hyoo_dungeon_char_summary, {
		
		flex: {
			basis: '70rem',
		},
		
		Columns: {
			justify: {
				content: 'space-between',
			},
		},
		
		Image: {
			width: 'auto',
			justify: {
				self: 'stretch',
			},
		},
		
		Main: {
			background: {
				color: $mol_style_func.hsla( 0, 0, 0, .75 ),
			},
			flex: {
				wrap: 'wrap',
			},
			align: {
				self: 'flex-end',
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
