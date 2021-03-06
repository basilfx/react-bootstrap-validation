import React from 'react';
import ValidatedInput from './ValidatedInput';

export default class Radio extends ValidatedInput {
    render() {
        return super.render();
    }
}

Radio.propTypes = Object.assign({}, ValidatedInput.propTypes, {
    name: React.PropTypes.string
});
