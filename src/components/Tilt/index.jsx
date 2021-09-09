import React, {Component} from 'react';
import VanillaTilt from 'vanilla-tilt';

import './styles.css';

class Tilt extends Component {
    componentDidMount() {
      VanillaTilt.init(this.rootNode, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 1,
      })
    }

    render() {
       return (
        <div
          ref={node => (this.rootNode = node)}
          className="tilt-root"
          >
          <div className="tilt-child">
            <div className="totally-centered" {...this.props} />
          </div>
        </div>
      );
    }
}

export default Tilt;
