<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('Story', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Story'),
            'edit_item' => __('Edit Story'),
            'name' => __('Stories'),
            'search_items' => __('Search Story'),
            'singular_name' => __('Story'),
        ],
        'show_in_graphql' => true,
        'show_in_rest' => true,
        'graphql_single_name' => 'story',
        'graphql_plural_name' => 'stories',
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-book-alt',
        'menu_position' => 20,
        'public' => true
    ]);
});
