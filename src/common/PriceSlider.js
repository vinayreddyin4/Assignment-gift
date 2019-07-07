import React, { PureComponent } from 'react';
import Slider from 'rc-slider';
import { connect } from "react-redux";
import { get } from "lodash";
import 'rc-slider/assets/index.css';
import { change as handleChange } from "../store/actions/form.action";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class PriceSlider extends PureComponent {
    
    handleChange = value => {
        const { name, value: _value, onChange } = this.props;
        if (value !== _value) {
            this.props.change(name, value);
            onChange && onChange(value);
        }
    };
    
    render() {
        const { className, value } = this.props;
        return(
          <div className={className} style={{width: 200}}>
              <Range value={value} allowCross={false} max={1500} onChange={this.handleChange} />
          </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    value: get(state, `form.${ownProps.name}`, [])
});

const mapDispatchToProps = dispatch => ({
    change: (name, value) => dispatch(handleChange(name,value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceSlider);