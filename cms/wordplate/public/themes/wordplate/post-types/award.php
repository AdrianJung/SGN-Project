<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('award', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Award'),
            'edit_item' => __('Edit Award'),
            'name' => __('Awards'),
            'search_items' => __('Search Award'),
            'singular_name' => __('Award'),
        ],
        'show_in_graphql' => true,
        'show_in_rest' => true,
        'graphql_single_name' => 'award',
        'graphql_plural_name' => 'awards',
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-awards',
        'menu_position' => 20,
        'public' => true
    ]);
});
