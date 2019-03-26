<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('activity', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Activity'),
            'edit_item' => __('Edit Activity'),
            'name' => __('Activities'),
            'search_items' => __('Search Activity'),
            'singular_name' => __('Activity'),
        ],
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-art',
        'menu_position' => 20,
        'public' => true,
    ]);
});
