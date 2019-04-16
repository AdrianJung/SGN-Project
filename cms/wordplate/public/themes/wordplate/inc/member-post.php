<?php

add_action('rest_api_init', 'memberPost');

function memberPost() {
    register_rest_route('members', 'post', array(
        'methods' => 'POST',
        'callback' => 'memberPostResponse'
    ));
}

function memberPostResponse($data) {

    $body = json_decode($data->get_body());

    $post_information = array(
        'post_title' => $body->firstName." ".$body->lastName,
        'post_type' => 'member',
        'post_status' => 'publish'
    );

    $postID = wp_insert_post( $post_information ); //here's the catch

    update_field('first_name', $body->firstName, $postID);
    update_field('last_name', $body->lastName, $postID);
    update_field('person_number', $body->personNumber, $postID);
    update_field('birth_date', $body->birthDate, $postID);
    update_field('lma_number', $body->lmaNumber, $postID);
    update_field('email', $body->email, $postID);
    update_field('phone_number', $body->phone, $postID);
    update_field('adress', $body->adress, $postID);
    update_field('city', $body->city, $postID);
    update_field('post_number', $body->postNumber, $postID);
    update_field('nationality', $body->nationality, $postID);
    update_field('arrival_date', $body->arrivalDate, $postID);
    update_field('education', $body->education, $postID);
    update_field('work_experience', $body->workExperience, $postID);
    update_field('languages', $body->languages, $postID);

}
