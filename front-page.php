<?php get_header(); ?>

<?php get_template_part('template-parts/section', 'hero'); ?>

<div class="content-wrapper">
  <?php get_template_part('template-parts/section', 'business'); ?>
  <?php get_template_part('template-parts/section', 'global'); ?>
  <?php get_template_part('template-parts/section', 'torecamob'); ?>
  <?php get_template_part('template-parts/section', 'philosophy'); ?>
  <?php get_template_part('template-parts/section', 'news'); ?>
  <?php get_template_part('template-parts/section', 'cta'); ?>
</div>

<?php get_footer(); ?>
