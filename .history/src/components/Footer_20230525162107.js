import LinkedIncon from '@material-ui/icons/LinkedIn';
// import InstagramIcon  from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <div 
      className=' flex flex-col items-center 
      justify-center pt-5 mt-5 text-white text-[17px] font-serif'>
        <p> &copy; 2023 Desroy Maxwell </p>
        <div className='flex justify-center items-center'>

        <a href='https://www.linkedin.com/in/desroy-maxwell-973467162/' target='_blank' rel='noopener noreferrer' > 
        <LinkedIncon style={{ marginRight: '1rem' }} />
        </a>
        <a href='https://github.com/dmaxwell7' target='_blank' rel='noopener noreferrer' > 
        <GitHubIcon style={{ marginRight: '1rem' }} />
        </a>

        {/* <InstagramIcon style={{ marginRight: '1rem' }} />
        <TwitterIcon style={{ marginRight: '1rem' }} />
        <FacebookIcon /> */}
    </div>
    </div>
  )
}

export default Footer


