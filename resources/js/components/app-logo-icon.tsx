import { SVGAttributes } from 'react';
import Logo from '../assets/Logo.png';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <img src={Logo} alt="" />
    );
}
