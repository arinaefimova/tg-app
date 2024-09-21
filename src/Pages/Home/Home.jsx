import React, { useState, useEffect } from "react";
import Community from "../../components/Community/Community";
import "./Home.scss";
const tg = window.Telegram.WebApp;
const Home = ({ communityOpen }) => {
	return (
		<main>
			<div className="home__inner">
				<div className="container box">
					<div className="user__from">
						<div className="user__image">
							<img
								src="https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036"
								alt="image"
							/>
						</div>
					</div>
					<div className="bot__from">
						<div className="bot__image">
							<img
								src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
								alt="img"
							/>
						</div>
						<div className="bot__text">
							<div className="wrap">
								<div className="wrap__content">
									<div className="wrap__title">
										Пицца (тесто, сыр, томат, соус)
									</div>
									<div className="wrap__info">
										<p>Общие значения по всем продуктам:</p>
										<p>Калории: 1200</p>
										<p>Белки: 50.0 г (17%)</p>
										<p>Жиры: 60.0 г (45%)</p>
										<p>Углеводы: 100.0 г (38%) </p>
										<p>Общий вес: 300 г</p>
										<p>Гликемический индекс: 55.0 </p>
									</div>
									<div className="wrap__attention">
										Внимание! Продукт содержит белково-жировые единицы. В
										зависимости от общего количества жирной пищи, может
										потребоваться дополнительная компенсация белков и жиров
										через 2-3 часа!
									</div>
									<div className="wrap__kbj">
										Количество белково-жировых единиц: 4.0 г (БЖЕ)
									</div>
									<div>Приятного аппетита!</div>
								</div>
								<div className="wrap__button">Записать в дневник</div>
							</div>
						</div>
					</div>
				</div>

				{communityOpen && <Community />}
			</div>
		</main>
	);
};

export default Home;
