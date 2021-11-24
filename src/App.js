import React from 'react'
import { CadastroNinja } from './components/CadastroNinja'
import { Carrinho } from './components/Carrinho/Carrinho'
import { DetalheServiço } from './components/DetalheServiço'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { Serviços } from './components/ServiçosNinjas/Serviços'

function App() {
	return (
		<div>
			<Header/>
			<HomePage/>
			<CadastroNinja/>
			<Serviços/>
			<DetalheServiço/>
			<Carrinho/>
			<Footer/>
		</div>
        
	)
}

export default App
