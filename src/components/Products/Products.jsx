import styles from "./Products.module.scss";
import Product from "./Product";

const Products = () => {
    return (
        <section id="products" className={styles.products}>
            <Product
                product="1"
                title="café Blend"
                roast="Torra escura"
                stars="5"
                reviews="16"
                price="29,90" />

            <Product
                product="2"
                title="café Branco"
                roast="Torra clara"
                stars="5"
                reviews="12"
                price="28,50" />

            <Product
                product="3"
                title="café Premiun"
                roast="Torra Média"
                stars="5"
                reviews="8"
                price="32,90" />

            <Product
                product="4"
                title="café Latte"
                roast="Torra Clara"
                stars="5"
                reviews="7" 
                price="25,90" />

        </section>
    );
}

export default Products;
