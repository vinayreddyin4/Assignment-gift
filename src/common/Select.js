import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { change as handleChange} from '../store/actions/form.action'


class Select extends PureComponent {
    
    handleChange = event => {
        const { name, value, onChange } = this.props;
        if (event.target.value !== value) {
            this.props.change(name, event.target.value);
            onChange && onChange(event.target.value);
        }
    };
    
    render() {
        const { optionList, valueKey, labelKey, name, id, className, value } = this.props;
        return (
          <select name={name} id={id} onChange={this.handleChange} value={value}
                  className={`select ${className}`}>
              {
                  optionList.map((item, index) => {
                      return <option key={index} value={item[valueKey]}>{item[labelKey]}</option>
                  })
              }
          </select>
        )
    }
}

Select.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Select)
