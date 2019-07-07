import React, { useState } from 'react';
import { Select, RadioButton, PriceSlider } from "../common";
import { connect } from "react-redux";
import * as CONSTANT from "./constant";
import "./index.scss"
import { filterProducts, initializeProducts } from "../store/actions/product.action";
import { resetFilters } from "../store/actions/form.action";

const Filters = props => {
    
    const [dirty, updateDirty] = useState(false);
    
    const applyFilters = (event) => {
        updateDirty(false);
        props.applyFilters(event)
    };
    
    const resetFilters = event => {
        updateDirty(false);
        props.reset(event)
    };
    
    return (
      <form className="filter-container">
          <div className = "header-gift">
              <h2>Christmas gifts</h2>
          </div>
          <div className="category-filters">
              <Select name={"category"} optionList={CONSTANT.CATEGORY_OPT}
                      onChange={() => updateDirty(true)}/>
          </div>
          <div className="gender-filters">
              <RadioButton name={"gender"} optionList={CONSTANT.GENDER_FILTERS} id={"gender"}
                           onChange={() => updateDirty(true)}/>
          </div>
          <div className="price-filters">
              <PriceSlider name={"price"} onChange={() => updateDirty(true)}/>
          </div>
          <div className="action-container">
              <button type={"submit"} disabled={!dirty} onClick={applyFilters}>Apply</button>
              <button type={"reset"} disabled={!dirty} onClick={resetFilters}>Reset</button>
          </div>
      </form>
    )
};

const mapDispatchToProps = dispatch => ({
    applyFilters: event => {
        event.preventDefault();
        dispatch(filterProducts())
    },
    reset: () => {
        dispatch(initializeProducts());
        dispatch(resetFilters());
    },
});

export default connect(null, mapDispatchToProps)(Filters);
