# Design Document

## Overview

SPACE SYNDROMEウェブサイトの日本語デザイン刷新は、現在のサイバーパンク風デザインから、日本の美意識を反映した白ベースのミニマルデザインへの転換を目指します。このデザインは、日本語タイポグラフィの美しさを最大限に活用し、コンテンツの可読性と視覚的な洗練さを両立させます。

## Architecture

### デザインシステム階層

```
Design System
├── Foundation Layer
│   ├── Color Palette
│   ├── Typography Scale
│   └── Spacing System
├── Component Layer
│   ├── Navigation
│   ├── Cards
│   ├── Buttons
│   └── Forms
└── Layout Layer
    ├── Grid System
    ├── Section Templates
    └── Responsive Breakpoints
```

### 情報アーキテクチャ

現在のコンテンツ構造を維持しながら、視覚的階層を再構築：

1. **ヒーローセクション** - 白ベース背景動画との調和
2. **プロジェクト概要** - カード型レイアウトの簡素化
3. **ゲームコンテンツ** - タイプ別の視覚的差別化
4. **動画コンテンツ** - グリッドレイアウトの最適化
5. **地方活性化効果** - インパクト指標の視覚化

## Components and Interfaces

### タイポグラフィシステム

#### フォント階層

```css
/* 日本語大見出し */
.heading-large-jp {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W5", sans-serif;
    font-weight: 500;
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.2;
    letter-spacing: 0.02em;
}

/* 日本語見出し */
.heading-jp {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W0", sans-serif;
    font-weight: 300;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    line-height: 1.4;
    letter-spacing: 0.05em;
}

/* 英語見出し */
.heading-en {
    font-family: "Arial Unicode MS", Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    line-height: 1.3;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

/* 本文・長文 */
.body-text {
    font-family: "Hiragino Mincho ProN", "ヒラギノ明朝 ProN W3", serif;
    font-weight: 300;
    font-size: clamp(1rem, 1.2vw, 1.125rem);
    line-height: 1.8;
    letter-spacing: 0.05em;
}
```

#### フォールバック戦略

```css
/* システムフォントフォールバック */
.fallback-sans {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", sans-serif;
}

.fallback-serif {
    font-family: "Times New Roman", "Yu Mincho", "Hiragino Mincho ProN", serif;
}
```

### カラーシステム

#### プライマリパレット

```css
:root {
    /* メイン色 */
    --color-white: #FFFFFF;
    --color-dark: #0D233F;
    
    /* 補助色 */
    --color-blue-primary: #0B318F;
    --color-blue-secondary: #3E5A7C;
    --color-cyan: #56C1DE;
    --color-orange: #F8B62D;
    --color-yellow: #FAEE00;
    --color-gray-light: #F7F8F8;
    
    /* セマンティックカラー */
    --color-text-primary: #0D233F;
    --color-text-secondary: #3E5A7C;
    --color-text-muted: #6B7280;
    --color-background: #FFFFFF;
    --color-background-alt: #F7F8F8;
    --color-background-dark: #0D233F;
}
```

#### カラー使用ガイドライン

- **背景**: 主に白(#FFFFFF)、セカンダリとして#F7F8F8
- **ダークセクション**: #0D233Fを背景に使用
- **アクセント**: 補助色パレットから文脈に応じて選択
- **テキスト**: コントラスト比4.5:1以上を保証

### レイアウトシステム

#### グリッドシステム

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 4vw, 2rem);
}

.grid {
    display: grid;
    gap: clamp(1rem, 3vw, 2rem);
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 768px) {
    .grid-2, .grid-3, .grid-4 {
        grid-template-columns: 1fr;
    }
}
```

#### スペーシングシステム

```css
:root {
    --space-xs: 0.5rem;   /* 8px */
    --space-sm: 1rem;     /* 16px */
    --space-md: 1.5rem;   /* 24px */
    --space-lg: 2rem;     /* 32px */
    --space-xl: 3rem;     /* 48px */
    --space-2xl: 4rem;    /* 64px */
    --space-3xl: 6rem;    /* 96px */
}
```

### コンポーネント設計

#### ナビゲーション

```css
.navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(13, 35, 63, 0.1);
    transition: all 0.3s ease;
}

.nav-link {
    color: var(--color-text-primary);
    font-family: "Hiragino Kaku Gothic ProN", sans-serif;
    font-weight: 400;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--color-blue-primary);
}
```

#### カードコンポーネント

```css
.card {
    background: var(--color-white);
    border: 1px solid rgba(13, 35, 63, 0.1);
    border-radius: 12px;
    padding: var(--space-lg);
    box-shadow: 0 2px 8px rgba(13, 35, 63, 0.08);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(13, 35, 63, 0.12);
}
```

#### ボタンシステム

```css
.btn-primary {
    background: var(--color-blue-primary);
    color: var(--color-white);
    border: none;
    border-radius: 8px;
    padding: var(--space-sm) var(--space-lg);
    font-family: "Hiragino Kaku Gothic ProN", sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: var(--color-blue-secondary);
    transform: translateY(-2px);
}
```

## Data Models

### デザイントークン構造

```javascript
const designTokens = {
    colors: {
        primary: {
            white: '#FFFFFF',
            dark: '#0D233F'
        },
        secondary: {
            blue: '#0B318F',
            blueLight: '#3E5A7C',
            cyan: '#56C1DE',
            orange: '#F8B62D',
            yellow: '#FAEE00',
            grayLight: '#F7F8F8'
        }
    },
    typography: {
        families: {
            headingLargeJp: 'Hiragino Kaku Gothic ProN W5',
            headingJp: 'Hiragino Kaku Gothic ProN W0',
            headingEn: 'Arial Unicode MS',
            bodyText: 'Hiragino Mincho ProN W3'
        },
        scales: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem'
        }
    },
    spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
        '3xl': '6rem'
    }
};
```

## Error Handling

### フォント読み込みエラー対応

```css
/* フォント読み込み失敗時のフォールバック */
@font-face {
    font-family: 'Hiragino Fallback';
    src: local('Hiragino Kaku Gothic ProN'),
         local('Hiragino Sans'),
         local('Yu Gothic'),
         local('Meiryo');
    font-display: swap;
}
```

### レスポンシブ画像エラー対応

```css
.hero-video {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.hero-video-fallback {
    background: linear-gradient(135deg, #FFFFFF 0%, #F7F8F8 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### アクセシビリティエラー対応

```css
/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
    :root {
        --color-text-primary: #000000;
        --color-background: #FFFFFF;
    }
}

/* 動きを減らす設定への対応 */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

## Testing Strategy

### 視覚的回帰テスト

1. **フォント表示テスト**
   - 各フォントファミリーの正確な表示確認
   - フォールバック動作の検証
   - 異なるOS/ブラウザでの表示確認

2. **カラーコントラストテスト**
   - WCAG 2.1 AA基準のコントラスト比確認
   - カラーブラインドネス対応確認
   - 高コントラストモード対応確認

3. **レスポンシブテスト**
   - 主要ブレークポイントでの表示確認
   - タッチターゲットサイズの検証
   - 横スクロール発生の確認

### パフォーマンステスト

1. **フォント読み込み最適化**
   - font-display: swapの効果測定
   - フォントサブセット化の検討
   - 読み込み時間の測定

2. **画像・動画最適化**
   - 白ベース背景動画の最適化
   - WebP/AVIF形式への対応
   - 遅延読み込みの実装

### ユーザビリティテスト

1. **日本語読みやすさテスト**
   - 長文コンテンツの読みやすさ評価
   - 行間・文字間隔の最適化確認
   - 異なる年齢層での可読性テスト

2. **ナビゲーション使いやすさテスト**
   - メニュー項目の発見しやすさ
   - モバイルハンバーガーメニューの操作性
   - キーボードナビゲーション対応

### 技術的テスト

1. **ブラウザ互換性テスト**
   - Chrome, Firefox, Safari, Edgeでの表示確認
   - iOS Safari, Android Chromeでの動作確認
   - 古いブラウザでのフォールバック確認

2. **アクセシビリティテスト**
   - スクリーンリーダー対応確認
   - キーボード操作対応確認
   - フォーカス管理の検証