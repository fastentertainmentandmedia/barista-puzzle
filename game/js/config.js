// ============================================================
// [FILE: game/js/config.js]
// ЕДИНСТВЕННОЕ место специфики клиента (Grill King Puzzle).
// Размеры поля — целые числа (полки/ряды/колонки).
// Тюнинг — в мс и долях. Визуал — через COLORS {var,fallback}
// и game/css/theme.css.
// ============================================================

export const gameConfig = {
  STORAGE_KEY: 'barista_puzzle',
  PLAY_LIMIT_MINUTES: 5,
  LIMIT_RESET_HOURS: 4,

  ASSETS: {
    goatcounter: 'game/assets/goatcounter/count.js',
    logo:        'game/assets/logo.png',
  },

  // ----------------------------------------------------------
  // Поле
  // ----------------------------------------------------------
  SHELF_COUNT:     2,
  ROWS_PER_SHELF:  2,
  COLS_PER_SHELF:  3,
  PLACES_PER_CELL: 3,


    // ----------------------------------------------------------
  // Динамическое поле: при достижении порога добавляется полка.
  // Пустой массив [] = динамики нет, SHELF_COUNT фиксирован.
  // Пример: [{ score: 500, combo: 0, add: 1 }] — при 500 очках +1 полка.
  // combo: 0 — не учитывать комбо. score: 0 — не учитывать очки.
  // add — сколько полок добавить при выполнении условия.
  // ----------------------------------------------------------
  SHELF_GROWTH: [
    { score: 0, combo: 5, add: 1, spawnPerStep: 4 },
  ],
  SHELF_MAX: 3,

  SPAWN_PER_STEP:     3,
  MIN_ITEMS_ON_FIELD: 10,
  SPAWN_DELAY_MS:     180,
  MAX_ITEMS_ON_FIELD: 28,

  COMBO_BASE_DURATION_MS:        7500,
  COMBO_MIN_DURATION_MS:         2000,
  COMBO_SPEEDUP_PER_LEVEL:       0.025,
  COMBO_SPEEDUP_PER_SCORE_BONUS: 0.008,
  COMBO_SCORE_STEP:              250,
  COMBO_BASE_POINTS:             10,

  // ----------------------------------------------------------
  // Тексты HUD
  // ----------------------------------------------------------
  TEXTS: {
    scoreLabel:    'Очки',
    maxComboLabel: 'Комбо',
    comboPrefix:   'КОМБО',
    spawnFlash:    '✨',
    comboSuper: 'СУПЕР-КОМБО!',

  },

  // ----------------------------------------------------------
  // Типы еды.
  // Контракт item-renderer:
  //   emoji    — текст (основной вариант Grill King)
  //   src      — <img> (если положите спрайты)
  //   draw     — функция (canvas-узел), вызывается как draw(w, h) → HTMLCanvasElement
  //   fallback — { color, border } для бейджа, если ничего не сработало
  // weight — для взвешенного рандома (0 = не спавнится)
  // ----------------------------------------------------------
  FOOD_TYPES: [
    // основные — высокий вес (часто, легко матчатся)
    { id: 'coffee-beans',    src: 'game/assets/food/coffee-beans.png',    weight: 3, padding: 0.05, scale: 1.1 },
    { id: 'milk-carton',     src: 'game/assets/food/milk-carton.png',     weight: 5, padding: 0.05, scale: 1.2 },
    { id: 'espresso',        src: 'game/assets/food/espresso.png',        weight: 5, padding: 0.05, scale: 1.2 },
    { id: 'latte-macchiato', src: 'game/assets/food/latte-macchiato.png', weight: 4, padding: 0.05, scale: 1.3 },
    { id: 'cappuccino',      src: 'game/assets/food/cappuccino.png',      weight: 5, padding: 0.05, scale: 1.1 },
    { id: 'coffee',          src: 'game/assets/food/coffee.png',          weight: 4, padding: 0.05, scale: 1.1 },
    { id: 'croissant',       src: 'game/assets/food/croissant.png',       weight: 3, padding: 0.05, scale: 1 },
    { id: 'donut',           src: 'game/assets/food/donut.png',           weight: 2, padding: 0.05, scale: 1.1 },
    { id: 'macarons',        src: 'game/assets/food/macarons.png',        weight: 2, padding: 0.05, scale: 1.1 },
    { id: 'iced-latte',      src: 'game/assets/food/iced-latte.png',      weight: 2, padding: 0.05, scale: 1.2 },
    { id: 'iced-coffee',     src: 'game/assets/food/iced-coffee.png',     weight: 2, padding: 0.05, scale: 1.3 },
    { id: 'bubble-tea',      src: 'game/assets/food/bubble-tea.png',      weight: 2, padding: 0.05, scale: 1.3 },
    { id: 'bread',           src: 'game/assets/food/bread.png',           weight: 3, padding: 0.05, scale: 1 },
    { id: 'coffee-cup',      src: 'game/assets/food/coffee-cup.png',      weight: 3, padding: 0.05, scale: 1.1 },
    { id: 'coffee-machine',  src: 'game/assets/food/coffee-machine.png',  weight: 1, padding: 0.05, scale: 0.9 },
    { id: 'cup',             src: 'game/assets/food/cup.png',             weight: 4, padding: 0.05, scale: 1.2 },
    { id: 'doughnutstack', src: 'game/assets/food/doughnutstack.png', weight: 2, padding: 0.05, scale: 1.05 },
  ],

  // Fit для <img>-режима (аналог INGREDIENT_FIT_*)
  ITEM_FIT:         'contain',
  ITEM_FIT_SCALE:   1.0,
  ITEM_FIT_PADDING: 0,

  // ----------------------------------------------------------
  // Цвета: Core читает эти CSS-переменные (fallback — на случай
  // отсутствия theme.css). Значения задаются в game/css/theme.css.
  // ----------------------------------------------------------
  COLORS: {
    cellBg:        { var: '--color-cell-bg',        fallback: '#1a1410' },
    grillBar:      { var: '--color-grill-bar',      fallback: '#a89480' },
    comboFill:     { var: '--color-combo-fill',     fallback: '#ff7a00' },
    comboFillFast: { var: '--color-combo-fast',     fallback: '#ff1f00' },
    comboTrack:    { var: '--color-combo-track',    fallback: '#2a1b14' },
    comboLabel:    { var: '--color-combo-label',    fallback: '#ffffff' },
    spawnBadge:    { var: '--color-spawn-badge',    fallback: '#ffefc2' },
    accent:        { var: '--color-accent',         fallback: '#ff7a00' },
  },
};

export const DEBUG_DISABLE_LIMIT = true;