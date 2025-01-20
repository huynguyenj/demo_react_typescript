import './Banner.css'
import ReatIcon from '../../assets/react-icon-1024x911-edzubt1f.png'
import TypeScriptIcon from '../../assets/png-clipart-angularjs-typescript-javascript-vue-js-others-blue-angle-thumbnail-removebg-preview.png'
function Banner() {
  return (
    <div className='banner_container'>
            <div className="react_img"><img src={ReatIcon} alt="react_icon" /></div>
            <h3>Get started now</h3>
            <h2>Let study</h2>
            <div className="typescript_img"><img src={TypeScriptIcon} alt="ts_icon" /></div>
    </div>
  )
}

export default Banner