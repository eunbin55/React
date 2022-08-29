import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class MyComponent extends Component {
    render() {
     const {name, favoritNumber, children} = this.props;    //비구조화 할당       
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
                <br/>
                제가 좋아하는 숫자는 {favoritNumber}입니다.
            </div>
        );
    }
}

MyComponent.defaltProps = {
    name: '기본 이름'
};

MyComponent.propsTypes = {
    name: PropsTypes.string,
    favoritNumber: PropsTypes.number.isRequired
};

export default MyComponent;