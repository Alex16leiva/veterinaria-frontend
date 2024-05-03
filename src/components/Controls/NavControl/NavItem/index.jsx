import React from 'react'
import { svgIcons } from '../../Icons/iconSvg';
import { SvgIcon } from '@mui/material';


export const NavItem = ({
    item,
    onClickItem,
    isGlobalNavButton,
    activeItem,
    notTitle
}) => {

    const renderSvg = (item) => {
        if (item.newSvg) {
            return item.newSvg;
        }

        if (item.svg) {
            return (
                <svg viewBox='0 0 32 32'>
                    <path d={item.svg.data} />
                </svg>
            )
        }

        if (item.iconName) {
            const icon = svgIcons[item.iconName];
            return (
                <svg viewBox='0 0 24 24'
                    width='1rem'
                    height='1rem'
                >
                    <path d={icon.path} />
                </svg>
            )

        }


        return undefined;
    }

    const iconModule = pathCode => (
        <SvgIcon>
            <svg
                xmlns='http://www.0 0 32 32'
                viewBox='0 0 32 32'
                width='60'
                height='60'
            >
                <g>
                    <path
                        d={pathCode}
                        stretch='Uniform'
                        fill='#004e8c'
                        width='46'
                        height='46'
                        margin='0,0,0,0'
                        renderTransformOrigin='0.5,0.5'
                        style={{ fill: '#004ebc' }}
                    />
                </g>
            </svg>
        </SvgIcon>
    )

    const onClick = () => {
        onClickItem(item)
    }

    return (
        <li
            key={item.name}
            className={
                activeItem === item.name && !isGlobalNavButton
                    ? 'active'
                    : isGlobalNavButton
                        ? 'GlobalNavButton'
                        : ''
            }
            onClick={onClick}
            role='presentation'
            title={item.name}
            data-testid={`navControl-navItem-${item.name}`}
        >
            {renderSvg(item)}
            {!isGlobalNavButton &&
                !notTitle && (
                    <span>
                        {item.nameShow}
                    </span>
                )
            }
        </li>
    )
}

NavItem.defaultProps = {
    isGlobalNavButton: false
}