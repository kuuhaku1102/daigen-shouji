<?php

function daigen_upgrade_business_content_v3() {
    if (get_option('daigen_business_v3_upgraded')) return;

    $rich_contents = [
        '輸入・貿易事業' => '
<div class="business-vision js-fade">
    <h2>グローバル基準の目利きと、圧倒的な調達力</h2>
    <p>世界中の未開拓な製品や、国内ではまだ見ぬ魅力的な商材を発掘し、厳しい品質基準に基づいて日本市場へと届けます。単なる商品の移動ではなく、「文化の架け橋」として機能することで、日本の消費者に新たな価値と驚きを提供します。各国の法規制や商慣習を熟知した専門チームが、安全かつ迅速な輸入ルートを構築し、持続可能なビジネスモデルを展開しています。</p>
</div>
<div class="business-features">
    <div class="feature-box js-fade">
        <div class="feature-icon">🌐</div>
        <h3>独自調達ネットワーク</h3>
        <p>北米、欧州、アジアなど主要拠点の現地パートナーと連携し、トレンドを最速で察知・確保します。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.1s;">
        <div class="feature-icon">🛡️</div>
        <h3>厳格な品質管理基準</h3>
        <p>法務・コンプライアンスチームによるチェック体制。日本国内の高度な安全基準をクリアした製品のみを輸入。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.2s;">
        <div class="feature-icon">⚡</div>
        <h3>スピーディなロジスティクス</h3>
        <p>複雑な通関手続きから国内のラストワンマイルまで、一気通貫で最適化されたサプライチェーン。</p>
    </div>
</div>
        ',
        'トレーディングカード売買事業' => '
<div class="business-vision js-fade">
    <h2>世界を熱狂させるアセットクラスの最前線へ</h2>
    <p>今やトレーディングカードは単なる玩具の枠を超え、世界的な「オルタナティブ・アセット（代替資産）」として確固たる地位を築いています。大元商事では、日々変動するグローバル市場の相場データをリアルタイムで分析。真贋鑑定の高度化、適切な状態管理、そして国内外への販売チャネルの多元化により、最も透明性が高く公正な流動性市場を創出しています。</p>
</div>
<div class="business-features">
    <div class="feature-box js-fade">
        <div class="feature-icon">🔍</div>
        <h3>徹底した真贋・状態鑑定</h3>
        <p>プロフェッショナルな鑑定士とAI画像解析を組み合わせ、確かな「本物」のみを市場へ供給します。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.1s;">
        <div class="feature-icon">📊</div>
        <h3>データドリブンな価格決定</h3>
        <p>独自の価格トラッキングシステムにより、世界相場と連動した適正かつ競争力のある買取・販売価格を提示します。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.2s;">
        <div class="feature-icon">🌍</div>
        <h3>グローバル流動性の確保</h3>
        <p>日本国内の流通に留まらず、海外コレクターや投資家への直接的な販路を多数保有。常に最適な出口戦略を描きます。</p>
    </div>
</div>
        ',
        'トレカショップ運営（TORECAMOB）' => '
<div class="business-vision js-fade">
    <h2>コミュニティと熱狂が交差する、次世代のリテール体験</h2>
    <p>「TORECAMOB」は、ただカードを売り買いするだけの場所ではありません。ハイエンドな空間デザインとホスピタリティを備え、プレイヤーとコレクターが「集い、語り、競い合う」場を提供します。購入体験をエンターテインメントへと昇華させ、リアル店舗だからこそ生まれる熱量とコミュニティを、デジタルの力でさらに拡張していく、D2C店舗の新しい形を体現しています。</p>
</div>
<div class="business-features">
    <div class="feature-box js-fade">
        <div class="feature-icon">💎</div>
        <h3>ラグジュアリーな空間設計</h3>
        <p>高額カードを映えさせる特殊照明や、リラックスできるプレイスペースなど、妥協のない店舗デザイン。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.1s;">
        <div class="feature-icon">🤝</div>
        <h3>コミュニティ駆動型の運営</h3>
        <p>定期的な公式大会や独自イベントを開催。オンラインサロンと連動した強固なファンベースを形成しています。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.2s;">
        <div class="feature-icon">📱</div>
        <h3>OMO（オンライン融合）体験</h3>
        <p>店舗の在庫状況のリアルタイム確認や、アプリ連動型のポイントシステムなど、シームレスな顧客体験を提供します。</p>
    </div>
</div>
        ',
        'ECプラットフォーム事業' => '
<div class="business-vision js-fade">
    <h2>データとクリエイティブで、購買体験を最大化する</h2>
    <p>スマートフォン一つで世界中のあらゆる商品にアクセスできる現代において、ECサイトの役割は「単なるカタログ」から「体験の舞台」へと変わりました。私たちは自社構築のノウハウを最大限に駆使し、洗練されたUI/UX、パーソナライズされたレコメンド、そして摩擦のないチェックアウト体験を実装。国内外の多様なプラットフォームと連携したオムニチャネル戦略で、収益を飛躍的に向上させます。</p>
</div>
<div class="business-features">
    <div class="feature-box js-fade">
        <div class="feature-icon">💻</div>
        <h3>最先端のUI/UXデザイン</h3>
        <p>心理学・行動経済学に基づいた導線設計により、離脱率を極限まで低減し、コンバージョン率を最大化。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.1s;">
        <div class="feature-icon">📈</div>
        <h3>マーケティングの自動化</h3>
        <p>CRMやMAツールを統合し、顧客のライフサイクルに合わせた最適なタイミングでのアプローチを実現します。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.2s;">
        <div class="feature-icon">🌐</div>
        <h3>越境ECシステム構築</h3>
        <p>多言語対応、多通貨決済、海外配送ロジスティクスを標準装備し、グローバル層にダイレクトに販売。</p>
    </div>
</div>
        ',
        '海外輸出事業' => '
<div class="business-vision js-fade">
    <h2>日本の「本物」を世界へ。国境を越えたバリューチェーン</h2>
    <p>世界中で和牛、日本酒、アニメ、そしてトレーディングカードに至るまで「ジャパン・プレミアム」への渇望はかつてないほど高まっています。大元商事はこの巨大な需要に対し、日本各地に眠る高品質なプロダクトを発掘し、ダイレクトに海外市場へと展開します。言語や法規制の壁を越え、日本ブランドの価値を最大化する強力なアウトバウンドエンジンとして機能します。</p>
</div>
<div class="business-features">
    <div class="feature-box js-fade">
        <div class="feature-icon">🎯</div>
        <h3>ローカライズド・マーケティング</h3>
        <p>単なる翻訳に留まらず、各国の文化やトレンドに合わせたプロモーション戦略で現地での認知を獲得します。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.1s;">
        <div class="feature-icon">✈️</div>
        <h3>グローバル物流網の最適化</h3>
        <p>D2CからB2Bの大口コンテナ輸送まで、コストとスピードを両立する輸出スキームを提供。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.2s;">
        <div class="feature-icon">🤝</div>
        <h3>現地ディストリビューター連携</h3>
        <p>北米、欧州、アジア圏の強力な販売網を持つパートナー企業とアライアンスを組み、一気にシェアを拡大。</p>
    </div>
</div>
        ',
        'コンサルティング事業' => '
<div class="business-vision js-fade">
    <h2>実績に裏打ちされた、本物のグロース支援</h2>
    <p>私たちが提供するコンサルティングの最大の強みは「自社で事業を成功させてきた圧倒的な実務経験」にあります。机上の空論ではなく、実際のロジスティクス、関税対応、店舗やプラットフォーム運営における泥臭い知見こそが、クライアントが直面する壁を突破する鍵となります。事業戦略の立案から実行支援（ハンズオン）まで、強力なパートナーとして共に成長を描きます。</p>
</div>
<div class="business-features">
    <div class="feature-box js-fade">
        <div class="feature-icon">💡</div>
        <h3>実務ベースの実践型スキーム</h3>
        <p>自社の成功モデル（トレカ事業・グローバルECなど）をそのまま転用可能な形に体系化して提供します。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.1s;">
        <div class="feature-icon">🚀</div>
        <h3>ゼロイチからの事業立ち上げ</h3>
        <p>新規事業領域の選定、チームビルディング、最初のキャッシュポイント創出まで徹底したハンズオン。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.2s;">
        <div class="feature-icon">🔗</div>
        <h3>サプライチェーン構築支援</h3>
        <p>仕入れルートの開拓や物流パートナーの紹介など、事業の根幹となるインフラ構築をダイレクトに支援。</p>
    </div>
</div>
        ',
        '輸入ビジネス' => '
<div class="business-vision js-fade">
    <h2>世界の最旬トレンドを、いち早く日本市場のスタンダードへ</h2>
    <p>大元商事の「輸入ビジネス」は、単なる中間流通ではありません。海外の尖ったプロダクトやニッチなブランドのポテンシャルを見極め、日本の消費者のライフスタイルにフィットする形でリブランディング。独占販売権の取得やポップアップストアの展開、インフルエンサーマーケティングを駆使し、無名の存在から熱狂的なファンを持つトップブランドへと育て上げます。</p>
</div>
<div class="business-features">
    <div class="feature-box js-fade">
        <div class="feature-icon">👑</div>
        <h3>独占代理店契約の獲得力</h3>
        <p>海外メーカーとの長期的な信頼関係を構築し、日本国内での独占的なディストリビューション権を確保。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.1s;">
        <div class="feature-icon">🎨</div>
        <h3>ローカル・ブランディング</h3>
        <p>日本の市場感性に合わせたパッケージング、クリエイティブ制作、PR戦略を展開。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.2s;">
        <div class="feature-icon">🏪</div>
        <h3>マルチチャネル展開</h3>
        <p>オンラインのD2C販売だけでなく、有名セレクトショップや百貨店など実店舗への卸まで網羅的にカバー。</p>
    </div>
</div>
        ',
        '国内卸業' => '
<div class="business-vision js-fade">
    <h2>パートナーと共に市場を創る、最強のサプライヤーとして</h2>
    <p>全国に広がる小売店、ホビーショップ、EC事業者の皆様へ、高い利益率と確かな回転の見込める商材を安定的にお届けします。大元商事の調達力を活かし、希少なトレーディングカードから日用雑貨まで多様な製品群をラインナップ。単純に商品を卸すだけでなく、市場トレンドの共有や店舗の売上向上のためのノウハウ提供など、ともに業界を盛り上げる共創パートナーとして機能します。</p>
</div>
<div class="business-features">
    <div class="feature-box js-fade">
        <div class="feature-icon">📦</div>
        <h3>圧倒的な在庫確保力</h3>
        <p>広大な自社倉庫と資本力を背景に、需要が急増するトレンド商材をタイムラグなしで大ロット確保。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.1s;">
        <div class="feature-icon">💰</div>
        <h3>適正かつ柔軟な価格設定</h3>
        <p>独自の仕入れルートを通した中間コストの大幅削減により、パートナー企業に有利な卸価格を提供。</p>
    </div>
    <div class="feature-box js-fade" style="transition-delay: 0.2s;">
        <div class="feature-icon">🤝</div>
        <h3>充実したサポート体制</h3>
        <p>発注の簡略化システムや、専任の担当者による迅速なレスポンス体制で、店舗運営のブレイクスルーを後押し。</p>
    </div>
</div>
        '
    ];

    foreach ($rich_contents as $title => $html) {
        $post = get_page_by_title($title, OBJECT, 'business');
        if ($post) {
            wp_update_post([
                'ID' => $post->ID,
                'post_content' => $html
            ]);
        }
    }

    update_option('daigen_business_v3_upgraded', true);
}
add_action('init', 'daigen_upgrade_business_content_v3');
