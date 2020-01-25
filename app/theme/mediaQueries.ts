/**
 * Use like:
 *
 * const Element = styled.div`
 *   ${({ theme }) => `
 * 		display: flex;
 *
 * 		${theme.mediaQueries.mobile} {
 * 			display: block;
 * 		}
 *   `}
 * `
 */

export const mobile = '@media screen and (max-width: 580px)'
export const tablet = '@media screen and (max-width: 860px)'
