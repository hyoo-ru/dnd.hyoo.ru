namespace $.$$ {
	
	$mol_style_define( $hyoo_dungeon_char_summary, {
		
		flex: {
			basis: '80rem',
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
		
		Ability_list: {
			flex: {
				direction: 'column',
			},
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
		
		Skill_list: {
			flex: {
				basis: '11rem',
				direction: 'column',
			},
		},
		
	} )
	
}
