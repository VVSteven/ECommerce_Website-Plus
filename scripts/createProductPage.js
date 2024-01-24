document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('[id^="product"]');
  
    products.forEach(function(product) {
      product.addEventListener('click', handleClick);
    });
  
    function handleClick() {
      const productId = parseInt(this.id.replace('product', ''), 10);
      console.log(`Product ${productId} clicked!`);
  
      const selectedItem = furnitureDataArray.find(item => item.id === productId);
  
      if (selectedItem) {
        // Create a link with query parameters
        const link = `template.html?sku=${selectedItem.sku}`;

        // Navigate to the link
        window.location.href = link;
      } else {
        console.log('Item not found in the furnitureDataArray');
      }
    }
  });
  