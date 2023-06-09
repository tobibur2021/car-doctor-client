import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="navbar bg-base-100 h-28 my-5">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li className="text-1xl font-bold">
							<Link className="text-[#444444]" to="/">
								Home
							</Link>
						</li>
						<li className="text-1xl font-bold">
							<Link className="text-[#444444]" to="/about">
								About
							</Link>
						</li>
						<li className="text-1xl font-bold">
							<Link className="text-[#444444]" to="/services">
								Services
							</Link>
						</li>
						<li className="text-1xl font-bold">
							<Link className="text-[#444444]" to="/blog">
								Blog
							</Link>
						</li>
						<li className="text-1xl font-bold">
							<Link className="text-[#444444]" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li className="text-1xl font-bold">
						<Link className="text-[#444444]" to="/">
							Home
						</Link>
					</li>
					<li className="text-1xl font-bold">
						<Link className="text-[#444444]" to="/about">
							About
						</Link>
					</li>
					<li className="text-1xl font-bold">
						<Link className="text-[#444444]" to="/services">
							Services
						</Link>
					</li>
					<li className="text-1xl font-bold">
						<Link className="text-[#444444]" to="/blog">
							Blog
						</Link>
					</li>
					<li className="text-1xl font-bold">
						<Link className="text-[#444444]" to="/contact">
							Contact
						</Link>
					</li>
					<li className="text-1xl font-bold">
						{user?.email ? (
							<>
								<Link className="text-[#444444]" to="/bookings">
									My Bookings
								</Link>
								<button
									onClick={handleLogOut}
									className="text-[#444444]"
								>
									Log Out
								</button>
							</>
						) : (
							<Link className="text-[#444444]" to="/login">
								Login
							</Link>
						)}
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn btn-outline btn-[#FF3811]">Appointment</a>
			</div>
		</div>
	);
};

export default Navbar;
