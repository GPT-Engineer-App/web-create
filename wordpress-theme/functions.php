<?php
function dein_unternehmensname_setup() {
    add_theme_support('title-tag');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'dein_unternehmensname'),
    ));
}
add_action('after_setup_theme', 'dein_unternehmensname_setup');

function dein_unternehmensname_scripts() {
    wp_enqueue_style('dein_unternehmensname-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'dein_unternehmensname_scripts');
?>