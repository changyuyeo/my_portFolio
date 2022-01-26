import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { FC } from 'react'

const LogoWrapper = styled.span<{ size: 'bigTitleSize' | 'big' | 'xl' }>`
	font-family: 'Product Sans';
	font-size: ${({ theme, size }) => theme.fontSizes[size]};
	font-weight: 100;
	color: ${({ theme }) => theme.colors.fontColor};
	cursor: pointer;
	transition: 0.5s;
	.logo {
		color: ${({ theme }) => theme.colors.primary};
	}
	&:hover {
		filter: brightness(70%);
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: ${({ size }) => size === 'xl' && '15px'};
	}
`

interface Props {
	size: 'bigTitleSize' | 'big' | 'xl'
}

const Logo: FC<Props> = ({ size }) => {
	return (
		<LogoWrapper size={size}>
			<Link to="/">
				<span className="logo">Chan</span>gyu
			</Link>
		</LogoWrapper>
	)
}

export default Logo
