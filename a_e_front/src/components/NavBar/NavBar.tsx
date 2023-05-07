import "./NavBar.scss";

export const NavBar = () => {
  const git = require("../../image/git.png");
  return (
    <nav>
      <div className='navbar_div_all'>
        <a className='navbar_a' href='#About'>
          About
        </a>
        <a className='navbar_a' href='#Exp'>
          Experience
        </a>
        <a className='navbar_a' href='#Stack'>
          Stack
        </a>
        <a
          className='navbar_a'
          target='_blank'
          rel='noreferrer'
          href='https://drive.google.com/file/d/1Jfl1Au-8Xo4bAGeXc0BkVzzViVMr5PZb/view?usp=share_link'
        >
          CV
        </a>
        <a
          className='navbar_a'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/Odinson96'
        >
          <img src={git} alt='GitHub' className='navbar_img_git' />
        </a>
      </div>
    </nav>
  );
};
