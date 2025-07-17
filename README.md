# SPACE SYNDROME ウェブサイト

## 概要
スペースシンドロームプロジェクトの公式ウェブサイトです。未来感あふれるデザインで、プロジェクトの世界観とビジネスモデルを紹介しています。

## ファイル構成
```
website/
├── index.html          # メインのHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScriptファイル
├── video-placeholder.html  # 動画プレースホルダーのデモ
└── README.md          # このファイル
```

## 特徴
- **レスポンシブデザイン**: PC、タブレット、スマートフォンに対応
- **未来的なUI**: ネオンカラーとグリッチエフェクトを活用
- **スムーズなアニメーション**: スクロールに応じた要素の表示
- **インタラクティブな要素**: ホバーエフェクトとパーティクルアニメーション

## セクション構成
1. **ヒーローセクション**: メインビジュアルとキャッチコピー
2. **世界観**: スペースシンドロームの世界設定とタイムライン
3. **プロジェクト概要**: プロジェクトの目的と特徴
4. **ゲームコンテンツ**: 3種類のゲームタイプの紹介
5. **動画コンテンツ**: 動画展開の説明
6. **地方活性化**: 期待される効果
7. **ビジネスモデル**: 収益構造の説明

## 動画の実装について
現在、ヒーローセクションの背景にはプレースホルダーが表示されています。
実際の動画を実装する場合は、以下の手順で行ってください：

1. `index.html`の`.video-placeholder`部分を以下のように変更:
```html
<div class="video-background">
    <video autoplay muted loop playsinline>
        <source src="your-video.mp4" type="video/mp4">
        <source src="your-video.webm" type="video/webm">
    </video>
</div>
```

2. `styles.css`に以下を追加:
```css
.video-background video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
}
```

## カスタマイズ
- カラーテーマは`styles.css`の`:root`セクションで変更可能
- アニメーション速度は各`animation`プロパティで調整可能
- フォントは`index.html`のGoogle Fontsリンクで変更可能

## ブラウザ対応
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 注意事項
- 動画ファイルは軽量化を推奨（5MB以下）
- モバイルでは自動再生が制限される場合があります
- パーティクルアニメーションは処理負荷を考慮して調整してください 