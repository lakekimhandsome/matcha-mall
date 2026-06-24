const Cart = {
  STORAGE_KEY: 'matcha-mall-cart',

  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.updateUI();
  },

  add(productId, quantity = 1) {
    const items = this.getItems();
    const existing = items.find((item) => item.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ id: productId, quantity });
    }
    this.saveItems(items);
  },

  remove(productId) {
    const items = this.getItems().filter((item) => item.id !== productId);
    this.saveItems(items);
  },

  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.remove(productId);
      return;
    }
    const items = this.getItems();
    const item = items.find((i) => i.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveItems(items);
    }
  },

  getTotalCount() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  },

  getTotalPrice() {
    return this.getItems().reduce((sum, item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  },

  formatPrice(price) {
    return '₩' + price.toLocaleString('ko-KR');
  },

  updateUI() {
    const countEl = document.getElementById('cart-count');
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('cart-checkout');

    if (!countEl || !itemsEl) return;

    const count = this.getTotalCount();
    countEl.textContent = count;
    countEl.classList.toggle('visible', count > 0);

    const items = this.getItems();

    if (items.length === 0) {
      itemsEl.innerHTML = '<p class="cart-empty">장바구니가 비어 있습니다.</p>';
      if (totalEl) totalEl.textContent = this.formatPrice(0);
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    itemsEl.innerHTML = items
      .map((item) => {
        const product = PRODUCTS.find((p) => p.id === item.id);
        if (!product) return '';
        return `
          <div class="cart-item" data-id="${product.id}">
            <div class="cart-item-image product-image" style="background-image: url('${product.imageUrl}')"></div>
            <div class="cart-item-info">
              <p class="cart-item-name">${product.name}</p>
              <p class="cart-item-price">${this.formatPrice(product.price)}</p>
              <div class="cart-item-qty">
                <button type="button" class="qty-btn qty-minus" data-id="${product.id}" aria-label="수량 감소">−</button>
                <span class="qty-value">${item.quantity}</span>
                <button type="button" class="qty-btn qty-plus" data-id="${product.id}" aria-label="수량 증가">+</button>
              </div>
            </div>
            <button type="button" class="cart-item-remove" data-id="${product.id}" aria-label="삭제">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        `;
      })
      .join('');

    if (totalEl) totalEl.textContent = this.formatPrice(this.getTotalPrice());
    if (checkoutBtn) checkoutBtn.disabled = false;

    itemsEl.querySelectorAll('.qty-minus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id);
        const item = this.getItems().find((i) => i.id === id);
        if (item) this.updateQuantity(id, item.quantity - 1);
      });
    });

    itemsEl.querySelectorAll('.qty-plus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id);
        const item = this.getItems().find((i) => i.id === id);
        if (item) this.updateQuantity(id, item.quantity + 1);
      });
    });

    itemsEl.querySelectorAll('.cart-item-remove').forEach((btn) => {
      btn.addEventListener('click', () => this.remove(Number(btn.dataset.id)));
    });
  },

  open() {
    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    if (panel) panel.classList.add('open');
    if (overlay) {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  },

  close() {
    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    if (panel) panel.classList.remove('open');
    if (overlay) {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  },

  init() {
    this.updateUI();

    const toggle = document.getElementById('cart-toggle');
    const close = document.getElementById('cart-close');
    const overlay = document.getElementById('cart-overlay');
    const checkout = document.getElementById('cart-checkout');

    if (toggle) toggle.addEventListener('click', () => this.open());
    if (close) close.addEventListener('click', () => this.close());
    if (overlay) overlay.addEventListener('click', () => this.close());
    if (checkout) {
      checkout.addEventListener('click', () => {
        if (this.getTotalCount() > 0) {
          alert('주문이 완료되었습니다! 감사합니다. 🍵');
          this.saveItems([]);
          this.close();
        }
      });
    }
  }
};
