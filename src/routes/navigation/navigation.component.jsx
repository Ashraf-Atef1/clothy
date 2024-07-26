import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { isCartOpenSelector } from "../../store/cart/cart.selector";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";

import { useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action";

import {
	NavigationContainer,
	NavLinks,
	NavLink,
	LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
	const currentUser = useSelector(userSelector);
	const isCartOpen = useSelector(isCartOpenSelector);
	const dispatch = useDispatch();

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={() => dispatch(signOutStart())}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
