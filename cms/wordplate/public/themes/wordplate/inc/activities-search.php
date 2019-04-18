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

    global $polylang;
    $default = pll_default_language();
    $langs = pll_languages_list();

    $lang = $default;


    if(isset($data['locale'])){
        if (in_array($data['locale'], $langs)) {
            $lang = $data['locale'];
        }
    }


    $activities = new WP_Query([
        'post_type' => 'activity',
        'lang' => $lang,
    ]);

    $activitiesResult = array();

    while($activities->have_posts()) {
        $activities->the_post();

        array_push($activitiesResult, array(
            'title' => get_the_title(),
            'branch' => get_field('branch'),
            'date' => get_field('date'),
            'time' => get_field('time'),
            'location' => get_field('location'),
            'description' => get_field('description')
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
