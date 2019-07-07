import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { change as handleChange} from '../store/actions/form.action'


class RadioButton extends PureComponent {
    
    handleChange = event => {
        const { name, value, onChange } = this.props;
        if (event.target.value !== value) {
            this.props.change(name, event.target.value);
            onChange && onChange(event.target.value);
        }
    };
    
    render() {
        const { optionList, valueKey, labelKey, id, className, value } = this.props;
        return (
          <div onChange={this.handleChange} className={`select ${className}`}>
              {
                  optionList.map((item, index) => {
                      return <div key={index} className={item[valueKey] === value ? 'checked' : ''}>
                          <input id={`${id}${index}`} type="radio" value={item[valueKey]}
                                 checked={item[valueKey] === value}/>
                          <label htmlFor={`${id}${index}`}>{item[labelKey]}</label>
                      </div>
                  })
              }
          </div>
        )
    }
}

RadioButton.defaultProps = {
    valueKey: 'value',
    labelKey: 'label',
    className: ''
};

const mapStateToProps = (state, ownProps) => ({
    value: get(state, `form.${ownProps.name}`, '')
});

const mapDispatchToProps = dispatch => ({
    change: (name, value) => dispatch(handleChange(name,value))
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioButton)
