<?php get_header(); ?>

<?php
while (have_posts()) :
    the_post();
    $img_url = get_post_meta(get_the_ID(), '_mock_image_url', true);
    if (!$img_url && has_post_thumbnail()) {
        $img_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
    }
    $bg_style = $img_url ? 'background-image: url(' . esc_url($img_url) . '); background-size: cover; background-position: center; background-attachment: fixed;' : 'background: var(--gradient-brand);';
?>

<main class="site-main">
    <section class="business-single-hero js-fade" style="position: relative; height: 60vh; min-height: 400px; display: flex; align-items: flex-end; padding-bottom: 60px; <?php echo $bg_style; ?>">
        <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(14,26,43,0.3) 0%, rgba(14,26,43,0.9) 100%); z-index: 1;"></div>
        <div class="container" style="position: relative; z-index: 2; color: #fff;">
            <p style="color: var(--accent); font-weight: 700; letter-spacing: 2px; margin-bottom: 8px;">OUR BUSINESS</p>
            <h1 class="section-title" style="background: none; -webkit-text-fill-color: initial; color: #fff; margin-bottom: 16px; font-size: clamp(32px, 4vw, 56px);"><?php the_title(); ?></h1>
            <p class="section-lead" style="color: rgba(255,255,255,0.8); max-width: 800px; margin: 0; text-align: left; font-size: 18px;"><?php echo get_the_excerpt(); ?></p>
        </div>
    </section>

    <section class="section section-alt js-fade">
        <div class="container" style="max-width: 800px; margin: 0 auto; background: var(--surface); padding: 60px; border-radius: 24px; box-shadow: var(--shadow); margin-top: -80px; position: relative; z-index: 10;">
            <div class="post-content" style="font-size: 16px; line-height: 2; color: var(--muted);">
                <?php the_content(); ?>
            </div>
            
            <div style="margin-top: 60px; padding-top: 40px; border-top: 1px solid var(--line); text-align: center;">
                <a href="<?php echo esc_url(get_post_type_archive_link('business')); ?>" class="btn btn-outline" style="margin-right: 16px;">事業一覧へ戻る</a>
                <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="btn btn-accent">お問い合わせ</a>
            </div>
        </div>
    </section>
</main>

<?php endwhile; ?>

<?php get_footer(); ?>
