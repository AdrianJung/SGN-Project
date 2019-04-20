<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('startpage', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Starpage'),
            'edit_item' => __('Edit Startpage'),
            'name' => __('Startpages'),
            'search_items' => __('Search Startpages'),
            'singular_name' => __('Startpage'),
        ],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-align-left',
        'menu_position' => 20,
        'public' => true,
    ]);
});
