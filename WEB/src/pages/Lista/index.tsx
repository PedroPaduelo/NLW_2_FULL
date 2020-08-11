import React, { useState, FormEvent } from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import Card_list ,{Teacher} from '../../components/Card_item';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function List() {
    const [teachers, setTeacher] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();
        const resp = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeacher(resp.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Materia" 
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
                        options={[
                            {value: 'Sistemas Digitais', label: 'Sistemas Digitais'},
                            {value: 'Estrutura de dados 1', label: 'Estrutura de dados 1'},
                            {value: 'Estrutura de dados 2', label: 'Estrutura de dados 2'},
                            {value: 'Cáuculo', label: 'Cáuculo'},
                            {value: 'Literatura', label: 'Literatura'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Fisíca', label: 'Fisíca'},
                            {value: 'Hitória', label: 'Hitória'},
                            {value: 'Filosofia', label: 'Filosofia'}
                        ]}
                    />

                    asdfasdf
                    <Select 
                        name="week_day" 
                        label="Dia da semanda" 
                        value={week_day}
                        onChange={e => { setWeek_day(e.target.value) }}
                        options={[
                            {value: '0', label: 'Dom'},
                            {value: '1', label: 'Seg'},
                            {value: '2', label: 'Terç'},
                            {value: '3', label: 'Quar'},
                            {value: '4', label: 'Quin'},
                            {value: '5', label: 'Sex'},
                            {value: '6', label: 'Sab'}
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora" 
                        value={time}
                        onChange={e => { setTime(e.target.value) }}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

        
                { teachers.map((teacher: Teacher)=> {
                    return <Card_list key={teacher.id} teacher={teacher} />
                })}
                
            
            
            
        </div> 
    );
}
export default List;
