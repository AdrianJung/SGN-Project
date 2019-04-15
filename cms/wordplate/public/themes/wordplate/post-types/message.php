<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('message', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Message'),
            'edit_item' => __('Edit Message'),
            'name' => __('Messages'),
            'search_items' => __('Search Messages'),
            'singular_name' => __('Message'),
        ],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-email-alt',
        'menu_position' => 20,
        'public' => true,
    ]);
});
