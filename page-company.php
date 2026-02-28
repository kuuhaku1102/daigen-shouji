<?php
/* Template Name: 会社情報 */
get_header(); ?>

<main class="site-main" style="background: var(--bg); overflow-x: hidden;">
    
    <!-- Hero Section -->
    <section class="company-hero" style="position: relative; height: 60vh; min-height: 500px; display: flex; align-items: center; justify-content: center; background: var(--gradient-brand); overflow: hidden;">
        <!-- Background decorative elements -->
        <div style="position: absolute; inset: 0; background: radial-gradient(circle at 20% 80%, rgba(19,184,199,0.15), transparent 60%), radial-gradient(circle at 80% 20%, rgba(201,204,209,0.1), transparent 60%); pointer-events: none;"></div>
        
        <!-- SVG Animation Layer -->
        <svg class="js-company-svg" viewBox="0 0 800 400" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity: 0.3; pointer-events: none;" preserveAspectRatio="xMidYMid slice">
            <path class="draw-path" d="M -100,200 C -50,150 200,300 400,200 C 600,100 850,250 900,200" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
            <path class="draw-path-2" d="M -100,250 C 100,350 300,50 500,200 C 700,350 850,150 900,200" fill="none" stroke="var(--accent)" stroke-width="1" stroke-dasharray="10 10" />
            <circle class="glow-dot" cx="400" cy="200" r="4" fill="#fff" />
        </svg>

        <div class="container" style="position: relative; z-index: 10; text-align: center; color: #fff;">
            <p class="js-fade" style="color: var(--accent); font-weight: 700; letter-spacing: 2px; margin-bottom: 12px; font-size: 14px; text-transform: uppercase;">Company</p>
            <h1 class="js-fade" style="font-size: clamp(40px, 5vw, 64px); font-weight: 800; line-height: 1.2; margin-bottom: 24px; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));">会社情報</h1>
            <p class="js-fade" style="font-size: 18px; line-height: 1.8; color: rgba(255,255,255,0.8); max-width: 600px; margin: 0 auto;">
                トレーディングカード・ホビー事業とグローバル貿易を軸に、次なるスタンダードを創出する。
            </p>
        </div>
    </section>

    <!-- Corporate Philosophy -->
    <section class="section" style="padding: 120px 0; background: var(--surface); position: relative;">
        <div class="container">
            <div class="section-header js-fade" style="text-align: center; margin-bottom: 80px;">
                <h2 style="font-size: clamp(32px, 4vw, 48px); margin-bottom: 16px; font-family: 'Inter', sans-serif; color: var(--brand);">Corporate Philosophy</h2>
                <p style="color: var(--muted); font-size: 16px;">企業理念</p>
            </div>

            <div class="philosophy-grid js-stagger" style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px;">
                <!-- Mission -->
                <div style="grid-column: span 12; background: var(--gradient-brand); border-radius: 24px; padding: 60px; color: #fff; text-align: center; position: relative; overflow: hidden; box-shadow: var(--shadow);">
                    <div style="position: absolute; right: -10%; top: -50%; width: 50%; height: 200%; background: radial-gradient(circle, rgba(19, 184, 199, 0.2) 0%, transparent 70%); pointer-events: none;"></div>
                    <p style="font-size: 18px; color: var(--accent); font-weight: 700; letter-spacing: 2px; margin-bottom: 16px;">MISSION</p>
                    <h3 style="font-size: clamp(24px, 3vw, 36px); line-height: 1.5; margin-bottom: 24px;">世界と日本を繋ぎ、<br>あらゆるプロダクトの「真の価値」を届ける。</h3>
                    <p style="font-size: 16px; line-height: 1.8; color: rgba(255,255,255,0.8); max-width: 800px; margin: 0 auto;">
                        日本が誇る高品質な商材や文化領域のアセットを、まだ見ぬ世界の市場へ。そして世界中の優れた製品を日本へ。私たちは既存の枠組みにとらわれない柔軟な商社モデルで、ボーダーレスな価値の循環を創造し、関わるすべての人々に豊かさを提供します。
                    </p>
                </div>
                
                <!-- Vision -->
                <div style="grid-column: span 6; background: #fff; border: 1px solid var(--line); border-radius: 20px; padding: 40px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; align-items: center; text-align: center; transition: 0.3s;">
                    <div style="width: 60px; height: 60px; border-radius: 16px; background: rgba(19,184,199,0.1); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 24px;">🔭</div>
                    <p style="font-size: 14px; color: var(--muted); font-weight: 700; letter-spacing: 2px; margin-bottom: 12px;">VISION</p>
                    <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--brand);">ホビー・貿易領域における<br>グローバル・メガベンチャーへ</h3>
                    <p style="font-size: 15px; line-height: 1.7; color: var(--muted); margin: 0;">
                        単なる商品の売買にとどまらず、流通網の最適化、プラットフォームの構築、そしてリアル店舗とデジタルの融合を図ることで、業界のデファクトスタンダードとなるような全く新しいバリューチェーンをグローバル規模で確立します。
                    </p>
                </div>

                <!-- Value -->
                <div style="grid-column: span 6; background: #fff; border: 1px solid var(--line); border-radius: 20px; padding: 40px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; align-items: center; text-align: center; transition: 0.3s;">
                    <div style="width: 60px; height: 60px; border-radius: 16px; background: rgba(14,26,43,0.05); color: var(--brand); display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 24px;">💎</div>
                    <p style="font-size: 14px; color: var(--muted); font-weight: 700; letter-spacing: 2px; margin-bottom: 12px;">VALUE</p>
                    <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--brand);">Agile, Trust, Boundaryless</h3>
                    <p style="font-size: 15px; line-height: 1.7; color: var(--muted); margin: 0;">
                        常に市場の変化に対して機敏（Agile）であること。徹底した品質・情報管理により圧倒的な信頼（Trust）を獲得すること。そして国境や業界の常識にとらわれない柔軟な思考（Boundaryless）で、常に挑戦を続けるプロフェッショナル集団であり続けます。
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Representative Message -->
    <section class="section" style="padding: 120px 0; background: var(--bg);">
        <div class="container">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;" class="msg-grid">
                <div class="js-fade">
                    <p style="color: var(--accent); font-weight: 700; letter-spacing: 2px; margin-bottom: 12px; font-size: 14px;">MESSAGE</p>
                    <h2 style="font-size: 36px; margin-bottom: 32px; color: var(--brand); line-height: 1.3;">「好き」の延長線上にある、巨大な可能性を切り拓く。</h2>
                    <div style="font-size: 15px; line-height: 2; color: var(--muted);">
                        <p style="margin-bottom: 24px;">私たちが身を置くトレーディングカード業界やホビー市場は、今や日本国内だけでなく、世界中から熱視線を集める巨大な「アセットクラス領域」へと変貌を遂げています。</p>
                        <p style="margin-bottom: 24px;">大元商事は、単に流行に乗って商品を右から左へ流す企業ではありません。日本の持つ文化的・技術的なポテンシャルを見極め、適切なルートとデータドリブンな戦略を用いて、世界市場へ確かな価値として届ける「グローバル商社」です。</p>
                        <p style="margin-bottom: 24px;">また、私たちが最も大切にしているのは「信頼」です。偽造品の排除、徹底した品質管理、そして国境を越えたフェアな取引。これらを基盤とした次世代のコマース体制を構築し、ステークホルダー全員が恩恵を受けられるエコシステムを創出してまいります。</p>
                        <p>今後とも、大元商事の挑戦にぜひご期待ください。</p>
                    </div>
                    <div style="margin-top: 40px; border-top: 1px solid var(--line); padding-top: 24px;">
                        <p style="font-size: 14px; color: var(--muted); margin-bottom: 4px;">代表取締役社長</p>
                        <p style="font-size: 24px; font-weight: 800; color: var(--brand); font-family: 'Noto Sans JP', sans-serif;">奥地 剛志</p>
                    </div>
                </div>
                <div class="js-fade" style="position: relative;">
                    <!-- Placeholder/Stylized frame for CEO -->
                    <div style="aspect-ratio: 4/5; background: var(--gradient-silver); border-radius: 24px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow);">
                        <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.4), transparent); z-index: 1;"></div>
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%); position: absolute; z-index: 0;" alt="Representative">
                    </div>
                    <div style="position: absolute; bottom: -20px; left: -20px; width: 140px; height: 140px; background: var(--accent); border-radius: 50%; opacity: 0.1; z-index: -1;"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Company Profile Outline -->
    <section class="section" style="padding: 120px 0; background: var(--surface);">
        <div class="container">
            <div class="section-header js-fade" style="text-align: center; margin-bottom: 60px;">
                <h2 style="font-size: clamp(32px, 4vw, 48px); margin-bottom: 16px; font-family: 'Inter', sans-serif; color: var(--brand);">Company Profile</h2>
                <p style="color: var(--muted); font-size: 16px;">会社概要</p>
            </div>

            <div class="js-fade" style="max-width: 800px; margin: 0 auto; background: #fff; border: 1px solid var(--line); border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-sm);">
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <tbody>
                        <tr style="border-bottom: 1px solid var(--line);">
                            <th style="padding: 24px; width: 30%; background: rgba(14,26,43,0.02); color: var(--brand); font-weight: 700; font-size: 15px;">社名</th>
                            <td style="padding: 24px; color: var(--text); font-size: 15px;">株式会社大元商事</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--line);">
                            <th style="padding: 24px; background: rgba(14,26,43,0.02); color: var(--brand); font-weight: 700; font-size: 15px;">設立</th>
                            <td style="padding: 24px; color: var(--text); font-size: 15px;">--- (設立年)</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--line);">
                            <th style="padding: 24px; background: rgba(14,26,43,0.02); color: var(--brand); font-weight: 700; font-size: 15px;">所在地</th>
                            <td style="padding: 24px; color: var(--text); font-size: 15px;">〒169-0073<br>東京都新宿区百人町１丁目２３ー２６</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--line);">
                            <th style="padding: 24px; background: rgba(14,26,43,0.02); color: var(--brand); font-weight: 700; font-size: 15px;">代表取締役社長</th>
                            <td style="padding: 24px; color: var(--text); font-size: 15px;">奥地 剛志</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--line);">
                            <th style="padding: 24px; background: rgba(14,26,43,0.02); color: var(--brand); font-weight: 700; font-size: 15px;">資本金</th>
                            <td style="padding: 24px; color: var(--text); font-size: 15px;">---</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--line);">
                            <th style="padding: 24px; background: rgba(14,26,43,0.02); color: var(--brand); font-weight: 700; font-size: 15px;">従業員数</th>
                            <td style="padding: 24px; color: var(--text); font-size: 15px;">---</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--line);">
                            <th style="padding: 24px; background: rgba(14,26,43,0.02); color: var(--brand); font-weight: 700; font-size: 15px;">事業内容</th>
                            <td style="padding: 24px; color: var(--text); font-size: 15px;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="margin-bottom: 8px;">・輸入・貿易事業</li>
                                    <li style="margin-bottom: 8px;">・トレーディングカード売買事業</li>
                                    <li style="margin-bottom: 8px;">・トレカショップ運営（TORECAMOB）</li>
                                    <li style="margin-bottom: 8px;">・ECプラットフォーム事業</li>
                                    <li style="margin-bottom: 8px;">・海外輸出事業</li>
                                    <li>・コンサルティング事業</li>
                                </ul>
                            </td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--line);">
                            <th style="padding: 24px; background: rgba(14,26,43,0.02); color: var(--brand); font-weight: 700; font-size: 15px;">連絡先</th>
                            <td style="padding: 24px; color: var(--text); font-size: 15px;">
                                TEL: 080-3731-4665<br>
                                Email: tsuyoshi263@icloud.com
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

</main>

<style>
@media (max-width: 991px) {
    .philosophy-grid > div { grid-column: span 12 !important; }
    .msg-grid { grid-template-columns: 1fr !important; }
}
.philosophy-grid > div:nth-child(2):hover, .philosophy-grid > div:nth-child(3):hover {
    transform: translateY(-8px);
    border-color: var(--accent);
}

/* Fallback simple CSS animation for the SVG lines if GSAP isn't bound down here */
.draw-path {
    stroke-dasharray: 2500;
    stroke-dashoffset: 2500;
    animation: drawLine 4s ease-in-out forwards;
}
.draw-path-2 {
    stroke-dasharray: 2500;
    stroke-dashoffset: -2500;
    animation: drawLineReverse 5s ease-in-out forwards;
    animation-delay: 0.5s;
}
.glow-dot {
    animation: pulseDot 2s infinite alternate;
}
@keyframes drawLine {
    to { stroke-dashoffset: 0; }
}
@keyframes drawLineReverse {
    to { stroke-dashoffset: 0; }
}
@keyframes pulseDot {
    from { opacity: 0.3; transform: scale(1); }
    to { opacity: 1; transform: scale(1.5); }
}
</style>

<?php get_footer(); ?>
