import styled, { css, DefaultTheme } from 'styled-components'
import { Header5 } from '../../components/Text'

export const Wrapper = styled.nav`
	${({ theme }) => css`
		display: block;
		position: relative;
		z-index: ${theme.layout.z.navigation};
		font-family: ${theme.font.family.sans};
	`}
`

export const Inner = styled.nav`
	${({ theme }) => css`
		height: ${theme.layout.navHeight};
		display: grid;
		grid-template-columns: 1fr 220px 1fr;
		align-items: center;
		padding: 0 ${theme.layout.spacing.triple};
		width: 100%;
		margin: 0 auto;
	`}
`

interface WithReady {
	theme: DefaultTheme
	ready: boolean
	align?: string
}

export const NavSection = styled.div`
	${({ theme, ready, align }: WithReady) => css`
		transition: 0.3s;
		flex-grow: 1;
		display: flex;
		justify-content: ${align === 'right' ? 'flex-end' : 'flex-start'};
		align-items: stretch;
		height: 100%;
		opacity: ${ready ? '1' : '0'};

		&:last-child {
			justify-content: flex-end;
		}
	`}
`

export const Logo = styled.img`
	width: 220px;
`

interface WithActive {
	theme: DefaultTheme
	active?: boolean
}

export const NavHeader = styled(Header5)`
	${({ theme, active }: WithActive) => css`
		border-top: 2px solid transparent;
		border-bottom: 2px solid ${active ? 'black' : 'transparent'};
		color: inherit;
		text-decoration: none;
		transition: 0.2s;
	`}
`

export const NavHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	margin: 0 1em;

	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}

	&:focus ${NavHeader}, &:hover > ${NavHeader} {
		border-bottom-color: black;
	}
`

interface WithOpen {
	theme: DefaultTheme
	open: boolean
}

export const SubmenuPane = styled.div`
	${({ theme, open }: WithOpen) => css`
		opacity: ${open ? 1 : 0};
		pointer-events: ${open ? 'initial' : 'none'};
		position: absolute;
		z-index: calc(${theme.layout.z.navigation} - 1);
		top: 100%;
		left: 0;
		width: 100%;
		min-height: 200px;
		background-color: white;
		transition: 0.2s;
	`}
`

interface WithVisible {
	theme: DefaultTheme
	active: Boolean
}

export const SubMenuColumns = styled.div`
	${({ theme, active }: WithVisible) => css`
		display: ${active ? 'grid' : 'none'};
		margin: 0 auto;
		max-width: ${theme.layout.columns.xWide};
		grid-template-columns: repeat(5, 1fr);
		padding: ${theme.layout.spacing.single} ${theme.layout.spacing.double};
		grid-column-gap: ${theme.layout.spacing.single};
	`}
`

export const ModalBackground = styled.div`
	height: 100vh;
	position: fixed;
	background: #0000004d;
	width: 100vw;
	top: 0;
	cursor: pointer;
	display: ${(props) => (props.open ? 'block' : 'none')};
`
