<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container header-inner">
    <div class="site-brand">
      <a class="site-logo" href="<?php echo esc_url(home_url('/')); ?>">
        <span class="site-logo-mark">大</span>
        <span class="site-logo-text"><?php bloginfo('name'); ?></span>
      </a>
    </div>

    <button class="nav-toggle" aria-label="menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <nav class="site-nav" aria-label="Primary">
      <?php
        wp_nav_menu([
          'theme_location' => 'primary',
          'container' => false,
          'menu_class' => 'menu',
          'fallback_cb' => false,
        ]);
      ?>
    </nav>
  </div>
</header>

<main class="site-main">
