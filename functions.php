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

/**
 * Register Custom Post Type for Business
 */
function daigen_register_business_cpt() {
    $labels = [
        'name'               => '事業内容',
        'singular_name'      => '事業内容',
        'menu_name'          => '事業内容 (Our Business)',
        'add_new'            => '新規追加',
        'add_new_item'       => '新しい事業内容を追加',
        'edit_item'          => '事業内容を編集',
        'new_item'           => '新しい事業内容',
        'view_item'          => '事業内容を表示',
        'search_items'       => '事業内容を検索',
        'not_found'          => '事業内容が見つかりません',
        'not_found_in_trash' => 'ゴミ箱に事業内容はありません',
    ];
    $args = [
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'query_var'           => true,
        'rewrite'             => ['slug' => 'business'],
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_icon'           => 'dashicons-building',
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest'        => true,
    ];
    register_post_type('business', $args);
}
add_action('init', 'daigen_register_business_cpt');

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

/**
 * Auto-seed initial Business posts if empty
 */
function daigen_seed_business_posts() {
    $count = wp_count_posts('business');
    if ($count && $count->publish > 0) {
        return; // Already seeded
    }

    $businesses = [
        [
            'title' => '輸入・貿易事業',
            'excerpt' => '世界中の良質な製品を発掘し、日本市場へお届けします。安全かつ迅速なロジスティクスを構築しています。',
            'content' => '私たちの輸入・貿易事業は、単にモノを運ぶだけでなく、現地の文化や価値観も共に日本へ紹介することをミッションとしています。厳格な品質管理基準をクリアした製品のみを取り扱い、国内外のパートナー企業と強固なネットワークを構築しています。',
            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=1600&auto=format&fit=crop',
        ],
        [
            'title' => 'トレーディングカード売買事業',
            'excerpt' => '国内外で需要が高まるトレーディングカード。真贋鑑定を取り入れた安心の売買ネットワークを提供します。',
            'content' => 'トレーディングカードは今や世界的なアセットクラスとして認識されています。私たちは市場のトレンドをいち早く分析し、適正価格での買取・販売を行っています。コレクターの皆様に安心していただけるよう、徹底した状態管理と真贋判定システムを導入しています。',
            'image' => 'https://images.unsplash.com/photo-1601805566370-13f9c5fc9122?q=80&w=1600&auto=format&fit=crop',
        ],
        [
            'title' => 'トレカショップ運営（TORECAMOB）',
            'excerpt' => '洗練された空間デザインで、プレイヤーとコレクターが集う次世代のトレカコミュニティ拠点。',
            'content' => '「TORECAMOB」は、従来のカードショップの枠を超えたラグジュアリーなリテール体験を提供します。モダンで洗練された店内設計により、購入体験そのものをエンターテインメントへと昇華。各種イベントや交流会も定期的に開催し、リアルならではのコミュニティ形成を推進しています。',
            'image' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop',
        ],
        [
            'title' => 'ECプラットフォーム事業',
            'excerpt' => '自社ECサイト構築や各種プラットフォームへの展開を通じ、国内外のデジタル購買層にダイレクトにアプローチします。',
            'content' => '越境ECを含む多様なプラットフォームでのオンライン販売を展開。データ分析とデジタルマーケティングを駆使し、顧客のインサイトに基づいた最適なUI/UXとプロモーション設計を行っています。商品との出会いをオンライン上でどう最大化させるかに注力しています。',
            'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
        ],
        [
            'title' => '海外輸出事業',
            'excerpt' => '日本国内の魅力的なプロダクトを、データドリブンなアプローチで世界の適切なマーケットへ展開します。',
            'content' => '日本には「本物」と呼べる素晴らしい製品が数多く眠っています。私たちはそれらを発掘し、海外の需要とマッチングさせることで輸出を促進します。現地の法規制、商習慣、そしてマーケティング手法を熟知した専門チームが、グローバル展開を強力にサポートします。',
            'image' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop',
        ],
        [
            'title' => 'コンサルティング事業',
            'excerpt' => '弊社の貿易・ECのノウハウを活かし、他社のグローバル展開や新規事業の立ち上げをハンズオンでサポート。',
            'content' => '自社の実事業で培った貿易、EC、店舗運営のリソースとノウハウを、クライアント企業に提供します。市場調査からサプライチェーンの構築、デジタルマーケティング戦略の立案まで、実効性のあるコンサルティングサービスを展開し、パートナーの成長にコミットします。',
            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1600&auto=format&fit=crop',
        ]
    ];

    foreach ($businesses as $b) {
        $post_id = wp_insert_post([
            'post_title'   => wp_strip_all_tags($b['title']),
            'post_excerpt' => $b['excerpt'],
            'post_content' => $b['content'],
            'post_status'  => 'publish',
            'post_type'    => 'business',
        ]);
        if (!is_wp_error($post_id)) {
            update_post_meta($post_id, '_mock_image_url', $b['image']);
        }
    }
}
add_action('init', 'daigen_seed_business_posts');

/**
 * Auto-seed initial Global page if empty
 */
function daigen_seed_global_page() {
    $page = get_page_by_path('global');
    if (!$page) {
        $page_id = wp_insert_post([
            'post_title' => '海外展開',
            'post_name' => 'global',
            'post_status' => 'publish',
            'post_type' => 'page',
            'post_content' => ''
        ]);
        if ($page_id && !is_wp_error($page_id)) {
            update_post_meta($page_id, '_wp_page_template', 'page-global.php');
        }
    }
}
add_action('init', 'daigen_seed_global_page');

/**
 * Menu Auto-setup Fallback
 */
function daigen_primary_menu_fallback() {
    echo '<ul id="menu-primary" class="primary-menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Home</a></li>';
    echo '<li><a href="' . esc_url(get_post_type_archive_link('business')) . '">Our Business</a></li>';
    echo '<li><a href="' . esc_url(home_url('/global/')) . '">Global</a></li>';
    echo '<li><a href="' . esc_url(home_url('/#company')) . '">Company</a></li>';
    echo '<li><a href="' . esc_url(home_url('/#contact')) . '">Contact</a></li>';
    echo '</ul>';
}

/**
 * Filter to auto-append to the menu if it doesn't exist
 */
function daigen_add_custom_menus_to_primary($items, $args) {
    if ($args->theme_location == 'primary' || empty($items)) {
        if (strpos($items, 'Our Business') === false && strpos($items, '事業内容') === false) {
            $items .= '<li class="menu-item"><a href="' . esc_url(get_post_type_archive_link('business')) . '">Our Business</a></li>';
        }
        if (strpos($items, 'Global') === false && strpos($items, '海外展開') === false) {
            $page = get_page_by_path('global');
            if ($page) {
                $items .= '<li class="menu-item"><a href="' . esc_url(get_permalink($page->ID)) . '">Global</a></li>';
            } else {
                $items .= '<li class="menu-item"><a href="' . esc_url(home_url('/global/')) . '">Global</a></li>';
            }
        }
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'daigen_add_custom_menus_to_primary', 10, 2);
