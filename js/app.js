function createProductCard(product) {
  const badge = product.best ? '<span class="product-badge">BEST</span>' : '';
  const categoryLabel = CATEGORY_LABELS[product.category] || '';

  return `
    <article class="product-card">
      <a href="product.html?id=${product.id}" class="product-card-link">
        <div class="product-image-wrap">
          ${badge}
          <div class="product-image" style="background-image: url('${product.imageUrl}')"></div>
        </div>
        <div class="product-card-body">
          <span class="product-category">${categoryLabel}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${Cart.formatPrice(product.price)}</p>
        </div>
      </a>
      <button type="button" class="btn btn-outline btn-add-cart" data-id="${product.id}">
        장바구니
      </button>
    </article>
  `;
}

function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = products.map(createProductCard).join('');

  container.querySelectorAll('.btn-add-cart').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      Cart.add(Number(btn.dataset.id));
      Cart.open();
    });
  });
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const filtered =
        filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
      renderProducts('all-products', filtered);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts('best-products', PRODUCTS.filter((p) => p.best));
  renderProducts('all-products', PRODUCTS);
  initFilters();
  Cart.init();
});
