<?php

add_action('rest_api_init', 'activitiesSearch');

function activitiesSearch() {
    register_rest_route('activities', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'activitiesSearchResults'
    ));
}

// REST API Endpoint --
// http://localhost:8888/wp-json/activities/search -- RETURNS ALL activitiesSearch
// http://localhost:8888/wp-json/activities/search?branch={NAME} -- RETURNS activities within branch with NAME
//
function activitiesSearchResults($data) {
    $activities = new WP_Query([
        'post_type' => 'activity',
    ]);

    $activitiesResult = array();

    while($activities->have_posts()) {
        $activities->the_post();

        array_push($activitiesResult, array(
            'title' => get_the_title(),
            'branch' => get_field('branch'),
            'date' => get_field('date'),
            'time' => get_field('time')
        ));
    }

    $finalArray = array();

    foreach ($activitiesResult as $activity) {
        if($activity['branch']->post_name == $data['branch'])
        {
            array_push($finalArray, $activity);
        }
    };

    if(!isset($data['branch'])){
        return $activitiesResult;
    }

    return $finalArray;

}
