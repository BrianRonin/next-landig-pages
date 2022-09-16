export const mapMenuLinks = (links = [{}]) => {
  const x = links.map((links) => {
    console.log(links)
    const {
      open_in_new_tab: newTab = false,
      urll: Link = '',
      link_text: children = '',
    } = links
    return { newTab, children, Link }
  })
  console.log(x)
  return x
}
