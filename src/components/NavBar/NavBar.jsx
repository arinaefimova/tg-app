import React from "react";
import { TbGraphFilled } from "react-icons/tb";
import { TbCheckupList } from "react-icons/tb";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiHealthNormal } from "react-icons/gi";
import "./NavBar.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
const NavBar = ({ setCommunityOpen, communityOpen }) => {
	return (
		<footer className="navbar">
			<div className="container">
				<nav className="navbar__wrapper">
					<ul className="navbar__list">
						<li className="navbar__item">
							<a href="" className="navbar__link">
								<div>
								    <TbGraphFilled size={25} />
								</div>
								<span>Metrics</span>
							</a>
						</li>
						<li className="navbar__item">
							<a href="" className="navbar__link">
								<div>
                                    <TbCheckupList size={25} />
                                </div>
								<span>Checkups</span>
							</a>
						</li>
						<li className="navbar__item">
							<a href="" className="navbar__link puflse">
								
                                    <div className="pulse">
                                      
                                    </div>
                               
							</a>
						</li>
						<li className="navbar__item">
							<a href="" className="navbar__link">
								<div>
                                    <GiHealthNormal size={20} />
                                </div>
								<span>Promos</span>
							</a>
						</li>
						<li className="navbar__item">
							<a
								onClick={() => setCommunityOpen((prev) => !prev)}
								className={`navbar__link ${communityOpen ? "_active" : ""}`}
							>
								<div>
                                    <HiMiniUserGroup size={25} />
                                </div>
								<span>Community</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default NavBar;
