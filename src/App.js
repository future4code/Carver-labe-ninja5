import React from 'react'
import { CadastroNinja } from './components/CadastroNinja'
import { Carrinho } from './components/Carrinho/Carrinho'
import { DetalheServiço } from './components/DetalheServiço'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { Serviços } from './components/ServiçosNinjas/Serviços'

export default class App extends React.Component {

	state = {
		telaAtual: 'inicial'
	}

	escolherTela = () => {
		switch (this.state.telaAtual) {
			case 'inicial':
				return <HomePage mudarTela={this.mudarTela}/>
			case 'cadastro':
				return <CadastroNinja mudarTela={this.mudarTela}/>
			case 'serviços':
				return <Serviços mudarTela={this.mudarTela}/>
			case 'detalhes':
				return <DetalheServiço mudarTela={this.mudarTela}/>
			case 'carrinho':
				return <Carrinho mudarTela={this.mudarTela}/>
			default:
				return <HomePage mudarTela={this.mudarTela}/>
		}
	}

	mudarTela = (nomeTela) => {
		this.setState({telaAtual: nomeTela });
	}

	render() {
		return (
		<div>
			<Header mudarTela={this.mudarTela}/>
			{/* Para trocar a tela pelos botões de seu componente use a funcao onClick={() => this.props.mudarTela('nome da sua tela')}*/}
			{this.escolherTela()}
			<Footer/>
		</div>
		)
        
	}
}

