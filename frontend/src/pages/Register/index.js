import React, { useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../service/api'

export default function Register() {

  const history = useHistory()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [city, setCity] = useState("")
  const [uf, setUf] = useState("")

  async function handleRegister(e) {
    e.preventDefault()
    // console.log({5aaf6584 ca53d971
    //   name, email, whatsapp, city, uf
    // })
    const data = {
      name, email, whatsapp, city, uf
    }
    console.log(data)
    try {
      const response = await api.post('ongs', data)
      alert(`seu ID: ${response.data.id}`)
      history.push('/') //mandando de volta p home
    } catch (error) {
      alert("erro ")
    }
  }
  return (
    <div className="register-container">
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Heto' />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encotrarem os casos da sua ONG</p>
          <Link className="back-link" to="/register" >
            <FiArrowLeft size={16} color="#E02041" />
      Não tenho cadastro
      </Link>
        </section>
        <form onSubmit={handleRegister}>

          <input placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)} />

          <input type="email" placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <input placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)} />

          <div className="input-group">
            <input placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)} />
            <input placeholder="UF" style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)} />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}