<?php get_header(); ?>

<section class="section">
  <div class="container">
    <?php while (have_posts()): the_post(); ?>
      <article class="content">
        <h1 class="section-title"><?php the_title(); ?></h1>
        <div class="content-meta"><?php echo esc_html(get_the_date()); ?></div>
        <div class="prose">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; ?>
  </div>
</section>

<?php get_footer(); ?>
