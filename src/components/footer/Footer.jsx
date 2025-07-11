import "../footer/footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
   <>
   
      <div className="footer">
        <div className="footer-icon">
          <ul>
         <li> <FacebookOutlinedIcon/></li>
          <li><InstagramIcon/></li>
          <li><YouTubeIcon/></li>
          </ul>
        </div>

        <div className="footer-data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invertor Relation</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          
        </div>
      </div>
    
   </>
  )
}

export default Footer