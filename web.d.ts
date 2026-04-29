declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	type $mol_book2_sub__1 = $mol_type_enforce<
		ReturnType< $mol_book2['pages'] >[number]
		,
		$mol_view
	>
	type $mol_book2_sub__2 = $mol_type_enforce<
		ReturnType< $mol_book2['placeholders'] >[number]
		,
		$mol_view
	>
	type $mol_view__title_mol_book2_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages_deep( ): readonly($mol_view)[]
		pages( ): ReturnType< $mol_book2['pages_deep'] >
		Placeholder( ): $mol_view
		placeholders( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): readonly($mol_view)[]
		minimal_width( ): number
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		align( ): readonly(number)[]
		offset( ): readonly(number)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $ {

	type $mol_pop_bubble__content_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	type $mol_follower__offset_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__align_mol_pop_4 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_align'] >
		,
		ReturnType< $mol_follower['align'] >
	>
	type $mol_follower__Anchor_mol_pop_5 = $mol_type_enforce<
		ReturnType< $mol_pop['Anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__Sub_mol_pop_6 = $mol_type_enforce<
		ReturnType< $mol_pop['Bubble'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	export class $mol_pop extends $mol_view {
		bubble( ): any
		Anchor( ): any
		bubble_offset( ): readonly(number)[]
		bubble_align( ): readonly(number)[]
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		Follower( ): $mol_follower
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		align( ): string
		prefer( ): string
		auto( ): readonly(any)[]
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'tabindex': number,
			'popover': string,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	type $mol_search__query_mol_book2_catalog_1 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_dimmer__needle_mol_book2_catalog_2 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_book2_catalog_3 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_link__arg_mol_book2_catalog_4 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_mol_book2_catalog_5 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_mol_book2_catalog_6 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_item_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__Empty_mol_book2_catalog_7 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_links_empty'] >
		,
		ReturnType< $mol_list['Empty'] >
	>
	type $mol_list__rows_mol_book2_catalog_8 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_links'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title_mol_book2_catalog_9 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Logo_mol_book2_catalog_10 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_logo'] >
		,
		ReturnType< $mol_page['Logo'] >
	>
	type $mol_page__tools_mol_book2_catalog_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__head_mol_book2_catalog_12 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_head'] >
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__body_mol_book2_catalog_13 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__foot_mol_book2_catalog_14 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_foot'] >
		,
		ReturnType< $mol_page['foot'] >
	>
	type $mol_link__arg_mol_book2_catalog_15 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_close_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint_mol_book2_catalog_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub_mol_book2_catalog_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_book2_catalog extends $mol_book2 {
		Menu_title( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Title'] >
		menu_title( ): string
		Menu_tools( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Tools'] >
		Menu_logo( ): any
		menu_head( ): readonly($mol_view_content)[]
		menu_filter( next?: string ): string
		Menu_filter( ): $mol_search
		Menu_links_empty( ): $mol_view
		arg( id: any): Record<string, any>
		menu_link_arg( id: any): ReturnType< $mol_book2_catalog['arg'] >
		spread_title( id: any): string
		Menu_link_title( id: any): $mol_dimmer
		menu_link_content( id: any): readonly($mol_view_content)[]
		Menu_link( id: any): $mol_link
		menu_item_content( id: any): readonly($mol_view)[]
		Menu_item( id: any): $mol_view
		menu_links( ): readonly($mol_view)[]
		Menu_links( ): $mol_list
		menu_body( ): readonly($mol_view)[]
		menu_foot( ): readonly($mol_view)[]
		Menu( ): $mol_page
		spread_close_arg( ): Record<string, any>
		Spread_close_icon( ): $mol_icon_close
		param( ): string
		spread( next?: string ): string
		spreads( ): Record<string, any>
		Spread( id: any): $mol_view
		Spread_default( ): any
		spread_ids( ): readonly(string)[]
		menu_filter_enabled( ): boolean
		spread_ids_filtered( ): readonly(string)[]
		spread_current( ): any
		menu_tools( ): readonly(any)[]
		addon_tools( ): readonly(any)[]
		pages( ): readonly(any)[]
		Spread_close( ): $mol_link
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $ {

	export class $mol_chip extends $mol_view {
		hint( ): string
		minimal_height( ): number
		attr( ): ({ 
			'title': ReturnType< $mol_chip['hint'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chip.view.tree.d.ts.map
declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_text_code_line_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type_mol_text_code_line_2 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack_mol_text_code_line_3 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle_mol_text_code_line_4 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack_mol_text_code_line_5 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle_mol_text_code_line_6 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri_mol_text_code_line_7 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_line extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $ {

	type $mol_text_code_line__numb_showed_mol_text_code_1 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__numb_mol_text_code_2 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_line['numb'] >
	>
	type $mol_text_code_line__theme_mol_text_code_3 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_theme'] >
		,
		ReturnType< $mol_text_code_line['theme'] >
	>
	type $mol_text_code_line__text_mol_text_code_4 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__syntax_mol_text_code_5 = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_code_6 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__highlight_mol_text_code_7 = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_list__render_visible_only_mol_text_code_8 = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows_mol_text_code_9 = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint_mol_text_code_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_mol_text_code_11 = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_theme( id: any): string
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_line
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		row_themes( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $ {

	export class $mol_float extends $mol_view {
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=float.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $ {

	type $mol_grid_table__sub_mol_grid_1 = $mol_type_enforce<
		ReturnType< $mol_grid['rows'] >
		,
		ReturnType< $mol_grid_table['sub'] >
	>
	type $mol_dimmer__needle_mol_grid_2 = $mol_type_enforce<
		ReturnType< $mol_grid['needle'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_grid_3 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_value'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_grid_row__cells_mol_grid_4 = $mol_type_enforce<
		ReturnType< $mol_grid['head_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_row__minimal_height_mol_grid_5 = $mol_type_enforce<
		ReturnType< $mol_grid['row_height'] >
		,
		ReturnType< $mol_grid_row['minimal_height'] >
	>
	type $mol_grid_row__minimal_width_mol_grid_6 = $mol_type_enforce<
		ReturnType< $mol_grid['minimal_width'] >
		,
		ReturnType< $mol_grid_row['minimal_width'] >
	>
	type $mol_grid_row__cells_mol_grid_7 = $mol_type_enforce<
		ReturnType< $mol_grid['cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_cell__sub_mol_grid_8 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_text'] >
		,
		ReturnType< $mol_grid_cell['sub'] >
	>
	type $mol_grid_number__sub_mol_grid_9 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_number'] >
		,
		ReturnType< $mol_grid_number['sub'] >
	>
	type $mol_float__dom_name_mol_grid_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_float['dom_name'] >
	>
	type $mol_float__sub_mol_grid_11 = $mol_type_enforce<
		ReturnType< $mol_grid['col_head_content'] >
		,
		ReturnType< $mol_float['sub'] >
	>
	type $mol_check_expand__level_mol_grid_12 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_level'] >
		,
		ReturnType< $mol_check_expand['level'] >
	>
	type $mol_check_expand__label_mol_grid_13 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_check_expand__expanded_mol_grid_14 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	export class $mol_grid extends $mol_view {
		rows( ): readonly($mol_view)[]
		Table( ): $mol_grid_table
		head_cells( ): readonly($mol_view)[]
		cells( id: any): readonly($mol_view)[]
		cell_content( id: any): readonly($mol_view_content)[]
		cell_content_text( id: any): ReturnType< $mol_grid['cell_content'] >
		cell_content_number( id: any): ReturnType< $mol_grid['cell_content'] >
		col_head_content( id: any): readonly($mol_view_content)[]
		cell_level( id: any): number
		cell_expanded( id: any, next?: boolean ): boolean
		needle( ): string
		cell_value( id: any): string
		Cell_dimmer( id: any): $mol_dimmer
		row_height( ): number
		row_ids( ): readonly(string[])[]
		row_id( id: any): any
		col_ids( ): readonly(any)[]
		records( ): Record<string, any>
		record( id: any): any
		hierarchy( ): any
		hierarchy_col( ): string
		minimal_width( ): number
		sub( ): readonly(any)[]
		Head( ): $mol_grid_row
		Row( id: any): $mol_grid_row
		Cell( id: any): $mol_view
		cell( id: any): any
		Cell_text( id: any): $mol_grid_cell
		Cell_number( id: any): $mol_grid_number
		Col_head( id: any): $mol_float
		Cell_branch( id: any): $mol_check_expand
		Cell_content( id: any): readonly(any)[]
	}
	
	export class $mol_grid_table extends $mol_list {
	}
	
	export class $mol_grid_row extends $mol_view {
		cells( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_grid_row['cells'] >
	}
	
	export class $mol_grid_cell extends $mol_view {
		minimal_height( ): number
	}
	
	export class $mol_grid_number extends $mol_grid_cell {
	}
	
}

//# sourceMappingURL=grid.view.tree.d.ts.map
declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		title( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__uri_mol_link_iconed_1 = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title_mol_link_iconed_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	export class $mol_link_iconed extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		title( ): ReturnType< $mol_link_iconed['uri'] >
		sub( ): readonly(any)[]
		content( ): readonly(any)[]
		host( ): string
	}
	
}

//# sourceMappingURL=iconed.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__uri_mol_embed_native_1 = $mol_type_enforce<
		ReturnType< $mol_embed_native['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_mol_embed_native_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_embed_native extends $mol_scroll {
		uri( next?: string ): string
		title( ): string
		Fallback( ): $mol_link
		uri_change( next?: any ): any
		dom_name( ): string
		window( ): any
		attr( ): ({ 
			'src': ReturnType< $mol_embed_native['uri'] >,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
		message( ): ({ 
			hashchange( next?: ReturnType< $mol_embed_native['uri_change'] > ): ReturnType< $mol_embed_native['uri_change'] >,
		}) 
	}
	
}

//# sourceMappingURL=native.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_youtube extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_frame extends $mol_embed_native {
		allow( ): string
		html( ): any
		attr( ): ({ 
			'tabindex': ReturnType< $mol_frame['tabindex'] >,
			'allow': ReturnType< $mol_frame['allow'] >,
			'src': ReturnType< $mol_frame['uri'] >,
			'srcdoc': ReturnType< $mol_frame['html'] >,
		}) 
		fullscreen( ): boolean
		accelerometer( ): boolean
		autoplay( ): boolean
		encription( ): boolean
		gyroscope( ): boolean
		pip( ): boolean
		clipboard_read( ): boolean
		clipboard_write( ): boolean
	}
	
}

//# sourceMappingURL=frame.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__title_mol_embed_service_1 = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_embed_service_2 = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_preview'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_frame__title_mol_embed_service_3 = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri_mol_embed_service_4 = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $mol_embed_service extends $mol_check {
		active( next?: boolean ): boolean
		title( ): string
		video_preview( ): string
		Image( ): $mol_image
		Hint( ): $mol_icon_youtube
		video_embed( ): string
		Frame( ): $mol_frame
		uri( ): string
		video_id( ): string
		checked( next?: ReturnType< $mol_embed_service['active'] > ): ReturnType< $mol_embed_service['active'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=service.view.tree.d.ts.map
declare namespace $ {

	export class $mol_embed_youtube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_embed_rutube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=rutube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_embed_vklive extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=vklive.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__title_mol_embed_any_1 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_embed_any_2 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_embed_native__title_mol_embed_any_3 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri_mol_embed_any_4 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_youtube__title_mol_embed_any_5 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_youtube['title'] >
	>
	type $mol_embed_youtube__uri_mol_embed_any_6 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_youtube['uri'] >
	>
	type $mol_embed_rutube__title_mol_embed_any_7 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_rutube['title'] >
	>
	type $mol_embed_rutube__uri_mol_embed_any_8 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_rutube['uri'] >
	>
	type $mol_embed_vklive__title_mol_embed_any_9 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_vklive['title'] >
	>
	type $mol_embed_vklive__uri_mol_embed_any_10 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_vklive['uri'] >
	>
	export class $mol_embed_any extends $mol_view {
		title( ): string
		uri( ): string
		Image( ): $mol_image
		Object( ): $mol_embed_native
		Youtube( ): $mol_embed_youtube
		Rutube( ): $mol_embed_rutube
		Vklive( ): $mol_embed_vklive
	}
	
}

//# sourceMappingURL=any.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_expand__checked_mol_expander_1 = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable_mol_expander_2 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label_mol_expander_3 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub_mol_expander_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_expander_5 = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $ {

	type $mol_text__text_mol_text_1 = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_mol_text_2 = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_content'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_paragraph__sub_mol_text_3 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_text__uri_resolve_mol_text_4 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_5 = $mol_type_enforce<
		ReturnType< $mol_text['quote_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight_mol_text_6 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__auto_scroll_mol_text_7 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text_list__uri_resolve_mol_text_8 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_list['uri_resolve'] >
	>
	type $mol_text_list__type_mol_text_9 = $mol_type_enforce<
		ReturnType< $mol_text['list_type'] >
		,
		ReturnType< $mol_text_list['type'] >
	>
	type $mol_text_list__text_mol_text_10 = $mol_type_enforce<
		ReturnType< $mol_text['list_text'] >
		,
		ReturnType< $mol_text_list['text'] >
	>
	type $mol_text_list__highlight_mol_text_11 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_list['highlight'] >
	>
	type $mol_text_header__minimal_height_mol_text_12 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_text_header['minimal_height'] >
	>
	type $mol_text_header__level_mol_text_13 = $mol_type_enforce<
		ReturnType< $mol_text['header_level'] >
		,
		ReturnType< $mol_text_header['level'] >
	>
	type $mol_text_header__content_mol_text_14 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_text_header['content'] >
	>
	type $mol_text_header__arg_mol_text_15 = $mol_type_enforce<
		ReturnType< $mol_text['header_arg'] >
		,
		ReturnType< $mol_text_header['arg'] >
	>
	type $mol_text_code__text_mol_text_16 = $mol_type_enforce<
		ReturnType< $mol_text['pre_text'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__row_themes_mol_text_17 = $mol_type_enforce<
		ReturnType< $mol_text['pre_themes'] >
		,
		ReturnType< $mol_text_code['row_themes'] >
	>
	type $mol_text_code__highlight_mol_text_18 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__uri_resolve_mol_text_19 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	type $mol_text_code__sidebar_showed_mol_text_20 = $mol_type_enforce<
		ReturnType< $mol_text['pre_sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_view__dom_name_mol_text_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_grid__head_cells_mol_text_22 = $mol_type_enforce<
		ReturnType< $mol_text['table_head_cells'] >
		,
		ReturnType< $mol_grid['head_cells'] >
	>
	type $mol_grid__rows_mol_text_23 = $mol_type_enforce<
		ReturnType< $mol_text['table_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells_mol_text_24 = $mol_type_enforce<
		ReturnType< $mol_text['table_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll_mol_text_25 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight_mol_text_26 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_27 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_28 = $mol_type_enforce<
		ReturnType< $mol_text['table_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_grid__rows_mol_text_29 = $mol_type_enforce<
		ReturnType< $mol_text['grid_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells_mol_text_30 = $mol_type_enforce<
		ReturnType< $mol_text['grid_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll_mol_text_31 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight_mol_text_32 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_33 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_34 = $mol_type_enforce<
		ReturnType< $mol_text['grid_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_dimmer__dom_name_mol_text_35 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['dom_name'] >
	>
	type $mol_dimmer__needle_mol_text_36 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_text_37 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text_span__dom_name_mol_text_38 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text_span['dom_name'] >
	>
	type $mol_text_span__type_mol_text_39 = $mol_type_enforce<
		ReturnType< $mol_text['line_type'] >
		,
		ReturnType< $mol_text_span['type'] >
	>
	type $mol_text_span__sub_mol_text_40 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_text_span['sub'] >
	>
	type $mol_text_code_line__numb_showed_mol_text_41 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__highlight_mol_text_42 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_text_code_line__text_mol_text_43 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_44 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__syntax_mol_text_45 = $mol_type_enforce<
		ReturnType< $mol_text['code_syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_link_iconed__uri_mol_text_46 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content_mol_text_47 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_link_iconed__uri_mol_text_48 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content_mol_text_49 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_embed_any__uri_mol_text_50 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_embed_any['uri'] >
	>
	type $mol_embed_any__title_mol_text_51 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_embed_any['title'] >
	>
	type $mol_expander__label_mol_text_52 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['label'] >
	>
	type $mol_expander__content_mol_text_53 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_text extends $mol_list {
		auto_scroll( ): any
		block_content( id: any): readonly(any)[]
		uri_resolve( id: any): string
		quote_text( id: any): string
		highlight( ): string
		list_type( id: any): string
		list_text( id: any): string
		header_level( id: any): number
		header_arg( id: any): Record<string, any>
		pre_text( id: any): string
		pre_themes( id: any): readonly(string)[]
		code_sidebar_showed( ): boolean
		pre_sidebar_showed( ): ReturnType< $mol_text['code_sidebar_showed'] >
		table_head_cells( id: any): readonly(any)[]
		table_rows( id: any): readonly(any)[]
		table_cells( id: any): readonly(any)[]
		table_cell_text( id: any): string
		grid_rows( id: any): readonly(any)[]
		grid_cells( id: any): readonly(any)[]
		grid_cell_text( id: any): string
		line_text( id: any): string
		line_type( id: any): string
		line_content( id: any): readonly(any)[]
		code_syntax( ): any
		link_uri( id: any): string
		link_host( id: any): string
		spoiler_label( id: any): string
		Spoiler_label( id: any): $mol_text
		spoiler_content( id: any): string
		Spoiler_content( id: any): $mol_text
		uri_base( ): string
		text( ): string
		param( ): string
		flow_tokens( ): readonly(any)[]
		block_text( id: any): string
		auto( ): readonly(any)[]
		Paragraph( id: any): $mol_paragraph
		Quote( id: any): $mol_text
		List( id: any): $mol_text_list
		item_index( id: any): number
		Header( id: any): $mol_text_header
		Pre( id: any): $mol_text_code
		Cut( id: any): $mol_view
		Table( id: any): $mol_grid
		Table_row( id: any): $mol_grid_row
		Table_cell( id: any): $mol_text
		Grid( id: any): $mol_grid
		Grid_row( id: any): $mol_grid_row
		Grid_cell( id: any): $mol_text
		String( id: any): $mol_dimmer
		Span( id: any): $mol_text_span
		Code_line( id: any): $mol_text_code_line
		Link( id: any): $mol_link_iconed
		Link_http( id: any): $mol_link_iconed
		Embed( id: any): $mol_embed_any
		Spoiler( id: any): $mol_expander
	}
	
	type $mol_link__arg_mol_text_header_1 = $mol_type_enforce<
		ReturnType< $mol_text_header['arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint_mol_text_header_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub_mol_text_header_3 = $mol_type_enforce<
		ReturnType< $mol_text_header['content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_text_header extends $mol_paragraph {
		arg( ): Record<string, any>
		content( ): readonly(any)[]
		Link( ): $mol_link
		level( ): number
		sub( ): readonly(any)[]
	}
	
	export class $mol_text_span extends $mol_paragraph {
		type( ): string
		dom_name( ): string
		attr( ): ({ 
			'mol_text_type': ReturnType< $mol_text_span['type'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	type $mol_textarea_edit__value_mol_textarea_1 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_textarea_edit['value'] >
	>
	type $mol_textarea_edit__hint_mol_textarea_2 = $mol_type_enforce<
		ReturnType< $mol_textarea['hint'] >
		,
		ReturnType< $mol_textarea_edit['hint'] >
	>
	type $mol_textarea_edit__enabled_mol_textarea_3 = $mol_type_enforce<
		ReturnType< $mol_textarea['enabled'] >
		,
		ReturnType< $mol_textarea_edit['enabled'] >
	>
	type $mol_textarea_edit__spellcheck_mol_textarea_4 = $mol_type_enforce<
		ReturnType< $mol_textarea['spellcheck'] >
		,
		ReturnType< $mol_textarea_edit['spellcheck'] >
	>
	type $mol_textarea_edit__length_max_mol_textarea_5 = $mol_type_enforce<
		ReturnType< $mol_textarea['length_max'] >
		,
		ReturnType< $mol_textarea_edit['length_max'] >
	>
	type $mol_textarea_edit__selection_mol_textarea_6 = $mol_type_enforce<
		ReturnType< $mol_textarea['selection'] >
		,
		ReturnType< $mol_textarea_edit['selection'] >
	>
	type $mol_textarea_edit__submit_mol_textarea_7 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit'] >
		,
		ReturnType< $mol_textarea_edit['submit'] >
	>
	type $mol_textarea_edit__submit_with_ctrl_mol_textarea_8 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit_with_ctrl'] >
		,
		ReturnType< $mol_textarea_edit['submit_with_ctrl'] >
	>
	type $mol_text_code__text_mol_textarea_9 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__render_visible_only_mol_textarea_10 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['render_visible_only'] >
	>
	type $mol_text_code__row_numb_mol_textarea_11 = $mol_type_enforce<
		ReturnType< $mol_textarea['row_numb'] >
		,
		ReturnType< $mol_text_code['row_numb'] >
	>
	type $mol_text_code__sidebar_showed_mol_textarea_12 = $mol_type_enforce<
		ReturnType< $mol_textarea['sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__highlight_mol_textarea_13 = $mol_type_enforce<
		ReturnType< $mol_textarea['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__syntax_mol_textarea_14 = $mol_type_enforce<
		ReturnType< $mol_textarea['syntax'] >
		,
		ReturnType< $mol_text_code['syntax'] >
	>
	export class $mol_textarea extends $mol_stack {
		clickable( next?: boolean ): boolean
		sidebar_showed( ): boolean
		press( next?: any ): any
		hover( next?: any ): any
		value( next?: string ): string
		hint( ): string
		enabled( ): boolean
		spellcheck( ): boolean
		length_max( ): number
		selection( next?: readonly(number)[] ): readonly(number)[]
		bring( ): ReturnType< ReturnType< $mol_textarea['Edit'] >['bring'] >
		submit( next?: any ): any
		submit_with_ctrl( ): boolean
		Edit( ): $mol_textarea_edit
		row_numb( id: any): number
		highlight( ): string
		syntax( ): $mol_syntax2
		View( ): $mol_text_code
		attr( ): ({ 
			'mol_textarea_clickable': ReturnType< $mol_textarea['clickable'] >,
			'mol_textarea_sidebar_showed': ReturnType< $mol_textarea['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		event( ): ({ 
			keydown( next?: ReturnType< $mol_textarea['press'] > ): ReturnType< $mol_textarea['press'] >,
			pointermove( next?: ReturnType< $mol_textarea['hover'] > ): ReturnType< $mol_textarea['hover'] >,
		}) 
		sub( ): readonly(any)[]
		symbols_alt( ): Record<string, string>
		symbols_alt_ctrl( ): Record<string, string>
		symbols_alt_shift( ): Record<string, string>
	}
	
	export class $mol_textarea_edit extends $mol_string {
		dom_name( ): string
		enter( ): string
		field( ): ({ 
			'scrollTop': number,
		})  & ReturnType< $mol_string['field'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $ {

	export class $mol_bar extends $mol_view {
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_left extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=left.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__hint_mol_paginator_1 = $mol_type_enforce<
		ReturnType< $mol_paginator['backward_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_paginator_2 = $mol_type_enforce<
		ReturnType< $mol_paginator['backward'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_paginator_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_paginator_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint_mol_paginator_5 = $mol_type_enforce<
		ReturnType< $mol_paginator['forward_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_paginator_6 = $mol_type_enforce<
		ReturnType< $mol_paginator['forward'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_paginator_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_paginator extends $mol_bar {
		backward_hint( ): string
		backward( next?: any ): any
		Backward_icon( ): $mol_icon_chevron_left
		Backward( ): $mol_button_minor
		value( next?: number ): number
		Value( ): $mol_view
		forward_hint( ): string
		forward( next?: any ): any
		Forward_icon( ): $mol_icon_chevron_right
		Forward( ): $mol_button_minor
		step( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paginator.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_hyoo_dnd_parameter_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_width_hyoo_dnd_parameter_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_width'] >
	>
	type $mol_view__sub_hyoo_dnd_parameter_3 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_parameter['value'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_dnd_parameter extends $mol_view {
		Title( ): $mol_view
		value( ): readonly(any)[]
		Value( ): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=parameter.view.tree.d.ts.map
declare namespace $ {

	type __hyoo_dnd_ability_config_1 = $mol_type_enforce<
		Parameters< $hyoo_dnd_ability_config['ability_total'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_ability_config['char'] >['ability'] >[0]
	>
	type __hyoo_dnd_ability_config_2 = $mol_type_enforce<
		Parameters< $hyoo_dnd_ability_config['ability_addon'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_ability_config['char'] >['ability_addon'] >[0]
	>
	type __hyoo_dnd_ability_config_3 = $mol_type_enforce<
		Parameters< $hyoo_dnd_ability_config['ability_addon'] >[1]
		,
		Parameters< ReturnType< $hyoo_dnd_ability_config['char'] >['ability_addon'] >[1]
	>
	type __hyoo_dnd_ability_config_4 = $mol_type_enforce<
		Parameters< $hyoo_dnd_ability_config['ability_safe'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_ability_config['char'] >['ability_safe'] >[0]
	>
	type __hyoo_dnd_ability_config_5 = $mol_type_enforce<
		Parameters< $hyoo_dnd_ability_config['ability_modifier'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_ability_config['char'] >['ability_modifier'] >[0]
	>
	type $mol_chip__title_hyoo_dnd_ability_config_6 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_ability_config['ability_title'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_chip__hint_hyoo_dnd_ability_config_7 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_ability_config['ability_hint'] >
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__hint_hyoo_dnd_ability_config_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__sub_hyoo_dnd_ability_config_9 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_ability_config['ability_total_value'] >
		,
		ReturnType< $mol_chip['sub'] >
	>
	type $mol_chip__hint_hyoo_dnd_ability_config_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__sub_hyoo_dnd_ability_config_11 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_ability_config['ability_modifier_value'] >
		,
		ReturnType< $mol_chip['sub'] >
	>
	type $mol_chip__hint_hyoo_dnd_ability_config_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__sub_hyoo_dnd_ability_config_13 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_ability_config['ability_safe_value'] >
		,
		ReturnType< $mol_chip['sub'] >
	>
	type $mol_paginator__value_hyoo_dnd_ability_config_14 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_ability_config['ability_addon'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_view__sub_hyoo_dnd_ability_config_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_dnd_ability_config extends $mol_page {
		ability_total( id: any): ReturnType< ReturnType< $hyoo_dnd_ability_config['char'] >['ability'] >
		ability_addon( id: any, next?: ReturnType< ReturnType< $hyoo_dnd_ability_config['char'] >['ability_addon'] > ): ReturnType< ReturnType< $hyoo_dnd_ability_config['char'] >['ability_addon'] >
		ability_safe( id: any): ReturnType< ReturnType< $hyoo_dnd_ability_config['char'] >['ability_safe'] >
		ability_modifier( id: any): ReturnType< ReturnType< $hyoo_dnd_ability_config['char'] >['ability_modifier'] >
		ability_title( id: any): string
		ability_hint( id: any): string
		Ability_title( id: any): $mol_chip
		ability_total_value( id: any): readonly(any)[]
		Ability_total( id: any): $mol_chip
		ability_modifier_value( id: any): readonly(any)[]
		Ability_modifier( id: any): $mol_chip
		ability_safe_value( id: any): readonly(any)[]
		Ability_safe( id: any): $mol_chip
		Ability_addon( id: any): $mol_paginator
		Ability_row( id: any): $mol_view
		ability_list( ): readonly(any)[]
		title( ): string
		char( ): $hyoo_dnd_char
		pending( next?: number ): number
		body( ): ReturnType< $hyoo_dnd_ability_config['ability_list'] >
	}
	
}

//# sourceMappingURL=config.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	type __hyoo_dnd_skill_config_1 = $mol_type_enforce<
		Parameters< $hyoo_dnd_skill_config['skill'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_skill_config['char'] >['skill'] >[0]
	>
	type __hyoo_dnd_skill_config_2 = $mol_type_enforce<
		Parameters< $hyoo_dnd_skill_config['skill_has'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_skill_config['char'] >['skill_has'] >[0]
	>
	type __hyoo_dnd_skill_config_3 = $mol_type_enforce<
		Parameters< $hyoo_dnd_skill_config['skill_has'] >[1]
		,
		Parameters< ReturnType< $hyoo_dnd_skill_config['char'] >['skill_has'] >[1]
	>
	type $mol_check_box__checked_hyoo_dnd_skill_config_4 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_skill_config['skill_has'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_chip__title_hyoo_dnd_skill_config_5 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_skill_config['skill_title'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_chip__title_hyoo_dnd_skill_config_6 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_skill_config['skill_value'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_view__sub_hyoo_dnd_skill_config_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_dnd_skill_config extends $mol_page {
		skill( id: any): ReturnType< ReturnType< $hyoo_dnd_skill_config['char'] >['skill'] >
		skill_has( id: any, next?: ReturnType< ReturnType< $hyoo_dnd_skill_config['char'] >['skill_has'] > ): ReturnType< ReturnType< $hyoo_dnd_skill_config['char'] >['skill_has'] >
		Skill_addon( id: any): $mol_check_box
		skill_title( id: any): string
		Skill_title( id: any): $mol_chip
		skill_value( id: any): string
		Skill_value( id: any): $mol_chip
		Skill_row( id: any): $mol_view
		skill_list( ): readonly(any)[]
		title( ): string
		char( ): $hyoo_dnd_char
		body( ): ReturnType< $hyoo_dnd_skill_config['skill_list'] >
	}
	
}

//# sourceMappingURL=config.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_number_1 = $mol_type_enforce<
		({ 
			down( next?: ReturnType< $mol_number['event_dec'] > ): ReturnType< $mol_number['event_dec'] >,
			up( next?: ReturnType< $mol_number['event_inc'] > ): ReturnType< $mol_number['event_inc'] >,
			pageDown( next?: ReturnType< $mol_number['event_dec_boost'] > ): ReturnType< $mol_number['event_dec_boost'] >,
			pageUp( next?: ReturnType< $mol_number['event_inc_boost'] > ): ReturnType< $mol_number['event_inc_boost'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_button_minor__event_click_mol_number_2 = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_3 = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_string__type_mol_number_5 = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__keyboard_mol_number_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__value_mol_number_7 = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_number_8 = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled_mol_number_9 = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit_mol_number_10 = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click_mol_number_11 = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_12 = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		event_dec( next?: any ): any
		event_inc( next?: any ): any
		event_dec_boost( next?: any ): any
		event_inc_boost( next?: any ): any
		Hotkey( ): $mol_hotkey
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_chevron_left
		Dec( ): $mol_button_minor
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_chevron_right
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		boost( ): number
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_form_field_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	export class $mol_status extends $mol_view {
		message( ): string
		status( ): ReturnType< $mol_status['title'] >
		minimal_height( ): number
		minimal_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_list__sub_mol_form_1 = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type __mol_form_2 = $mol_type_enforce<
		Parameters< $mol_form['submit_activate'] >[0]
		,
		Parameters< ReturnType< $mol_form['Submit'] >['activate'] >[0]
	>
	type $mol_button_major__title_mol_form_3 = $mol_type_enforce<
		ReturnType< $mol_form['submit_title'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__hint_mol_form_4 = $mol_type_enforce<
		ReturnType< $mol_form['submit_hint'] >
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__click_mol_form_5 = $mol_type_enforce<
		ReturnType< $mol_form['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_status__message_mol_form_6 = $mol_type_enforce<
		ReturnType< $mol_form['result'] >
		,
		ReturnType< $mol_status['message'] >
	>
	type $mol_row__sub_mol_form_7 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_invalid( ): string
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		submit_title( ): string
		submit_hint( ): string
		submit_activate( next?: ReturnType< ReturnType< $mol_form['Submit'] >['activate'] > ): ReturnType< ReturnType< $mol_form['Submit'] >['activate'] >
		submit( next?: any ): any
		Submit( ): $mol_button_major
		result( next?: any ): any
		Result( ): $mol_status
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		save( next?: any ): any
		message_done( ): string
		errors( ): Record<string, string>
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $ {

	export class $mol_form_group extends $mol_view {
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $ {

	type __hyoo_dnd_item_config_1 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['name'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['title'] >[0]
	>
	type __hyoo_dnd_item_config_2 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['price'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['price'] >[0]
	>
	type __hyoo_dnd_item_config_3 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['weight'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['weight'] >[0]
	>
	type __hyoo_dnd_item_config_4 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['ability'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['ability'] >[0]
	>
	type __hyoo_dnd_item_config_5 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['hand1'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['damage_hand1'] >[0]
	>
	type __hyoo_dnd_item_config_6 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['hand2'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['damage_hand2'] >[0]
	>
	type __hyoo_dnd_item_config_7 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['near'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['damage_near'] >[0]
	>
	type __hyoo_dnd_item_config_8 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['distant'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['damage_distant'] >[0]
	>
	type __hyoo_dnd_item_config_9 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['damage_type'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['damage_type'] >[0]
	>
	type __hyoo_dnd_item_config_10 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['distance_norm'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['attack_distance_norm'] >[0]
	>
	type __hyoo_dnd_item_config_11 = $mol_type_enforce<
		Parameters< $hyoo_dnd_item_config['distance_max'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_item_config['item'] >['attack_distance_max'] >[0]
	>
	type $mol_number__value_hyoo_dnd_item_config_12 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['price'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_14 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Price'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_number__value_hyoo_dnd_item_config_15 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['weight'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_17 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Weight'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_item_config_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_paginator__value_hyoo_dnd_item_config_19 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['hand1'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_21 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Hand1'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_paginator__value_hyoo_dnd_item_config_22 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['hand2'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_24 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Hand2'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_item_config_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_paginator__value_hyoo_dnd_item_config_26 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['near'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_28 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Near'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_paginator__value_hyoo_dnd_item_config_29 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['distant'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_30 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_31 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Distant'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_item_config_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_paginator__step_hyoo_dnd_item_config_33 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_paginator['step'] >
	>
	type $mol_paginator__value_hyoo_dnd_item_config_34 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['distance_norm'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_35 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_36 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Distance_norm'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_paginator__step_hyoo_dnd_item_config_37 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_paginator['step'] >
	>
	type $mol_paginator__value_hyoo_dnd_item_config_38 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['distance_max'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_39 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_40 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Distance_max'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_item_config_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_switch__value_hyoo_dnd_item_config_42 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['damage_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__keys_hyoo_dnd_item_config_43 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['damage_options'] >
		,
		ReturnType< $mol_switch['keys'] >
	>
	type $mol_switch__option_title_hyoo_dnd_item_config_44 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['damage_title'] >
		,
		ReturnType< $mol_switch['option_title'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_45 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_46 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Damage_type'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value_hyoo_dnd_item_config_47 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['ability'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_hyoo_dnd_item_config_48 = $mol_type_enforce<
		({ 
			'strength': string,
			'dexterity': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_form_field__name_hyoo_dnd_item_config_49 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_item_config_50 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['Ability'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_chip__title_hyoo_dnd_item_config_51 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['brief'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_string__hint_hyoo_dnd_item_config_52 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_hyoo_dnd_item_config_53 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_config['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	export class $hyoo_dnd_item_config extends $mol_page {
		brief( ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['brief'] >
		name( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['title'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['title'] >
		price( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['price'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['price'] >
		weight( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['weight'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['weight'] >
		ability( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['ability'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['ability'] >
		hand1( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_hand1'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_hand1'] >
		hand2( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_hand2'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_hand2'] >
		near( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_near'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_near'] >
		distant( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_distant'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_distant'] >
		damage_type( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_type'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['damage_type'] >
		distance_norm( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['attack_distance_norm'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['attack_distance_norm'] >
		distance_max( next?: ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['attack_distance_max'] > ): ReturnType< ReturnType< $hyoo_dnd_item_config['item'] >['attack_distance_max'] >
		Price( ): $mol_number
		Price_block( ): $mol_form_field
		Weight( ): $mol_number
		Weight_block( ): $mol_form_field
		Common( ): $mol_form_group
		Hand1( ): $mol_paginator
		Hand1_block( ): $mol_form_field
		Hand2( ): $mol_paginator
		Hand2_block( ): $mol_form_field
		Touch_range( ): $mol_form_group
		Near( ): $mol_paginator
		Near_block( ): $mol_form_field
		Distant( ): $mol_paginator
		Distant_block( ): $mol_form_field
		Long_range( ): $mol_form_group
		Distance_norm( ): $mol_paginator
		Distance_norm_block( ): $mol_form_field
		Distance_max( ): $mol_paginator
		Distance_max_block( ): $mol_form_field
		Distance_limit( ): $mol_form_group
		damage_options( ): readonly(any)[]
		damage_title( id: any): string
		Damage_type( ): $mol_switch
		Damage_type_block( ): $mol_form_field
		Ability( ): $mol_switch
		Ability_block( ): $mol_form_field
		Brief( ): $mol_chip
		item( ): $hyoo_dnd_item
		Title( ): $mol_string
		body( ): readonly(any)[]
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=config.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__arg_hyoo_dnd_item_manage_1 = $mol_type_enforce<
		({ 
			'item': ReturnType< $hyoo_dnd_item_manage['item_id_next'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_dnd_item_manage_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_button_minor__click_hyoo_dnd_item_manage_3 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_manage['item_delete'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_hyoo_dnd_item_manage_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_hyoo_dnd_item_manage_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_dnd_item_config__item_hyoo_dnd_item_manage_6 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_item_manage['item'] >
		,
		ReturnType< $hyoo_dnd_item_config['item'] >
	>
	type $hyoo_dnd_item_config__tools_hyoo_dnd_item_manage_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_item_config['tools'] >
	>
	export class $hyoo_dnd_item_manage extends $mol_book2_catalog {
		item_id_next( ): string
		Item_add_icon( ): $mol_icon_plus
		Item_add( ): $mol_link
		item( id: any): $hyoo_dnd_item
		item_delete( id: any): any
		Item_delete_icon( id: any): $mol_icon_trash_can_outline
		Item_delete( id: any): $mol_button_minor
		item_brief( id: any): string
		Item_brief( id: any): $mol_view
		char( ): $hyoo_dnd_char
		menu_title( ): string
		menu_tools( ): readonly(any)[]
		param( ): string
		Spread( id: any): $hyoo_dnd_item_config
		menu_item_content( id: any): readonly($mol_view)[]
		menu_link_content( id: any): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=manage.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__enabled_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__event_click_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_10 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_15 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		enabled( ): boolean
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
		trigger_enabled( ): ReturnType< $mol_select['enabled'] >
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $ {

	type __hyoo_dnd_spell_config_1 = $mol_type_enforce<
		Parameters< $hyoo_dnd_spell_config['name'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_spell_config['spell'] >['title'] >[0]
	>
	type __hyoo_dnd_spell_config_2 = $mol_type_enforce<
		Parameters< $hyoo_dnd_spell_config['level'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_spell_config['spell'] >['level'] >[0]
	>
	type __hyoo_dnd_spell_config_3 = $mol_type_enforce<
		Parameters< $hyoo_dnd_spell_config['material'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_spell_config['spell'] >['material'] >[0]
	>
	type __hyoo_dnd_spell_config_4 = $mol_type_enforce<
		Parameters< $hyoo_dnd_spell_config['distance'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_spell_config['spell'] >['distance'] >[0]
	>
	type __hyoo_dnd_spell_config_5 = $mol_type_enforce<
		Parameters< $hyoo_dnd_spell_config['damage'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_spell_config['spell'] >['damage'] >[0]
	>
	type __hyoo_dnd_spell_config_6 = $mol_type_enforce<
		Parameters< $hyoo_dnd_spell_config['damage_type'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_spell_config['spell'] >['damage_type'] >[0]
	>
	type __hyoo_dnd_spell_config_7 = $mol_type_enforce<
		Parameters< $hyoo_dnd_spell_config['remarks'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_spell_config['spell'] >['remarks'] >[0]
	>
	type $mol_paginator__value_hyoo_dnd_spell_config_8 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['level'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_spell_config_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_spell_config_10 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['Level'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_number__value_hyoo_dnd_spell_config_11 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['distance'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_spell_config_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_spell_config_13 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['Distance'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_spell_config_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_select__value_hyoo_dnd_spell_config_15 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['damage_type'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options_hyoo_dnd_spell_config_16 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['damage_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__option_label_hyoo_dnd_spell_config_17 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['damage_title'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_form_field__name_hyoo_dnd_spell_config_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_spell_config_19 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['Damage_type'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__value_hyoo_dnd_spell_config_20 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['damage'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_spell_config_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_spell_config_22 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['Damage'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_spell_config_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_check_list__option_checked_hyoo_dnd_spell_config_24 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['component_checked'] >
		,
		ReturnType< $mol_check_list['option_checked'] >
	>
	type $mol_check_list__options_hyoo_dnd_spell_config_25 = $mol_type_enforce<
		({ 
			'verbal': string,
			'somatic': string,
		}) 
		,
		ReturnType< $mol_check_list['options'] >
	>
	type $mol_form_field__name_hyoo_dnd_spell_config_26 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_spell_config_27 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['Components'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__value_hyoo_dnd_spell_config_28 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['material'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_spell_config_29 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_spell_config_30 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['Material'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_spell_config_31 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_textarea__value_hyoo_dnd_spell_config_32 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['remarks'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_spell_config_33 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_spell_config_34 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['Remarks'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_chip__title_hyoo_dnd_spell_config_35 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['brief'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_string__hint_hyoo_dnd_spell_config_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_hyoo_dnd_spell_config_37 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_config['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	export class $hyoo_dnd_spell_config extends $mol_page {
		brief( ): ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['brief'] >
		name( next?: ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['title'] > ): ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['title'] >
		level( next?: ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['level'] > ): ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['level'] >
		material( next?: ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['material'] > ): ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['material'] >
		distance( next?: ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['distance'] > ): ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['distance'] >
		damage( next?: ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['damage'] > ): ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['damage'] >
		damage_type( next?: ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['damage_type'] > ): ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['damage_type'] >
		remarks( next?: ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['remarks'] > ): ReturnType< ReturnType< $hyoo_dnd_spell_config['spell'] >['remarks'] >
		Level( ): $mol_paginator
		Level_block( ): $mol_form_field
		Distance( ): $mol_number
		Distance_block( ): $mol_form_field
		Common( ): $mol_form_group
		damage_options( ): readonly(any)[]
		damage_title( id: any): string
		Damage_type( ): $mol_select
		Damage_type_block( ): $mol_form_field
		Damage( ): $mol_string
		Damage_block( ): $mol_form_field
		Damage_group( ): $mol_form_group
		component_checked( id: any, next?: boolean ): boolean
		Components( ): $mol_check_list
		Components_block( ): $mol_form_field
		Material( ): $mol_string
		Material_block( ): $mol_form_field
		Components_group( ): $mol_form_group
		Remarks( ): $mol_textarea
		Remarks_block( ): $mol_form_field
		Brief( ): $mol_chip
		spell( ): $hyoo_dnd_spell
		Title( ): $mol_string
		body( ): readonly(any)[]
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=config.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__arg_hyoo_dnd_spell_manage_1 = $mol_type_enforce<
		({ 
			'spell': ReturnType< $hyoo_dnd_spell_manage['spell_id_next'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_dnd_spell_manage_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_chip__title_hyoo_dnd_spell_manage_3 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_manage['level_title'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_paginator__value_hyoo_dnd_spell_manage_4 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_manage['level_slot_ready'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_chip__title_hyoo_dnd_spell_manage_5 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_manage['level_slot_max'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_bar__sub_hyoo_dnd_spell_manage_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_list__rows_hyoo_dnd_spell_manage_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_minor__click_hyoo_dnd_spell_manage_8 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_manage['spell_delete'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_hyoo_dnd_spell_manage_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_hyoo_dnd_spell_manage_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_dnd_spell_config__spell_hyoo_dnd_spell_manage_11 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_spell_manage['spell'] >
		,
		ReturnType< $hyoo_dnd_spell_config['spell'] >
	>
	type $hyoo_dnd_spell_config__tools_hyoo_dnd_spell_manage_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_spell_config['tools'] >
	>
	export class $hyoo_dnd_spell_manage extends $mol_book2_catalog {
		spell_id_next( ): string
		Spell_add_icon( ): $mol_icon_plus
		Spell_add( ): $mol_link
		spell( id: any): $hyoo_dnd_spell
		level_title( id: any): string
		Level_title( id: any): $mol_chip
		level_slot_ready( id: any, next?: number ): number
		Level_slot_ready( id: any): $mol_paginator
		level_slot_max( id: any): string
		Level_slot_max( id: any): $mol_chip
		Level_head( id: any): $mol_bar
		level_spells( id: any): readonly(any)[]
		Level( id: any): $mol_list
		levels( ): readonly(any)[]
		spell_delete( id: any): any
		Spell_delete_icon( id: any): $mol_icon_trash_can_outline
		Spell_delete( id: any): $mol_button_minor
		spell_brief( id: any): string
		Spell_brief( id: any): $mol_view
		char( ): $hyoo_dnd_char
		menu_title( ): string
		menu_tools( ): readonly(any)[]
		param( ): string
		Spread( id: any): $hyoo_dnd_spell_config
		menu_links( ): ReturnType< $hyoo_dnd_spell_manage['levels'] >
		menu_item_content( id: any): readonly($mol_view)[]
		menu_link_content( id: any): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=manage.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name_mol_section_1 = $mol_type_enforce<
		ReturnType< $mol_section['title_dom_name'] >
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_section_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_section_3 = $mol_type_enforce<
		ReturnType< $mol_section['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_section_4 = $mol_type_enforce<
		ReturnType< $mol_section['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_section_5 = $mol_type_enforce<
		ReturnType< $mol_section['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_section extends $mol_list {
		title_dom_name( ): string
		Title( ): $mol_view
		tools( ): readonly(any)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		level( ): number
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=section.view.tree.d.ts.map
declare namespace $ {

	type $mol_text_list_item__index_mol_text_list_1 = $mol_type_enforce<
		ReturnType< $mol_text_list['item_index'] >
		,
		ReturnType< $mol_text_list_item['index'] >
	>
	type $mol_text_list_item__sub_mol_text_list_2 = $mol_type_enforce<
		ReturnType< $mol_text_list['block_content'] >
		,
		ReturnType< $mol_text_list_item['sub'] >
	>
	export class $mol_text_list extends $mol_text {
		type( ): string
		auto_scroll( ): any
		attr( ): ({ 
			'mol_text_list_type': ReturnType< $mol_text_list['type'] >,
		})  & ReturnType< $mol_text['attr'] >
		Paragraph( id: any): $mol_text_list_item
	}
	
	export class $mol_text_list_item extends $mol_paragraph {
		index( ): number
		attr( ): ({ 
			'mol_text_list_item_index': ReturnType< $mol_text_list_item['index'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type __hyoo_dnd_char_summary_1 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_summary['level'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_summary['char'] >['level'] >[0]
	>
	type __hyoo_dnd_char_summary_2 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_summary['experience'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_summary['char'] >['experience'] >[0]
	>
	type __hyoo_dnd_char_summary_3 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_summary['remarks'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_summary['char'] >['remarks'] >[0]
	>
	type __hyoo_dnd_char_summary_4 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_summary['hits'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_summary['char'] >['hits'] >[0]
	>
	type __hyoo_dnd_char_summary_5 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_summary['hits_addon'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_summary['char'] >['hits_addon'] >[0]
	>
	type __hyoo_dnd_char_summary_6 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_summary['hits_max'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_summary['char'] >['hits_max'] >[0]
	>
	type $mol_chip__hint_hyoo_dnd_char_summary_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__title_hyoo_dnd_char_summary_8 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['name'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_chip__hint_hyoo_dnd_char_summary_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__sub_hyoo_dnd_char_summary_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chip['sub'] >
	>
	type $mol_chip__hint_hyoo_dnd_char_summary_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__sub_hyoo_dnd_char_summary_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chip['sub'] >
	>
	type $mol_view__sub_hyoo_dnd_char_summary_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_dnd_char_summary_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__hint_hyoo_dnd_char_summary_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__title_hyoo_dnd_char_summary_16 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['race_title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri_hyoo_dnd_char_summary_17 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['race_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__hint_hyoo_dnd_char_summary_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__title_hyoo_dnd_char_summary_19 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['class_title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri_hyoo_dnd_char_summary_20 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['class_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__hint_hyoo_dnd_char_summary_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__title_hyoo_dnd_char_summary_22 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['story_title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri_hyoo_dnd_char_summary_23 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['story_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_view__sub_hyoo_dnd_char_summary_24 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_chip__hint_hyoo_dnd_char_summary_25 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__title_hyoo_dnd_char_summary_26 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['moral_title'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_chip__hint_hyoo_dnd_char_summary_27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['hint'] >
	>
	type $mol_chip__title_hyoo_dnd_char_summary_28 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['ethics_title'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_view__sub_hyoo_dnd_char_summary_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_dnd_char_summary_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_hyoo_dnd_char_summary_31 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['biography'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_hyoo_dnd_char_summary_32 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['traits'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_hyoo_dnd_char_summary_33 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['ideals'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_hyoo_dnd_char_summary_34 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['affection'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_hyoo_dnd_char_summary_35 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['weakness'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_textarea__hint_hyoo_dnd_char_summary_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value_hyoo_dnd_char_summary_37 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['remarks'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_list__rows_hyoo_dnd_char_summary_38 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_hyoo_dnd_char_summary_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paginator__value_hyoo_dnd_char_summary_40 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['level'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_41 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__Value_hyoo_dnd_char_summary_42 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['Level_value'] >
		,
		ReturnType< $hyoo_dnd_parameter['Value'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_43 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__value_hyoo_dnd_char_summary_44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_parameter['value'] >
	>
	type $mol_paginator__value_hyoo_dnd_char_summary_45 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['experience'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_paginator__step_hyoo_dnd_char_summary_46 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_paginator['step'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_47 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__Value_hyoo_dnd_char_summary_48 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['Experience_value'] >
		,
		ReturnType< $hyoo_dnd_parameter['Value'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_49 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__value_hyoo_dnd_char_summary_50 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_parameter['value'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_51 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__value_hyoo_dnd_char_summary_52 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_parameter['value'] >
	>
	type $hyoo_dnd_char_summary_block__title_hyoo_dnd_char_summary_53 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_char_summary_block['title'] >
	>
	type $hyoo_dnd_char_summary_block__content_hyoo_dnd_char_summary_54 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_char_summary_block['content'] >
	>
	type $mol_paginator__value_hyoo_dnd_char_summary_55 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['hits_max'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_56 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__Value_hyoo_dnd_char_summary_57 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['Hits_max_value'] >
		,
		ReturnType< $hyoo_dnd_parameter['Value'] >
	>
	type $mol_paginator__value_hyoo_dnd_char_summary_58 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['hits'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_59 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__Value_hyoo_dnd_char_summary_60 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['Hits_value'] >
		,
		ReturnType< $hyoo_dnd_parameter['Value'] >
	>
	type $mol_paginator__value_hyoo_dnd_char_summary_61 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['hits_addon'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_62 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__Value_hyoo_dnd_char_summary_63 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['Hits_addon_value'] >
		,
		ReturnType< $hyoo_dnd_parameter['Value'] >
	>
	type $hyoo_dnd_parameter__title_hyoo_dnd_char_summary_64 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_parameter['title'] >
	>
	type $hyoo_dnd_parameter__value_hyoo_dnd_char_summary_65 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_parameter['value'] >
	>
	type $hyoo_dnd_char_summary_block__title_hyoo_dnd_char_summary_66 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_char_summary_block['title'] >
	>
	type $hyoo_dnd_char_summary_block__content_hyoo_dnd_char_summary_67 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_char_summary_block['content'] >
	>
	type $mol_list__rows_hyoo_dnd_char_summary_68 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['ability_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_hyoo_dnd_char_summary_69 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $hyoo_dnd_char_summary_block__title_hyoo_dnd_char_summary_70 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_char_summary_block['title'] >
	>
	type $hyoo_dnd_char_summary_block__content_hyoo_dnd_char_summary_71 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['skill_list'] >
		,
		ReturnType< $hyoo_dnd_char_summary_block['content'] >
	>
	type $mol_text__text_hyoo_dnd_char_summary_72 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['perks'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $hyoo_dnd_char_summary_block__title_hyoo_dnd_char_summary_73 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_char_summary_block['title'] >
	>
	type $hyoo_dnd_char_summary_block__Content_hyoo_dnd_char_summary_74 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['Perks'] >
		,
		ReturnType< $hyoo_dnd_char_summary_block['Content'] >
	>
	type $mol_list__rows_hyoo_dnd_char_summary_75 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['item_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $hyoo_dnd_char_summary_block__title_hyoo_dnd_char_summary_76 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_char_summary_block['title'] >
	>
	type $hyoo_dnd_char_summary_block__content_hyoo_dnd_char_summary_77 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_char_summary_block['content'] >
	>
	type $hyoo_dnd_char_summary_block__title_hyoo_dnd_char_summary_78 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_dnd_char_summary_block['title'] >
	>
	type $hyoo_dnd_char_summary_block__content_hyoo_dnd_char_summary_79 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_char_summary_block['content'] >
	>
	type $mol_view__sub_hyoo_dnd_char_summary_80 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_dnd_ability_config__char_hyoo_dnd_char_summary_81 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['char'] >
		,
		ReturnType< $hyoo_dnd_ability_config['char'] >
	>
	type $hyoo_dnd_ability_config__Ability_addon_hyoo_dnd_char_summary_82 = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_dnd_ability_config['Ability_addon'] >
	>
	type $hyoo_dnd_skill_config__char_hyoo_dnd_char_summary_83 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['char'] >
		,
		ReturnType< $hyoo_dnd_skill_config['char'] >
	>
	type $hyoo_dnd_skill_config__Skill_addon_hyoo_dnd_char_summary_84 = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_dnd_skill_config['Skill_addon'] >
	>
	type $hyoo_dnd_item_manage__char_hyoo_dnd_char_summary_85 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['char'] >
		,
		ReturnType< $hyoo_dnd_item_manage['char'] >
	>
	type $hyoo_dnd_item_manage__Item_delete_hyoo_dnd_char_summary_86 = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_dnd_item_manage['Item_delete'] >
	>
	type $hyoo_dnd_spell_manage__char_hyoo_dnd_char_summary_87 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_summary['char'] >
		,
		ReturnType< $hyoo_dnd_spell_manage['char'] >
	>
	type $hyoo_dnd_spell_manage__Spell_delete_hyoo_dnd_char_summary_88 = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_dnd_spell_manage['Spell_delete'] >
	>
	export class $hyoo_dnd_char_summary extends $mol_page {
		name( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['name'] >
		biography( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['biography'] >
		age( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['age'] >
		level( next?: ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['level'] > ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['level'] >
		experience( next?: ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['experience'] > ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['experience'] >
		charm_count( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['charm_count'] >
		spell_count( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['spell_count'] >
		moral( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['moral'] >
		ethics( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['ethics'] >
		traits( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['traits'] >
		ideals( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['ideals'] >
		affection( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['affection'] >
		weakness( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['weakness'] >
		remarks( next?: ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['remarks'] > ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['remarks'] >
		master_bonus( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['master_bonus'] >
		hits( next?: ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['hits'] > ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['hits'] >
		hits_addon( next?: ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['hits_addon'] > ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['hits_addon'] >
		hits_max( next?: ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['hits_max'] > ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['hits_max'] >
		hits_dice( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['hits_dice'] >
		hits_heal( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['char'] >['hits_heal'] >
		ability_list( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['Ability_cofig'] >['ability_list'] >
		skill_list( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['Skill_cofig'] >['skill_list'] >
		item_list( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['Item_list'] >['menu_links'] >
		spell_list( ): ReturnType< ReturnType< $hyoo_dnd_char_summary['Spell_list'] >['Menu_links'] >
		Name( ): $mol_chip
		Age( ): $mol_chip
		speed( ): number
		Speed( ): $mol_chip
		Base( ): $mol_view
		Top( ): $mol_view
		race_title( ): string
		race_link( ): string
		Race( ): $mol_link
		class_title( ): string
		class_link( ): string
		Class( ): $mol_link
		story_title( ): string
		story_link( ): string
		Story( ): $mol_link
		Life( ): $mol_view
		moral_title( ): string
		Goodness( ): $mol_chip
		ethics_title( ): string
		Principality( ): $mol_chip
		Alignment( ): $mol_view
		Main( ): $mol_view
		Biography( ): $mol_text
		Traits( ): $mol_text
		Ideals( ): $mol_text
		Affection( ): $mol_text
		Weakness( ): $mol_text
		Remarks( ): $mol_textarea
		Personality( ): $mol_list
		Info( ): $mol_list
		Level_value( ): $mol_paginator
		Level( ): $hyoo_dnd_parameter
		Master_bonus( ): $hyoo_dnd_parameter
		Experience_value( ): $mol_paginator
		Experience( ): $hyoo_dnd_parameter
		Charm_count( ): $hyoo_dnd_parameter
		Spell_count( ): $hyoo_dnd_parameter
		Grade_block( ): $hyoo_dnd_char_summary_block
		Hits_max_value( ): $mol_paginator
		Hits_max( ): $hyoo_dnd_parameter
		Hits_value( ): $mol_paginator
		Hits( ): $hyoo_dnd_parameter
		Hits_addon_value( ): $mol_paginator
		Hits_addon( ): $hyoo_dnd_parameter
		Hits_heal( ): $hyoo_dnd_parameter
		Hits_block( ): $hyoo_dnd_char_summary_block
		Abilities( ): $mol_list
		Stat_main( ): $mol_list
		Skills( ): $hyoo_dnd_char_summary_block
		perks( ): string
		Perks( ): $mol_text
		Perks_block( ): $hyoo_dnd_char_summary_block
		Inventory( ): $mol_list
		Inventory_block( ): $hyoo_dnd_char_summary_block
		Spell_block( ): $hyoo_dnd_char_summary_block
		Columns( ): $mol_view
		title( ): string
		char( ): $hyoo_dnd_char
		Ability_cofig( ): $hyoo_dnd_ability_config
		Skill_cofig( ): $hyoo_dnd_skill_config
		Item_list( ): $hyoo_dnd_item_manage
		Spell_list( ): $hyoo_dnd_spell_manage
		body( ): readonly(any)[]
	}
	
	export class $hyoo_dnd_char_summary_block extends $mol_section {
		level( ): number
	}
	
}

//# sourceMappingURL=summary.view.tree.d.ts.map
declare namespace $ {

	type __hyoo_dnd_char_main_1 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_main['name'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_main['char'] >['name'] >[0]
	>
	type __hyoo_dnd_char_main_2 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_main['biography'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_main['char'] >['biography'] >[0]
	>
	type __hyoo_dnd_char_main_3 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_main['age'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_main['char'] >['age'] >[0]
	>
	type __hyoo_dnd_char_main_4 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_main['level'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_main['char'] >['level'] >[0]
	>
	type __hyoo_dnd_char_main_5 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_main['race_id'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_main['char'] >['race_id'] >[0]
	>
	type __hyoo_dnd_char_main_6 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_main['story_id'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_main['char'] >['story_id'] >[0]
	>
	type __hyoo_dnd_char_main_7 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_main['class_id'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_main['char'] >['class_id'] >[0]
	>
	type $mol_string__value_hyoo_dnd_char_main_8 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_main_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_main_10 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['Name'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_char_main_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_paginator__value_hyoo_dnd_char_main_12 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['level'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_main_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_main_14 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['Level'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_number__value_hyoo_dnd_char_main_15 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['age'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_main_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_main_17 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['Age'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_dnd_char_main_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_switch__value_hyoo_dnd_char_main_19 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['race_id'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__keys_hyoo_dnd_char_main_20 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['race_options'] >
		,
		ReturnType< $mol_switch['keys'] >
	>
	type $mol_switch__option_title_hyoo_dnd_char_main_21 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['race_title'] >
		,
		ReturnType< $mol_switch['option_title'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_main_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_main_23 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['Race'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_text__text_hyoo_dnd_char_main_24 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['race_descr'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_switch__value_hyoo_dnd_char_main_25 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['class_id'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__keys_hyoo_dnd_char_main_26 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['class_options'] >
		,
		ReturnType< $mol_switch['keys'] >
	>
	type $mol_switch__option_title_hyoo_dnd_char_main_27 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['class_title'] >
		,
		ReturnType< $mol_switch['option_title'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_main_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_main_29 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['Class'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_text__text_hyoo_dnd_char_main_30 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['class_descr'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_switch__value_hyoo_dnd_char_main_31 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['story_id'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__keys_hyoo_dnd_char_main_32 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['story_options'] >
		,
		ReturnType< $mol_switch['keys'] >
	>
	type $mol_switch__option_title_hyoo_dnd_char_main_33 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['story_title'] >
		,
		ReturnType< $mol_switch['option_title'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_main_34 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_main_35 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['Story'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_text__text_hyoo_dnd_char_main_36 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['story_descr'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_textarea__value_hyoo_dnd_char_main_37 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['biography'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_main_38 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_main_39 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_main['Biography'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	export class $hyoo_dnd_char_main extends $mol_page {
		name( next?: ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['name'] > ): ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['name'] >
		biography( next?: ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['biography'] > ): ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['biography'] >
		age( next?: ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['age'] > ): ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['age'] >
		level( next?: ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['level'] > ): ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['level'] >
		race_id( next?: ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['race_id'] > ): ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['race_id'] >
		story_id( next?: ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['story_id'] > ): ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['story_id'] >
		class_id( next?: ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['class_id'] > ): ReturnType< ReturnType< $hyoo_dnd_char_main['char'] >['class_id'] >
		Name( ): $mol_string
		Name_block( ): $mol_form_field
		Base_block( ): $mol_form_group
		Level( ): $mol_paginator
		Level_block( ): $mol_form_field
		Age( ): $mol_number
		Age_block( ): $mol_form_field
		Grade( ): $mol_form_group
		race_options( ): readonly(string)[]
		race_title( id: any): string
		Race( ): $mol_switch
		Race_block( ): $mol_form_field
		race_descr( ): string
		Race_descr( ): $mol_text
		class_options( ): readonly(string)[]
		class_title( id: any): string
		Class( ): $mol_switch
		Class_block( ): $mol_form_field
		class_descr( ): string
		Class_descr( ): $mol_text
		story_options( ): readonly(string)[]
		story_title( id: any): string
		Story( ): $mol_switch
		Story_block( ): $mol_form_field
		story_descr( ): string
		Story_descr( ): $mol_text
		Biography( ): $mol_textarea
		Biography_block( ): $mol_form_field
		title( ): string
		char( ): $hyoo_dnd_char
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=main.view.tree.d.ts.map
declare namespace $ {

	type __hyoo_dnd_char_personality_1 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_personality['moral'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_personality['char'] >['moral'] >[0]
	>
	type __hyoo_dnd_char_personality_2 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_personality['ethics'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_personality['char'] >['ethics'] >[0]
	>
	type __hyoo_dnd_char_personality_3 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_personality['traits'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_personality['char'] >['traits'] >[0]
	>
	type __hyoo_dnd_char_personality_4 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_personality['ideals'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_personality['char'] >['ideals'] >[0]
	>
	type __hyoo_dnd_char_personality_5 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_personality['affection'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_personality['char'] >['affection'] >[0]
	>
	type __hyoo_dnd_char_personality_6 = $mol_type_enforce<
		Parameters< $hyoo_dnd_char_personality['weakness'] >[0]
		,
		Parameters< ReturnType< $hyoo_dnd_char_personality['char'] >['weakness'] >[0]
	>
	type $mol_switch__value_hyoo_dnd_char_personality_7 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['moral'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__keys_hyoo_dnd_char_personality_8 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['moral_options'] >
		,
		ReturnType< $mol_switch['keys'] >
	>
	type $mol_switch__option_title_hyoo_dnd_char_personality_9 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['moral_title'] >
		,
		ReturnType< $mol_switch['option_title'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_personality_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_personality_11 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['Moral'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value_hyoo_dnd_char_personality_12 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['ethics'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__keys_hyoo_dnd_char_personality_13 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['ethics_options'] >
		,
		ReturnType< $mol_switch['keys'] >
	>
	type $mol_switch__option_title_hyoo_dnd_char_personality_14 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['ethics_title'] >
		,
		ReturnType< $mol_switch['option_title'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_personality_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_personality_16 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['Ethics'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_textarea__value_hyoo_dnd_char_personality_17 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['traits'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_personality_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_personality_19 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['Traits'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_textarea__value_hyoo_dnd_char_personality_20 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['ideals'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_personality_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_personality_22 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['Ideals'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_textarea__value_hyoo_dnd_char_personality_23 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['affection'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_personality_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_personality_25 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['Affection'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_textarea__value_hyoo_dnd_char_personality_26 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['weakness'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name_hyoo_dnd_char_personality_27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_dnd_char_personality_28 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_char_personality['Weakness'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	export class $hyoo_dnd_char_personality extends $mol_page {
		moral( next?: ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['moral'] > ): ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['moral'] >
		ethics( next?: ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['ethics'] > ): ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['ethics'] >
		traits( next?: ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['traits'] > ): ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['traits'] >
		ideals( next?: ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['ideals'] > ): ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['ideals'] >
		affection( next?: ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['affection'] > ): ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['affection'] >
		weakness( next?: ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['weakness'] > ): ReturnType< ReturnType< $hyoo_dnd_char_personality['char'] >['weakness'] >
		moral_options( ): readonly(string)[]
		moral_title( id: any): string
		Moral( ): $mol_switch
		Moral_block( ): $mol_form_field
		ethics_options( ): readonly(string)[]
		ethics_title( id: any): string
		Ethics( ): $mol_switch
		Ethics_block( ): $mol_form_field
		Traits( ): $mol_textarea
		Traits_block( ): $mol_form_field
		Ideals( ): $mol_textarea
		Ideals_block( ): $mol_form_field
		Affection( ): $mol_textarea
		Affection_block( ): $mol_form_field
		Weakness( ): $mol_textarea
		Weakness_block( ): $mol_form_field
		title( ): string
		char( ): $hyoo_dnd_char
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=personality.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_brightness_4 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=4.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_4
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		dark( ): string
		theme( ): ReturnType< $mol_theme_auto['dark'] >
		light( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $ {

	type $hyoo_dnd_char_summary__char_hyoo_dnd_app_1 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_app['char'] >
		,
		ReturnType< $hyoo_dnd_char_summary['char'] >
	>
	type $hyoo_dnd_char_summary__tools_hyoo_dnd_app_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_char_summary['tools'] >
	>
	type $hyoo_dnd_char_main__char_hyoo_dnd_app_3 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_app['char'] >
		,
		ReturnType< $hyoo_dnd_char_main['char'] >
	>
	type $hyoo_dnd_char_main__tools_hyoo_dnd_app_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_char_main['tools'] >
	>
	type $hyoo_dnd_char_personality__char_hyoo_dnd_app_5 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_app['char'] >
		,
		ReturnType< $hyoo_dnd_char_personality['char'] >
	>
	type $hyoo_dnd_char_personality__tools_hyoo_dnd_app_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_char_personality['tools'] >
	>
	type $hyoo_dnd_ability_config__char_hyoo_dnd_app_7 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_app['char'] >
		,
		ReturnType< $hyoo_dnd_ability_config['char'] >
	>
	type $hyoo_dnd_ability_config__tools_hyoo_dnd_app_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_ability_config['tools'] >
	>
	type $hyoo_dnd_skill_config__char_hyoo_dnd_app_9 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_app['char'] >
		,
		ReturnType< $hyoo_dnd_skill_config['char'] >
	>
	type $hyoo_dnd_skill_config__tools_hyoo_dnd_app_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_skill_config['tools'] >
	>
	type $hyoo_dnd_item_manage__char_hyoo_dnd_app_11 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_app['char'] >
		,
		ReturnType< $hyoo_dnd_item_manage['char'] >
	>
	type $hyoo_dnd_item_manage__addon_tools_hyoo_dnd_app_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_item_manage['addon_tools'] >
	>
	type $hyoo_dnd_spell_manage__char_hyoo_dnd_app_13 = $mol_type_enforce<
		ReturnType< $hyoo_dnd_app['char'] >
		,
		ReturnType< $hyoo_dnd_spell_manage['char'] >
	>
	type $hyoo_dnd_spell_manage__addon_tools_hyoo_dnd_app_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_dnd_spell_manage['addon_tools'] >
	>
	type $mol_link_source__uri_hyoo_dnd_app_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	export class $hyoo_dnd_app extends $mol_book2_catalog {
		char_image( ): ReturnType< ReturnType< $hyoo_dnd_app['char'] >['image'] >
		background( ): string
		Summary( ): $hyoo_dnd_char_summary
		Main( ): $hyoo_dnd_char_main
		Personality( ): $hyoo_dnd_char_personality
		Params( ): $hyoo_dnd_ability_config
		Skills( ): $hyoo_dnd_skill_config
		Inventory_spread( ): ReturnType< ReturnType< $hyoo_dnd_app['Inventory'] >['spread_current'] >
		Inventory( ): $hyoo_dnd_item_manage
		Spells_spread( ): ReturnType< ReturnType< $hyoo_dnd_app['Spells'] >['spread_current'] >
		Spells( ): $hyoo_dnd_spell_manage
		Source( ): $mol_link_source
		Lights( ): $mol_lights_toggle
		Theme( ): $mol_theme_auto
		param( ): string
		menu_title( ): string
		char( ): $hyoo_dnd_char
		style( ): ({ 
			'background-image': ReturnType< $hyoo_dnd_app['background'] >,
		}) 
		spreads( ): ({ 
			'summary': ReturnType< $hyoo_dnd_app['Summary'] >,
			'main': ReturnType< $hyoo_dnd_app['Main'] >,
			'personality': ReturnType< $hyoo_dnd_app['Personality'] >,
			'Params': ReturnType< $hyoo_dnd_app['Params'] >,
			'skills': ReturnType< $hyoo_dnd_app['Skills'] >,
			'inventory': ReturnType< $hyoo_dnd_app['Inventory'] >,
			'speels': ReturnType< $hyoo_dnd_app['Spells'] >,
		}) 
		menu_foot( ): readonly(any)[]
		Placeholder( ): any
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
