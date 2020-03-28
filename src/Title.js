import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
const TITLE = 'My Page Title'


class Title extends Component {
    render() {
        return (
            <div>
                <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
            </div>
        );
    }
}

export default Title;