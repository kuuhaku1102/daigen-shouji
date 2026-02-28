<?php get_header(); ?>

<main class="site-main">
    <section class="section hero-sub" style="padding-top: 160px; padding-bottom: 80px; background: var(--gradient-brand); color: #fff; text-align: center;">
        <div class="container">
            <h1 class="section-title" style="background: none; -webkit-text-fill-color: initial; color: #fff;">Our Business</h1>
            <p class="section-lead" style="color: rgba(255,255,255,0.8);">事業内容一覧</p>
        </div>
    </section>

    <section class="section section-alt">
        <div class="container">
            <div class="bento-grid">
                <?php
                if (have_posts()) :
                    while (have_posts()) : the_post();
                        $img_url = get_post_meta(get_the_ID(), '_mock_image_url', true);
                        if (!$img_url && has_post_thumbnail()) {
                            $img_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
                        }
                        $bg_style = $img_url ? 'background-image: url(' . esc_url($img_url) . '); background-size: cover; background-position: center;' : 'background: #0E1A2B;';
                ?>
                        <a href="<?php the_permalink(); ?>" class="bento-card col-6 js-fade" style="<?php echo $bg_style; ?>">
                            <div class="bento-overlay"></div>
                            <div class="bento-content">
                                <h3><?php the_title(); ?></h3>
                                <p><?php echo wp_trim_words(get_the_excerpt(), 25); ?></p>
                            </div>
                        </a>
                <?php
                    endwhile;
                else :
                    echo '<p>現在準備中です。</p>';
                endif;
                ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
