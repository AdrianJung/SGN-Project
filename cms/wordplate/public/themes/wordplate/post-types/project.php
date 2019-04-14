<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('project', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Project'),
            'edit_item' => __('Edit Project'),
            'name' => __('Projects'),
            'search_items' => __('Search Projects'),
            'singular_name' => __('Project'),
        ],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-groups',
        'menu_position' => 20,
        'public' => true,
    ]);
});
