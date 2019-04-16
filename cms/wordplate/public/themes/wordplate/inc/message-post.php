<?php

add_action('rest_api_init', 'messagePost');

function messagePost() {
    register_rest_route('messages', 'post', array(
        'methods' => 'POST',
        'callback' => 'messagePostResponse'
    ));
}

function messagePostResponse($data) {

    $body = json_decode($data->get_body());

    $post_information = array(
        //'promotion_name' => $_POST['name'],
        'post_title' => $body->name,
        'post_type' => 'message',
        'post_status' => 'publish'
    );

    $postID = wp_insert_post( $post_information ); //here's the catch

    update_field('name', $body->name, $postID);
    update_field('email', $body->email, $postID);
    update_field('message', $body->message, $postID);

}
