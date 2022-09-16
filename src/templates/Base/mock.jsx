import { GridText } from '../../components/GridText'
import { MockGridText } from '../../components/GridText/mock'
import { GridTwoColumn } from '../../components/GridTwoColumn'
import { mock_GridTwoColumn } from '../../components/GridTwoColumn/mock'
import { MockNavLinks } from '../../components/NavLinks/mock'

export const MockBase = {
  links: MockNavLinks,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>footer</p>',
  children: (
    <>
      <GridTwoColumn {...mock_GridTwoColumn} />
      <GridText {...MockGridText} />
      <GridText {...MockGridText} background />
      <GridText {...MockGridText} />
      <GridText {...MockGridText} background />
    </>
  ),
}
