import LinkedIncon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div 
      className=' flex flex-col pb-7  bg-blue-950 items-center justify-center pt-5 mt-5 text-white text-[17px] font-serif'>
        <p className='pb-2'> &copy; 2023 Desroy Maxwell </p>
      <div className='flex justify-center items-center'>

        <a href='https://www.linkedin.com/in/desroy-maxwell-973467162/' target='_blank' rel='noopener noreferrer' > 
        <LinkedIncon style={{ marginRight: '1rem', fontSize: '3rem'  }} />
        </a>
        <a href='https://github.com/dmaxwell7' target='_blank' rel='noopener noreferrer' > 
        <GitHubIcon style={{ marginRight: '1rem', fontSize: '3rem' }} />
        </a>
      </div>
    </div>
  )
}

export default Footer


