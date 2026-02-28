<section id="business" class="section section-alt">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title js-fade">Our Business</h2>
      <p class="section-lead js-fade">大元商事は「グローバル」と「トレカ/ホビー」を中核とし、複合的な事業モデルで価値を創造します。</p>
    </div>

    <div class="bento-grid js-stagger">
      <?php
      $args = [
        'post_type' => 'business',
        'posts_per_page' => 6,
        'orderby' => 'menu_order title',
        'order' => 'ASC'
      ];
      $business_query = new WP_Query($args);

      if ($business_query->have_posts()) :
        $index = 0;
        // Map grid sizes: 8, 4, 4, 8, 6, 6
        $sizes = ['col-8', 'col-4', 'col-4', 'col-8', 'col-6', 'col-6'];

        while ($business_query->have_posts()) : $business_query->the_post();
          $size_class = isset($sizes[$index]) ? $sizes[$index] : 'col-6';
          
          // Get mock URL or featured image
          $img_url = get_post_meta(get_the_ID(), '_mock_image_url', true);
          if (!$img_url && has_post_thumbnail()) {
              $img_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
          }
          
          // Fallback solid color if no image
          $bg_style = $img_url ? 'background-image: url(' . esc_url($img_url) . '); background-size: cover; background-position: center;' : 'background: #0E1A2B;';
          ?>
          <a href="<?php the_permalink(); ?>" class="bento-card <?php echo esc_attr($size_class); ?>" style="<?php echo $bg_style; ?>">
            <div class="bento-overlay"></div>
            <div class="bento-content">
              <h3><?php the_title(); ?></h3>
              <p><?php echo wp_trim_words(get_the_excerpt(), 25); ?></p>
            </div>
          </a>
          <?php
          $index++;
        endwhile;
        wp_reset_postdata();
      else :
      ?>
        <p>現在事業内容の準備中です。</p>
      <?php endif; ?>
    </div>
  </div>
</section>
