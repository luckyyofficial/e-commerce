/* ==========================================================================
   ShopGrids Advanced E-Commerce Client Application
   Full interactive suite: Cart, Wishlist, Checkout, Tracking, Quick View,
   Live Search, Currency Switcher, Live Countdown, and Toast Notifications
   ========================================================================== */

(function () {
  'use strict';

  // ================= 1. Product Catalog Data =================
  const PRODUCTS = [
    {
      id: 'prod-1',
      title: 'Xiaomi Mi Band 5 Smart Fitness Tracker',
      category: 'Watches',
      categoryKey: 'watches',
      price: 199.0,
      origPrice: 229.0,
      rating: 4.5,
      reviewsCount: 38,
      image: 'assets/images/products/product-1.jpg',
      badge: 'HOT',
      badgeClass: 'sale-tag',
      inStock: 18,
      sku: 'WTC-XMB5-01',
      description:
        'The Xiaomi Mi Band 5 features a crisp 1.1-inch dynamic AMOLED display, 24/7 heart rate monitoring, sleep analysis, and 14-day ultra-long battery life with magnetic charging.',
      features: [
        '1.1" Dynamic AMOLED Color Display',
        '24/7 PPG Heart Rate & Sleep Monitoring',
        '11 Professional Sports Tracking Modes',
        '50M Water Resistance (5 ATM)',
        '14-Day Magnetic Fast Charging'
      ],
      colors: ['Black', 'Navy Blue', 'Forest Green'],
      gallery: [
        'assets/images/products/product-1.jpg',
        'assets/images/header/cart-items/item1.jpg',
        'assets/images/product-details/04.jpg'
      ]
    },
    {
      id: 'prod-2',
      title: 'Big Power Sound 360° Bluetooth Speaker',
      category: 'Speaker',
      categoryKey: 'speaker',
      price: 275.0,
      origPrice: 300.0,
      rating: 5.0,
      reviewsCount: 64,
      image: 'assets/images/products/product-2.jpg',
      badge: '-25%',
      badgeClass: 'sale-tag',
      inStock: 9,
      sku: 'SPK-BPS360-02',
      description:
        'Engineered for room-filling acoustic brilliance, this high-output Bluetooth speaker delivers 60W of crystal-clear sound, deep bass radiators, and IPX7 waterproof durability.',
      features: [
        '60W High-Fidelity Stereo Output',
        'Dual Passive Bass Radiators',
        'IPX7 Complete Waterproof Housing',
        '24-Hour Continuous Playtime',
        'TWS Wireless Stereo Pairing'
      ],
      colors: ['Midnight Black', 'Slate Gray', 'Ocean Teal'],
      gallery: [
        'assets/images/products/product-2.jpg',
        'assets/images/products/product-6.jpg',
        'assets/images/product-details/02.jpg'
      ]
    },
    {
      id: 'prod-3',
      title: 'Ultra HD WiFi Smart Security Camera',
      category: 'Camera',
      categoryKey: 'camera',
      price: 399.0,
      origPrice: 450.0,
      rating: 5.0,
      reviewsCount: 52,
      image: 'assets/images/products/product-3.jpg',
      badge: 'SECURITY',
      badgeClass: 'new-tag',
      inStock: 14,
      sku: 'CAM-WSC1080-03',
      description:
        'Protect your home and office with 2K Ultra HD resolution, AI-powered person and motion detection, crystal-clear infrared night vision, and two-way real-time audio.',
      features: [
        '2K 1440p Ultra HD Video Quality',
        '360° Pan & 114° Vertical Tilt Coverage',
        'AI Human & Motion Detection Alerts',
        'Color Night Vision up to 30 Feet',
        'Encrypted Cloud & 256GB MicroSD Support'
      ],
      colors: ['Pure White', 'Matte Black'],
      gallery: [
        'assets/images/products/product-3.jpg',
        'assets/images/header/cart-items/item2.jpg',
        'assets/images/product-details/01.jpg'
      ]
    },
    {
      id: 'prod-4',
      title: 'iPhone 12 Pro Max 256GB Flagship',
      category: 'Phones',
      categoryKey: 'phones',
      price: 400.0,
      origPrice: 520.0,
      rating: 5.0,
      reviewsCount: 112,
      image: 'assets/images/products/product-4.jpg',
      badge: 'NEW',
      badgeClass: 'new-tag',
      inStock: 6,
      sku: 'PHN-APL12PM-04',
      description:
        'Immerse in the expansive 6.7-inch Super Retina XDR OLED display, powerhouse A14 Bionic chip, LiDAR scanner, and pro triple-camera system with 4K Dolby Vision HDR recording.',
      features: [
        '6.7-inch Super Retina XDR OLED Display',
        'A14 Bionic Chip with Next-Gen Neural Engine',
        'Triple 12MP Camera System with Sensor-Shift OIS',
        'Ceramic Shield Front with 4x Drop Performance',
        'Sub-6GHz and mmWave 5G Cellular Speeds'
      ],
      colors: ['Pacific Blue', 'Graphite', 'Gold', 'Silver'],
      gallery: [
        'assets/images/products/product-4.jpg',
        'assets/images/hero/slider-bnr.jpg',
        'assets/images/product-details/03.jpg'
      ]
    },
    {
      id: 'prod-5',
      title: 'Studio Hi-Fi Wireless ANC Headphones',
      category: 'Headphones',
      categoryKey: 'headphones',
      price: 350.0,
      origPrice: 420.0,
      rating: 5.0,
      reviewsCount: 78,
      image: 'assets/images/products/product-5.jpg',
      badge: 'TOP RATED',
      badgeClass: 'new-tag',
      inStock: 22,
      sku: 'AUD-SHF-ANC-05',
      description:
        'Featuring custom 40mm beryllium drivers, active hybrid noise cancellation, ergonomic memory foam earcups, and up to 45 hours of playtime with quick charge.',
      features: [
        'Hybrid Active Noise Cancellation (4 Mics)',
        'Audiophile 40mm Beryllium Sound Drivers',
        '45-Hour Battery Life with USB-C Quick Charge',
        'Multipoint Bluetooth 5.3 Pairing',
        'Plush Breathable Protein Leather Cushions'
      ],
      colors: ['Space Gray', 'Champagne Silver', 'Matte Black'],
      gallery: [
        'assets/images/products/product-5.jpg',
        'assets/images/products/product-7.jpg',
        'assets/images/banner/banner-2-bg.jpg'
      ]
    },
    {
      id: 'prod-6',
      title: 'Mini Bluetooth Pocket Speaker Bass+',
      category: 'Speaker',
      categoryKey: 'speaker',
      price: 70.0,
      origPrice: 95.0,
      rating: 4.0,
      reviewsCount: 29,
      image: 'assets/images/products/product-6.jpg',
      badge: 'SALE',
      badgeClass: 'sale-tag',
      inStock: 30,
      sku: 'SPK-MBP-06',
      description:
        'Compact enough to fit into your pocket, yet packs an astonishing punch with reinforced bass resonance, rugged shockproof rubber casing, and integrated speakerphone.',
      features: [
        'Compact Ultra-Portable Pocket Design',
        'Rich Bass+ Dynamic Sound Profile',
        'IP67 Water & Dust Resistance',
        'Built-in Microphone for Hands-Free Calling',
        'Up to 12 Hours Battery on a Single Charge'
      ],
      colors: ['Charcoal', 'Ruby Red', 'Cobalt Blue'],
      gallery: [
        'assets/images/products/product-6.jpg',
        'assets/images/products/product-2.jpg'
      ]
    },
    {
      id: 'prod-7',
      title: 'PX7 Wireless Over-Ear Active Headphones',
      category: 'Headphones',
      categoryKey: 'headphones',
      price: 100.0,
      origPrice: 200.0,
      rating: 4.0,
      reviewsCount: 45,
      image: 'assets/images/products/product-7.jpg',
      badge: '-50%',
      badgeClass: 'sale-tag',
      inStock: 11,
      sku: 'AUD-PX7-07',
      description:
        'Half price special! Premium high-resolution over-ear headphones with adaptive noise cancellation, ambient transparency pass-through, and carbon fiber composite arms.',
      features: [
        'Adaptive Noise Cancelling with Smart Ambient Mode',
        'Custom 43.6mm Full-Range Drivers',
        '30-Hour Battery with 15-Min Quick Charge (5 hrs)',
        'Wear-Sensing Pause/Play Detection',
        'Lightweight Carbon Fiber Arm Structure'
      ],
      colors: ['Carbon Black', 'Silver Gray'],
      gallery: [
        'assets/images/products/product-7.jpg',
        'assets/images/products/product-5.jpg'
      ]
    },
    {
      id: 'prod-8',
      title: 'Apple MacBook Air 13.3" M1 256GB',
      category: 'Laptop',
      categoryKey: 'laptop',
      price: 899.0,
      origPrice: 999.0,
      rating: 5.0,
      reviewsCount: 95,
      image: 'assets/images/products/product-8.jpg',
      badge: 'BESTSELLER',
      badgeClass: 'new-tag',
      inStock: 8,
      sku: 'LPT-MBA-M1-08',
      description:
        'Supercharged by the groundbreaking Apple M1 chip with 8-core CPU and 7-core GPU, fanless silent operation, 18-hour battery longevity, and stunning Retina display with P3 wide color.',
      features: [
        'Apple M1 Chip with 8-Core CPU & 7-Core GPU',
        '13.3-inch Retina Display with True Tone Technology',
        'Silent Fanless Thermal Design',
        'Up to 18 Hours All-Day Battery Life',
        'Backlit Magic Keyboard with Touch ID Sensor'
      ],
      colors: ['Space Gray', 'Silver', 'Gold'],
      gallery: [
        'assets/images/products/product-8.jpg',
        'assets/images/hero/slider-bg1.jpg'
      ]
    },
    {
      id: 'prod-9',
      title: 'Apple Watch Series 6 GPS 44mm Space Gray',
      category: 'Watches',
      categoryKey: 'watches',
      price: 99.0,
      origPrice: 149.0,
      rating: 5.0,
      reviewsCount: 88,
      image: 'assets/images/header/cart-items/item1.jpg',
      badge: 'POPULAR',
      badgeClass: 'sale-tag',
      inStock: 15,
      sku: 'WTC-AWS6-09',
      description:
        'Measure your blood oxygen level with a revolutionary sensor and app. Take an ECG anytime, anywhere. See fitness metrics on the enhanced Always-On Retina display.',
      features: [
        'Blood Oxygen Sensor & ECG App Support',
        'Always-On Retina OLED Display',
        'S6 SiP with 64-Bit Dual-Core Processor',
        '50M Water Resistance for Swimming',
        'Emergency SOS & Fall Detection'
      ],
      colors: ['Space Gray', 'Silver', 'Product RED'],
      gallery: [
        'assets/images/header/cart-items/item1.jpg',
        'assets/images/products/product-1.jpg'
      ]
    },
    {
      id: 'prod-10',
      title: 'Wi-Fi Smart HD Pan-Tilt Security Camera',
      category: 'Camera',
      categoryKey: 'camera',
      price: 35.0,
      origPrice: 50.0,
      rating: 4.8,
      reviewsCount: 36,
      image: 'assets/images/header/cart-items/item2.jpg',
      badge: 'DEAL',
      badgeClass: 'new-tag',
      inStock: 25,
      sku: 'CAM-WSC35-10',
      description:
        'Affordable home monitoring with crystal clear 1080p, night vision, motion tracking, and remote live smartphone streaming through the companion iOS/Android app.',
      features: [
        '1080p Full HD Resolution',
        'Night Vision Infrared LEDs (up to 30ft)',
        'Motion Tracking with Mobile Alerts',
        'Two-Way Built-in Audio Speaker/Mic',
        'Works with Alexa and Google Assistant'
      ],
      colors: ['White'],
      gallery: [
        'assets/images/header/cart-items/item2.jpg',
        'assets/images/products/product-3.jpg'
      ]
    }
  ];

  // ================= 2. Currency Rates & Converter =================
  const CURRENCIES = {
    USD: { code: 'USD', symbol: '$', rate: 1.0, name: '$ USD' },
    EUR: { code: 'EUR', symbol: '€', rate: 0.92, name: '€ EURO' },
    CAD: { code: 'CAD', symbol: 'CA$', rate: 1.36, name: '$ CAD' },
    INR: { code: 'INR', symbol: '₹', rate: 83.5, name: '₹ INR' },
    CNY: { code: 'CNY', symbol: '¥', rate: 7.23, name: '¥ CNY' },
    BDT: { code: 'BDT', symbol: '৳', rate: 110.0, name: '৳ BDT' }
  };

  let currentCurrencyCode = localStorage.getItem('ecom_currency') || 'USD';

  function formatMoney(amountInUSD) {
    const curr = CURRENCIES[currentCurrencyCode] || CURRENCIES.USD;
    const converted = amountInUSD * curr.rate;
    if (curr.code === 'INR' || curr.code === 'BDT' || curr.code === 'CNY') {
      return `${curr.symbol}${converted.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    }
    return `${curr.symbol}${converted.toFixed(2)}`;
  }

  function setCurrency(code) {
    if (CURRENCIES[code]) {
      currentCurrencyCode = code;
      localStorage.setItem('ecom_currency', code);
      refreshAllPricesOnPage();
      updateCartUI();
      showToast('Currency Updated', `Switched display currency to ${CURRENCIES[code].name}`, 'info');
    }
  }

  function refreshAllPricesOnPage() {
    // Update trending products price tags
    document.querySelectorAll('[data-product-id]').forEach(card => {
      const pid = card.getAttribute('data-product-id');
      const prod = PRODUCTS.find(p => p.id === pid);
      if (prod) {
        const priceEl = card.querySelector('.price span:not(.discount-price)');
        const discountEl = card.querySelector('.discount-price');
        if (priceEl) priceEl.textContent = formatMoney(prod.price);
        if (discountEl && prod.origPrice) discountEl.textContent = formatMoney(prod.origPrice);
      }
    });

    // Update deal section cards
    document.querySelectorAll('.deal-product-card[data-deal-id]').forEach(dealCard => {
      const pid = dealCard.getAttribute('data-deal-id');
      const prod = PRODUCTS.find(p => p.id === pid);
      if (prod) {
        const currPrice = dealCard.querySelector('.deal-curr-price');
        const origPrice = dealCard.querySelector('.deal-orig-price');
        if (currPrice) currPrice.textContent = formatMoney(prod.price);
        if (origPrice && prod.origPrice) origPrice.textContent = formatMoney(prod.origPrice);
      }
    });
  }

  // ================= 3. Shopping Cart State =================
  let cart = [];
  const storedCart = localStorage.getItem('ecom_cart');
  if (storedCart) {
    try {
      cart = JSON.parse(storedCart);
    } catch (e) {
      cart = [];
    }
  }

  // Default initial demo cart if completely empty
  if (!cart || cart.length === 0) {
    cart = [
      { id: 'prod-9', qty: 1, color: 'Space Gray' },
      { id: 'prod-10', qty: 1, color: 'White' }
    ];
    saveCart();
  }

  function saveCart() {
    localStorage.setItem('ecom_cart', JSON.stringify(cart));
  }

  // Active Promo Code
  let activeCoupon = localStorage.getItem('ecom_coupon') || null;

  // ================= Web Audio API Synthesizer =================
  let soundEnabled = localStorage.getItem('ecom_sound') !== 'false';
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      if (AudioClass) audioCtx = new AudioClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playChime(type = 'cart') {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'cart') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'win') {
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.12, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.35);
        });
      } else if (type === 'tick') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, now);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.03);
      }
    } catch (e) {}
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('ecom_sound', soundEnabled ? 'true' : 'false');
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.innerHTML = soundEnabled ? '<i class="lni lni-volume-high"></i>' : '<i class="lni lni-volume-mute"></i>';
      btn.title = soundEnabled ? 'Sound Effects: ON' : 'Sound Effects: OFF';
    }
    showToast(soundEnabled ? 'Audio Feedback ON 🔊' : 'Audio Feedback Muted 🔇', soundEnabled ? 'Pleasant UI chimes enabled.' : 'UI chimes muted.', 'info');
    if (soundEnabled) playChime('cart');
  }

  function addToCart(productId, qty = 1, options = {}) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: productId,
        qty: qty,
        color: options.color || (prod.colors && prod.colors[0]) || 'Standard'
      });
    }

    saveCart();
    updateCartUI();
    playChime('cart');
    showToast('Added to Cart', `${prod.title} added (${qty}x)`, 'success');

    // Subtle bounce animation on header cart icon
    const cartBtn = document.querySelector('.header .cart-items .main-btn');
    if (cartBtn) {
      cartBtn.style.transform = 'scale(1.25)';
      setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
      }, 300);
    }
  }

  function removeFromCart(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    if (prod) {
      showToast('Item Removed', `${prod.title} was removed from your cart.`, 'info');
    }
  }

  function updateCartQty(productId, newQty) {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty = newQty;
      saveCart();
      updateCartUI();
    }
  }

  function getCartCalculations() {
    let subtotal = 0;
    let totalItems = 0;

    cart.forEach(item => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      if (prod) {
        subtotal += prod.price * item.qty;
        totalItems += item.qty;
      }
    });

    let discount = 0;
    if (activeCoupon === 'VIP20' || activeCoupon === 'SAVE20') {
      discount = subtotal * 0.2; // 20%
    } else if (activeCoupon === 'WELCOME10') {
      discount = subtotal * 0.1; // 10%
    } else if (activeCoupon === 'FLASH50' && subtotal >= 200) {
      discount = 50.0;
    } else if (activeCoupon === 'LUCKY25') {
      discount = subtotal * 0.25; // 25% Lucky Spin
    } else if (activeCoupon === 'SPIN15') {
      discount = subtotal * 0.15; // 15% Lucky Spin
    } else if (activeCoupon === 'WIN30' && subtotal >= 100) {
      discount = 30.0;
    } else if (activeCoupon === 'GIFTKIT') {
      discount = Math.min(25.0, subtotal); // $25 free accessory credit
    }

    // Free shipping threshold: $99
    let shipping = subtotal >= 99 || subtotal === 0 || activeCoupon === 'FREESHIP' ? 0.0 : 15.0;
    let taxableAmount = Math.max(0, subtotal - discount);
    let estimatedTax = taxableAmount > 0 ? taxableAmount * 0.08 : 0; // 8% sales tax
    let grandTotal = Math.max(0, taxableAmount + shipping + estimatedTax);

    return {
      subtotal,
      discount,
      shipping,
      estimatedTax,
      grandTotal,
      totalItems
    };
  }

  function updateCartUI() {
    const calcs = getCartCalculations();

    // 1. Update Header Badges
    document.querySelectorAll('.cart-items .total-items').forEach(badge => {
      badge.textContent = calcs.totalItems;
    });

    // 2. Update Header Shopping-List (Hover dropdown)
    const headerShoppingList = document.querySelector('.header .shopping-list');
    const headerCartTotal = document.querySelector('.header .dropdown-cart-header span');
    const headerCartAmount = document.querySelector('.header .total-amount');

    if (headerCartTotal) {
      headerCartTotal.textContent = `${calcs.totalItems} ${calcs.totalItems === 1 ? 'Item' : 'Items'}`;
    }
    if (headerCartAmount) {
      headerCartAmount.textContent = formatMoney(calcs.grandTotal);
    }

    if (headerShoppingList) {
      if (cart.length === 0) {
        headerShoppingList.innerHTML = `<li style="padding:15px 0;text-align:center;color:#6b7280;">Your shopping cart is empty.</li>`;
      } else {
        headerShoppingList.innerHTML = cart
          .map(item => {
            const prod = PRODUCTS.find(p => p.id === item.id);
            if (!prod) return '';
            return `
            <li>
              <a href="javascript:void(0)" class="remove btn-remove-cart" data-id="${prod.id}" title="Remove this item">
                <i class="lni lni-close"></i>
              </a>
              <div class="cart-img-head">
                <a class="cart-img" href="javascript:void(0)" onclick="ShopApp.openQuickView('${prod.id}')">
                  <img src="${prod.image}" alt="${prod.title}">
                </a>
              </div>
              <div class="content">
                <h4><a href="javascript:void(0)" onclick="ShopApp.openQuickView('${prod.id}')">${prod.title}</a></h4>
                <p class="quantity">${item.qty}x - <span class="amount">${formatMoney(prod.price)}</span></p>
              </div>
            </li>
          `;
          })
          .join('');
      }
    }

    // 3. Update Slide-out Cart Drawer
    renderCartDrawer(calcs);
  }

  function renderCartDrawer(calcs) {
    const drawerContainer = document.getElementById('cartDrawerItems');
    const drawerTotalItems = document.getElementById('drawerTotalItems');
    const drawerSubtotal = document.getElementById('drawerSubtotal');
    const drawerDiscount = document.getElementById('drawerDiscount');
    const drawerShipping = document.getElementById('drawerShipping');
    const drawerTax = document.getElementById('drawerTax');
    const drawerGrandTotal = document.getElementById('drawerGrandTotal');
    const shippingMeterText = document.getElementById('shippingMeterText');
    const shippingMeterFill = document.getElementById('shippingMeterFill');

    if (drawerTotalItems) {
      drawerTotalItems.textContent = `(${calcs.totalItems})`;
    }

    // Free shipping meter
    if (shippingMeterText && shippingMeterFill) {
      if (calcs.subtotal >= 99) {
        shippingMeterText.innerHTML = `🎉 <strong>Congratulations!</strong> You qualify for <strong>FREE Express Shipping</strong>!`;
        shippingMeterFill.style.width = '100%';
        shippingMeterFill.style.background = '#10b981';
      } else {
        const remaining = 99 - calcs.subtotal;
        const pct = Math.min(100, Math.round((calcs.subtotal / 99) * 100));
        shippingMeterText.innerHTML = `Add <strong>${formatMoney(remaining)}</strong> more to unlock <strong>FREE Express Delivery</strong>!`;
        shippingMeterFill.style.width = `${pct}%`;
        shippingMeterFill.style.background = 'var(--ecom-primary)';
      }
    }

    if (drawerContainer) {
      if (cart.length === 0) {
        drawerContainer.innerHTML = `
          <div class="cart-empty-state">
            <div class="cart-empty-icon"><i class="lni lni-cart-full"></i></div>
            <h5>Your Cart is Empty</h5>
            <p>Looks like you haven't added anything to your cart yet. Explore our trending electronics!</p>
            <button class="btn btn-primary" onclick="ShopApp.closeCartDrawer(); window.scrollTo({top: 800, behavior: 'smooth'});">
              Shop Trending Deals
            </button>
          </div>
        `;
      } else {
        drawerContainer.innerHTML = cart
          .map(item => {
            const prod = PRODUCTS.find(p => p.id === item.id);
            if (!prod) return '';
            const itemTotal = prod.price * item.qty;
            return `
            <div class="cart-drawer-item">
              <img src="${prod.image}" alt="${prod.title}" class="cart-drawer-item-img" onclick="ShopApp.openQuickView('${prod.id}')" style="cursor:pointer;">
              <div class="cart-drawer-item-details">
                <div class="cart-drawer-item-title" onclick="ShopApp.openQuickView('${prod.id}')" style="cursor:pointer;">
                  ${prod.title}
                </div>
                <div class="cart-drawer-item-price">
                  ${formatMoney(prod.price)} <small style="color:#64748b;font-weight:normal;">(${item.color})</small>
                </div>
                <div class="cart-qty-stepper">
                  <button class="cart-qty-btn" onclick="ShopApp.changeCartItemQty('${prod.id}', ${item.qty - 1})">-</button>
                  <span class="cart-qty-value">${item.qty}</span>
                  <button class="cart-qty-btn" onclick="ShopApp.changeCartItemQty('${prod.id}', ${item.qty + 1})">+</button>
                </div>
              </div>
              <button class="cart-drawer-item-remove" onclick="ShopApp.removeFromCart('${prod.id}')" title="Remove Item">
                <i class="lni lni-trash"></i>
              </button>
            </div>
          `;
          })
          .join('');
      }
    }

    // Totals
    if (drawerSubtotal) drawerSubtotal.textContent = formatMoney(calcs.subtotal);
    if (drawerDiscount) {
      if (calcs.discount > 0) {
        drawerDiscount.textContent = `-${formatMoney(calcs.discount)}`;
        drawerDiscount.parentElement.style.display = 'flex';
      } else {
        drawerDiscount.parentElement.style.display = 'none';
      }
    }
    if (drawerShipping) {
      drawerShipping.textContent = calcs.shipping === 0 ? 'FREE' : formatMoney(calcs.shipping);
      drawerShipping.style.color = calcs.shipping === 0 ? '#10b981' : '#64748b';
    }
    if (drawerTax) drawerTax.textContent = formatMoney(calcs.estimatedTax);
    if (drawerGrandTotal) drawerGrandTotal.textContent = formatMoney(calcs.grandTotal);
  }

  // ================= 4. Wishlist State =================
  let wishlist = [];
  const storedWishlist = localStorage.getItem('ecom_wishlist');
  if (storedWishlist) {
    try {
      wishlist = JSON.parse(storedWishlist);
    } catch (e) {
      wishlist = [];
    }
  }

  function saveWishlist() {
    localStorage.setItem('ecom_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
  }

  function toggleWishlist(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      showToast('Wishlist Updated', `${prod.title} removed from saved items.`, 'info');
    } else {
      wishlist.push(productId);
      showToast('Added to Wishlist ❤️', `${prod.title} saved to your favorites.`, 'success');
    }
    saveWishlist();
  }

  function updateWishlistUI() {
    // Update badge in header
    document.querySelectorAll('.navbar-cart .wishlist .total-items').forEach(badge => {
      badge.textContent = wishlist.length;
    });

    // Update active state on product cards
    document.querySelectorAll('.quick-action-btn[data-wishlist-id]').forEach(btn => {
      const pid = btn.getAttribute('data-wishlist-id');
      if (wishlist.includes(pid)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="lni lni-heart-filled"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="lni lni-heart"></i>';
      }
    });

    // Render Wishlist Modal if open
    renderWishlistModal();
  }

  function renderWishlistModal() {
    const listContainer = document.getElementById('wishlistItemsContainer');
    if (!listContainer) return;

    if (wishlist.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:50px;color:#cbd5e1;margin-bottom:12px;"><i class="lni lni-heart"></i></div>
          <h5 style="font-weight:700;">Your Wishlist is Empty</h5>
          <p style="color:#64748b;font-size:14px;">Save your favorite products to buy later or monitor for special deals.</p>
        </div>
      `;
    } else {
      listContainer.innerHTML = wishlist
        .map(id => {
          const prod = PRODUCTS.find(p => p.id === id);
          if (!prod) return '';
          return `
          <div class="d-flex align-items-center justify-content-between p-3 border-bottom">
            <div class="d-flex align-items-center gap-3">
              <img src="${prod.image}" alt="${prod.title}" style="width:60px;height:60px;object-fit:cover;border-radius:6px;border:1px solid #e2e8f0;">
              <div>
                <h6 style="margin-bottom:4px;font-weight:700;">${prod.title}</h6>
                <div style="font-weight:700;color:var(--ecom-primary);">${formatMoney(prod.price)}</div>
                <span class="badge ${prod.inStock > 0 ? 'bg-success' : 'bg-danger'}">${prod.inStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-sm btn-primary" onclick="ShopApp.addToCart('${prod.id}', 1); ShopApp.toggleWishlist('${prod.id}');">
                <i class="lni lni-cart"></i> Move to Cart
              </button>
              <button class="btn btn-sm btn-outline-danger" onclick="ShopApp.toggleWishlist('${prod.id}')">
                <i class="lni lni-trash"></i>
              </button>
            </div>
          </div>
        `;
        })
        .join('');
    }
  }

  // ================= 5. Quick View Modal =================
  let currentQuickViewProduct = null;
  let quickViewSelectedColor = null;
  let quickViewQty = 1;

  function openQuickView(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    recordRecentlyViewed(productId);

    currentQuickViewProduct = prod;
    quickViewQty = 1;
    quickViewSelectedColor = prod.colors ? prod.colors[0] : 'Standard';

    // Populate Modal Elements
    const modalTitle = document.getElementById('qvTitle');
    const modalImage = document.getElementById('qvMainImg');
    const modalThumbs = document.getElementById('qvGalleryThumbs');
    const modalCat = document.getElementById('qvCategory');
    const modalPrice = document.getElementById('qvPrice');
    const modalOrigPrice = document.getElementById('qvOrigPrice');
    const modalRatingStars = document.getElementById('qvRatingStars');
    const modalReviewCount = document.getElementById('qvReviewCount');
    const modalStock = document.getElementById('qvStockStatus');
    const modalSku = document.getElementById('qvSku');
    const modalDesc = document.getElementById('qvDescription');
    const modalColorsWrap = document.getElementById('qvColorSwatches');
    const modalQty = document.getElementById('qvQtyValue');

    if (modalTitle) modalTitle.textContent = prod.title;
    if (modalImage) modalImage.src = prod.image;
    if (modalCat) modalCat.textContent = prod.category;
    if (modalPrice) modalPrice.textContent = formatMoney(prod.price);
    if (modalOrigPrice) {
      if (prod.origPrice) {
        modalOrigPrice.textContent = formatMoney(prod.origPrice);
        modalOrigPrice.style.display = 'inline';
      } else {
        modalOrigPrice.style.display = 'none';
      }
    }
    if (modalSku) modalSku.textContent = prod.sku;
    if (modalDesc) modalDesc.textContent = prod.description;
    if (modalQty) modalQty.textContent = quickViewQty;

    const modalLiveViewers = document.getElementById('qvLiveViewers');
    const modalDeliveryCountdown = document.getElementById('qvDeliveryCountdown');
    if (modalLiveViewers) modalLiveViewers.textContent = Math.floor(Math.random() * 16) + 12;
    if (modalDeliveryCountdown) {
      const hrs = Math.floor(Math.random() * 4) + 2;
      const mins = Math.floor(Math.random() * 50) + 10;
      modalDeliveryCountdown.textContent = `${String(hrs).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m`;
    }

    if (modalStock) {
      modalStock.textContent = `In Stock (${prod.inStock} units available)`;
      modalStock.className = 'badge-stock badge-in-stock';
    }

    if (modalRatingStars) {
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        starsHtml += `<i class="lni lni-star-filled" style="color:#fecb00;margin-right:2px;"></i>`;
      }
      modalRatingStars.innerHTML = starsHtml;
    }
    if (modalReviewCount) {
      modalReviewCount.textContent = `(${prod.reviewsCount} verified customer reviews)`;
    }

    // Color Swatches
    if (modalColorsWrap) {
      if (prod.colors && prod.colors.length > 0) {
        modalColorsWrap.innerHTML = prod.colors
          .map((c, idx) => {
            return `
            <span class="variant-pill ${idx === 0 ? 'active' : ''}" onclick="ShopApp.selectQuickViewColor('${c}', this)">
              ${c}
            </span>
          `;
          })
          .join('');
      } else {
        modalColorsWrap.innerHTML = `<span class="variant-pill active">Standard</span>`;
      }
    }

    // Gallery Thumbs
    if (modalThumbs) {
      const thumbs = prod.gallery && prod.gallery.length > 0 ? prod.gallery : [prod.image];
      modalThumbs.innerHTML = thumbs
        .map((imgSrc, idx) => {
          return `
          <img src="${imgSrc}" class="quickview-thumb ${idx === 0 ? 'active' : ''}" onclick="ShopApp.setQuickViewMainImage('${imgSrc}', this)">
        `;
        })
        .join('');
    }

    // Open Bootstrap Modal
    const modalEl = document.getElementById('quickViewModal');
    if (modalEl) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    }
  }

  function setQuickViewMainImage(src, thumbEl) {
    const mainImg = document.getElementById('qvMainImg');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.quickview-thumb').forEach(t => t.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
  }

  function selectQuickViewColor(color, pillEl) {
    quickViewSelectedColor = color;
    document.querySelectorAll('#qvColorSwatches .variant-pill').forEach(p => p.classList.remove('active'));
    if (pillEl) pillEl.classList.add('active');
  }

  function changeQuickViewQty(delta) {
    quickViewQty = Math.max(1, quickViewQty + delta);
    const modalQty = document.getElementById('qvQtyValue');
    if (modalQty) modalQty.textContent = quickViewQty;
  }

  function addQuickViewToCart(buyNow = false) {
    if (!currentQuickViewProduct) return;
    addToCart(currentQuickViewProduct.id, quickViewQty, { color: quickViewSelectedColor });

    const modalEl = document.getElementById('quickViewModal');
    if (modalEl) {
      const bsModal = bootstrap.Modal.getInstance(modalEl);
      if (bsModal) bsModal.hide();
    }

    if (buyNow) {
      openCheckoutModal();
    }
  }

  // ================= 6. Live Search & Autocomplete =================
  function initLiveSearch() {
    const searchInput = document.getElementById('mainSearchInput');
    const searchSelect = document.getElementById('searchCategorySelect');
    const suggestionsBox = document.getElementById('searchSuggestionsDropdown');
    const searchBtn = document.getElementById('mainSearchBtn');

    if (!searchInput) return;

    function performSearch() {
      const query = searchInput.value.trim().toLowerCase();
      const selectedCat = searchSelect ? searchSelect.value.toLowerCase() : 'all';

      if (!suggestionsBox) return;

      if (query.length < 2) {
        suggestionsBox.style.display = 'none';
        return;
      }

      const matches = PRODUCTS.filter(prod => {
        const matchesQuery =
          prod.title.toLowerCase().includes(query) ||
          prod.category.toLowerCase().includes(query) ||
          prod.description.toLowerCase().includes(query);
        const matchesCat =
          selectedCat === 'all' ||
          prod.categoryKey === selectedCat ||
          prod.category.toLowerCase() === selectedCat;
        return matchesQuery && matchesCat;
      });

      if (matches.length === 0) {
        suggestionsBox.innerHTML = `
          <div style="padding:15px;text-align:center;color:#64748b;font-size:13px;">
            No products found matching "<strong>${searchInput.value}</strong>".
          </div>
        `;
      } else {
        suggestionsBox.innerHTML = matches
          .slice(0, 6)
          .map(prod => {
            return `
            <div class="search-suggestion-item" onclick="ShopApp.openQuickView('${prod.id}'); document.getElementById('searchSuggestionsDropdown').style.display='none';">
              <img src="${prod.image}" alt="${prod.title}" class="search-suggestion-img">
              <div class="search-suggestion-info">
                <div class="search-suggestion-title">${prod.title}</div>
                <div class="search-suggestion-cat">${prod.category}</div>
              </div>
              <div class="search-suggestion-price">${formatMoney(prod.price)}</div>
            </div>
          `;
          })
          .join('');
      }

      suggestionsBox.style.display = 'block';
    }

    searchInput.addEventListener('input', performSearch);
    if (searchSelect) searchSelect.addEventListener('change', performSearch);

    if (searchBtn) {
      searchBtn.addEventListener('click', e => {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (query.length >= 2) {
          filterProductsByQuery(query);
        }
      });
    }

    // Close suggestions on outside click
    document.addEventListener('click', e => {
      if (suggestionsBox && !searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.style.display = 'none';
      }
    });
  }

  function filterProductsByQuery(query) {
    const items = document.querySelectorAll('.single-product[data-product-id]');
    let count = 0;
    items.forEach(card => {
      const pid = card.getAttribute('data-product-id');
      const prod = PRODUCTS.find(p => p.id === pid);
      if (prod && (prod.title.toLowerCase().includes(query) || prod.category.toLowerCase().includes(query))) {
        card.closest('.col-lg-3').style.display = 'block';
        count++;
      } else {
        card.closest('.col-lg-3').style.display = 'none';
      }
    });

    window.scrollTo({
      top: document.getElementById('trendingProductsArea').offsetTop - 80,
      behavior: 'smooth'
    });

    showToast('Search Results', `Found ${count} matching product(s).`, 'info');
  }

  // ================= 7. Category Filter Tabs =================
  function initCategoryFilters() {
    const tabs = document.querySelectorAll('.filter-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        const cards = document.querySelectorAll('.single-product[data-product-id]');

        cards.forEach(card => {
          const cat = card.getAttribute('data-category');
          const col = card.closest('.col-lg-3');
          if (filter === 'all' || cat === filter) {
            col.style.display = 'block';
            card.style.animation = 'fadeIn 0.4s ease forwards';
          } else {
            col.style.display = 'none';
          }
        });
      });
    });
  }

  // ================= 8. Live Real-Time Countdown Timer =================
  function initDealCountdown() {
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    // Target: 2 days, 14 hours, 35 mins from now, stored in localStorage
    let targetTime = localStorage.getItem('ecom_deal_target');
    if (!targetTime || new Date(parseInt(targetTime)).getTime() <= Date.now()) {
      targetTime = Date.now() + (2 * 24 * 60 * 60 + 14 * 60 * 60 + 35 * 60) * 1000;
      localStorage.setItem('ecom_deal_target', targetTime);
    } else {
      targetTime = parseInt(targetTime);
    }

    function tick() {
      const now = Date.now();
      let diff = Math.max(0, targetTime - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const mins = Math.floor(diff / (1000 * 60));
      diff -= mins * (1000 * 60);
      const secs = Math.floor(diff / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(mins).padStart(2, '0');
      secsEl.textContent = String(secs).padStart(2, '0');
    }

    tick();
    setInterval(tick, 1000);
  }

  // ================= 9. Coupons Engine =================
  function applyCouponCode(code) {
    const trimmed = (code || '').trim().toUpperCase();
    if (trimmed === 'VIP20' || trimmed === 'SAVE20') {
      activeCoupon = trimmed;
      localStorage.setItem('ecom_coupon', trimmed);
      updateCartUI();
      playChime('win');
      showToast('Coupon Applied 🎉', '20% VIP discount applied to your cart!', 'success');
      return true;
    } else if (trimmed === 'WELCOME10') {
      activeCoupon = trimmed;
      localStorage.setItem('ecom_coupon', trimmed);
      updateCartUI();
      playChime('win');
      showToast('Coupon Applied 🎉', '10% Welcome discount applied to your cart!', 'success');
      return true;
    } else if (trimmed === 'FREESHIP') {
      activeCoupon = trimmed;
      localStorage.setItem('ecom_coupon', trimmed);
      updateCartUI();
      playChime('win');
      showToast('Coupon Applied 🎉', 'Free Express Shipping unlocked!', 'success');
      return true;
    } else if (trimmed === 'FLASH50') {
      activeCoupon = trimmed;
      localStorage.setItem('ecom_coupon', trimmed);
      updateCartUI();
      playChime('win');
      showToast('Coupon Applied 🎉', '$50 Flat Flash Discount applied!', 'success');
      return true;
    } else if (trimmed === 'LUCKY25') {
      activeCoupon = trimmed;
      localStorage.setItem('ecom_coupon', trimmed);
      updateCartUI();
      playChime('win');
      showToast('Lucky Spin 25% Off! 🎡', '25% Lucky Winner discount applied!', 'success');
      return true;
    } else if (trimmed === 'SPIN15') {
      activeCoupon = trimmed;
      localStorage.setItem('ecom_coupon', trimmed);
      updateCartUI();
      playChime('win');
      showToast('Lucky Spin 15% Off! 🎡', '15% Lucky Winner discount applied!', 'success');
      return true;
    } else if (trimmed === 'WIN30') {
      activeCoupon = trimmed;
      localStorage.setItem('ecom_coupon', trimmed);
      updateCartUI();
      playChime('win');
      showToast('Lucky Spin $30 Off! 🎡', '$30 Cash Voucher applied to your cart!', 'success');
      return true;
    } else if (trimmed === 'GIFTKIT') {
      activeCoupon = trimmed;
      localStorage.setItem('ecom_coupon', trimmed);
      updateCartUI();
      playChime('win');
      showToast('Tech Gift Credit Unlocked! 🎁', '$25 Gift Credit & Free Shipping applied!', 'success');
      return true;
    } else {
      showToast('Invalid Coupon', 'The code entered is invalid or expired. Try VIP20 or WELCOME10.', 'error');
      return false;
    }
  }

  // ================= 10. Checkout & Order Placement =================
  let checkoutStep = 1;

  function openCheckoutModal() {
    closeCartDrawer();
    checkoutStep = 1;
    updateCheckoutStepUI();

    const calcs = getCartCalculations();
    const orderItemsSummary = document.getElementById('checkoutOrderItemsSummary');
    const checkoutTotal = document.getElementById('checkoutGrandTotal');

    if (checkoutTotal) checkoutTotal.textContent = formatMoney(calcs.grandTotal);

    if (orderItemsSummary) {
      orderItemsSummary.innerHTML = cart
        .map(item => {
          const prod = PRODUCTS.find(p => p.id === item.id);
          if (!prod) return '';
          return `
          <div class="d-flex justify-content-between align-items-center mb-2" style="font-size:13px;">
            <span>${item.qty}x ${prod.title}</span>
            <strong>${formatMoney(prod.price * item.qty)}</strong>
          </div>
        `;
        })
        .join('');
    }

    const modalEl = document.getElementById('checkoutModal');
    if (modalEl) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    }
  }

  function updateCheckoutStepUI() {
    const step1El = document.getElementById('checkoutStep1');
    const step2El = document.getElementById('checkoutStep2');
    const nav1 = document.getElementById('chkStepNav1');
    const nav2 = document.getElementById('chkStepNav2');

    if (checkoutStep === 1) {
      if (step1El) step1El.style.display = 'block';
      if (step2El) step2El.style.display = 'none';
      if (nav1) nav1.classList.add('active');
      if (nav2) nav2.classList.remove('active');
    } else {
      if (step1El) step1El.style.display = 'none';
      if (step2El) step2El.style.display = 'block';
      if (nav1) nav1.classList.remove('active');
      if (nav2) nav2.classList.add('active');
    }
  }

  function proceedToCheckoutStep2() {
    const name = document.getElementById('chkFullName');
    const email = document.getElementById('chkEmail');
    const address = document.getElementById('chkAddress');

    if (!name || !name.value.trim()) {
      showToast('Missing Field', 'Please enter your full name.', 'error');
      return;
    }
    if (!email || !email.value.trim() || !email.value.includes('@')) {
      showToast('Invalid Email', 'Please provide a valid email address.', 'error');
      return;
    }
    if (!address || !address.value.trim()) {
      showToast('Missing Address', 'Please provide your shipping street address.', 'error');
      return;
    }

    checkoutStep = 2;
    updateCheckoutStepUI();
  }

  function backToCheckoutStep1() {
    checkoutStep = 1;
    updateCheckoutStepUI();
  }

  function submitFinalOrder() {
    const placeBtn = document.getElementById('btnPlaceOrder');
    if (placeBtn) {
      placeBtn.disabled = true;
      placeBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Processing Payment...`;
    }

    // Simulate payment authorization
    setTimeout(() => {
      if (placeBtn) {
        placeBtn.disabled = false;
        placeBtn.innerHTML = `Place Order`;
      }

      // Hide Checkout Modal
      const checkoutModalEl = document.getElementById('checkoutModal');
      if (checkoutModalEl) {
        const bsModal = bootstrap.Modal.getInstance(checkoutModalEl);
        if (bsModal) bsModal.hide();
      }

      // Generate Order Record
      const orderId = `SG-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      const calcs = getCartCalculations();
      const customerName = document.getElementById('chkFullName') ? document.getElementById('chkFullName').value : 'Valued Customer';
      const customerAddress = document.getElementById('chkAddress') ? document.getElementById('chkAddress').value : 'Standard Delivery';

      const orderData = {
        orderId: orderId,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        customerName: customerName,
        address: customerAddress,
        items: [...cart],
        totals: calcs
      };

      // Save order in history
      let orders = [];
      try {
        orders = JSON.parse(localStorage.getItem('ecom_orders') || '[]');
      } catch (e) {
        orders = [];
      }
      orders.unshift(orderData);
      localStorage.setItem('ecom_orders', JSON.stringify(orders));

      // Reset Cart
      cart = [];
      activeCoupon = null;
      localStorage.removeItem('ecom_coupon');
      saveCart();
      updateCartUI();

      // Open Order Confirmation Receipt Modal
      openOrderReceiptModal(orderData);
      showToast('Order Placed Successfully! 🎉', `Order #${orderId} is confirmed.`, 'success');
    }, 1300);
  }

  function openOrderReceiptModal(orderData) {
    const recId = document.getElementById('receiptOrderId');
    const recDate = document.getElementById('receiptDate');
    const recName = document.getElementById('receiptName');
    const recAddress = document.getElementById('receiptAddress');
    const recTotal = document.getElementById('receiptTotal');
    const recItems = document.getElementById('receiptItemsList');

    if (recId) recId.textContent = orderData.orderId;
    if (recDate) recDate.textContent = orderData.date;
    if (recName) recName.textContent = orderData.customerName;
    if (recAddress) recAddress.textContent = orderData.address;
    if (recTotal) recTotal.textContent = formatMoney(orderData.totals.grandTotal);

    if (recItems) {
      recItems.innerHTML = orderData.items
        .map(i => {
          const p = PRODUCTS.find(prod => prod.id === i.id);
          if (!p) return '';
          return `
          <div class="d-flex justify-content-between py-1" style="font-size:13px;border-bottom:1px dashed #f1f5f9;">
            <span>${i.qty}x ${p.title}</span>
            <span>${formatMoney(p.price * i.qty)}</span>
          </div>
        `;
        })
        .join('');
    }

    const receiptModalEl = document.getElementById('orderReceiptModal');
    if (receiptModalEl) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(receiptModalEl);
      bsModal.show();
    }
  }

  // ================= 11. Order Tracking System =================
  function trackOrder(orderId) {
    const inputVal = (orderId || (document.getElementById('trackOrderInput') ? document.getElementById('trackOrderInput').value : '')).trim();
    if (!inputVal) {
      showToast('Tracking Number Required', 'Please enter your order ID or tracking code.', 'error');
      return;
    }

    const trackResultId = document.getElementById('trackResultOrderId');
    const trackEstimatedDate = document.getElementById('trackEstimatedDate');
    const trackingBox = document.getElementById('trackingResultDetails');

    if (trackResultId) trackResultId.textContent = inputVal.toUpperCase();
    if (trackEstimatedDate) {
      const estDate = new Date();
      estDate.setDate(estDate.getDate() + 2);
      trackEstimatedDate.textContent = estDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }

    if (trackingBox) trackingBox.style.display = 'block';

    const trackModalEl = document.getElementById('orderTrackingModal');
    if (trackModalEl) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(trackModalEl);
      bsModal.show();
    }
  }

  // ================= 12. Toast Notification Engine =================
  function showToast(title, message, type = 'success') {
    let container = document.getElementById('ecomToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'ecomToastContainer';
      container.className = 'ecom-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `ecom-toast ${type}`;

    let iconHtml = '<i class="lni lni-checkmark-circle ecom-toast-icon"></i>';
    if (type === 'error') {
      iconHtml = '<i class="lni lni-cross-circle ecom-toast-icon"></i>';
    } else if (type === 'info') {
      iconHtml = '<i class="lni lni-bullhorn ecom-toast-icon"></i>';
    }

    toast.innerHTML = `
      ${iconHtml}
      <div class="ecom-toast-content">
        <div class="ecom-toast-title">${title}</div>
        <div class="ecom-toast-msg">${message}</div>
      </div>
      <button class="ecom-toast-close">&times;</button>
    `;

    const closeBtn = toast.querySelector('.ecom-toast-close');
    closeBtn.addEventListener('click', () => {
      toast.style.animation = 'toastFadeOut 0.3s forwards';
      setTimeout(() => toast.remove(), 300);
    });

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.animation = 'toastFadeOut 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
      }
    }, 3800);
  }

  // ================= 13. Cart Drawer Toggle Controls =================
  function openCartDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) overlay.classList.add('active');
  }

  function closeCartDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  // ================= 14. Demo User Auth =================
  function loginDemoUser() {
    const userBadge = document.getElementById('headerUserGreeting');
    if (userBadge) {
      userBadge.innerHTML = `<i class="lni lni-user"></i> Hello, <strong>Alex</strong> <span class="badge bg-primary ms-1">VIP</span>`;
    }
    showToast('Welcome, Alex! 👋', 'Logged in as VIP Member. 20% discount unlocked.', 'success');

    const authModalEl = document.getElementById('authModal');
    if (authModalEl) {
      const bsModal = bootstrap.Modal.getInstance(authModalEl);
      if (bsModal) bsModal.hide();
    }
  }

  // ================= 15. Initial Bindings on DOM Ready =================
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Currency selector binding
    const currSelect = document.getElementById('select4');
    if (currSelect) {
      currSelect.addEventListener('change', function () {
        const valMap = { '0': 'USD', '1': 'EUR', '2': 'CAD', '3': 'INR', '4': 'CNY', '5': 'BDT' };
        const code = valMap[this.value] || 'USD';
        setCurrency(code);
      });
      // set default select index
      const revMap = { USD: '0', EUR: '1', CAD: '2', INR: '3', CNY: '4', BDT: '5' };
      if (revMap[currentCurrencyCode]) {
        currSelect.value = revMap[currentCurrencyCode];
      }
    }

    // 2. Open Cart drawer when clicking cart button in header
    document.querySelectorAll('.navbar-cart .cart-items .main-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openCartDrawer();
      });
    });

    // 3. Open Wishlist modal when clicking wishlist button in header
    document.querySelectorAll('.navbar-cart .wishlist a').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        renderWishlistModal();
        const wishModalEl = document.getElementById('wishlistModal');
        if (wishModalEl) {
          const bsModal = bootstrap.Modal.getOrCreateInstance(wishModalEl);
          bsModal.show();
        }
      });
    });

    // 4. Cart Drawer Overlay Close
    const overlay = document.getElementById('cartDrawerOverlay');
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeCartDrawer();
      });
    }

    // 5. Drawer Promo Code Apply
    const promoBtn = document.getElementById('drawerApplyPromoBtn');
    const promoInput = document.getElementById('drawerPromoInput');
    if (promoBtn && promoInput) {
      promoBtn.addEventListener('click', function () {
        applyCouponCode(promoInput.value);
      });
    }

    // 6. VIP Banner Copy Code Button
    const vipCopyBtn = document.getElementById('btnCopyVipCode');
    if (vipCopyBtn) {
      vipCopyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText('VIP20').then(() => {
          vipCopyBtn.textContent = 'Code Copied! ✓';
          vipCopyBtn.style.background = '#10b981';
          applyCouponCode('VIP20');
          setTimeout(() => {
            vipCopyBtn.textContent = 'Copy Code';
            vipCopyBtn.style.background = 'var(--ecom-dark)';
          }, 3000);
        });
      });
    }

    // 7. Newsletter Subscription Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = newsletterForm.querySelector('input[name="EMAIL"]');
        if (input && input.value.includes('@')) {
          showToast('Subscribed! 🎁', 'Use coupon WELCOME10 for 10% off your purchase.', 'success');
          input.value = '';
        } else {
          showToast('Invalid Email', 'Please enter a valid email address.', 'error');
        }
      });
    }

    // 8. Credit Card number formatting on checkout
    const ccInput = document.getElementById('chkCardNumber');
    if (ccInput) {
      ccInput.addEventListener('input', function (e) {
        let val = e.target.value.replace(/\D/g, '');
        val = val.replace(/(.{4})/g, '$1 ').trim();
        e.target.value = val.substring(0, 19);
      });
    }
    const ccExpiry = document.getElementById('chkCardExpiry');
    if (ccExpiry) {
      ccExpiry.addEventListener('input', function (e) {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length >= 2) {
          val = val.substring(0, 2) + '/' + val.substring(2, 4);
        }
        e.target.value = val.substring(0, 5);
      });
    }

    // 9. Initialize components
    applyTheme();
    initLiveSearch();
    initCategoryFilters();
    initDealCountdown();
    updateCartUI();
    updateWishlistUI();
    updateCompareUI();
    renderRecentlyViewed();
    initLiveSalesSocialProof();
    refreshAllPricesOnPage();

    // Sound button initial state
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
      soundBtn.innerHTML = soundEnabled ? '<i class="lni lni-volume-high"></i>' : '<i class="lni lni-volume-mute"></i>';
      soundBtn.title = soundEnabled ? 'Sound Effects: ON' : 'Sound Effects: OFF';
    }

    // Bundle checkboxes listeners
    BUNDLE_ITEMS.forEach(item => {
      const el = document.getElementById(item.elId);
      if (el) el.addEventListener('change', updateBundleCalculations);
    });
    updateBundleCalculations();

    // Store locator search input
    const storeSearch = document.getElementById('storeSearchInput');
    if (storeSearch) {
      storeSearch.addEventListener('input', e => renderStoreList(e.target.value));
    }

    // Check announcement bar session state
    if (sessionStorage.getItem('ecom_announcement_closed') === 'true') {
      const aBar = document.getElementById('topAnnouncementBar');
      if (aBar) aBar.style.display = 'none';
    }
  });

  // ================= 16. Dark Theme Toggle =================
  let isDarkMode = localStorage.getItem('ecom_theme') === 'dark';
  function applyTheme() {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = isDarkMode ? '<i class="lni lni-sun"></i>' : '<i class="lni lni-night"></i>';
      themeBtn.title = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('ecom_theme', isDarkMode ? 'dark' : 'light');
    applyTheme();
    showToast(isDarkMode ? 'Dark Mode Enabled 🌙' : 'Light Mode Enabled ☀️', 'Display theme updated.', 'info');
  }

  // ================= 17. Top Announcement Bar =================
  function closeAnnouncementBar() {
    const bar = document.getElementById('topAnnouncementBar');
    if (bar) {
      bar.style.display = 'none';
      sessionStorage.setItem('ecom_announcement_closed', 'true');
    }
  }

  // ================= 18. Product Comparison Tray & Modal =================
  let compareList = [];
  try {
    compareList = JSON.parse(localStorage.getItem('ecom_compare') || '[]');
  } catch(e) {
    compareList = [];
  }

  function toggleCompare(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const idx = compareList.indexOf(productId);
    if (idx > -1) {
      compareList.splice(idx, 1);
      showToast('Removed from Compare', `${prod.title} removed from comparison.`, 'info');
    } else {
      if (compareList.length >= 4) {
        showToast('Compare Limit Reached', 'You can compare up to 4 products at a time.', 'error');
        return;
      }
      compareList.push(productId);
      showToast('Added to Compare ⚖️', `${prod.title} added to comparison.`, 'success');
    }

    localStorage.setItem('ecom_compare', JSON.stringify(compareList));
    updateCompareUI();
  }

  function removeFromCompare(productId) {
    compareList = compareList.filter(id => id !== productId);
    localStorage.setItem('ecom_compare', JSON.stringify(compareList));
    updateCompareUI();
  }

  function clearCompare() {
    compareList = [];
    localStorage.removeItem('ecom_compare');
    updateCompareUI();
    showToast('Comparison Cleared', 'All products removed from comparison tray.', 'info');
  }

  function updateCompareUI() {
    const tray = document.getElementById('compareFloatingTray');
    const itemsWrap = document.getElementById('compareTrayItems');
    const countBadge = document.getElementById('compareCountBadge');

    if (!tray || !itemsWrap) return;

    if (compareList.length > 0) {
      tray.classList.add('active');
      if (countBadge) countBadge.textContent = compareList.length;

      itemsWrap.innerHTML = compareList.map(id => {
        const prod = PRODUCTS.find(p => p.id === id);
        if (!prod) return '';
        return `
          <div class="compare-tray-thumb" title="${prod.title}">
            <img src="${prod.image}" alt="${prod.title}">
            <button type="button" class="compare-tray-thumb-remove" onclick="ShopApp.removeFromCompare('${prod.id}')">&times;</button>
          </div>
        `;
      }).join('');
    } else {
      tray.classList.remove('active');
    }

    document.querySelectorAll('.quick-action-btn[data-compare-id]').forEach(btn => {
      const pid = btn.getAttribute('data-compare-id');
      if (compareList.includes(pid)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function openCompareModal() {
    if (compareList.length < 2) {
      showToast('Select More Products', 'Please select at least 2 products to compare.', 'info');
      return;
    }

    const tableBody = document.getElementById('compareTableBody');
    if (!tableBody) return;

    const prods = compareList.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

    const headerRow = `
      <tr>
        <th>Product</th>
        ${prods.map(p => `
          <td>
            <div class="compare-product-header">
              <img src="${p.image}" alt="${p.title}" style="max-height:80px;object-fit:contain;">
              <h6>${p.title}</h6>
              <div style="font-weight:800;color:var(--ecom-primary);font-size:16px;">${formatMoney(p.price)}</div>
            </div>
          </td>
        `).join('')}
      </tr>
    `;

    const ratingRow = `
      <tr>
        <th>Customer Rating</th>
        ${prods.map(p => `
          <td>
            <div style="color:#facc15;"><i class="lni lni-star-filled"></i> ${p.rating} / 5.0</div>
            <small class="text-muted">(${p.reviewsCount} reviews)</small>
          </td>
        `).join('')}
      </tr>
    `;

    const categoryRow = `
      <tr>
        <th>Category</th>
        ${prods.map(p => `<td><span class="badge bg-light text-dark border">${p.category}</span></td>`).join('')}
      </tr>
    `;

    const stockRow = `
      <tr>
        <th>Availability</th>
        ${prods.map(p => `<td><span class="badge ${p.inStock > 0 ? 'bg-success' : 'bg-danger'}">${p.inStock > 0 ? 'In Stock (' + p.inStock + ')' : 'Out of Stock'}</span></td>`).join('')}
      </tr>
    `;

    const warrantyRow = `
      <tr>
        <th>Warranty</th>
        ${prods.map(() => `<td>1-Year Official Manufacturer Warranty</td>`).join('')}
      </tr>
    `;

    const shippingRow = `
      <tr>
        <th>Delivery Speed</th>
        ${prods.map(p => `<td>${p.price >= 99 ? '<span class="text-success font-weight-bold">Free Express 2-Day Air</span>' : 'Standard 3-5 Days'}</td>`).join('')}
      </tr>
    `;

    const actionRow = `
      <tr>
        <th>Action</th>
        ${prods.map(p => `
          <td>
            <button class="btn btn-sm btn-primary w-100" onclick="ShopApp.addToCart('${p.id}', 1); bootstrap.Modal.getInstance(document.getElementById('compareModal')).hide();">
              <i class="lni lni-cart"></i> Add to Cart
            </button>
          </td>
        `).join('')}
      </tr>
    `;

    tableBody.innerHTML = headerRow + ratingRow + categoryRow + stockRow + warrantyRow + shippingRow + actionRow;

    const modalEl = document.getElementById('compareModal');
    if (modalEl) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    }
  }

  // ================= 19. Recently Viewed Products =================
  let recentlyViewed = [];
  try {
    recentlyViewed = JSON.parse(localStorage.getItem('ecom_recent') || '[]');
  } catch(e) {
    recentlyViewed = [];
  }

  function recordRecentlyViewed(productId) {
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    if (recentlyViewed.length > 6) recentlyViewed.pop();
    localStorage.setItem('ecom_recent', JSON.stringify(recentlyViewed));
    renderRecentlyViewed();
  }

  function renderRecentlyViewed() {
    const wrap = document.getElementById('recentlyViewedContainer');
    const section = document.getElementById('recentlyViewedSection');
    if (!wrap) return;

    if (recentlyViewed.length === 0) {
      if (section) section.style.display = 'none';
      return;
    }

    if (section) section.style.display = 'block';

    wrap.innerHTML = recentlyViewed.map(id => {
      const prod = PRODUCTS.find(p => p.id === id);
      if (!prod) return '';
      return `
        <div class="col-lg-2 col-md-4 col-6 mb-3">
          <div class="recent-product-card">
            <img src="${prod.image}" alt="${prod.title}" onclick="ShopApp.openQuickView('${prod.id}')" style="cursor:pointer;">
            <div class="recent-product-title" onclick="ShopApp.openQuickView('${prod.id}')" style="cursor:pointer;" title="${prod.title}">${prod.title}</div>
            <div class="recent-product-price">${formatMoney(prod.price)}</div>
            <button class="btn btn-sm btn-outline-primary w-100 mt-2" onclick="ShopApp.addToCart('${prod.id}', 1)">
              <i class="lni lni-cart"></i> Add
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // ================= 20. Live Social Proof Sales Popups =================
  function initLiveSalesSocialProof() {
    const buyers = [
      { name: 'Jessica T.', loc: 'Chicago, IL' },
      { name: 'Marcus L.', loc: 'Austin, TX' },
      { name: 'Chloe B.', loc: 'Seattle, WA' },
      { name: 'David K.', loc: 'London, UK' },
      { name: 'Rahul S.', loc: 'Toronto, CA' },
      { name: 'Liam P.', loc: 'Sydney, AU' },
      { name: 'Elena V.', loc: 'Berlin, DE' }
    ];

    const toastEl = document.getElementById('liveSalesToast');
    const toastImg = document.getElementById('liveSalesImg');
    const toastBuyer = document.getElementById('liveSalesBuyer');
    const toastProd = document.getElementById('liveSalesProd');
    const toastTime = document.getElementById('liveSalesTime');

    if (!toastEl) return;

    function triggerNotice() {
      const buyer = buyers[Math.floor(Math.random() * buyers.length)];
      const prod = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
      const minsAgo = Math.floor(Math.random() * 8) + 1;

      if (toastImg) toastImg.src = prod.image;
      if (toastBuyer) toastBuyer.textContent = `${buyer.name} from ${buyer.loc}`;
      if (toastProd) toastProd.textContent = prod.title;
      if (toastTime) toastTime.textContent = `Purchased ${minsAgo} minutes ago • Verified`;

      toastEl.classList.add('active');

      setTimeout(() => {
        toastEl.classList.remove('active');
      }, 5500);
    }

    setTimeout(triggerNotice, 5000);
    setInterval(triggerNotice, 25000);
  }

  // ================= 21. Live Customer Support Chat Assistant =================
  function toggleChatWindow() {
    const chatWin = document.getElementById('ecomChatWindow');
    if (chatWin) {
      chatWin.classList.toggle('active');
      if (chatWin.classList.contains('active')) {
        const input = document.getElementById('ecomChatInput');
        if (input) input.focus();
      }
    }
  }

  function sendChatMessage(text) {
    const input = document.getElementById('ecomChatInput');
    const msg = (text || (input ? input.value : '')).trim();
    if (!msg) return;

    if (input && !text) input.value = '';

    const body = document.getElementById('ecomChatBody');
    if (!body) return;

    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = msg;
    body.appendChild(userBubble);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
      const lower = msg.toLowerCase();
      let replyHtml = '';

      if (lower.includes('track') || lower.includes('order')) {
        replyHtml = `You can track any order live using our real-time portal! <br><a href="javascript:void(0)" onclick="ShopApp.trackOrder('SG-2026-8941'); ShopApp.toggleChatWindow();" style="color:var(--ecom-primary);font-weight:bold;text-decoration:underline;">Click here to Track Order #SG-2026-8941 &rarr;</a>`;
      } else if (lower.includes('coupon') || lower.includes('discount') || lower.includes('code') || lower.includes('promo')) {
        replyHtml = `Here are active store vouchers:<br>• <strong>VIP20</strong> for 20% OFF entire cart<br>• <strong>WELCOME10</strong> for 10% OFF<br>• <strong>FREESHIP</strong> for Free Shipping<br><button class="btn btn-sm btn-primary mt-2" onclick="ShopApp.applyCouponCode('VIP20')">Apply VIP20 Now</button>`;
      } else if (lower.includes('return') || lower.includes('refund')) {
        replyHtml = `We offer an unconditional <strong>30-Day Money Back Guarantee</strong>. If you are not completely satisfied, return the product for a 100% full refund with zero restocking fees.`;
      } else if (lower.includes('ship') || lower.includes('delivery')) {
        replyHtml = `We offer <strong>FREE Express 2-Day Air Shipping</strong> on all orders over $99. Most items ship from our logistics hub within 24 hours of ordering!`;
      } else if (lower.includes('macbook') || lower.includes('laptop')) {
        replyHtml = `The <strong>Apple MacBook Air M1</strong> is currently on Deal of the Day for $899 (save $100!). <br><button class="btn btn-sm btn-outline-primary mt-2" onclick="ShopApp.openQuickView('prod-8'); ShopApp.toggleChatWindow();">View MacBook Deal</button>`;
      } else {
        replyHtml = `Thanks for reaching out! Our team is ready to assist. You can browse our trending deals, use voucher code <strong>VIP20</strong>, or let us know if you have specific product questions!`;
      }

      const botBubble = document.createElement('div');
      botBubble.className = 'chat-bubble bot';
      botBubble.innerHTML = replyHtml;
      body.appendChild(botBubble);
      body.scrollTop = body.scrollHeight;
    }, 600);
  }

  // ================= 22. Catalog Sorting & Price Filter =================
  let currentSortCriteria = 'featured';
  let currentPriceFilter = 'all';

  function sortProducts(criteria) {
    currentSortCriteria = criteria;
    applyCatalogFiltersAndSort();
  }

  function filterByPrice(rangeKey) {
    currentPriceFilter = rangeKey;
    document.querySelectorAll('.price-pill-btn').forEach(btn => {
      if (btn.getAttribute('data-price-range') === rangeKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    applyCatalogFiltersAndSort();
  }

  function applyCatalogFiltersAndSort() {
    const container = document.getElementById('productsGridContainer');
    if (!container) return;

    let filtered = [...PRODUCTS];

    const activeCatTab = document.querySelector('.filter-tab-btn.active');
    const catFilter = activeCatTab ? activeCatTab.getAttribute('data-filter') : 'all';
    if (catFilter !== 'all') {
      filtered = filtered.filter(p => p.categoryKey === catFilter || p.category.toLowerCase() === catFilter);
    }

    if (currentPriceFilter === 'under-100') {
      filtered = filtered.filter(p => p.price < 100);
    } else if (currentPriceFilter === '100-300') {
      filtered = filtered.filter(p => p.price >= 100 && p.price <= 300);
    } else if (currentPriceFilter === '300-500') {
      filtered = filtered.filter(p => p.price > 300 && p.price <= 500);
    } else if (currentPriceFilter === 'over-500') {
      filtered = filtered.filter(p => p.price > 500);
    }

    if (currentSortCriteria === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSortCriteria === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSortCriteria === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSortCriteria === 'newest') {
      filtered.sort((a, b) => (b.badge === 'NEW' ? 1 : 0) - (a.badge === 'NEW' ? 1 : 0));
    }

    const countEl = document.getElementById('catalogItemCountText');
    if (countEl) countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;

    renderProductCards(filtered);
  }

  function renderProductCards(prods) {
    const container = document.getElementById('productsGridContainer');
    if (!container) return;

    if (prods.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <div style="font-size:48px;color:#cbd5e1;margin-bottom:12px;"><i class="lni lni-search"></i></div>
          <h5>No products match your selected filters</h5>
          <p class="text-muted">Try changing your price range or category filter.</p>
          <button class="btn btn-outline-primary" onclick="ShopApp.filterByPrice('all'); document.querySelector('[data-filter=all]').click();">Reset Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = prods.map(prod => {
      const isWish = wishlist.includes(prod.id);
      const isComp = compareList.includes(prod.id);
      return `
        <div class="col-lg-3 col-md-6 col-12 mb-4">
          <div class="single-product" data-product-id="${prod.id}" data-category="${prod.categoryKey}">
            <div class="product-quick-actions">
              <button class="quick-action-btn ${isWish ? 'active' : ''}" data-wishlist-id="${prod.id}" onclick="ShopApp.toggleWishlist('${prod.id}')" title="Add to Wishlist">
                <i class="lni ${isWish ? 'lni-heart-filled' : 'lni-heart'}"></i>
              </button>
              <button class="quick-action-btn ${isComp ? 'active' : ''}" data-compare-id="${prod.id}" onclick="ShopApp.toggleCompare('${prod.id}')" title="Compare Product">
                <i class="lni lni-reload"></i>
              </button>
              <button class="quick-action-btn" onclick="ShopApp.openQuickView('${prod.id}')" title="Quick View">
                <i class="lni lni-eye"></i>
              </button>
            </div>
            <div class="product-image">
              <img src="${prod.image}" alt="${prod.title}">
              <span class="${prod.badgeClass || 'sale-tag'}">${prod.badge || 'HOT'}</span>
              <div class="button">
                <a href="javascript:void(0)" onclick="ShopApp.addToCart('${prod.id}', 1)" class="btn">
                  <i class="lni lni-cart"></i> Add to Cart
                </a>
              </div>
            </div>
            <div class="product-info">
              <span class="category">${prod.category}</span>
              <h4 class="title">
                <a href="javascript:void(0)" onclick="ShopApp.openQuickView('${prod.id}')">${prod.title}</a>
              </h4>
              <ul class="review">
                <li><i class="lni lni-star-filled"></i></li>
                <li><i class="lni lni-star-filled"></i></li>
                <li><i class="lni lni-star-filled"></i></li>
                <li><i class="lni lni-star-filled"></i></li>
                <li><i class="lni ${prod.rating >= 4.5 ? 'lni-star-filled' : 'lni-star'}"></i></li>
                <li><span>${prod.rating.toFixed(1)} (${prod.reviewsCount})</span></li>
              </ul>
              <div class="price">
                <span>${formatMoney(prod.price)}</span>
                ${prod.origPrice ? `<span class="discount-price">${formatMoney(prod.origPrice)}</span>` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ================= 23. Customer Review Submission =================
  let userReviewRating = 5;
  function setReviewRating(score) {
    userReviewRating = score;
    const stars = document.querySelectorAll('#reviewStarPicker i');
    stars.forEach((star, idx) => {
      if (idx < score) {
        star.className = 'lni lni-star-filled active';
      } else {
        star.className = 'lni lni-star';
      }
    });
  }

  function submitCustomerReview(e) {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('revName');
    const commentInput = document.getElementById('revComment');

    const name = nameInput ? nameInput.value.trim() : 'Customer';
    const comment = commentInput ? commentInput.value.trim() : '';

    if (!comment) {
      showToast('Review Required', 'Please enter your review comments.', 'error');
      return;
    }

    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'CU';

    const testContainer = document.querySelector('#testimonialsSection .row:nth-child(2)');
    if (testContainer) {
      const newCard = document.createElement('div');
      newCard.className = 'col-lg-4 col-md-6 col-12 mb-4';
      newCard.innerHTML = `
        <div class="testimonial-card">
          <div>
            <div class="testimonial-header">
              <div class="testimonial-avatar" style="background:#eff6ff;color:var(--ecom-primary);border-color:#bfdbfe;">${initials}</div>
              <div class="testimonial-user">
                <h5>${name}</h5>
                <span><i class="lni lni-checkmark-circle"></i> Verified Buyer</span>
              </div>
            </div>
            <div class="testimonial-stars">
              ${'<i class="lni lni-star-filled"></i>'.repeat(userReviewRating)}
            </div>
            <p class="testimonial-body">"${comment}"</p>
          </div>
          <small style="color:#94a3b8;margin-top:15px;display:block;">Just now • Verified Purchase</small>
        </div>
      `;
      testContainer.prepend(newCard);
    }

    const modalEl = document.getElementById('writeReviewModal');
    if (modalEl) {
      const bsModal = bootstrap.Modal.getInstance(modalEl);
      if (bsModal) bsModal.hide();
    }

    showToast('Review Submitted! ⭐', 'Thank you for your valuable feedback.', 'success');
  }

  // ================= 24. Bundle Builder Logic =================
  const BUNDLE_ITEMS = [
    { id: 'prod-1', title: 'Apple Watch Ultra 2 (GPS + Cellular)', price: 799, img: 'assets/images/products/product-1.jpg', elId: 'bundleCheck1', thumbId: 'bundleThumb1' },
    { id: 'prod-3', title: 'Bose QuietComfort 45 Noise Cancelling', price: 279, img: 'assets/images/products/product-3.jpg', elId: 'bundleCheck2', thumbId: 'bundleThumb2' },
    { id: 'prod-6', title: 'Xiaomi 20,000mAh 50W Fast PowerBank', price: 39, img: 'assets/images/products/product-6.jpg', elId: 'bundleCheck3', thumbId: 'bundleThumb3' }
  ];

  function updateBundleCalculations() {
    let regularTotal = 0;
    let selectedCount = 0;

    BUNDLE_ITEMS.forEach(item => {
      const chk = document.getElementById(item.elId);
      const thumb = document.getElementById(item.thumbId);
      if (chk && chk.checked) {
        regularTotal += item.price;
        selectedCount++;
        if (thumb) thumb.classList.remove('inactive');
      } else if (thumb) {
        thumb.classList.add('inactive');
      }
    });

    const discountRate = selectedCount >= 2 ? 0.15 : 0;
    const savings = regularTotal * discountRate;
    const finalPrice = regularTotal - savings;

    const origEl = document.getElementById('bundleOriginalPrice');
    const saveEl = document.getElementById('bundleSavings');
    const finalEl = document.getElementById('bundleFinalPrice');
    const addBtn = document.getElementById('btnAddBundleToCart');

    if (origEl) origEl.textContent = formatMoney(regularTotal);
    if (saveEl) {
      if (savings > 0) {
        saveEl.textContent = `Save ${formatMoney(savings)} (15% Bundle Discount!)`;
        saveEl.parentElement.style.display = 'block';
      } else {
        saveEl.parentElement.style.display = 'none';
      }
    }
    if (finalEl) finalEl.textContent = formatMoney(finalPrice);
    if (addBtn) {
      addBtn.disabled = selectedCount === 0;
      addBtn.innerHTML = `<i class="lni lni-cart-full me-2"></i> Add Selected (${selectedCount}) to Cart`;
    }
  }

  function addBundleToCart() {
    let count = 0;
    BUNDLE_ITEMS.forEach(item => {
      const chk = document.getElementById(item.elId);
      if (chk && chk.checked) {
        addToCart(item.id, 1);
        count++;
      }
    });
    if (count > 0) {
      playChime('win');
      showToast('Bundle Added! 🎉', `${count} bundle items added to your cart with discount.`, 'success');
      openCartDrawer();
    }
  }

  // ================= 25. Spin & Win Lucky Wheel =================
  const WHEEL_PRIZES = [
    { label: '25% OFF', code: 'LUCKY25', color: '#3b82f6', text: '#ffffff' },
    { label: 'FREE SHIPPING', code: 'FREESHIP', color: '#10b981', text: '#ffffff' },
    { label: '$30 VOUCHER', code: 'WIN30', color: '#f59e0b', text: '#ffffff' },
    { label: '15% OFF', code: 'SPIN15', color: '#ec4899', text: '#ffffff' },
    { label: '$25 CREDIT', code: 'GIFTKIT', color: '#8b5cf6', text: '#ffffff' },
    { label: '20% VIP PASS', code: 'VIP20', color: '#06b6d4', text: '#ffffff' }
  ];

  let wheelAngle = 0;
  let isWheelSpinning = false;

  function drawWheel() {
    const canvas = document.getElementById('spinWheelCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 8;

    const sliceAngle = (2 * Math.PI) / WHEEL_PRIZES.length;

    ctx.clearRect(0, 0, width, height);

    WHEEL_PRIZES.forEach((prize, i) => {
      const startAngle = wheelAngle + i * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = prize.color;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = prize.text;
      ctx.font = 'bold 12px sans-serif';
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowBlur = 4;
      ctx.fillText(prize.label, radius - 20, 5);
      ctx.restore();
    });
  }

  function openSpinWheelModal() {
    const modalEl = document.getElementById('spinWheelModal');
    if (modalEl) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
      setTimeout(drawWheel, 250);
    }
  }

  function spinTheWheel() {
    if (isWheelSpinning) return;
    isWheelSpinning = true;

    const spinBtn = document.getElementById('btnDoSpin');
    if (spinBtn) spinBtn.disabled = true;

    const prizeIndex = Math.floor(Math.random() * WHEEL_PRIZES.length);
    const winningPrize = WHEEL_PRIZES[prizeIndex];

    const sliceAngle = (2 * Math.PI) / WHEEL_PRIZES.length;
    const pointerAngle = (3 * Math.PI) / 2;
    const targetSliceCenter = prizeIndex * sliceAngle + sliceAngle / 2;
    const finalRotation = 10 * 2 * Math.PI + (pointerAngle - targetSliceCenter);

    const startRot = wheelAngle % (2 * Math.PI);
    const totalRotation = finalRotation - startRot;
    const duration = 4000;
    const startTime = performance.now();

    let lastTickAngle = 0;

    function animateSpin(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      wheelAngle = startRot + totalRotation * ease;
      drawWheel();

      if (Math.abs(wheelAngle - lastTickAngle) >= 0.5) {
        lastTickAngle = wheelAngle;
        playChime('tick');
      }

      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        isWheelSpinning = false;
        if (spinBtn) spinBtn.disabled = false;
        playChime('win');
        applyCouponCode(winningPrize.code);

        const resultBox = document.getElementById('wheelResultNotice');
        if (resultBox) {
          resultBox.innerHTML = `
            <div class="alert alert-success mt-3 mb-0 text-center">
              <h5 class="font-weight-bold mb-1">🎉 You Won: ${winningPrize.label}!</h5>
              <p class="mb-2" style="font-size:13px;">Coupon code <strong>${winningPrize.code}</strong> has been automatically applied to your cart!</p>
              <button class="btn btn-sm btn-primary" onclick="bootstrap.Modal.getInstance(document.getElementById('spinWheelModal')).hide(); ShopApp.openCartDrawer();">View In Cart</button>
            </div>
          `;
          resultBox.style.display = 'block';
        }
      }
    }

    requestAnimationFrame(animateSpin);
  }

  // ================= 26. Tech Advisor Quiz =================
  let quizAnswers = { category: '', priority: '', budget: '' };
  let currentQuizStep = 1;

  function openQuizModal() {
    quizAnswers = { category: '', priority: '', budget: '' };
    currentQuizStep = 1;
    setQuizStepUI(1);
    const modalEl = document.getElementById('techQuizModal');
    if (modalEl) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    }
  }

  function setQuizStepUI(step) {
    currentQuizStep = step;
    for (let i = 1; i <= 4; i++) {
      const el = document.getElementById(`quizStep${i}`);
      if (el) el.classList.remove('active');
    }
    const curEl = document.getElementById(`quizStep${step}`);
    if (curEl) curEl.classList.add('active');

    const fill = document.getElementById('quizProgressFill');
    if (fill) fill.style.width = `${(step / 3) * 100}%`;
  }

  function selectQuizCategory(cat) {
    quizAnswers.category = cat;
    playChime('cart');
    setQuizStepUI(2);
  }

  function selectQuizPriority(prio) {
    quizAnswers.priority = prio;
    playChime('cart');
    setQuizStepUI(3);
  }

  function selectQuizBudget(bud) {
    quizAnswers.budget = bud;
    playChime('win');
    generateQuizResult();
  }

  function generateQuizResult() {
    setQuizStepUI(4);
    const fill = document.getElementById('quizProgressFill');
    if (fill) fill.style.width = '100%';

    let matchedId = 'prod-1';
    let matchReason = '';

    if (quizAnswers.category === 'watch') {
      matchedId = 'prod-1';
      matchReason = 'Top-tier rugged titanium build, dual-frequency GPS, and 36-hour battery life tailored for outdoor adventure and fitness.';
    } else if (quizAnswers.category === 'audio') {
      matchedId = 'prod-3';
      matchReason = 'Industry-leading world-class active noise cancellation and plush synthetic leather cushions for acoustic luxury.';
    } else if (quizAnswers.category === 'phone') {
      matchedId = 'prod-4';
      matchReason = 'A16 Bionic chip, Dynamic Island, and Pro-grade 48MP camera system for peak photography and daily speed.';
    } else if (quizAnswers.category === 'laptop') {
      matchedId = 'prod-8';
      matchReason = 'Apple Silicon efficiency, silent fanless architecture, and 18 hours of real-world battery life in an ultra-thin unibody chassis.';
    } else {
      matchedId = 'prod-7';
      matchReason = 'Next-generation hybrid full-frame camera with 33MP Exmor R sensor and 4K 60p video for creative professionals.';
    }

    const prod = PRODUCTS.find(p => p.id === matchedId) || PRODUCTS[0];
    const resBox = document.getElementById('quizResultContent');
    if (resBox) {
      resBox.innerHTML = `
        <div class="quiz-result-box">
          <span class="badge bg-success mb-2 px-3 py-2" style="font-size:13px;"><i class="lni lni-checkmark-circle"></i> 98% Compatibility Match</span>
          <h4 class="font-weight-bold mb-2">${prod.title}</h4>
          <p class="text-muted" style="font-size:13px;max-width:440px;margin:0 auto 15px auto;">${matchReason}</p>
          <div class="my-3">
            <img src="${prod.image}" alt="${prod.title}" style="max-height:160px;object-fit:contain;border-radius:10px;">
          </div>
          <div class="h4 font-weight-bold text-primary mb-3">${formatMoney(prod.price)}</div>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-outline-secondary" onclick="ShopApp.openQuickView('${prod.id}'); bootstrap.Modal.getInstance(document.getElementById('techQuizModal')).hide();">
              <i class="lni lni-eye"></i> View Specs
            </button>
            <button class="btn btn-primary" onclick="ShopApp.addToCart('${prod.id}', 1); bootstrap.Modal.getInstance(document.getElementById('techQuizModal')).hide(); ShopApp.openCartDrawer();">
              <i class="lni lni-cart"></i> Add Recommended to Cart
            </button>
          </div>
        </div>
      `;
    }
  }

  // ================= 27. Store Locator & Reservation =================
  const STORES = [
    { id: 'nyc', name: 'New York City - 5th Ave Flagship', addr: '767 Fifth Avenue, New York, NY 10153', hours: 'Open today: 9:00 AM – 9:00 PM', stock: 'In Stock (Ready in 1 Hour)', badgeClass: 'bg-success text-white' },
    { id: 'sf', name: 'San Francisco - Market Street', addr: '845 Market St, San Francisco, CA 94103', hours: 'Open today: 10:00 AM – 8:00 PM', stock: 'In Stock (Ready in 1 Hour)', badgeClass: 'bg-success text-white' },
    { id: 'chi', name: 'Chicago - Michigan Avenue', addr: '875 N Michigan Ave, Chicago, IL 60611', hours: 'Open today: 10:00 AM – 7:00 PM', stock: 'Limited Stock (2 Units Left)', badgeClass: 'bg-warning text-dark' },
    { id: 'lon', name: 'London - Regent Street Flagship', addr: '235 Regent St, London W1B 2EL, UK', hours: 'Open today: 10:00 AM – 8:00 PM', stock: 'In Stock (Ready in 1 Hour)', badgeClass: 'bg-success text-white' }
  ];

  function openStoreLocatorModal() {
    const modalEl = document.getElementById('storeLocatorModal');
    if (modalEl) {
      renderStoreList();
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    }
  }

  function renderStoreList(filter = '') {
    const container = document.getElementById('storeListContainer');
    if (!container) return;

    const filtered = STORES.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()) || s.addr.toLowerCase().includes(filter.toLowerCase()));

    container.innerHTML = filtered.map(store => `
      <div class="store-list-item">
        <div>
          <h6 class="font-weight-bold mb-1">${store.name}</h6>
          <div class="text-muted" style="font-size:12px;margin-bottom:4px;"><i class="lni lni-map-marker"></i> ${store.addr}</div>
          <div class="text-secondary" style="font-size:12px;"><i class="lni lni-timer"></i> ${store.hours}</div>
        </div>
        <div class="text-end">
          <span class="store-status-badge ${store.badgeClass} d-inline-block mb-2">${store.stock}</span>
          <div>
            <button class="btn btn-sm btn-outline-primary" onclick="ShopApp.reservePickup('${store.id}')">
              Reserve for Pickup
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function reservePickup(storeId) {
    const store = STORES.find(s => s.id === storeId) || STORES[0];
    showToast('Pickup Reserved! 🏬', `Order reserved for pickup at ${store.name}. Ready in 60 mins.`, 'success');
    const modalEl = document.getElementById('storeLocatorModal');
    if (modalEl) {
      const bs = bootstrap.Modal.getInstance(modalEl);
      if (bs) bs.hide();
    }
  }

  // ================= 28. Community Tech Q&A =================
  function submitCommunityQuestion(e) {
    if (e) e.preventDefault();
    const qInput = document.getElementById('qaUserQuestion');
    const nameInput = document.getElementById('qaUserName');

    const question = qInput ? qInput.value.trim() : '';
    const name = nameInput ? nameInput.value.trim() : 'Customer';

    if (!question) {
      showToast('Question Required', 'Please enter your question.', 'error');
      return;
    }

    const container = document.getElementById('qaListContainer');
    if (container) {
      const card = document.createElement('div');
      card.className = 'qa-card';
      card.innerHTML = `
        <div class="qa-question">
          <i class="lni lni-question-circle text-primary" style="font-size:20px;flex-shrink:0;"></i>
          <div>
            <strong>${question}</strong>
            <div class="text-muted" style="font-size:11px;font-weight:normal;margin-top:2px;">Asked by ${name} • Just now</div>
          </div>
        </div>
        <div class="qa-answer">
          <div style="font-weight:700;color:var(--ecom-primary);font-size:12px;margin-bottom:2px;">
            <i class="lni lni-checkmark-circle"></i> ShopGrids Tech Specialist Answer:
          </div>
          <div>Thank you for asking! All items ship 100% factory sealed with brand new genuine parts, original accessories, and global manufacturer warranty.</div>
        </div>
      `;
      container.prepend(card);
    }

    if (qInput) qInput.value = '';
    if (nameInput) nameInput.value = '';

    showToast('Question Submitted! 💬', 'Your question has been posted to the tech community.', 'success');
  }

  // Expose global methods under window.ShopApp
  window.ShopApp = {
    addToCart,
    removeFromCart,
    changeCartItemQty: updateCartQty,
    openCartDrawer,
    closeCartDrawer,
    toggleWishlist,
    openQuickView,
    setQuickViewMainImage,
    selectQuickViewColor,
    changeQuickViewQty,
    addQuickViewToCart,
    applyCouponCode,
    openCheckoutModal,
    proceedToCheckoutStep2,
    backToCheckoutStep1,
    submitFinalOrder,
    trackOrder,
    loginDemoUser,
    setCurrency,
    showToast,
    formatMoney,
    toggleDarkMode,
    closeAnnouncementBar,
    toggleCompare,
    removeFromCompare,
    clearCompare,
    openCompareModal,
    toggleChatWindow,
    sendChatMessage,
    sortProducts,
    filterByPrice,
    setReviewRating,
    submitCustomerReview,
    toggleSound,
    updateBundleCalculations,
    addBundleToCart,
    openSpinWheelModal,
    spinTheWheel,
    drawWheel,
    openQuizModal,
    selectQuizCategory,
    selectQuizPriority,
    selectQuizBudget,
    openStoreLocatorModal,
    renderStoreList,
    reservePickup,
    submitCommunityQuestion
  };
})();
