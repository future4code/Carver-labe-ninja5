import React from 'react'
import { CadastroNinja } from './components/CadastroNinja'
import { Carrinho } from './components/Carrinho/Carrinho'
import { DetalheServiço } from './components/DetalheServiço'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { ListaServiços } from './components/ServiçosNinjas/ListaServiços'

export default class App extends React.Component {

	state = {

		telaAtual: '',
		jobIdDetalhe: ''
	}

	mudarTela = (nomeTela) => {
		this.setState({telaAtual: nomeTela });
	}

	irPraTelaDetalhes = (jobId) => {

		this.setState({telaAtual: 'detalhes', jobIdDetalhe: jobId})
	}

	escolherTela = () => {
		switch (this.state.telaAtual) {
			case 'inicial':
				return <HomePage mudarTela={this.mudarTela}/>
			case 'cadastro':
				return <CadastroNinja mudarTela={this.mudarTela}/>
			case 'serviços':
				return <ListaServiços irPraTelaDetalhes={this.irPraTelaDetalhes}/>
			case 'detalhes':
				return <DetalheServiço jobId={this.state.jobIdDetalhe} mudarTela={this.mudarTela}/>
			case 'carrinho':
				return <Carrinho mudarTela={this.mudarTela}/>
			default:
				return <HomePage mudarTela={this.mudarTela}/>
		}
	}

	render() {
		return (
		<div>
			<Header mudarTela={this.mudarTela}/>
			{/* Para trocar a tela pelos botões de seu componente use a funcao onClick={() => this.props.mudarTela('nome da tela')}*/}
			{this.escolherTela()}
			<Footer/>
		</div>
		)
        
	}
}

