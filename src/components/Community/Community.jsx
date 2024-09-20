import React from "react";
import "./Community.scss";
const Community = () => {
	return (
		<div className="community">
			<div className="community__wrapper">
				<h2 className="community__title">Community</h2>
				<ul className="community__list">
					<li className="community__item item-community">
						<div className="item-community__title">Videos</div>
						<div className="item-community__image">
                            <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-9.jpg" alt="image"/>
                        </div>
					</li>
					<li className="community__item item-community">
						<div className="item-community__title">Webinars</div>
						<div className="item-community__image">
                        <img src="https://opis-cdn.tinkoffjournal.ru/mercury/russian_weekend__main__shutterstock_1342324634.0tenajyrewnv.jpg" alt="image"/>
                        </div>
					</li>
					<li className="community__item item-community">
						<div className="item-community__title">Our forum</div>
						<div className="item-community__image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzl3rmIbQn6j2M0lqvi_ralAqs5KSiyVRyVeY9yesylUdBxNz6agtkMAT_gpKAJWsrEXI&usqp=CAU" alt="image"/>
                        </div>
					</li>
					<li className="community__item item-community">
						<div className="item-community__title">Doctor's appointments</div>
						<div className="item-community__image">
                        <img src="https://cdn.tripster.ru/thumbs2/7b1ab048-5e6e-11ee-9807-b6e96f72624c.1220x600.jpeg" alt="image"/>
                        </div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Community;
