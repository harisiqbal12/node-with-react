import React from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, Nav, NavLink } from 'shards-react';
import { createStructuredSelector } from 'reselect';

import { selectUser } from '../Redux/selectors';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderContent() {
		const { selectUser } = this.props;


		if (selectUser === false) return (
			<NavLink active href='/auth/google'>Login With Google</NavLink>
		)
		if (selectUser == null) return ;

		return <NavLink active href='/auth/api/logout'>Logout</NavLink>;
	}

	render() {
		console.log('user: ', this.props.selectUser);
		return (
			<Navbar type='dark' theme='primary' expand='md'>
				<NavbarBrand href={`${this.props.selectUser ? '/survey' : '/'}`} >Emaily</NavbarBrand>
				<Nav navbar className='ml-auto'>
					{
						this.renderContent()
					}
				</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	selectUser: selectUser,
});

export default connect(mapStateToProps)(Header);
