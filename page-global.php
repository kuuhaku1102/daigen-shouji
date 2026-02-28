<?php
/* Template Name: 海外展開 */
get_header(); ?>

<main class="site-main" style="background: var(--brand); color: #fff; overflow-x: hidden;">
    <!-- Hero / Globe Section -->
    <section class="global-hero" style="position: relative; height: 100vh; min-height: 800px; display: flex; align-items: center;">
        <!-- Three.js Container -->
        <div id="webgl-globe" style="position: absolute; right: 0; top: 0; width: 60%; height: 100%; z-index: 1;"></div>
        
        <div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(14,26,43,1) 0%, rgba(14,26,43,0.8) 40%, transparent 100%); z-index: 2; pointer-events: none;"></div>
        <div style="position: absolute; inset: 0; background: radial-gradient(circle at 70% 50%, transparent 0%, rgba(14,26,43,0.9) 100%); z-index: 2; pointer-events: none;"></div>
        
        <div class="container" style="position: relative; z-index: 10;">
            <div style="max-width: 650px;">
                <p class="js-fade" style="color: var(--accent); font-weight: 700; letter-spacing: 2px; margin-bottom: 12px; font-size: 14px; text-transform: uppercase;">Overseas Expansion</p>
                <h1 class="js-fade" style="font-size: clamp(40px, 5vw, 64px); font-weight: 800; line-height: 1.2; margin-bottom: 32px; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));">世界を舞台に、<br>新しい価値の循環を。</h1>
                <p class="js-fade" style="font-size: 18px; line-height: 1.8; color: rgba(255,255,255,0.8); margin-bottom: 48px;">
                    大元商事は、日本国内の高品質なプロダクトを世界中の適切なマーケットへ供給し、グローバル規模でのバリューチェーンを構築します。<br>
                    世界中を網羅する強固なネットワークと現地データを駆使し、常に次なる市場を開拓し続けています。
                </p>
                
                <div class="js-stagger" style="display: flex; gap: 40px;">
                    <div>
                        <p style="font-size: 36px; font-weight: 800; color: #ffffff; margin-bottom: 4px; font-family: 'Inter', sans-serif;">15<span style="font-size: 18px; color: var(--accent);">+</span></p>
                        <p style="font-size: 13px; color: rgba(255,255,255,0.6);">展開国・地域</p>
                    </div>
                    <div>
                        <p style="font-size: 36px; font-weight: 800; color: #ffffff; margin-bottom: 4px; font-family: 'Inter', sans-serif;">200<span style="font-size: 18px; color: var(--accent);">%</span></p>
                        <p style="font-size: 13px; color: rgba(255,255,255,0.6);">海外売上成長率</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Export Destinations -->
    <section class="section" style="padding: 120px 0; border-top: 1px solid rgba(255,255,255,0.05); position: relative; z-index: 10;">
        <div class="container">
            <div class="section-header js-fade" style="text-align: left; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 40px; margin-bottom: 80px;">
                <div>
                    <h2 style="font-size: clamp(32px, 4vw, 48px); margin-bottom: 16px; font-family: 'Inter', sans-serif;">Export Destinations<br><span style="font-size: 20px; color: rgba(255,255,255,0.5); font-weight: 500; font-family: 'Noto Sans JP', sans-serif;">主な輸出国とエリア展開</span></h2>
                </div>
                <p style="color: rgba(255,255,255,0.7); max-width: 500px; margin: 0; font-size: 15px;">
                    各エリアの経済動向や顧客ニーズに合わせて最適化されたローカライズ戦略により、世界各国の主要市場において持続的なシェア拡大を実現しています。
                </p>
            </div>

            <div class="global-grid js-stagger" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
                <!-- Cards -->
                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 40px; position: relative; transition: 0.3s; transform: translateY(0);">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, rgba(19, 184, 199, 0.2), transparent); border: 1px solid rgba(19, 184, 199, 0.5); color: var(--accent); display: flex; align-items: center; justify-content: center; font-weight: 800; margin-bottom: 24px; font-family: 'Inter', sans-serif;">AS</div>
                    <h3 style="font-size: 20px; margin-bottom: 12px;">アジアエリア</h3>
                    <p style="color: var(--accent); font-size: 14px; margin-bottom: 24px; font-weight: 700;">中国 / シンガポール / 他</p>
                    <p style="font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.7);">急速に成長するアジアの富裕層・ミドルクラスをターゲットに、安全・迅速な独自の物流網を活用して現地市場のシェアを獲得しています。</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 40px; position: relative; transition: 0.3s;">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent); border: 1px solid rgba(255, 255, 255, 0.3); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; margin-bottom: 24px; font-family: 'Inter', sans-serif;">NA</div>
                    <h3 style="font-size: 20px; margin-bottom: 12px;">北米エリア</h3>
                    <p style="color: var(--accent); font-size: 14px; margin-bottom: 24px; font-weight: 700;">アメリカ / カナダ</p>
                    <p style="font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.7);">巨大なホビー・コレクター市場を持つ北米に対し、日本特有のレアカードや高品質な製品を集中的に投下し、ブランド認知を拡大しています。</p>
                </div>
                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 40px; position: relative; transition: 0.3s;">
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, rgba(200, 200, 200, 0.1), transparent); border: 1px solid rgba(200, 200, 200, 0.3); color: #ddd; display: flex; align-items: center; justify-content: center; font-weight: 800; margin-bottom: 24px; font-family: 'Inter', sans-serif;">EU</div>
                    <h3 style="font-size: 20px; margin-bottom: 12px;">欧州エリア</h3>
                    <p style="color: var(--accent); font-size: 14px; margin-bottom: 24px; font-weight: 700;">イギリス / ドイツ / 他</p>
                    <p style="font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.7);">歴史と独自の文化を持つヨーロッパには、現地パートナーを通じたコンセプチュアルな販売チャネルを構築し、日本発のアセットを展開。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Global Strategy -->
    <section class="section" style="padding: 120px 0 160px; background: rgba(255,255,255,0.02); position: relative; z-index: 10;">
        <div class="container">
            <div class="section-header js-fade" style="text-align: center; margin-bottom: 80px;">
                <h2 style="font-size: clamp(32px, 4vw, 48px); margin-bottom: 16px; font-family: 'Inter', sans-serif;">Our Global Strategy<br><span style="font-size: 18px; color: rgba(255,255,255,0.5); font-weight: 500; font-family: 'Noto Sans JP', sans-serif;">未来を創るための3つの戦略基盤</span></h2>
            </div>

            <div class="strategy-list" style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px;">
                <!-- Strategy 1 -->
                <div class="js-fade" style="display: flex; gap: 40px; padding: 40px; background: rgba(255,255,255,0.04); border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); align-items: center;">
                    <div style="font-size: 40px; min-width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(19,184,199,0.2), transparent); border: 1px solid rgba(19,184,199,0.5); border-radius: 20px; box-shadow: 0 10px 30px rgba(19,184,199,0.1);">
                        🚀
                    </div>
                    <div>
                        <h3 style="font-size: 24px; margin-bottom: 12px; color: #fff;">新規販路開拓</h3>
                        <p style="font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.7); margin: 0;">
                            データドリブンな市場調査によって隠れた需要を予測・発見し、最新のデジタルマーケティング技術を駆使して未開拓エリアにピンポイントで参入。他社が追いつけないスピード感で、先行者利益を獲得し事業基盤とコミュニティをいち早く確立します。
                        </p>
                    </div>
                </div>
                <!-- Strategy 2 -->
                <div class="js-fade" style="display: flex; gap: 40px; padding: 40px; background: rgba(255,255,255,0.04); border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); align-items: center;">
                    <div style="font-size: 40px; min-width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; box-shadow: 0 10px 30px rgba(255,255,255,0.05);">
                        🛡️
                    </div>
                    <div>
                        <h3 style="font-size: 24px; margin-bottom: 12px; color: #fff;">国内仕入強化</h3>
                        <p style="font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.7); margin: 0;">
                            日本が誇る高品質なコンテンツ商材や「本物」を、世界で戦うための最大の武器として位置づけています。優良な国内メーカーやコレクターと独自の強固なパイプを形成することで、市場価値の高い商品の安定的な調達（ソーシング）を実現しています。
                        </p>
                    </div>
                </div>
                <!-- Strategy 3 -->
                <div class="js-fade" style="display: flex; gap: 40px; padding: 40px; background: rgba(255,255,255,0.04); border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); align-items: center;">
                    <div style="font-size: 40px; min-width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(200,200,200,0.1), transparent); border: 1px solid rgba(200,200,200,0.3); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                        🌐
                    </div>
                    <div>
                        <h3 style="font-size: 24px; margin-bottom: 12px; color: #fff;">新ジャンル展開</h3>
                        <p style="font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.7); margin: 0;">
                            トレカ領域の成功モデルを横展開し、日本文化・アート・インディーズブランドなど、世界で熱狂を生むポテンシャルを秘めたあらゆる「価値ある商材」への進出を計画。商社としての多角化を止めず、常に次のメガトレンドをポートフォリオに組み込みます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
@media (max-width: 991px) {
    .global-hero { height: auto !important; min-height: auto !important; padding: 160px 0 80px !important; }
    #webgl-globe { width: 100% !important; height: 50% !important; top: auto !important; bottom: 0 !important; opacity: 0.3; }
    .global-grid { grid-template-columns: 1fr !important; }
    .strategy-list > div { flex-direction: column; text-align: center; }
}
.global-grid > div:hover {
    transform: translateY(-8px) !important;
    border-color: rgba(19, 184, 199, 0.5) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}
</style>

<?php get_footer(); ?>
