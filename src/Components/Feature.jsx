import React from 'react'
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png'
import featureimage1 from '../images/feature_2.png'
import featureimage2 from '../images/feature_3.png'
function Feature() {
  return (
      <div id='features'>
          <div className='a-container'>
              <FeatureBox image={featureimage} title='Insurance Products' desc='Place holder for describing Insurance products'/>
              <FeatureBox image={featureimage1} title='AR VR Products' desc='Place holder for describing AR VR products'/>
              <FeatureBox image={featureimage2} title='AI-ML Products' desc='Place holder for describing AI-ML products'/>
          </div>
    </div>
  )
}

export default Feature;