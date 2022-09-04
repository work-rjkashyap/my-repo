import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import LogoDark from '../images/logo-light.svg';
import LogoLight from '../images/logo-dark.svg';
import { ThemeContext } from './ThemeContext';
export default function Footer() {
	const { theme } = React.useContext(ThemeContext);
	return (
		<div className='mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-3'>
			<div className='flex flex-col items-center justify-center'>
				<div>
					{theme === 'dark' ? (
						<img
							src={'../images/logo-dark.svg'}
							className='w-[100px]  inline'
							alt='Logo'
						/>
					) : (
						<img
							src={'../images/logo-light.svg'}
							className='w-[100px]  inline'
							alt='Logo'
						/>
					)}
				</div>

				<div className='flex mt-6 justify-center align-middle'>
					<p>Made With</p>
					{''}
					<BsFillHeartFill className='mx-1 mt-1' color='#FF008A' />
					<p> {''}Rajeshwar Kashyap</p>
				</div>
			</div>
		</div>
	);
}
