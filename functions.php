<?php
/**
 * Daigen Corporate Theme functions
 */

if (!defined('DAIGEN_VERSION')) {
  define('DAIGEN_VERSION', '1.0.0');
}

function daigen_theme_setup() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
  register_nav_menus([
    'primary' => __('Primary Menu', 'daigen-corporate'),
    'footer'  => __('Footer Menu', 'daigen-corporate'),
  ]);
}
add_action('after_setup_theme', 'daigen_theme_setup');

function daigen_assets() {
  wp_enqueue_style('daigen-main', get_template_directory_uri() . '/assets/css/style.css', [], time());
  wp_enqueue_script('daigen-main', get_template_directory_uri() . '/assets/js/main.js', [], time(), true);
}
add_action('wp_enqueue_scripts', 'daigen_assets');

/**
 * Utility: output safe text
 */
function daigen_esc($text) {
  return esc_html($text ?? '');
}

/**
 * Optional: Add a simple "Site Options" via Customizer (hero text).
 */
function daigen_customize_register($wp_customize) {
  $wp_customize->add_section('daigen_hero', [
    'title' => __('Hero Settings', 'daigen-corporate'),
    'priority' => 30,
  ]);

  $wp_customize->add_setting('daigen_hero_title', [
    'default' => '世界へ、日本の価値を届ける。',
    'sanitize_callback' => 'sanitize_text_field',
  ]);
  $wp_customize->add_control('daigen_hero_title', [
    'label' => __('Hero Title', 'daigen-corporate'),
    'section' => 'daigen_hero',
    'type' => 'text',
  ]);

  $wp_customize->add_setting('daigen_hero_lead', [
    'default' => '輸入・貿易・トレーディングカード事業を通じてグローバル市場へ展開',
    'sanitize_callback' => 'sanitize_text_field',
  ]);
  $wp_customize->add_control('daigen_hero_lead', [
    'label' => __('Hero Lead', 'daigen-corporate'),
    'section' => 'daigen_hero',
    'type' => 'text',
  ]);
}
add_action('customize_register', 'daigen_customize_register');
