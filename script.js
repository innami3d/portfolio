'use strict';

/**
 * script.js
 *
 * 1. ハンバーガーメニュー
 * 2. スクロール時のフェードインアニメーション
 * 3. スムーズスクロール
 */

document.addEventListener('DOMContentLoaded', function () {

    // ==================================================
    // 1. ハンバーガーメニュー
    // ==================================================
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav-item a');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            // ハンバーガーボタンとナビゲーションメニューに 'is-active' クラスを付け外し
            hamburger.classList.toggle('is-active');
            nav.classList.toggle('is-active');

            // メニューが開いているときは、背景のスクロールを禁止
            document.body.style.overflow = nav.classList.contains('is-active') ? 'hidden' : '';
        });
    }
    
    // メニュー内のリンクをクリックしたらメニューを閉じる
    if(navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (hamburger.classList.contains('is-active')) {
                    hamburger.classList.remove('is-active');
                    nav.classList.remove('is-active');
                    document.body.style.overflow = '';
                }
            });
        });
    }


    // ==================================================
    // 2. スクロール時のフェードインアニメーション
    // ==================================================
    // Intersection Observer API を使用
    // 監視対象の要素がビューポートに入ったら is-visible クラスを付与

    // 監視対象の要素をすべて取得
    // CSSで .fade-in-target というクラス名で指定しています
    const targets = document.querySelectorAll('.section__title, .about__content > *, .works__item, .skill__category, .contact__text, .contact .btn');

    // 監視ロジックを定義したコールバック関数
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // isIntersectingプロパティがtrueの場合 (要素がビューポート内に入った場合)
            if (entry.isIntersecting) {
                // is-visibleクラスを付与
                entry.target.classList.add('is-visible');
                // 一度表示されたら監視を停止する (パフォーマンスのため)
                observer.unobserve(entry.target);
            }
        });
    };

    // オプションを設定
    const observerOptions = {
        root: null, // ビューポートをルートとする
        rootMargin: '0px', // マージンなし
        threshold: 0.1 // 10%要素が見えたらトリガー
    };

    // IntersectionObserverのインスタンスを生成
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 各ターゲット要素の監視を開始
    targets.forEach(target => {
        // CSS側で事前に透明にしているので、JSでクラスを付与
        target.classList.add('fade-in-target');
        observer.observe(target);
    });


    // ==================================================
    // 3. スムーズスクロール
    // ==================================================
    // '#'で始まるすべてのアンカーリンクを取得
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // デフォルトのアンカー動作をキャンセル
            e.preventDefault();

            // リンクのhref属性からターゲットIDを取得
            const href = link.getAttribute('href');
            // リンク先が '#' または空の場合は何もしない
            if (href === '#' || href === '') return;
            
            const targetElement = document.getElementById(href.slice(1));

            if (targetElement) {
                // ヘッダーの高さを取得 (CSSの変数から)
                const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
                
                // ターゲット要素の上端の絶対位置を取得
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                // ヘッダーの高さ分だけスクロール位置を調整
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
