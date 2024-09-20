import React, { useState } from "react";
import Community from "../../components/Community/Community";
import './Home.scss';
const tg = window.Telegram.WebApp
const Home = ({ communityOpen }) => {
    const [messages, setMessages] = useState([]);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setMessages(prevMessages => [...prevMessages, { type: 'image', content: reader.result }]);
            };
            reader.readAsDataURL(file);
        }
    };

    const getRandomResponse = () => {
        const responses = ["Привет!", "Как дела?", "Чем могу помочь?"];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const handleSendMessage = () => {
        const response = getRandomResponse();
        setMessages(prevMessages => [...prevMessages, { type: 'text', content: response }]);
    };


    useEffect(() => {
        
       tg.ready()
    }, []);

    const onClose=()=>{
        tg.Close()

    }

    return (
        <main>
            <div className="home__inner">

                <button onClick={onClose}>Закрыть</button>
                {/* <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={handleSendMessage}>Отправить сообщение</button>
                <div className="chat"> */}
                    {/* {messages.map((msg, index) => (
                        <div key={index} className={msg.type === 'image' ? 'chat__image' : 'chat__text'}>
                            {msg.type === 'image' ? <img src={msg.content} alt="user upload" /> : msg.content}
                        </div>
                    ))} */}
                {/* </div> */}
                {communityOpen && <Community />}
            </div>
        </main>
    );
};

export default Home;
