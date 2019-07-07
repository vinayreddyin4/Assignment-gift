import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { initializeProducts } from "../store/actions/product.action";
import { ProductCard } from "./ProductCard";
import './index.scss';


class Products extends PureComponent {
    componentDidMount() {
        this.props.initializeProducts();
    }
    
    render() {
        const { products } = this.props;
        return (
          <div className="product-container">
              {
                  products.map(product => {
                      return <ProductCard key={product._id} product={product}/>
                  })
              }
          </div>
        )
    }
}

const mapStateToProps = ({ product }) => ({
    products: product.products
});

const mapDispatchToProps = dispatch => ({
    initializeProducts: products => dispatch(initializeProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);