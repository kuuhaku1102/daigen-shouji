<section id="news" class="section section-alt">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title js-fade">News</h2>
      <p class="section-lead js-fade">大元商事の最新情報・お知らせ</p>
    </div>

    <!-- Latest 3 news posts -->
    <div class="posts js-stagger">
      <?php
        $args = array(
          'post_type' => 'post',
          'posts_per_page' => 3
        );
        $query = new WP_Query($args);
        
        if($query->have_posts()) :
          while($query->have_posts()) : $query->the_post();
      ?>
      <div class="post-card js-card">
        <a href="<?php the_permalink(); ?>" class="post-card-link">
          <div class="post-card-meta"><?php echo get_the_date('Y.m.d'); ?></div>
          <h3 class="post-card-title"><?php the_title(); ?></h3>
          <div class="post-card-excerpt">
             <?php echo wp_trim_words(get_the_content(), 40, '...'); ?>
          </div>
        </a>
      </div>
      <?php 
          endwhile;
          wp_reset_postdata();
        else : 
      ?>
        <p>現在お知らせはありません。</p>
      <?php endif; ?>
    </div>
  </div>
</section>
