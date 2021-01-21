// Category


// Get Product
const getProduct = async ()=>{
    try {
        const result = await fetch('/data/emyu.json')
        const data = await result.json();
        const products = data.products;
        return products;
    } catch (err) {
        console.log(err);
    }
};

// Load Products
window.addEventListener("DOMContentLoaded", async () => {
    const products = await getProduct();
    displayProductItems(products);
});

const categoryCenter = document.querySelector('.category_center')

// Display Product
const displayProductItems = items =>{
    let displayProduct = items.map(product=>
        `<div class="product category__products">
            <div class="product_header">
                <img src="${product.image}">
            </div>
            <div class="product_footer">
                <h3>${product.title}</h3>
                <div class="rating">
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                    </svg>
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                    </svg>
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                    </svg>
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                    </svg>
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                    </svg>
                </div>
                <div class="product_price">
                    <h4>${product.price}</h4>
                    <a href="#"><button type="button" class="product_btn">Add To Cart</button></a>
                </div>
                <ul>
                        <a href="#">
                            <svg>
                                <use xlink:href="./img/sprite.svg#icon-eye"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg>
                                <use xlink:href="./img/sprite.svg#icon-heart-o"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg>
                                <use xlink:href="./img/sprite.svg#icon-loop2"></use>
                            </svg>
                        </a>
                </ul>
            </div>
        </div>`
        );

    displayProduct = displayProduct.join('')
        if(categoryCenter){
            categoryCenter.innerHTML = displayProduct;
        }
};

// Filtering
const categoryContainer = document.getElementById('category');
const button = document.querySelectorAll('.filter-btn');

if (categoryContainer){
    categoryContainer.addEventListener("click", async e => {
        const target = e.target.closest(".section_title");
        if(!target) return;

        const id = target.dataset.id;
        const products = await getProduct();

        if(id) {
            // remove active button
            Array.from(button).forEach(btn => {
                btn.classList.remove("active");
            });
            target.classList.add("active");

        // Load Products
        let menuCategory = products.filter(product => {
            if(product.category === id){
                return product;
            }
        });

        if(id === 'All Products'){
            displayProductItems(products);
        } else {
            displayProductItems(menuCategory);
        }
        }
    });
}