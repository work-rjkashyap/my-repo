import React, { useState } from 'react';
import LogoDark from '../images/logo-light.svg';
import LogoLight from '../images/logo-dark.svg';
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiInstagram,
	FiMenu,
	FiX,
} from 'react-icons/fi';
import { MdMarkEmailRead } from 'react-icons/md';
import Toggle from './ThemeToggle';
import { ThemeContext } from './ThemeContext';
import link from '../utils/social.json';
import { Link } from 'gatsby';
export default function Header() {
	const [show, setshow] = useState(false);
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div className='sticky top-0 backdrop-blur-sm '>
			<nav className='2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4 '>
				{/* For large and Medium-sized Screen */}
				<div className='flex justify-between '>
					<div className='hidden sm:flex flex-row items-center space-x-6'>
						<a href={link.github} target='_blank' rel='noopener noreferrer'>
							<FiGithub
								className='text-dark dark:text-white icon-github  ease-in duration-300'
								size={25}
							/>
						</a>
						<a href={link.linkedin} target='_blank' rel='noopener noreferrer'>
							<FiLinkedin
								className='text-dark dark:text-white icon-linkedin  ease-in duration-300'
								size={25}
							/>
						</a>
						<a href={link.twitter} target='_blank' rel='noopener noreferrer'>
							<FiTwitter
								className='text-dark dark:text-white icon-twitter  ease-in duration-300'
								size={25}
							/>
						</a>
						<a href={link.instagram} target='_blank' rel='noopener noreferrer'>
							<FiInstagram
								className='text-dark dark:text-white icon-instagram  ease-in duration-300'
								size={25}
							/>
						</a>
						<a
							href={`mailto:${link.email}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<MdMarkEmailRead
								className='text-dark dark:text-white icon-mail  ease-in duration-300'
								size={25}
							/>
						</a>
					</div>
					{/* logo */}
					<div className=' flex space-x-3 items-center'>
						{theme === 'dark' ? (
							<img src={LogoLight} className='w-[100px]  inline' alt='Logo' />
						) : (
							<img src={LogoDark} className='w-[100px]  inline' alt='Logo' />
						)}
					</div>
					<div className='hidden sm:flex flex-row space-x-4'>
						<div className='flex justify-center align-middle'>
							<Toggle />
						</div>

						<a
							href={'../../static/resume.pdf'}
							target='_blank'
							className='btn-primary bg-transparent text-dark dark:text-white  border-dark dark:border-white hover:border-hoverLight hover:text-hoverLight dark:hover:border-hoverDark dark:hover:text-hoverDark'
						>
							Resume
						</a>
					</div>
					{/* Burger Icon */}
					<div
						id='bgIcon'
						onClick={() => setshow(!show)}
						className={`focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
					>
						<FiMenu
							className={`${
								show ? 'hidden' : ''
							} text-dark dark:text-white  ease-in duration-300`}
							size={25}
						/>
						<FiX
							className={`${
								show ? 'block' : 'hidden'
							} text-dark dark:text-white  ease-in duration-300`}
							size={25}
						/>
					</div>
				</div>
				{/* Mobile and small-screen devices (toggle Menu) */}
				<div
					id='MobileNavigation'
					className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}
				>
					<div className='flex flex-row items-center justify-center space-x-6'>
						<a href={link.github} target='_blank' rel='noopener noreferrer'>
							<FiGithub
								className='text-dark dark:text-white icon-github  ease-in duration-300'
								size={25}
							/>
						</a>
						<a href={link.linkedin} target='_blank' rel='noopener noreferrer'>
							<FiLinkedin
								className='text-dark dark:text-white icon-linkedin  ease-in duration-300'
								size={25}
							/>
						</a>
						<a href={link.twitter} target='_blank' rel='noopener noreferrer'>
							<FiTwitter
								className='text-dark dark:text-white icon-twitter  ease-in duration-300'
								size={25}
							/>
						</a>
						<a href={link.instagram} target='_blank' rel='noopener noreferrer'>
							<FiInstagram
								className='text-dark dark:text-white icon-instagram  ease-in duration-300'
								size={25}
							/>
						</a>
						<a
							href={`mailto:${link.email}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<MdMarkEmailRead
								className='text-dark dark:text-white icon-mail  ease-in duration-300'
								size={25}
							/>
						</a>
						<Toggle />
					</div>
					<div className='flex  mt-4  mx-auto justify-center '>
						<a
							href={'../../static/resume.pdf'}
							target='_blank'
							className='btn-primary bg-transparent text-dark dark:text-white  border-dark dark:border-white hover:border-hoverLight hover:text-hoverLight dark:hover:border-hoverDark dark:hover:text-hoverDark'
						>
							Resume
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
