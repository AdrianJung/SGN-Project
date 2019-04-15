<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('member', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Member'),
            'edit_item' => __('Edit Member'),
            'name' => __('Members'),
            'search_items' => __('Search Members'),
            'singular_name' => __('Member'),
        ],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-email-alt',
        'menu_position' => 20,
        'public' => true,
    ]);
});
