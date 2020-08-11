import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';


export interface Teacher{
    
        id: number,
        subject: string,
        cost: number,
        name: string,
        avatar: string,
        whatsapp: string,
        bio: string

}

interface TeacherItemProps{
    teacher: Teacher;
}


const Card_list: React.FC<TeacherItemProps> = ({teacher}) => {

    function creatNewConnection (){
        api.post('connections', {
            user_id: teacher.id,
        })
    }


    return (
        <main>
            <article className="teacher-item"> 
                <header>
                    <img src={teacher.avatar}/>
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span> 
                    </div>
                </header>
                <p>
                    {teacher.bio}
                </p>
                <footer>
                    <p>
                        Preço/Hora
                        <strong>R$ {teacher.cost}</strong>
                    </p>
                    <a  target="_blank"
                        onClick={creatNewConnection}
                        href={`https://wa.me/+55${teacher.whatsapp}?text=Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda`}>
                        <img src={whatsappIcon} alt="whatsapp" />
                        Entre em contato
                    </a>
                </footer>
            </article>
        </main>
    );
}

export default Card_list;
