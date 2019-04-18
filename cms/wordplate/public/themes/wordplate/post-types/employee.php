<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('employee', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Employee'),
            'edit_item' => __('Edit Employee'),
            'name' => __('Employees'),
            'search_items' => __('Search Employees'),
            'singular_name' => __('Employee'),
        ],
        'show_in_graphql' => true,
        'show_in_rest' => true,
        'graphql_single_name' => 'Employee',
        'graphql_plural_name' => 'Employees',
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-businessman',
        'menu_position' => 20,
        'public' => true,
    ]);
});
