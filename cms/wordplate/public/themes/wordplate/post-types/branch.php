<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('branch', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Branch'),
            'edit_item' => __('Edit Branch'),
            'name' => __('Branches'),
            'search_items' => __('Search Branches'),
            'singular_name' => __('Branch'),
        ],
        'show_in_graphql' => true,
        'graphql_single_name' => 'branch',
        'graphql_plural_name' => 'branches',
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-groups',
        'menu_position' => 20,
        'public' => true,
    ]);
});
