</main>

<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <div class="footer-title"><?php bloginfo('name'); ?></div>
      <div class="footer-meta">© <?php echo date('Y'); ?> <?php bloginfo('name'); ?></div>
    </div>

    <nav class="footer-nav" aria-label="Footer">
      <?php
        wp_nav_menu([
          'theme_location' => 'footer',
          'container' => false,
          'menu_class' => 'menu',
          'fallback_cb' => false,
        ]);
      ?>
    </nav>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
