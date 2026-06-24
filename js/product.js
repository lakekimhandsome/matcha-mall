function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get('id'));
}

function renderProductDetail(product) {
  const container = document.getElementById('product-detail');
  if (!container) return;

  const categoryLabel = CATEGORY_LABELS[product.category] || '';
  const badge = product.best ? '<span class="product-badge product-badge--detail">BEST</span>' : '';

  container.innerHTML = `
    <div class="product-detail-image-wrap">
      ${badge}
      <div class="product-image product-image--large" style="background-image: url('${product.imageUrl}')"></div>
    </div>
    <div class="product-detail-info">
      <span class="product-category">${categoryLabel}</span>
      <h1 class="product-detail-name">${product.name}</h1>
      <p class="product-detail-price">${Cart.formatPrice(product.price)}</p>
      <p class="product-detail-desc">${product.description}</p>
      <ul class="product-detail-list">
        ${product.details.map((d) => `<li>${d}</li>`).join('')}
      </ul>
      <div class="product-detail-actions">
        <div class="qty-control">
          <button type="button" class="qty-btn" id="qty-minus" aria-label="수량 감소">−</button>
          <span class="qty-value" id="qty-value">1</span>
          <button type="button" class="qty-btn" id="qty-plus" aria-label="수량 증가">+</button>
        </div>
        <button type="button" class="btn btn-primary" id="add-to-cart">장바구니에 추가</button>
      </div>
    </div>
  `;

  let quantity = 1;
  const qtyValue = document.getElementById('qty-value');

  document.getElementById('qty-minus').addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      qtyValue.textContent = quantity;
    }
  });

  document.getElementById('qty-plus').addEventListener('click', () => {
    quantity++;
    qtyValue.textContent = quantity;
  });

  document.getElementById('add-to-cart').addEventListener('click', () => {
    Cart.add(product.id, quantity);
    Cart.open();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getProductId();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    document.getElementById('product-detail').innerHTML =
      '<p class="not-found">상품을 찾을 수 없습니다. <a href="index.html">목록으로 돌아가기</a></p>';
    Cart.init();
    return;
  }

  document.title = `${product.name} | 말차몰`;
  renderProductDetail(product);
  Cart.init();
});
