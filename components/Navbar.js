import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import logo from '../utils/TikTok-Logo.jpg';

const Navbar = () => {
	return (
		<div className="w-full flex justify-between items-center border-b-2 border-gray-200  px-4">
			<Link href={'/'}>
				<div className="w-[100px] md:w-[129px]">
					<Image
						className="cursor-pointer"
						src={logo}
						alt="logo"
						layout="responsive"
						priority="false"
					/>
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
