<?php get_header(); ?>

<section class="section">
  <div class="container">
    <h1 class="section-title"><?php single_post_title(); ?></h1>

    <?php if (have_posts()): ?>
      <div class="posts">
        <?php while (have_posts()): the_post(); ?>
          <article class="post-card">
            <a class="post-card-link" href="<?php the_permalink(); ?>">
              <div class="post-card-body">
                <h2 class="post-card-title"><?php the_title(); ?></h2>
                <div class="post-card-meta"><?php echo esc_html(get_the_date()); ?></div>
                <div class="post-card-excerpt"><?php echo esc_html(wp_strip_all_tags(get_the_excerpt())); ?></div>
              </div>
            </a>
          </article>
        <?php endwhile; ?>
      </div>

      <div class="pagination">
        <?php the_posts_pagination(); ?>
      </div>
    <?php else: ?>
      <p>投稿がありません。</p>
    <?php endif; ?>
  </div>
</section>

<?php get_footer(); ?>
