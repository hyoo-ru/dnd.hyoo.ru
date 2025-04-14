namespace $.$$ {
	
	$mol_style_define( $hyoo_dungeon_char_summary, {
		
		flex: {
			basis: '85rem',
		},
		
		Columns: {
			flex: {
				wrap: 'wrap',
			},
			align: {
				items: 'flex-start',
			},
			justify: {
				content: 'space-between',
			},
			gap: $mol_gap.block,
		},
		
		Info: {
			flex: {
				grow: 1,
				basis: '30rem',
			},
		},
		
		Image: {
			width: 'auto',
			justify: {
				self: 'stretch',
			},
			aspectRatio: 1,
		},
		
		Top: {
			flex: {
				wrap: 'wrap',
			},
			justify: {
				self: 'stretch',
				content: 'space-between',
			},
			background: {
				color: $mol_theme.spirit,
			},
		},
		
		Main: {
			background: {
				color: $mol_theme.spirit,
			},
			flex: {
				wrap: 'wrap',
			},
			align: {
				self: 'flex-end',
			},
			justify: {
				self: 'stretch',
				content: 'space-between',
			},
		},
		
		Personality: {
			background: {
				color: $mol_theme.card,
			},
		},
		
		Stat_main: {
			flex: {
				basis: `16rem`,
			},
			gap: $mol_gap.block,
		},
		
		Spec: {
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.block,
		},
		
		Perks: {
			background: {
				color: $mol_theme.card,
			},
		},
		
	} )
	
}
