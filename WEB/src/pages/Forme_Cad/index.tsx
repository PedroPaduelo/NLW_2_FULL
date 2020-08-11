import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';

import './styles.css'
import api from '../../services/api';



function Forme() {
    const history = useHistory();


    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [schedulerItens, setSchedulerItens] = useState([
       { week_day: 0, from: "", to:"" }
    ]) 


    function addNewSchedulerIten() {
        setSchedulerItens([
            ...schedulerItens,
            { week_day: 0, from: "", to:"" }
        ]);      
    }

    function setSchedulerItenValue(position: number , field: string, value: string){
        const newArray = schedulerItens.map((schedulerItem, index) => {
            if (index === position){
                return { ...schedulerItem, [field]: value};
            }
            return schedulerItem;
        });
        console.log(newArray);
        setSchedulerItens(newArray);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();
        api.post('classes', {
            name, 
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule: schedulerItens
        }).then(()=>{
            history.push('/');
            alert("Cadastro Realizado com sucesso");
        }).catch(()=>{
            alert("Erro no cadastro")
        })
    }



  return (
    <div id="page-teacher-form" className="container">
        <PageHeader 
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo e preencher este forme de inscrição." />

        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend> Seus Dados </legend>
                    <Input 
                        name="name" 
                        label="Nome completo" 
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <Input 
                        name="avatar" 
                        label="Avatar" 
                        value={avatar}
                        onChange={(e)=>{setAvatar(e.target.value)}}
                    />
                    <Input 
                        name="whatsapp" 
                        label="whatsApp" 
                        value={whatsapp}
                        onChange={(e)=>{setWhatsapp(e.target.value)}}
                    />
                    <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={bio}
                        onChange={(e)=>{setBio(e.target.value)}}
                    />
                </fieldset>

                <fieldset>
                    <legend> Sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="Materia" 
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
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
                    <Input 
                        name="cost" 
                        label="Custo hora por aula"
                        value={cost}
                        onChange={(e)=>{setCost(e.target.value)}}
                    />
                </fieldset>

                <fieldset>
                    <legend>Horário disponíveis 
                        <button type="button" onClick={addNewSchedulerIten}>
                            + Novo Horário
                        </button>
                    </legend>
                    

                    { schedulerItens.map((schedulerIten, index) => {
                        return(
                            <div key={schedulerIten.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semanda" 
                                    onChange={e => setSchedulerItenValue( index , 'week_day', e.target.value)}
                                    value={schedulerIten.week_day}
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
                                    name="from" 
                                    label="Das" 
                                    type="time" 
                                    onChange={e => setSchedulerItenValue( index , 'from', e.target.value)}
                                    value={schedulerIten.from}
                                />
                                <Input 
                                    name="to" 
                                    label="Até" 
                                    type="time" 
                                    onChange={e => setSchedulerItenValue( index , 'to', e.target.value)}
                                    value={schedulerIten.to}
                                />
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br/>
                        Preencha todos os dados 
                    </p>
                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>
            </form>
        </main>

    </div> 
  );
}

export default Forme;
