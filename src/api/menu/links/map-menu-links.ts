export const mapMenuLinks = (links: any = [{}]) => {
  const returnValue = links.map((links: any) => {
    console.log(links)
    const {
      open_in_new_tab: newTab = false,
      urll: link = '',
      link_text: children = '',
    } = links
    return { newTab, children, link }
  }) as {
    newTab: boolean
    children: string
    link: string
  }
  return returnValue
}
