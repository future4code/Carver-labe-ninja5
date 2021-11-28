import React from 'react'
import { CadastroNinja } from './components/CadastroNinja'
import { Carrinho } from './components/Carrinho/Carrinho'
import { DetalheServiço } from './components/DetalheServiço'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { ListaServiços } from './components/ServiçosNinjas/ListaServiços'
import styled from 'styled-components'

const Corpo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #eef491;
height: 100vh;
`
export default class App extends React.Component {
	state = {
		telaAtual: '',
		jobIdDetalhe: '',
		carrinho: []
	}

	mudarTela = (nomeTela) => {
		this.setState({ telaAtual: nomeTela });
	}

	irPraTelaDetalhes = (jobId) => {
		this.setState({ telaAtual: 'detalhes', jobIdDetalhe: jobId })
	}

	adicionarAoCarrinho = (job) => {
		const novoCarrinho = [...this.state.carrinho, job]
		this.setState({ carrinho: novoCarrinho })
		alert(`O Serviço Ninja ${job.title} foi adicionado ao seu carrinho!`)
	}

	limparCarrinho = () => {
		this.setState({ carrinho: [] })
		alert("Agradecemos por comprar com a gente!")
	}

	removerDoCarrinho = (id) => {
		const itemRemovido = this.state.carrinho.filter((itemDoCarrinho) => {
			return itemDoCarrinho.id !== id
		})
		this.setState({ carrinho: itemRemovido })
	}


	escolherTela = () => {
		switch (this.state.telaAtual) {
			case 'inicial':
				return <HomePage mudarTela={this.mudarTela} />
			case 'cadastro':
				return <CadastroNinja mudarTela={this.mudarTela} />
			case 'serviços':
				return <ListaServiços adicionarAoCarrinho={this.adicionarAoCarrinho} irPraTelaDetalhes={this.irPraTelaDetalhes} />
			case 'detalhes':
				return <DetalheServiço jobId={this.state.jobIdDetalhe} adicionarAoCarrinho={this.adicionarAoCarrinho} mudarTela={this.mudarTela} />
			case 'carrinho':
				return <Carrinho mudarTela={this.mudarTela} carrinho={this.state.carrinho} limparCarrinho={this.limparCarrinho} removerDoCarrinho={this.removerDoCarrinho} />
			default:
				return <HomePage mudarTela={this.mudarTela} />
		}
	}

	render() {
		return (
			<Corpo>
				<Header mudarTela={this.mudarTela} />
				{this.escolherTela()}
				<Footer />
			</Corpo>
		)
	}
}

